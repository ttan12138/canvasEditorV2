<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import {
  CanvasEditor,
  EditorToolbar,
  CellConfigDialog,
  OptionsConfigDialog
} from '../vue'
import type Editor from '../editor'
import type { IEditorData, IEditorResult, IElement } from '../editor'
import { ControlType, EditorMode, ElementType, RowFlex } from '../editor'
import type { IReplaceValueDetail } from '../vue'
import { data, options } from '../mock'

type DemoMode = 'edit' | 'form' | 'readonly'

const editorRef = ref<InstanceType<typeof CanvasEditor> | null>(null)
// 需求 8 / 全局 options：单元格配置、联动、选项配置已抽为可复用组件 CellConfigDialog /
// OptionsConfigDialog，放在 <CanvasEditor> 默认插槽内，通过 useEditorContext 自动
// 拿到编辑器实例。这里仅保留宿主侧入口（右键菜单与事件注册由 CellConfigDialog 完成）。
const cellConfigRef = ref<InstanceType<typeof CellConfigDialog> | null>(null)
const optRef = ref<InstanceType<typeof OptionsConfigDialog> | null>(null)

// 需求 8：示例表格（含一个子表单元格 subA 与一个可联动单元格 C）
const subTableDemo: IElement = {
  type: ElementType.TABLE,
  colgroup: [{ width: 220 }, { width: 220 }],
  trList: [
    {
      height: 48,
      tdList: [
        {
          colspan: 1,
          rowspan: 1,
          name: 'subA',
          hasChild: true,
          childTables: {
            header: [
              { key: 'name', name: '姓名', width: 110 },
              { key: 'age', name: '年龄', width: 110 }
            ],
            rowHeight: 26
          },
          value: [{ value: '' }]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [{ value: '普通单元格 B' }]
        }
      ]
    },
    {
      height: 48,
      tdList: [
        {
          colspan: 1,
          rowspan: 1,
          enableLink: true,
          linkChildIds: [],
          value: [{ value: '联动单元格 C（右击配置 → 关联 subA）' }]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [{ value: '普通单元格 D' }]
        }
      ]
    }
  ]
}

const editorData: IEditorData = {
  header: [
    {
      value: '第一人民医院',
      size: 32,
      rowFlex: RowFlex.CENTER
    },
    {
      value: '\n门诊病历',
      size: 18,
      rowFlex: RowFlex.CENTER
    },
    {
      value: '\n',
      type: ElementType.SEPARATOR
    },
    {
      value: '',
      type: ElementType.CONTROL,
      control: {
        conceptId: 'hdr-ph',
        type: ControlType.TEXT,
        value: null,
        placeholder: '区域占位符'
      }
    }
  ],
  main: [
    ...data,
    subTableDemo,
    {
      value: '',
      type: ElementType.CONTROL,
      control: {
        conceptId: 'main-ph',
        type: ControlType.TEXT,
        value: null,
        placeholder: '区域占位符'
      }
    }
  ],
  footer: [
    {
      value: 'canvas-editor',
      size: 12
    },
    {
      value: '',
      type: ElementType.CONTROL,
      control: {
        conceptId: 'ftr-ph',
        type: ControlType.TEXT,
        value: null,
        placeholder: '区域占位符'
      }
    }
  ]
}

// 当前模式：编辑模式显示工具栏，表单/只读模式隐藏工具栏
const mode = ref<DemoMode>('edit')

const MODE_MAP: Record<DemoMode, EditorMode> = {
  edit: EditorMode.EDIT,
  form: EditorMode.FORM,
  readonly: EditorMode.READONLY
}

const switchMode = (next: DemoMode) => {
  if (next === mode.value) return
  mode.value = next
  editorRef.value?.setMode(MODE_MAP[next])
}

const onReady = (editor: Editor) => {
  console.log('[vue-demo] ready', editor.version)
}

const onContentChange = () => {
  console.log('[vue-demo] contentChange')
}

const onSaved = (payload: IEditorResult) => {
  console.log('[vue-demo] saved', payload)
}

const save = () => {
  const result = editorRef.value?.getValue()
  console.log('[vue-demo] getValue', result)
}

