<script setup lang="ts">
import { ref } from 'vue'
import { useEditorContext } from './context'
import { ElementType, EditorMode, ControlType } from '../editor'
import type { IElement, IEditorData } from '../editor'
import {
  getPlaceholderTextControls,
  setControlValueByPlaceholder,
  setControlEditableByPlaceholder,
  setImageControlConfigForAll,
  setImageControlConfigByPlaceholder,
  type IImageControlConfig,
  type IReplaceValueDetail
} from './control'

// 调试面板：通过 useEditorContext 注入的编辑器实例，复用需求 3~10 的全部验证能力，
// 并额外提供「打印实例 / 打印 Value / 加载 Value」三项调试入口。仅当 <CanvasEditor debug>
// 时由宿主渲染，无需外部传参。
const ctx = useEditorContext()
const cmd = () => ctx.getCommand()

const MODE_MAP: Record<string, EditorMode> = {
  edit: EditorMode.EDIT,
  form: EditorMode.FORM,
  readonly: EditorMode.READONLY
}

// 结果展示区
const resultText = ref('')
// 面板展开/收起
const debugOpen = ref(true)
// 当前模式（本地维护，供切换按钮回显）
const mode = ref('edit')

// ============ 调试功能 ============
// 1. 控制台打印编辑器实例
const printInstance = () => {
  const instance = ctx.getInstance()
  console.log('[debug] editor instance', instance)
  resultText.value = `已打印实例（${instance ? instance.version ?? 'n/a' : 'null'}）到控制台`
}
// 2. 控制台打印当前 value
const printValue = () => {
  const value = cmd()?.getValue()
  console.log('[debug] value', value)
  resultText.value = '已打印 value 到控制台'
}
// 载入当前 value 到文本框
const loadCurrent = () => {
  const value = cmd()?.getValue()
  valueText.value = JSON.stringify(value, null, 2)
  resultText.value = '已载入当前 value 到文本框'
}
// 3. 加载 value（文本框 JSON → 编辑器）
const valueText = ref('')
const status = ref('')
const loadValue = () => {
  const command = cmd()
  if (!command) {
    status.value = '编辑器未就绪'
    return
  }
  const text = valueText.value.trim()
  if (!text) {
    status.value = '文本框为空，无可加载内容'
    return
  }
  try {
    const data = JSON.parse(text)
    command.executeSetValue(data)
    status.value = '已加载 Value 到编辑器'
  } catch (e) {
    status.value = `JSON 解析失败：${(e as Error).message}`
  }
}

// ============ 加载 Mock 数据 ============
// 生成一份包含「标题 / 文本 / 文本控件 / 表格」的示例文档，便于快速验证调试能力。
const uid = () => Math.random().toString(36).slice(2, 10)
// 构造一个 rows 行 cols 列的样例表格元素
const makeMockTable = (rows: string[][]): IElement => {
  const colCount = rows[0]?.length ?? 0
  const colWidth = Math.floor(720 / Math.max(colCount, 1))
  const trList = rows.map(row => ({
    id: uid(),
    height: 36,
    tdList: Array.from({ length: colCount }, (_, i) => ({
      id: uid(),
      colspan: 1,
      rowspan: 1,
      value: [{ value: row[i] ?? '' }]
    }))
  }))
  return {
    type: ElementType.TABLE,
    id: uid(),
    value: '',
    trList,
    colgroup: Array.from({ length: colCount }, () => ({ width: colWidth }))
  } as IElement
}
const buildMockData = (): Partial<IEditorData> => ({
  main: [
    { value: '患者基本信息（Mock 数据）' } as IElement,
    {
      value: '以下为调试用示例文档，可结合「需求 3~10」按钮验证各项能力。'
    } as IElement,
    {
      type: ElementType.CONTROL,
      control: { type: ControlType.TEXT, value: null, placeholder: '患者姓名' }
    } as IElement,
    { value: '，性别' } as IElement,
    {
      type: ElementType.CONTROL,
      control: { type: ControlType.TEXT, value: null, placeholder: '患者性别' }
    } as IElement,
    { value: '，年龄' } as IElement,
    {
      type: ElementType.CONTROL,
      control: { type: ControlType.TEXT, value: null, placeholder: '患者年龄' }
    } as IElement,
    { value: '。' } as IElement,
    makeMockTable([
      ['检查项目', '结果', '参考范围'],
      ['白细胞(WBC)', '6.2', '4.0 - 10.0'],
      ['红细胞(RBC)', '4.5', '3.8 - 5.1']
    ])
  ]
})
const mockStatus = ref('')
const loadMockData = () => {
  const command = cmd()
  if (!command) {
    mockStatus.value = '编辑器未就绪'
    return
  }
  command.executeSetValue(buildMockData())
  mockStatus.value = '已加载 Mock 数据（含文本/控件/表格）'
}

