<script setup lang="ts">
import { ref } from 'vue'
import { useEditorContext } from './context'
import { ElementType, EditorMode, ControlType } from '../editor'
import type { IElement, IEditorData } from '../editor'
import { options as mockOptions, buildDemoEditorData } from '../mock'
import {
  getPlaceholderTextControls,
  setControlValueByPlaceholder,
  setControlEditableByPlaceholder,
  setImageControlConfigForAll,
  setImageControlConfigByPlaceholder,
  setControlContentByPlaceholder,
  clearControlValueByPlaceholder,
  clearControlValuesByPlaceholder,
  setAllControlEditable,
  setControlsEditableByPlaceholders,
  type IImageControlConfig,
  type IReplaceValueDetail,
  type ISetControlContentByPlaceholderPayload
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
// 下载当前 value 为 JSON 文件（同时回显到文本框便于查看）
const valueText = ref('')
const status = ref('')
const downloadValue = () => {
  const value = cmd()?.getValue()
  if (!value) {
    resultText.value = '编辑器未就绪，无法下载'
    return
  }
  const json = JSON.stringify(value, null, 2)
  valueText.value = json
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'canvas-editor-value.json'
  a.click()
  URL.revokeObjectURL(url)
  resultText.value = '已下载当前 Value JSON 文件'
}
// 通过 JSON 文件加载 value 到编辑器
const fileInput = ref<HTMLInputElement | null>(null)
const triggerLoadFile = () => fileInput.value?.click()
const onFileChange = (e: Event) => {
  readFileValue(e.target as HTMLInputElement)
}
const readFileValue = (input: HTMLInputElement) => {
  const file = input.files?.[0]
  input.value = '' // 允许重复选择同一文件
  if (!file) return
  const command = cmd()
  if (!command) {
    status.value = '编辑器未就绪'
    return
  }
  const reader = new FileReader()
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result))
      // getValue() 返回 { version, data: IEditorData, options }，executeSetValue 需要其 data 部分；
      // 兼容文件直接是 IEditorData（顶层含 header/main/footer）的情况
      const payload = (parsed && parsed.data) ? parsed.data : parsed
      command.executeSetValue(payload)
      command.executeUpdateOptions(parsed?.options || {})
      status.value = '已从文件「' + file.name + '」加载 Value'
    } catch (e) {
      status.value = 'JSON 解析失败：' + (e as Error).message
    }
  }
  reader.onerror = () => {
    status.value = '文件读取失败'
  }
  reader.readAsText(file)
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
// 加载 src/mock.ts 的全套示例（含页眉/页脚、subTableDemo 子表联动单元格、控件/图片/级联/计算/批注）
const loadMockData2 = () => {
  const command = cmd()
  if (!command) {
    mockStatus.value = '编辑器未就绪'
    return
  }
  command.executeSetValue(buildDemoEditorData())
  command.executeUpdateOptions(mockOptions)
  mockStatus.value = '已加载 Mock 数据2（src/mock.ts：页眉/正文/页脚 + subTableDemo 子表联动 + 控件/图片/级联/计算/批注）'
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
    draggable?: boolean
    canDelete?: boolean
    resize?: boolean
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
// 5.5：写入带描述文字（题注）的图片——位于图片正下方、相对（图+padding）宽度居中、超出换行
const replaceImageWithCaption = (name: string) => {
  const command = cmd()
  if (!command) return
  setControlValueByPlaceholder(command, {
    name,
    valueType: 'IMAGE',
    count: 2,
    values: [
      {
        value: makeSampleImage(200, 80, '#3a6ea5'),
        valueType: 'IMAGE',
        text: '这是第一张图片的描述文字，较长时会自动换行并相对（图像+左右padding）宽度居中展示在图片正下方。'
      },
      {
        value: makeSampleImage(200, 80, '#7a4ea5'),
        valueType: 'IMAGE',
        text: '第二张图的描述'
      }
    ]
  })
  resultText.value = `已写入带描述文字的图片到「${name}」（切表单/只读模式查看题注居中换行）`
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
// 8.5：对象数组写入（每条 object 的 key 需与子表表头 key 匹配：name/age）
const writeSubTableByObject = () => {
  cmd()?.setChildTable({
    name: 'subA',
    data: [
      { name: '王五', age: 30 },
      { name: '赵六', age: 35 }
    ]
  })
  resultText.value = '已按对象数组写入子表 subA（key 与表头 name/age 匹配）'
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

// ============ 需求 4.5：拖拽交换控件内图片位置 ============
const enableImageSwap = () => {
  const command = cmd()
  if (!command) return
  const colors = ['#3a6ea5', '#7a4ea5', '#a54e6e', '#4ea55a', '#a58a4e']
  const values = colors.map(c => ({
    value: makeSampleImage(200, 80, c),
    valueType: 'IMAGE' as const
  }))
  setControlValueByPlaceholder(command, {
    name: '单元格签名',
    valueType: 'IMAGE',
    count: 3,
    swappable: true,
    values
  })
  resultText.value =
    '已写入 5 张可交换图片（只读/表单模式下把一张图拖到另一张图中间 60% 区域即可与其交换位置，count=3）'
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
// 11（补充）：设置【全部】占位符控件可/不可编辑
const setAllEditable = (editable: boolean) => {
  const command = cmd()
  if (!command) return
  const count = setAllControlEditable(command, editable)
  resultText.value = `已设置全部 ${count} 个占位符控件为${editable ? '可编辑' : '不可编辑'}（切到表单模式验证）`
}
// 11（补充）：按【多个】占位符设置控件可/不可编辑
const setBatchEditable = (editable: boolean) => {
  const command = cmd()
  if (!command) return
  const count = setControlsEditableByPlaceholders(
    command,
    ['_BEHAVIOR_', '_DIAGRESULT_'],
    editable
  )
  resultText.value = `已设置 ${count} 个占位符（'_BEHAVIOR_', '_DIAGRESULT_'）控件为${editable ? '可编辑' : '不可编辑'}（切到表单模式验证）`
}

// ============ 需求 12.1：统一设置所有图片控件删除/拖拽/缩放能力 ============
const setAllImageConfig = (config: IImageControlConfig) => {
  const command = cmd()
  if (!command) return
  bindImageDeleteListener()
  const count = setImageControlConfigForAll(command, config)
  resultText.value = `已统一设置 ${count} 个图片控件：canDelete=${config.canDelete}, draggable=${config.draggable}, resize=${config.resize}, swappable=${config.swappable}（切到只读/表单模式验证）`
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

// ============ 需求 19：按 placeholder 设置带临时批注样式内容 ============
const setContentByPlaceholder = (name: string, mode: 0 | 1 | 2) => {
  const command = cmd()
  if (!command) return
  const payload: ISetControlContentByPlaceholderPayload = {
    name,
    value: '【新增】临时批注内容',
    mode,
    options: { color: '#c0392b', backgroundColor: 'rgba(241,196,15,0.35)' }
  }
  setControlContentByPlaceholder(command, payload)
  resultText.value = `已按 mode=${mode} 设置「${name}」内容（带临时批注样式）`
}
// 多占位符：一次性逐条设置多个 placeholder（name 与 value 一一对应）
const setContentByPlaceholders = (names: string[], mode: 0 | 1 | 2) => {
  const command = cmd()
  if (!command) return
  const items = names.map((n, i) => ({
    name: n,
    value: `【批量${i + 1}】临时批注内容`
  }))
  setControlContentByPlaceholder(command, {
    items,
    mode,
    options: { color: '#c0392b', backgroundColor: 'rgba(241,196,15,0.35)' }
  })
  resultText.value = `已按 mode=${mode} 逐条设置 ${names.join('/')} 内容（name 与 value 一一对应，带临时批注样式）`
}

// ============ 需求 19（补充）：按 placeholder 清空 ============
const clearValueByPlaceholder = (name: string) => {
  const command = cmd()
  if (!command) return
  const count = clearControlValueByPlaceholder(command, name)
  resultText.value = `已清空 ${count} 个占位符「${name}」控件`
}
const clearValuesByPlaceholder = () => {
  const command = cmd()
  if (!command) return
  const total = clearControlValuesByPlaceholder(command, [
    '患者姓名',
    '患者性别',
    '患者年龄'
  ])
  resultText.value = `已批量清空 ${total} 个占位符控件（患者姓名/性别/年龄）`
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
          <button type="button" title="ctx.getInstance() → 返回编辑器实例对象（含 version）" @click="printInstance">1. 打印实例</button>
          <button type="button" title="command.getValue() → 返回 IEditorResult：{ version, data: IEditorData, options }"
            @click="printValue">2. 打印 Value</button>
          <button type="button" title="command.getValue() → 导出 canvas-editor-value.json（IEditorResult）"
            @click="downloadValue">下载 JSON</button>
          <button type="button" class="is-primary"
            title="command.executeSetValue(IEditorData) + executeUpdateOptions(options) → 从 JSON 文件加载（兼容顶层 {header,main,footer} 或 {data,options}）"
            @click="triggerLoadFile">从 JSON 文件加载</button>
          <input ref="fileInput" type="file" accept=".json,application/json" style="display: none"
            @change="onFileChange" />
          <button type="button" title="command.executeSetValue({ main:[文本×2, CONTROL(患者姓名/性别/年龄), 3×3表格] })"
            @click="loadMockData">加载 Mock 数据</button>
          <button type="button"
            title="command.executeSetValue({ main: <mock.ts data> }) + executeUpdateOptions(<mock.ts options>) → 加载 src/mock.ts 全套示例（文本控件/下拉/级联/计算/批注/表格/图片/checkbox/日期/LaTex）"
            @click="loadMockData2">加载 Mock 数据2</button>
          <span class="editor-debug__status">{{ status || mockStatus }}</span>
        </div>
        <textarea v-model="valueText" class="editor-debug__area" spellcheck="false"
          placeholder="当前 value JSON（点击「下载 JSON」时同步显示；加载请使用「从 JSON 文件加载」按钮）" />
      </details>

      <details open>
        <summary>需求 3：获取所有 placeholder 控件值</summary>
        <div class="editor-debug__row">
          <button type="button" title="getPlaceholderTextControls(command) → {name, value}[]（覆盖页眉/页脚/正文三区）"
            @click="listPlaceholderControls">获取全部 placeholder 控件值</button>
          <span class="editor-debug__tip">结果见输出区（含页眉/页脚/正文三区）</span>
        </div>
      </details>

      <details open>
        <summary>需求 4：按 placeholder 替换文本（VALUE）</summary>
        <div class="editor-debug__row">
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'其他补充', value:'已补充内容A', valueType:'VALUE' })"
            @click="replaceTextByPlaceholder('其他补充', '已补充内容A')">替换『其他补充』</button>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'签署日期', value:'2026-10-16 10:00:00', valueType:'VALUE' })"
            @click="replaceTextByPlaceholder('签署日期', '2026-10-16 10:00:00')">替换『签署日期』</button>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'就诊次数', valueType:'VALUE', values:[{value:'甲'},{value:'乙'},{value:'丙'}] })"
            @click="replaceValuesByPlaceholder('就诊次数')">values数组拼接替换『就诊次数』</button>
        </div>
      </details>

      <details open>
        <summary>需求 5：图片替换（单元格内 5.1 / 非单元格 5.2）</summary>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">5.1 单元格内（控件『单元格签名』，独占单元格）：</span>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', count:2, value:<png 200x80> })"
            @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(200, 80), { count: 2 })">5.1.1
            count=2（两图）</button><button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', count:3, value:<png 200x80> })"
            @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(200, 80), { count: 3 })">5.1.1
            count=3（三图/每行3张）</button><button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', count:2, values:[3×{value:<png>,valueType:'IMAGE'}] })"
            @click="replaceImageByPlaceholder('单元格签名', '', { count: 2, values: [{ value: makeSampleImage(200, 80), valueType: 'IMAGE' }, { value: makeSampleImage(200, 80), valueType: 'IMAGE' }, { value: makeSampleImage(200, 80), valueType: 'IMAGE' }] })">5.1.1
            三图count=2（每行2张）</button>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', width:400, height:160 })（超单元格宽则限宽，高按比例）"
            @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(400, 160), { width: 400, height: 160 })">5.1.2
            设宽高(超宽限宽)</button>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', width:250 })（超宽限宽，高比例自适应）"
            @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(300, 120), { width: 250 })">5.1.3 仅设宽</button>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE' })（宽=单元格宽，高比例自适应）"
            @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(300, 140))">5.1.4
            不设宽高</button>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', resize:false })（写入图片并隐藏 resize 句柄）"
            @click="replaceImageByPlaceholder('单元格签名', makeSampleImage(300, 140), { resize: false })">5.1.4
            不设宽高+隐藏缩放</button>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', count:2, values:[{padding:[10,20]},{padding:[20,20]}] })（单图宽=50%-padding）"
            @click="replaceImageByPlaceholder('单元格签名', '', { count: 2, values: [{ value: makeSampleImage(200, 80), padding: [10, 20] }, { value: makeSampleImage(200, 80), padding: [20, 20] }] })">5.3
            图片padding</button><button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', count:2, values:[] })（边界：无图）"
            @click="replaceImageByPlaceholder('单元格签名', '', { values: [], count: 2 })">5.4
            空values+IMAGE(边界)</button>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">5.2 非单元格内（控件『其他补充』）：</span>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'其他补充', valueType:'IMAGE', width:150, height:60 })（原图宽高）"
            @click="replaceImageByPlaceholder('其他补充', makeSampleImage(200, 80), { width: 150, height: 60 })">5.2.1
            设宽高</button>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'其他补充', valueType:'IMAGE', width:120 })（宽固定，高比例自适应）"
            @click="replaceImageByPlaceholder('其他补充', makeSampleImage(200, 80), { width: 120 })">5.2.2
            仅设宽</button>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'其他补充', valueType:'IMAGE', height:40 })（高固定，宽比例自适应）"
            @click="replaceImageByPlaceholder('其他补充', makeSampleImage(200, 80), { height: 40 })">5.2.3
            仅设高</button>
          <button type="button" title="setControlValueByPlaceholder(command, { name:'其他补充', valueType:'IMAGE' })（原图宽高）"
            @click="replaceImageByPlaceholder('其他补充', makeSampleImage(200, 80))">5.2.4 原图</button>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">5.5 图片描述文字（题注）：</span>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', count:2, values:[{value:<png>, text:'长描述文字…'},{value:<png>, text:'描述'}] })（位于图片正下方、相对图+padding居中、超出换行；多图换行时后续图片从题注下方开始）"
            @click="replaceImageWithCaption('单元格签名')">写入带描述文字图片（单元格签名）</button>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'其他补充', valueType:'IMAGE', count:2, values:[{value:<png>, text:'长描述文字…'},{value:<png>, text:'描述'}] })"
            @click="replaceImageWithCaption('其他补充')">写入带描述文字图片（其他补充）</button>
          <span class="editor-debug__tip">切表单/只读模式查看题注：正下方居中、超出换行、多图从文字下方开始</span>
        </div>
      </details>

      <details open>
        <summary>需求 6：插入带前缀/后缀控件</summary>
        <div class="editor-debug__row">
          <button type="button"
            title="command.executeInsertControl({ type:CONTROL, value:'', control:{ type:'text', value:null, placeholder:'前后缀示例', prefix:'【', postfix:'】' } })"
            @click="insertControlWithAffix">插入前后缀控件（【】）</button>
          <button type="button"
            title="command.executeInsertControl({ ...prefix:'\u200c', postfix:'\u200c' })（零宽空格，编辑态不占可视宽度）"
            @click="insertControlZeroWidth">插入零宽空格前后缀控件</button>
          <span class="editor-debug__tip">编辑态定位光标后插入，验证前缀后缀默认零宽</span>
        </div>
      </details>

      <details open>
        <summary>需求 7：表单模式限制 / 需求 9：只读模式</summary>
        <div class="editor-debug__row">
          <button type="button" :class="{ 'is-active': mode === 'edit' }" title="command.executeMode(EditorMode.EDIT)"
            @click="switchMode('edit')">编辑模式</button>
          <button type="button" :class="{ 'is-active': mode === 'form' }" title="command.executeMode(EditorMode.FORM)"
            @click="switchMode('form')">表单模式</button>
          <button type="button" :class="{ 'is-active': mode === 'readonly' }"
            title="command.executeMode(EditorMode.READONLY)" @click="switchMode('readonly')">只读模式</button>
          <span class="editor-debug__tip">表单模式：不可删控件/不可改表格结构/隐藏表格右键结构项；只读模式：空控件不显占位符（见『患者签名』）</span>
        </div>
      </details>

      <details open>
        <summary>需求 8：子表 + 联动</summary>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">子表：</span>
          <button type="button" title="ctx.cellConfig.openByName('subA') → 打开『配置单元格』对话框"
            @click="openCellConfigByName('subA')">配置子表 subA</button>
          <button type="button" title="command.setChildTable({ name:'subA', data:[['张三',20],['李四',25]] })"
            @click="writeSubTable">写入子表数据</button>
          <button type="button"
            title="command.setChildTable({ name:'subA', data:[{name:'王五',age:30},{name:'赵六',age:35}] })（对象数组：key 匹配表头 name/age）"
            @click="writeSubTableByObject">写入子表(对象数组)</button>
          <button type="button" title="command.setChildTable({ name:'subA', data:[] })"
            @click="clearSubTable">清空子表数据</button>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">联动：</span>
          <button type="button"
            title="command.setCellConfig({ tdId:<label='表3 R2C1'单元格>, enableLink:true, linkChildIds:[<name='subA'单元格的tdId>] })"
            @click="linkCToSubA">建立 C→subA 联动</button>
          <button type="button"
            title="command.setCellConfig({ tdId:<label='表3 R2C1'>, enableLink:true, linkChildIds:[] })"
            @click="clearLinkForC">清除 C 联动</button>
          <span class="editor-debug__tip">联动高亮：编辑态右键单元格→拾取；表单态按显隐规则生效</span>
        </div>
      </details>

      <details open>
        <summary>需求 10：页眉/页脚/正文 跨区替换</summary>
        <div class="editor-debug__row">
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'区域占位符', value:'跨区已替换✔', valueType:'VALUE' })（页眉/页脚/正文统一替换）"
            @click="replaceAcrossZones">统一替换三区「区域占位符」</button>
          <button type="button" title="getPlaceholderTextControls(command) → {name, value}[]（覆盖页眉/页脚/正文三区）"
            @click="listPlaceholderControls">查看三区结果</button>
        </div>
      </details>

      <details open>
        <summary>需求 4.1/4.2/11/12：图片交互 / 控件编辑</summary>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">4.1 拖拽排序：</span>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', count:3, draggable:true, values:[5×{value:<png 200x80>,valueType:'IMAGE'}] })（只读/表单下拖拽调整顺序）"
            @click="enableImageDrag">写入 5 张可拖拽图片（单元格签名）</button>
          <span class="editor-debug__tip">只读/表单模式下按住一张图拖到另一张外 20% 区域（左/右）调整顺序（5 张不同颜色，count=3）</span>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">4.5 拖拽交换：</span>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', count:3, swappable:true, values:[5×{value:<png 200x80>,valueType:'IMAGE'}] })（只读/表单下拖拽交换位置）"
            @click="enableImageSwap">写入 5 张可交换图片（单元格签名）</button>
          <span class="editor-debug__tip">只读/表单模式下把一张图拖到另一张图中间 60% 区域即可与其交换位置（橙色虚框预览）</span>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">4.2 右键删除：</span>
          <button type="button"
            title="setControlValueByPlaceholder(command, { name:'单元格签名', valueType:'IMAGE', count:2, canDelete:true, draggable:true, values:[2×IMAGE] }) + eventBus.on('controlImageDelete', cb)"
            @click="enableImageDelete">写入 2 张可删除图片（单元格签名）</button>
          <span class="editor-debug__tip">只读/表单模式下右键图片→「删除图片」，通知见输出区</span>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">11 表单编辑：</span>
          <button type="button" title="setControlEditableByPlaceholder(command, '患者姓名', false)"
            @click="setControlEditable('患者姓名', false)">『患者姓名』不可编辑</button>
          <button type="button" title="setControlEditableByPlaceholder(command, '患者姓名', true)"
            @click="setControlEditable('患者姓名', true)">『患者姓名』可编辑</button>
          <button type="button" title="setControlsEditableByPlaceholders(command, ['患者姓名','患者性别','患者年龄'], false)"
            @click="setBatchEditable(false)">多个不可编辑</button>
          <button type="button" title="setControlsEditableByPlaceholders(command, ['患者姓名','患者性别','患者年龄'], true)"
            @click="setBatchEditable(true)">多个可编辑</button>
          <button type="button" title="setAllControlEditable(command, false) → 全部占位符控件不可编辑"
            @click="setAllEditable(false)">全部不可编辑</button>
          <button type="button" title="setAllControlEditable(command, true) → 全部占位符控件可编辑"
            @click="setAllEditable(true)">全部可编辑</button>
          <span class="editor-debug__tip">切到表单模式验证</span>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">12.1 统一设置：</span>
          <button type="button" title="setImageControlConfigForAll(command, { canDelete:true, draggable:true })"
            @click="setAllImageConfig({ canDelete: true, draggable: true })">全部图片控件：可删+可拖</button>
          <button type="button" title="setImageControlConfigForAll(command, { canDelete:false, draggable:false })"
            @click="setAllImageConfig({ canDelete: false, draggable: false })">全部图片控件：关闭</button>
          <button type="button" title="setImageControlConfigForAll(command, { resize:true })"
            @click="setAllImageConfig({ resize: true })">全部图片控件：显示缩放句柄</button>
          <button type="button" title="setImageControlConfigForAll(command, { resize:false })"
            @click="setAllImageConfig({ resize: false })">全部图片控件：隐藏缩放句柄</button>
          <button type="button" title="setImageControlConfigForAll(command, { swappable:true })"
            @click="setAllImageConfig({ swappable: true })">全部图片控件：可交换</button>
          <button type="button" title="setImageControlConfigForAll(command, { swappable:false })"
            @click="setAllImageConfig({ swappable: false })">全部图片控件：关闭交换</button>
          <span class="editor-debug__tip">只读/表单模式下对所有图片控件生效（resize 控制是否显示 resize 句柄；swappable 控制中间区域拖拽交换）</span>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">12.2 单独设置：</span>
          <button type="button"
            title="setImageControlConfigByPlaceholder(command, '单元格签名', { canDelete:true, draggable:true })"
            @click="setImageConfig('单元格签名', { canDelete: true, draggable: true })">『单元格签名』可删+可拖</button>
          <button type="button"
            title="setImageControlConfigByPlaceholder(command, '单元格签名', { canDelete:false, draggable:false })"
            @click="setImageConfig('单元格签名', { canDelete: false, draggable: false })">『单元格签名』关闭</button>
          <button type="button" title="setImageControlConfigByPlaceholder(command, '单元格签名', { resize:true })"
            @click="setImageConfig('单元格签名', { resize: true })">『单元格签名』显示缩放句柄</button>
          <button type="button" title="setImageControlConfigByPlaceholder(command, '单元格签名', { resize:false })"
            @click="setImageConfig('单元格签名', { resize: false })">『单元格签名』隐藏缩放句柄</button>
          <button type="button" title="setImageControlConfigByPlaceholder(command, '单元格签名', { swappable:true })"
            @click="setImageConfig('单元格签名', { swappable: true })">『单元格签名』可交换</button>
          <button type="button" title="setImageControlConfigByPlaceholder(command, '单元格签名', { swappable:false })"
            @click="setImageConfig('单元格签名', { swappable: false })">『单元格签名』关闭交换</button>
          <button type="button"
            title="setImageControlConfigByPlaceholder(command, '患者姓名', { canDelete:true }) → 非图片控件，无效果"
            @click="setImageConfig('患者姓名', { canDelete: true })">『患者姓名』（非图片控件，无效）</button>
        </div>
      </details>

      <details open>
        <summary>需求 19：按 placeholder 设置/清空（临时批注样式）</summary>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">设置：</span>
          <button type="button"
            title="setControlContentByPlaceholder(command, { name:'其他补充', value:'【新增】临时批注内容', mode:0, options:{color,backgroundColor} }) → 直接替换"
            @click="setContentByPlaceholder('其他补充', 0)">mode=0 替换『其他补充』</button>
          <button type="button"
            title="setControlContentByPlaceholder(command, { name:'其他补充', value:'【新增】临时批注内容', mode:1 }) → 末尾追加"
            @click="setContentByPlaceholder('其他补充', 1)">mode=1 末尾追加『其他补充』</button>
          <button type="button"
            title="setControlContentByPlaceholder(command, { name:'患者姓名', value:'【新增】临时批注内容', mode:2 }) → 光标处追加（光标不在占位符内回退到1）"
            @click="setContentByPlaceholder('患者姓名', 2)">mode=2 光标处『患者姓名』</button>
          <button type="button"
            title="setControlContentByPlaceholder(command, { name:['患者姓名','患者性别','患者年龄'], value:'【批量】临时批注内容', mode:1 }) → 多占位符并集、末尾追加"
            @click="setContentByPlaceholders(['患者姓名', '患者性别', '患者年龄'], 1)">多占位符追加（姓名/性别/年龄）</button>
          <span class="editor-debug__tip">内容带临时批注样式：下一次聚焦/设置/打印/取值前清除（回文档默认样式）</span>
        </div>
        <div class="editor-debug__row">
          <span class="editor-debug__grp">清空：</span>
          <button type="button" title="clearControlValueByPlaceholder(command, '患者姓名') → 清空单个占位符控件"
            @click="clearValueByPlaceholder('患者姓名')">清空『患者姓名』</button>
          <button type="button" title="clearControlValuesByPlaceholder(command, ['患者姓名','患者性别','患者年龄']) → 批量清空多个占位符控件"
            @click="clearValuesByPlaceholder">批量清空（姓名/性别/年龄）</button>
          <span class="editor-debug__tip">文本/SELECT/CHECKBOX/RADIO/DATE/NUMBER 均可清空</span>
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
  display: inline-flex;
  align-items: center;
  height: 20px;
  padding: 0 6px;
  margin-right: 4px;
  border-radius: 4px;
  background: rgba(25, 55, 88, 0.08);
  color: #193758;
  font-weight: 600;
  font-size: 12px;
  white-space: nowrap;
}

.editor-debug__tip {
  color: #9097a1;
  font-size: 12px;
}

/* 按钮风格对齐 EditorToolbar.vue：无边框、hover 浅色底、active 加深 */
.editor-debug button {
  height: 26px;
  padding: 0 8px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: #3d4757;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.12s ease, color 0.12s ease;
}

.editor-debug button:hover {
  background: rgba(25, 55, 88, 0.06);
}

.editor-debug button:active {
  background: rgba(25, 55, 88, 0.12);
}

.editor-debug button.is-active {
  background: rgba(25, 55, 88, 0.12);
  color: #193758;
}

.editor-debug button.is-primary {
  background: #193758;
  color: #fff;
}

.editor-debug button.is-primary:hover {
  background: #234a73;
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