// ============ 需求 3/4/5/8/10 验证 ============
// 结果展示区
const resultText = ref('')
// 验证侧栏展开/收起
const verifyOpen = ref(true)

// 需求 3：获取所有带 placeholder 的文本控件值
const listPlaceholderControls = () => {
  const list = editorRef.value?.getPlaceholderTextControls() ?? []
  resultText.value = JSON.stringify(list, null, 2)
  console.log('[需求3] 全部 placeholder 控件值', list)
}

// 需求 4：按 placeholder 替换文本值（VALUE）
const replaceTextByPlaceholder = (name: string, value: string) => {
  editorRef.value?.setControlValueByPlaceholder({
    name,
    value,
    valueType: 'VALUE'
  })
  resultText.value = `已替换占位符「${name}」为文本：「${value}」`
}
// 需求 4：values 数组拼接（多个 VALUE 项）
const replaceValuesByPlaceholder = (name: string) => {
  editorRef.value?.setControlValueByPlaceholder({
    name,
    valueType: 'VALUE',
    values: [
      { value: '甲' },
      { value: '乙' },
      { value: '丙' }
    ]
  })
  resultText.value = `已按 values 数组拼接替换占位符「${name}」`
}

// 需求 5：生成指定尺寸的示例图片（dataURL），用于图片单元格自适应验证
const makeSampleImage = (w: number, h: number, color = '#3a6ea5') => {
  const c = document.createElement('canvas')
  c.width = w
  c.height = h
  const ctx = c.getContext('2d')!
  ctx.fillStyle = color
  ctx.fillRect(0, 0, w, h)
  ctx.fillStyle = '#fff'
  ctx.font = '14px sans-serif'
  ctx.fillText(`${w}x${h}`, 6, 18)
  return c.toDataURL('image/png')
}
// 需求 5：按 placeholder 替换图片值（IMAGE）
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
  editorRef.value?.setControlValueByPlaceholder({
    name,
    value: img,
    valueType: 'IMAGE',
    ...extra
  })
}