// ============ 需求 3：获取所有带 placeholder 的文本控件值 ============
const listPlaceholderControls = () => {
  const command = cmd()
  if (!command) return
  const list = getPlaceholderTextControls(command)
  resultText.value = JSON.stringify(list, null, 2)
  console.log('[需求3] 全部 placeholder 控件值', list)
}

// ============ 需求 4：按 placeholder 替换文本值（VALUE） ============
const replaceTextByPlaceholder = (name: string, value: string) => {
  const command = cmd()
  if (!command) return
  setControlValueByPlaceholder(command, {
    name,
    value,
    valueType: 'VALUE'
  })
  resultText.value = `已替换占位符「${name}」为文本：「${value}」`
}
// 需求 4：values 数组拼接（多个 VALUE 项）
const replaceValuesByPlaceholder = (name: string) => {
  const command = cmd()
  if (!command) return
  setControlValueByPlaceholder(command, {
    name,
    valueType: 'VALUE',
    values: [{ value: '甲' }, { value: '乙' }, { value: '丙' }]
  })
  resultText.value = `已按 values 数组拼接替换占位符「${name}」`
}

// ============ 需求 5：图片替换（单元格内 / 非单元格） ============
const makeSampleImage = (w: number, h: number, color = '#3a6ea5') => {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const g = c.getContext('2d')!
  g.fillStyle = color
  g.fillRect(0, 0, w, h)
  g.fillStyle = '#fff'
  g.font = '14px sans-serif'
  g.fillText(`${w}x${h}`, 6, 18)
  return c.toDataURL('image/png')
}
const replaceImageByPlaceholder = (
  name: string,
  img: string,
  extra: {
    width?: number
    height?: number
    count?: number
    values?: IReplaceValueDetail[]
  } = {}
) => {
  const command = cmd()
  if (!command) return
  setControlValueByPlaceholder(command, {
    name,
    value: img,
    valueType: 'IMAGE',
    ...extra
  })
}

// ============ 需求 6：插入带前缀/后缀文本控件 ============
const insertControlWithAffix = () => {
  cmd()?.executeInsertControl({
    type: ElementType.CONTROL,
    value: '',
    control: {
      type: 'text',
      value: null,
      placeholder: '前后缀示例',
      prefix: '【',
      postfix: '】'
    } as IElement['control']
  } as IElement)
  resultText.value = '已在光标处插入「前后缀示例」文本控件（前缀【后缀】）'
}
const insertControlZeroWidth = () => {
  cmd()?.executeInsertControl({
    type: ElementType.CONTROL,
    value: '',
    control: {
      type: 'text',
      value: null,
      placeholder: '零宽前后缀',
      prefix: '​',
      postfix: '​'
    } as IElement['control']
  } as IElement)
  resultText.value = '已插入默认零宽空格前后缀控件（编辑态不占可视宽度）'
}

// ============ 需求 7：切换编辑 / 表单 / 只读 模式 ============
const switchMode = (next: string) => {
  mode.value = next
  cmd()?.executeMode(MODE_MAP[next])
}

// ============ 需求 8：子表 + 联动 ============
// 8：按 name 打开单元格配置对话框
const openCellConfigByName = (name: string) => {
  ctx.cellConfig.value?.openByName(name)
}
// 8：建立 C → subA 联动
const linkCToSubA = () => {
  const cells = cmd()?.getTableCells() ?? []
  const subA = cells.find(c => c.name === 'subA')
  const src = cells.find(c => c.label === '表3 R2C1')
  if (!subA || !src) {
    resultText.value = '未定位到 subA 或 联动单元格 C'
    return
  }
  cmd()?.setCellConfig({
    tdId: src.tdId,
    enableLink: true,
    linkChildIds: [subA.tdId]
  })
  resultText.value = `已建立联动：C(${src.tdId}) → subA(${subA.tdId})`
}
// 8：清除 C 联动
const clearLinkForC = () => {
  const cells = cmd()?.getTableCells() ?? []
  const src = cells.find(c => c.label === '表3 R2C1')
  if (!src) return
  cmd()?.setCellConfig({
    tdId: src.tdId,
    enableLink: true,
    linkChildIds: []
  })
  resultText.value = '已清除 C 的联动子单元格'
}
// 8.5：写入 / 清空子表数据
const writeSubTable = () => {
  cmd()?.setChildTable({
    name: 'subA',
    data: [
      ['张三', 20],
      ['李四', 25]
    ]
  })
}
const clearSubTable = () => {
  cmd()?.setChildTable({ name: 'subA', data: [] })
}

// ============ 需求 10：跨页眉/页脚/正文替换 ============
const replaceAcrossZones = () => {
  const command = cmd()
  if (!command) return
  setControlValueByPlaceholder(command, {
    name: '区域占位符',
    value: '跨区已替换✔',
    valueType: 'VALUE'
  })
  resultText.value =
    '已对页眉/页脚/正文中的「区域占位符」统一替换，请用「需求3」查看三区结果'
}

// ============ 需求 4.2：监听控件图片删除通知 ============
let imageDeleteListenerBound = false
const bindImageDeleteListener = () => {
  const instance = ctx.getInstance()
  if (!instance || imageDeleteListenerBound) return
  imageDeleteListenerBound = true
  instance.eventBus.on('controlImageDelete', payload => {
    console.log('[需求4.2] 控件图片删除通知', payload)
    resultText.value = JSON.stringify(payload, null, 2)
  })
}

// ============ 需求 4.1：控件内图片拖拽排序 ============
const enableImageDrag = () => {
  const command = cmd()
  if (!command) return
  // 5 张不同颜色的图片，便于直观验证拖拽交换顺序（count=3 表示一行 3 张）
  const colors = ['#3a6ea5', '#7a4ea5', '#a54e6e', '#4ea55a', '#a58a4e']
  const values = colors.map(c => ({
    value: makeSampleImage(200, 80, c),
    valueType: 'IMAGE' as const
  }))
  setControlValueByPlaceholder(command, {
    name: '单元格签名',
    valueType: 'IMAGE',
    count: 3,
    draggable: true,
    values
  })
  resultText.value =
    '已写入 5 张不同颜色可拖拽图片（只读/表单模式下按住一张图拖到另一张上交换顺序，count=3 一行 3 张）'
}

// ============ 需求 4.2：右键删除控件内图片 ============
const enableImageDelete = () => {
  const command = cmd()
  if (!command) return
  bindImageDeleteListener()
  replaceImageByPlaceholder('单元格签名', '', {
    count: 2,
    values: [
      {
        value: makeSampleImage(200, 80, '#3a6ea5'),
        valueType: 'IMAGE'
      },
      {
        value: makeSampleImage(120, 60, '#7a4ea5'),
        valueType: 'IMAGE'
      }
    ],
    draggable: true,
    canDelete: true
  })
  resultText.value =
    '已写入 2 张可删除图片（只读/表单模式下右键图片→「删除图片」，删除后通知见输出区）'
}