// 需求 6：插入带前缀/后缀（默认零宽空格）的文本控件
const insertControlWithAffix = () => {
  editorRef.value
    ?.getCommand()
    ?.executeInsertControl({
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
// 需求 6：插入默认零宽空格前后缀控件
const insertControlZeroWidth = () => {
  editorRef.value
    ?.getCommand()
    ?.executeInsertControl({
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

// 需求 8：按 name 打开单元格配置对话框（委托给 CellConfigDialog 组件）
const openCellConfigByName = (name: string) => {
  cellConfigRef.value?.openByName(name)
}
// 需求 8：联动测试 —— 将「联动单元格 C」关联到「子表 subA」
const linkCToSubA = () => {
  const cells = editorRef.value?.getTableCells() ?? []
  const subA = cells.find(c => c.name === 'subA')
  const src = cells.find(c => c.label === '表3 R2C1') // 联动单元格 C
  if (!subA || !src) {
    resultText.value = '未定位到 subA 或 联动单元格 C'
    return
  }
  editorRef.value?.setCellConfig({
    tdId: src.tdId,
    enableLink: true,
    linkChildIds: [subA.tdId]
  })
  resultText.value = `已建立联动：C(${src.tdId}) → subA(${subA.tdId})`
}
// 需求 8：清除 C 的联动
const clearLinkForC = () => {
  const cells = editorRef.value?.getTableCells() ?? []
  const src = cells.find(c => c.label === '表3 R2C1')
  if (!src) return
  editorRef.value?.setCellConfig({
    tdId: src.tdId,
    enableLink: true,
    linkChildIds: []
  })
  resultText.value = '已清除 C 的联动子单元格'
}

// 需求 10：跨页眉/页脚/正文替换（占位符同名「区域占位符」）
const replaceAcrossZones = () => {
  editorRef.value?.setControlValueByPlaceholder({
    name: '区域占位符',
    value: '跨区已替换✔',
    valueType: 'VALUE'
  })
  resultText.value =
    '已对页眉/页脚/正文中的「区域占位符」统一替换，请用「需求3」查看三区结果'
}

// 需求 8.5：写入/清空子表数据
const writeSubTable = () => {
  editorRef.value?.setChildTable({
    name: 'subA',
    data: [
      ['张三', 20],
      ['李四', 25]
    ]
  })
}
const clearSubTable = () => {
  editorRef.value?.setChildTable({ name: 'subA', data: [] })
}

</script>

<template>
  <div class="demo">
    <div class="demo__main">
      <div class="demo__modes">
        <span class="demo__modes-label">模式：</span>
        <button type="button" :class="{ 'is-active': mode === 'edit' }" @click="switchMode('edit')">
          编辑模式
        </button>
        <button type="button" :class="{ 'is-active': mode === 'form' }" @click="switchMode('form')">
          表单模式
        </button>
        <button type="button" :class="{ 'is-active': mode === 'readonly' }" @click="switchMode('readonly')">
          只读模式
        </button>
      </div>

      <div class="demo__ops">
        <button type="button" @click="optRef?.open()">选项配置</button>
        <button type="button" @click="save">获取数据</button>
        <span class="demo__ops-tip">提示：在表格单元格上「右键」可打开「配置单元格(子表/联动)」</span>
      </div>

      <CanvasEditor ref="editorRef" :data="editorData" :options="options" auto-focus @ready="onReady"
        @content-change="onContentChange" @saved="onSaved">
        <template #toolbar>
          <EditorToolbar v-if="mode === 'edit'" />
        </template>
        <template #footer="{ pageInfo }">
          <div class="demo__footer">
            <span>页面 {{ pageInfo.pageNo }}/{{ pageInfo.pageCount }}</span>
          </div>
        </template>
        <!-- 默认插槽：可复用对话框组件（通过 useEditorContext 注入编辑器实例） -->
        <CellConfigDialog ref="cellConfigRef" />
        <OptionsConfigDialog ref="optRef" />
      </CanvasEditor>
    </div><!-- /.demo__main -->

    <!-- ============ 功能点分支验证面板（右侧展开） ============ -->
    <div class="verify-side" :class="{ 'is-collapsed': !verifyOpen }">
      <button type="button" class="verify-side__toggle" @click="verifyOpen = !verifyOpen">
        {{ verifyOpen ? '» 收起' : '« 功能验证' }}
      </button>
      <aside class="verify" v-show="verifyOpen">
        <details open>
          <summary>需求 3：获取所有 placeholder 控件值</summary>
          <div class="verify__row">
            <button type="button" @click="listPlaceholderControls">获取全部 placeholder 控件值</button>
            <span class="verify__tip">结果见输出区（含页眉/页脚/正文三区）</span>
          </div>
        </details>

        <details open>
          <summary>需求 4：按 placeholder 替换文本（VALUE）</summary>
          <div class="verify__row">
            <button type="button" @click="replaceTextByPlaceholder('其他补充', '已补充内容A')">替换『其他补充』</button>
            <button type="button" @click="replaceTextByPlaceholder('签署日期', '2026-10-16 10:00:00')">替换『签署日期』</button>
            <button type="button" @click="replaceValuesByPlaceholder('就诊次数')">values数组拼接替换『就诊次数』</button>
          </div>
        </details>

        <details open>
          <summary>需求 5：图片替换（单元格内 5.1 / 非单元格 5.2）</summary>
          <div class="verify__row">
            <span class="verify__grp">5.1 单元格内（控件『单元格签名』，独占单元格）：</span>
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
              @click="editorRef?.setControlValueByPlaceholder({ name: '单元格签名', values: [], valueType: 'IMAGE' })">5.4
              空values+IMAGE(边界)</button>
          </div>
          <div class="verify__row">
            <span class="verify__grp">5.2 非单元格内（控件『其他补充』）：</span>
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
          <div class="verify__row">
            <button type="button" @click="insertControlWithAffix">插入前后缀控件（【】）</button>
            <button type="button" @click="insertControlZeroWidth">插入零宽空格前后缀控件</button>
            <span class="verify__tip">编辑态定位光标后插入，验证前缀后缀默认零宽</span>
          </div>
        </details>

        <details open>
          <summary>需求 7：表单模式限制 / 需求 9：只读模式</summary>
          <div class="verify__row">
            <button type="button" :class="{ 'is-active': mode === 'form' }" @click="switchMode('form')">切到表单模式</button>
            <button type="button" :class="{ 'is-active': mode === 'readonly' }"
              @click="switchMode('readonly')">切到只读模式</button>
            <span class="verify__tip">表单模式：不可删控件/不可改表格结构/隐藏表格右键结构项；只读模式：空控件不显占位符（见『患者签名』）</span>
          </div>
        </details>

        <details open>
          <summary>需求 8：子表 + 联动</summary>
          <div class="verify__row">
            <span class="verify__grp">子表：</span>
            <button type="button" @click="openCellConfigByName('subA')">配置子表 subA</button>
            <button type="button" @click="writeSubTable">写入子表数据</button>
            <button type="button" @click="clearSubTable">清空子表数据</button>
          </div>
          <div class="verify__row">
            <span class="verify__grp">联动：</span>
            <button type="button" @click="linkCToSubA">建立 C→subA 联动</button>
            <button type="button" @click="clearLinkForC">清除 C 联动</button>
            <span class="verify__tip">联动高亮：编辑态右键单元格→拾取；表单态按显隐规则生效</span>
          </div>
        </details>

        <details open>
          <summary>需求 10：页眉/页脚/正文 跨区替换</summary>
          <div class="verify__row">
            <button type="button" @click="replaceAcrossZones">统一替换三区「区域占位符」</button>
            <button type="button" @click="listPlaceholderControls">查看三区结果</button>
          </div>
        </details>

        <pre class="verify__out" v-if="resultText">{{ resultText }}</pre>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.demo__main {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.demo .canvas-editor {
  flex: 1 1 auto;
  min-height: 0;
  height: auto;
}

.demo__modes {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: #fff;
  border-bottom: 1px solid #e2e6ed;
  font-size: 13px;
}

.demo__modes-label {
  color: #767c85;
}

.demo__modes button {
  height: 26px;
  padding: 0 12px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: #fff;
  color: #3d4757;
  cursor: pointer;
}

.demo__modes button.is-active {
  border-color: #193758;
  background: rgba(25, 55, 88, 0.12);
  color: #193758;
}

.demo__ops {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: #fff;
  border-bottom: 1px solid #e2e6ed;
  font-size: 13px;
}

.demo__ops button {
  height: 26px;
  padding: 0 10px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: #fff;
  color: #3d4757;
  cursor: pointer;
}

.demo__ops button:hover {
  border-color: #193758;
}

.demo__ops-tip {
  color: #9097a1;
  margin-left: 8px;
}

.demo__footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 12px;
  background: #fff;
  border-top: 1px solid #e2e6ed;
  font-size: 12px;
  color: #3d4757;
}

.demo__footer button {
  height: 24px;
  padding: 0 10px;
  border: 1px solid #e2e6ed;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}

/* 功能点验证面板（右侧可折叠侧栏） */
.verify-side {
  flex: none;
  display: flex;
  border-left: 1px solid #e2e6ed;
  background: #f7f9fc;
}

.verify-side__toggle {
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

.verify-side__toggle:hover {
  background: #234a73;
}

.verify {
  width: 340px;
  height: 100%;
  overflow: auto;
  padding: 6px 12px 12px;
  font-size: 13px;
  color: #3d4757;
  background: #f7f9fc;
}

.verify details {
  margin: 4px 0;
  border: 1px solid #e2e6ed;
  border-radius: 6px;
  background: #fff;
}

.verify summary {
  cursor: pointer;
  padding: 6px 10px;
  font-weight: 600;
  background: #eef2f8;
  border-radius: 6px 6px 0 0;
}

.verify__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
}

.verify__grp {
  color: #193758;
  font-weight: 600;
  margin-right: 2px;
}

.verify__tip {
  color: #9097a1;
}

.verify button {
  height: 26px;
  padding: 0 10px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: #fff;
  color: #3d4757;
  cursor: pointer;
}

.verify button:hover {
  border-color: #193758;
}

.verify button.is-active {
  border-color: #193758;
  background: rgba(25, 55, 88, 0.12);
  color: #193758;
}

.verify__out {
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