// ============ 需求 11：表单模式按占位符设置控件可/不可编辑 ============
const setControlEditable = (name: string, editable: boolean) => {
  const command = cmd()
  if (!command) return
  const count = setControlEditableByPlaceholder(command, name, editable)
  resultText.value = `已设置 ${count} 个占位符「${name}」控件为${editable ? '可编辑' : '不可编辑'}（切到表单模式验证）`
}

// ============ 需求 12.1：统一设置所有图片控件删除/拖拽能力 ============
const setAllImageConfig = (config: IImageControlConfig) => {
  const command = cmd()
  if (!command) return
  bindImageDeleteListener()
  const count = setImageControlConfigForAll(command, config)
  resultText.value = `已统一设置 ${count} 个图片控件：canDelete=${config.canDelete}, draggable=${config.draggable}（切到只读/表单模式验证）`
}

// ============ 需求 12.2：按占位符单独设置图片控件删除/拖拽能力 ============
const setImageConfig = (name: string, config: IImageControlConfig) => {
  const command = cmd()
  if (!command) return
  bindImageDeleteListener()
  const count = setImageControlConfigByPlaceholder(command, name, config)
  resultText.value = count
    ? `已单独设置 ${count} 个图片控件「${name}」：${JSON.stringify(config)}`
    : `未找到图片控件「${name}」（非图片控件设置无效果）`
}
</script>

<template>
  <div class="editor-debug" :class="{ 'is-collapsed': !debugOpen }">
    <button type="button" class="editor-debug__toggle" @click="debugOpen = !debugOpen">
      {{ debugOpen ? '» 收起' : '« 调试面板' }}
    </button>
    <aside class="editor-debug__panel" v-show="debugOpen">
      <details open>
        <summary>调试：实例 / Value</summary>
        <div class="editor-debug__row">
          <button type="button" @click="printInstance">1. 打印实例</button>
          <button type="button" @click="printValue">2. 打印 Value</button>
          <button type="button" @click="loadCurrent">载入当前 Value</button>
          <button type="button" class="is-primary" @click="loadValue">3. 加载 Value</button>
          <button type="button" @click="loadMockData">加载 Mock 数据</button>
          <span class="editor-debug__status">{{ status || mockStatus }}</span>
        </div>
        <textarea v-model="valueText" class="editor-debug__area" spellcheck="false"
          placeholder="在此粘贴 IEditorData（含 header/main/footer）或元素数组 JSON，点击「加载 Value」回载到编辑器" />
      </details>

      <details open>
        <summary>需求 3：获取所有 placeholder 控件值</summary>
        <div class="editor-debug__row">
          <button type="button" @click="listPlaceholderControls">获取全部 placeholder 控件值</button>
          <span class="editor-debug__tip">结果见输出区（含页眉/页脚/正文三区）</span>
        </div>
      </details>

      <details open>
        <summary>需求 4：按 placeholder 替换文本（VALUE）</summary>
        <div class="editor-debug__row">
          <button type="button" @click="replaceTextByPlaceholder('其他补充', '已补充内容A')">替换『其他补充』</button>
          <button type="button" @click="replaceTextByPlaceholder('签署日期', '2026-10-16 10:00:00')">替换『签署日期』</button>
          <button type="button" @click="replaceValuesByPlaceholder('就诊次数')">values数组拼接替换『就诊次数』</button>
        </div>
      </details>

      <details open>
        <summary>需求 5：图片替换（单元格内 5.1 / 非单元格 5.2）</summary>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">5.1 单元格内（控件『单元格签名』，独占单元格）：</span>
          <button type="button"
            @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(200, 80), { count: 2 })">5.1.1
            count=2（两图）</button><button type="button"
            @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(200, 80), { count: 3 })">5.1.1
            count=3（三图/每行3张）</button><button type="button"
            @click="replaceImageByPlaceholder('单元格签名', '', { count: 2, values: [{ value: makeSampleImage(200, 80), valueType: 'IMAGE' }, { value: makeSampleImage(200, 80), valueType: 'IMAGE' }, { value: makeSampleImage(200, 80), valueType: 'IMAGE' }] })">5.1.1
            三图count=2（每行2张）</button>
          <button type="button"
            @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(400, 160), { width: 400, height: 160 })">5.1.2
            设宽高(超宽限宽)</button>
          <button type="button"
            @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(300, 120), { width: 250 })">5.1.3 仅设宽</button>
          <button type="button" @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(300, 140))">5.1.4
            不设宽高</button>
          <button type="button"
            @click="replaceImageByPlaceholder('单元格签名', '', { count: 2, values: [{ value: makeSampleImage(200, 80), padding: [10, 20] }, { value: makeSampleImage(200, 80), padding: [20, 20] }] })">5.3
            图片padding</button><button type="button"
            @click="replaceImageByPlaceholder('单元格签名', '', { values: [], count: 2 })">5.4
            空values+IMAGE(边界)</button>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">5.2 非单元格内（控件『其他补充』）：</span>
          <button type="button"
            @click="replaceImageByPlaceholder('其他补充', makeSampleImage(200, 80), { width: 150, height: 60 })">5.2.1
            设宽高</button>
          <button type="button"
            @click="replaceImageByPlaceholder('其他补充', makeSampleImage(200, 80), { width: 120 })">5.2.2
            仅设宽</button>
          <button type="button"
            @click="replaceImageByPlaceholder('其他补充', makeSampleImage(200, 80), { height: 40 })">5.2.3
            仅设高</button>
          <button type="button" @click="replaceImageByPlaceholder('其他补充', makeSampleImage(200, 80))">5.2.4 原图</button>
        </div>
      </details>

      <details open>
        <summary>需求 6：插入带前缀/后缀控件</summary>
        <div class="editor-debug__row">
          <button type="button" @click="insertControlWithAffix">插入前后缀控件（【】）</button>
          <button type="button" @click="insertControlZeroWidth">插入零宽空格前后缀控件</button>
          <span class="editor-debug__tip">编辑态定位光标后插入，验证前缀后缀默认零宽</span>
        </div>
      </details>

      <details open>
        <summary>需求 7：表单模式限制 / 需求 9：只读模式</summary>
        <div class="editor-debug__row">
          <button type="button" :class="{ 'is-active': mode === 'edit' }" @click="switchMode('edit')">编辑模式</button>
          <button type="button" :class="{ 'is-active': mode === 'form' }" @click="switchMode('form')">表单模式</button>
          <button type="button" :class="{ 'is-active': mode === 'readonly' }"
            @click="switchMode('readonly')">只读模式</button>
          <span class="editor-debug__tip">表单模式：不可删控件/不可改表格结构/隐藏表格右键结构项；只读模式：空控件不显占位符（见『患者签名』）</span>
        </div>
      </details>

      <details open>
        <summary>需求 8：子表 + 联动</summary>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">子表：</span>
          <button type="button" @click="openCellConfigByName('subA')">配置子表 subA</button>
          <button type="button" @click="writeSubTable">写入子表数据</button>
          <button type="button" @click="clearSubTable">清空子表数据</button>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">联动：</span>
          <button type="button" @click="linkCToSubA">建立 C→subA 联动</button>
          <button type="button" @click="clearLinkForC">清除 C 联动</button>
          <span class="editor-debug__tip">联动高亮：编辑态右键单元格→拾取；表单态按显隐规则生效</span>
        </div>
      </details>

      <details open>
        <summary>需求 10：页眉/页脚/正文 跨区替换</summary>
        <div class="editor-debug__row">
          <button type="button" @click="replaceAcrossZones">统一替换三区「区域占位符」</button>
          <button type="button" @click="listPlaceholderControls">查看三区结果</button>
        </div>
      </details>

      <details open>
        <summary>需求 4.1/4.2/11/12：图片交互 / 控件编辑</summary>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">4.1 拖拽排序：</span>
          <button type="button" @click="enableImageDrag">写入 5 张可拖拽图片（单元格签名）</button>
          <span class="editor-debug__tip">只读/表单模式下按住一张图拖到另一张上交换顺序（5 张不同颜色，count=3）</span>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">4.2 右键删除：</span>
          <button type="button" @click="enableImageDelete">写入 2 张可删除图片（单元格签名）</button>
          <span class="editor-debug__tip">只读/表单模式下右键图片→「删除图片」，通知见输出区</span>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">11 表单编辑：</span>
          <button type="button" @click="setControlEditable('患者姓名', false)">『患者姓名』不可编辑</button>
          <button type="button" @click="setControlEditable('患者姓名', true)">『患者姓名』可编辑</button>
          <span class="editor-debug__tip">切到表单模式验证</span>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">12.1 统一设置：</span>
          <button type="button" @click="setAllImageConfig({ canDelete: true, draggable: true })">全部图片控件：可删+可拖</button>
          <button type="button" @click="setAllImageConfig({ canDelete: false, draggable: false })">全部图片控件：关闭</button>
          <span class="editor-debug__tip">只读模式下对所有图片控件生效</span>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">12.2 单独设置：</span>
          <button type="button"
            @click="setImageConfig('单元格签名', { canDelete: true, draggable: true })">『单元格签名』可删+可拖</button>
          <button type="button"
            @click="setImageConfig('单元格签名', { canDelete: false, draggable: false })">『单元格签名』关闭</button>
          <button type="button" @click="setImageConfig('患者姓名', { canDelete: true })">『患者姓名』（非图片控件，无效）</button>
        </div>
      </details>

      <pre class="editor-debug__out" v-if="resultText">{{ resultText }}</pre>
    </aside>
  </div>
</template>

<style scoped>
/* 调试面板（右侧可折叠侧栏） */
.editor-debug {
  flex: none;
  display: flex;
  border-left: 1px solid #e2e6ed;
  background: #f7f9fc;
}

.editor-debug__toggle {
  flex: none;
  width: 28px;
  align-self: stretch;
  border: none;
  border-right: 1px solid #e2e6ed;
  background: #193758;
  color: #fff;
  writing-mode: vertical-rl;
  cursor: pointer;
  font-size: 13px;
  letter-spacing: 2px;
}

.editor-debug__toggle:hover {
  background: #234a73;
}

.editor-debug__panel {
  width: 340px;
  height: 100%;
  overflow: auto;
  padding: 6px 12px 12px;
  font-size: 13px;
  color: #3d4757;
  background: #f7f9fc;
}

.editor-debug details {
  margin: 4px 0;
  border: 1px solid #e2e6ed;
  border-radius: 6px;
  background: #fff;
}

.editor-debug summary {
  cursor: pointer;
  padding: 6px 10px;
  font-weight: 600;
  background: #eef2f8;
  border-radius: 6px 6px 0 0;
}

.editor-debug__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
}

.editor-debug__grp {
  color: #193758;
  font-weight: 600;
  margin-right: 2px;
}

.editor-debug__tip {
  color: #9097a1;
}

.editor-debug button {
  height: 26px;
  padding: 0 10px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: #fff;
  color: #3d4757;
  cursor: pointer;
}

.editor-debug button:hover {
  border-color: #193758;
}

.editor-debug button.is-active {
  border-color: #193758;
  background: rgba(25, 55, 88, 0.12);
  color: #193758;
}

.editor-debug button.is-primary {
  border-color: #2f5d92;
  background: #193758;
  color: #fff;
}

.editor-debug__status {
  color: #9097a1;
}

.editor-debug__area {
  display: block;
  width: calc(100% - 20px);
  height: 140px;
  margin: 0 10px 8px;
  padding: 8px;
  border: 1px solid #d0d3d9;
  border-radius: 6px;
  background: #fff;
  color: #3d4757;
  font-family: 'SFMono-Regular', Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
  resize: vertical;
  white-space: pre;
  overflow: auto;
}

.editor-debug__out {
  margin: 8px 10px 0;
  padding: 8px;
  background: #1e1e1e;
  color: #c8e1ff;
  border-radius: 6px;
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
