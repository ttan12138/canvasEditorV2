<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import {
  ControlType,
  ElementType,
  ListStyle,
  ListType,
  RowFlex,
  TitleLevel,
  type Command
} from '../editor'
import { Dialog } from '../components/dialog/Dialog'
import { useEditorContext } from './context'
import OptionsConfigDialog from './OptionsConfigDialog.vue'
import Icon from './Icon.vue'

// 表单模式精简工具栏（simplified）：隐藏「插入占位符 / 表格 / 打印模块 / 导入 Word / 选项配置」
// 等编辑与管理类按钮，仅保留格式化按键与缩放区。
const props = withDefaults(
  defineProps<{ simplified?: boolean }>(),
  { simplified: false }
)

const ctx = useEditorContext()

const rootRef = ref<HTMLDivElement | null>(null)
// 选项配置对话框（通过 useEditorContext 自动拿到编辑器实例）
const optRef = ref<InstanceType<typeof OptionsConfigDialog> | null>(null)
const activeDropdown = ref<string | null>(null)
const tableRow = ref(0)
const tableCol = ref(0)
// 导入 docx：隐藏的文件选择器 + 读取 ArrayBuffer 后调用 executeImportDocx
const docxInputRef = ref<HTMLInputElement | null>(null)
const importDocx = () => {
  docxInputRef.value?.click()
}
const onDocxFileChange = (evt: Event) => {
  const input = evt.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => {
    const command = ctx.getCommand()
    if (!command) return
      ; (command as unknown as {
        executeImportDocx: (opts: { arrayBuffer: ArrayBuffer }) => void
      }).executeImportDocx({ arrayBuffer: reader.result as ArrayBuffer })
    input.value = ''
  }
  reader.onerror = () => {
    input.value = ''
  }
  reader.readAsArrayBuffer(file)
}

const style = computed(() => ctx.rangeStyle.value)

// 格式刷：复制选区样式后进入刷子模式，再次点击取消（单击模式应用一次后由编辑器自动清除）
const painterActive = ref(false)
const onPainter = () => {
  run(command => command.executePainter({ isDblclick: false }))
  // 乐观切换，立即反馈；真实状态由下方 watch 按 rangeStyle.painter 同步回图标
  painterActive.value = !painterActive.value
}

// 格式刷的真实状态由编辑器的 painterStyle 决定；rangeStyle 在选区/样式变化时会重算 painter 字段。
// 单击模式应用一次后编辑器自动清除 painterStyle，rangeStyle 随之更新 painter=false，
// 这里把图标“选中”态同步回真实状态，避免失活后图标仍停在选中。
watch(
  () => style.value?.painter,
  val => {
    painterActive.value = !!val
  },
  { immediate: true }
)

// 按 Esc 退出格式刷时，编辑器会清除 painterStyle（但不一定触发 rangeStyle 重算），主动回弹
const onPainterKeydown = (evt: KeyboardEvent) => {
  if (evt.key === 'Escape') painterActive.value = false
}
onMounted(() => window.addEventListener('keydown', onPainterKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onPainterKeydown))

const run = (fn: (command: Command) => void) => {
  const command = ctx.getCommand()
  if (!command) return
  fn(command)
}

const toggleDropdown = (name: string) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
  if (activeDropdown.value !== 'table') {
    tableRow.value = 0
    tableCol.value = 0
  }
}

const closeDropdown = () => {
  activeDropdown.value = null
}

const onDocumentMousedown = (evt: MouseEvent) => {
  if (!rootRef.value?.contains(evt.target as Node)) {
    closeDropdown()
  }
}

onMounted(() => {
  document.addEventListener('mousedown', onDocumentMousedown)
})
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocumentMousedown)
})

const TITLE_OPTIONS: Array<{ label: string; level: TitleLevel | null }> = [
  { label: '正文', level: null },
  { label: '标题1', level: TitleLevel.FIRST },
  { label: '标题2', level: TitleLevel.SECOND },
  { label: '标题3', level: TitleLevel.THIRD },
  { label: '标题4', level: TitleLevel.FOURTH },
  { label: '标题5', level: TitleLevel.FIFTH },
  { label: '标题6', level: TitleLevel.SIXTH }
]

const ROW_MARGIN_OPTIONS = [1, 1.25, 1.5, 1.75, 2, 2.5, 3]

const LIST_OPTIONS: Array<{
  label: string
  listType: ListType | null
  listStyle: ListStyle
}> = [
    { label: '取消列表', listType: null, listStyle: ListStyle.DISC },
    { label: '有序列表', listType: ListType.OL, listStyle: ListStyle.DECIMAL },
    { label: '无序列表', listType: ListType.UL, listStyle: ListStyle.DISC },
    { label: '复选框列表', listType: ListType.UL, listStyle: ListStyle.CHECKBOX }
  ]

const ALIGN_OPTIONS: Array<{ label: string; rowFlex: RowFlex; icon: string }> = [
  { label: '左对齐', rowFlex: RowFlex.LEFT, icon: 'align-left' },
  { label: '居中', rowFlex: RowFlex.CENTER, icon: 'align-center' },
  { label: '右对齐', rowFlex: RowFlex.RIGHT, icon: 'align-right' },
  { label: '两端对齐', rowFlex: RowFlex.ALIGNMENT, icon: 'align-justify' }
]

// 字体族（与 index.html 菜单保持一致）
const FONT_OPTIONS: Array<{ family: string; label: string }> = [
  { family: 'Microsoft YaHei', label: '微软雅黑' },
  { family: 'SimSun', label: '宋体' },
  { family: '等线', label: '等线' },
  { family: 'SimHei', label: '黑体' },
  { family: 'KaiTi', label: '楷体' },
  { family: 'FangSong', label: '仿宋' },
  { family: '华文宋体', label: '华文宋体' },
  { family: '华文黑体', label: '华文黑体' },
  { family: '华文仿宋', label: '华文仿宋' },
  { family: '华文楷体', label: '华文楷体' },
  { family: '华文琥珀', label: '华文琥珀' },
  { family: '华文隶书', label: '华文隶书' },
  { family: '华文新魏', label: '华文新魏' },
  { family: '华文行楷', label: '华文行楷' },
  { family: '华文中宋', label: '华文中宋' },
  { family: '华文彩云', label: '华文彩云' },
  { family: '"PingFang SC"', label: '苹方' },
  { family: '"Hiragino Sans GB"', label: '冬青黑体' },
  { family: '"SourceHanSansCN-Regular"', label: '思源字体常规' },
  { family: '"SourceHanSansCN-Bold"', label: '思源字体加粗' },
  { family: '"Source Han Sans SC"', label: '思源黑体' },
  { family: '"Source Han Serif SC"', label: '思源宋体' },
  { family: '"Noto Sans SC"', label: 'Noto Sans SC' },
  { family: '"Noto Serif SC"', label: 'Noto Serif SC' },
  { family: 'monospace', label: '等宽字体' },
  { family: 'cursive', label: '手写体' },
  { family: 'Arial', label: 'Arial' },
  { family: 'Helvetica', label: 'Helvetica' },
  { family: '"Helvetica Neue"', label: 'Helvetica Neue' },
  { family: 'Verdana', label: 'Verdana' },
  { family: 'Tahoma', label: 'Tahoma' },
  { family: '"Trebuchet MS"', label: 'Trebuchet MS' },
  { family: '"Segoe UI"', label: 'Segoe UI' },
  { family: 'Roboto', label: 'Roboto' },
  { family: '"Noto Sans"', label: 'Noto Sans' },
  { family: '"Times New Roman"', label: 'Times New Roman' },
  { family: 'Georgia', label: 'Georgia' },
  { family: 'Garamond', label: 'Garamond' },
  { family: '"Courier New"', label: 'Courier New' },
  { family: 'Consolas', label: 'Consolas' },
  { family: 'Monaco', label: 'Monaco' },
  { family: 'Menlo', label: 'Menlo' },
  { family: '"Comic Sans MS"', label: 'Comic Sans MS' },
  { family: 'Impact', label: 'Impact' },
  { family: 'Ink Free', label: 'Ink Free' },
  { family: 'Fantasy', label: 'Fantasy' }
]

// 字号（与 index.html 菜单保持一致）
const SIZE_OPTIONS: Array<{ size: number; label: string }> = [
  { size: 56, label: '初号' },
  { size: 48, label: '小初' },
  { size: 34, label: '一号' },
  { size: 32, label: '小一' },
  { size: 29, label: '二号' },
  { size: 24, label: '小二' },
  { size: 21, label: '三号' },
  { size: 20, label: '小三' },
  { size: 18, label: '四号' },
  { size: 16, label: '小四' },
  { size: 14, label: '五号' },
  { size: 12, label: '小五' },
  { size: 10, label: '六号' },
  { size: 8, label: '小六' },
  { size: 7, label: '七号' },
  { size: 6, label: '八号' }
]

const currentTitle = computed(() => {
  const level = style.value?.level
  return TITLE_OPTIONS.find(item => item.level === level)?.label ?? '正文'
})

const currentRowMargin = computed(() => {
  const rowMargin = style.value?.rowMargin
  return rowMargin ? `${rowMargin}` : '行距'
})

const currentFont = computed(() => {
  const font = style.value?.font || 'Microsoft YaHei'
  return FONT_OPTIONS.find(f => f.family === font)?.label || font
})

const currentSizeLabel = computed(() => {
  const size = style.value?.size
  if (!size) return '小四'
  return SIZE_OPTIONS.find(s => s.size === size)?.label ?? `${size}`
})

const scaleText = computed(
  () => `${Math.round((ctx.pageInfo.value.scale || 1) * 100)}%`
)

const isActive = (key: 'bold' | 'italic' | 'underline' | 'strikeout') =>
  !!style.value?.[key]

const isAlignActive = (rowFlex: RowFlex) => style.value?.rowFlex === rowFlex

const isTitleActive = (level: TitleLevel | null) =>
  (style.value?.level ?? null) === level

const isRowMarginActive = (rowMargin: number) =>
  style.value?.rowMargin === rowMargin

const isFontActive = (family: string) => style.value?.font === family

const isSizeActive = (size: number) => style.value?.size === size

const isListActive = (listType: ListType | null, listStyle?: ListStyle) =>
  (style.value?.listType ?? null) === listType &&
  (!listStyle || style.value?.listStyle === listStyle)

const onColorChange = (evt: Event, type: 'color' | 'highlight') => {
  const value = (evt.target as HTMLInputElement).value
  run(command => {
    if (type === 'color') {
      command.executeColor(value)
    } else {
      command.executeHighlight(value)
    }
  })
}

// 直接输入数字字号：回车或失焦时应用
const onSizeInput = (evt: Event) => {
  const target = evt.target as HTMLInputElement
  const size = Number(target.value)
  if (!Number.isFinite(size) || size < 1) {
    // 非法输入还原为当前字号，避免输入框显示错误值
    target.value = style.value?.size != null ? String(style.value.size) : ''
    return
  }
  run(command => command.executeSize(Math.round(size)))
  target.blur()
}

const insertTextControl = () => {
  new Dialog({
    title: '文本控件',
    data: [
      {
        type: 'text',
        label: '占位符',
        name: 'placeholder',
        required: true,
        placeholder: '请输入占位符'
      },
      {
        type: 'text',
        label: '默认值',
        name: 'value',
        placeholder: '请输入默认值'
      },
      {
        type: 'text',
        label: '前缀',
        name: 'prefix',
        value: '\u200c',
        placeholder: '默认零宽空白符'
      },
      {
        type: 'text',
        label: '后缀',
        name: 'postfix',
        value: '\u200c',
        placeholder: '默认零宽空白符'
      },
      {
        type: 'switch',
        label: '图片可拖拽排序',
        name: 'imageDraggable'
      },
      {
        type: 'switch',
        label: '图片可右键删除',
        name: 'imageCanDelete'
      },
      {
        type: 'switch',
        label: '图片可缩放',
        name: 'imageResizable',
        value: 'true'
      },
      {
        type: 'switch',
        label: '图片可拖拽交换',
        name: 'imageSwappable'
      }
    ],
    onConfirm: payload => {
      const placeholder = payload.find(p => p.name === 'placeholder')?.value
      if (!placeholder) return
      const value = payload.find(p => p.name === 'value')?.value || ''
      const prefix = payload.find(p => p.name === 'prefix')?.value || '\u200c'
      const postfix = payload.find(p => p.name === 'postfix')?.value || '\u200c'
      // 需求 4.1/4.2/4.3/4.5：图片控件能力作为控件内部属性存储，
      // 仅图片控件有意义，仅只读/表单模式生效（见需求清单 70-75）。
      const toBool = (name: string) =>
        payload.find(p => p.name === name)?.value === 'true'
      const imageDraggable = toBool('imageDraggable')
      const imageCanDelete = toBool('imageCanDelete')
      const imageResizable = toBool('imageResizable')
      const imageSwappable = toBool('imageSwappable')
      run(command =>
        command.executeInsertControl({
          type: ElementType.CONTROL,
          value: '',
          control: {
            type: ControlType.TEXT,
            value: value
              ? [
                {
                  value
                }
              ]
              : null,
            placeholder,
            prefix,
            postfix,
            imageDraggable,
            imageCanDelete,
            imageResizable,
            imageSwappable
          }
        })
      )
    }
  })
}

const insertTable = () => {
  if (!tableRow.value || !tableCol.value) return
  const row = tableRow.value
  const col = tableCol.value
  run(command => command.executeInsertTable(row, col))
  closeDropdown()
}

const onCellHover = (row: number, col: number) => {
  tableRow.value = row
  tableCol.value = col
}

// ============ 需求 21：聚焦占位符触发 ============
// 配置（占位符/启用模式/是否聚焦）统一在 OptionsConfigDialog 的「聚焦占位符」模块设置；
// 此处按钮直接按该配置滚动并聚焦（无需传参）。
const focusPlaceholderNow = () => {
  ctx.getCommand()?.executeScrollToPlaceholder()
}
</script>

<template>
  <div ref="rootRef" class="ce-toolbar">
    <div class="ce-toolbar__group">
      <button type="button" title="撤销" :disabled="!style?.undo" @click="run(c => c.executeUndo())">
        <Icon name="undo" />
      </button>
      <button type="button" title="重做" :disabled="!style?.redo" @click="run(c => c.executeRedo())">
        <Icon name="redo" />
      </button>
      <button type="button" title="清除格式" @click="run(c => c.executeFormat())">
        <Icon name="clean" />
      </button>
      <button type="button" title="格式刷：选中源文本后点击，再刷到目标文本（再次点击取消）" :class="{ 'is-active': painterActive }"
        @click="onPainter">
        <Icon name="format-painter" />
      </button>
    </div>

    <span class="ce-toolbar__divider" />

    <div class="ce-toolbar__group">
      <div class="ce-toolbar__dropdown">
        <button type="button" class="ce-toolbar__select-btn" @click="toggleDropdown('font')">
          {{ currentFont }}
        </button>
        <ul v-if="activeDropdown === 'font'" class="ce-toolbar__options">
          <li v-for="f in FONT_OPTIONS" :key="f.family" :class="{ 'is-active': isFontActive(f.family) }"
            :style="{ fontFamily: f.family }" @click="run(c => c.executeFont(f.family)); closeDropdown()">
            {{ f.label }}
          </li>
        </ul>
      </div>

      <div class="ce-toolbar__dropdown">
        <button type="button" class="ce-toolbar__select-btn" @click="toggleDropdown('size')">
          {{ currentSizeLabel }}
        </button>
        <ul v-if="activeDropdown === 'size'" class="ce-toolbar__options">
          <li v-for="s in SIZE_OPTIONS" :key="s.size" :class="{ 'is-active': isSizeActive(s.size) }"
            @click="run(c => c.executeSize(s.size)); closeDropdown()">
            {{ s.label }}
          </li>
        </ul>
      </div>

      <button type="button" title="减小字号" @click="run(c => c.executeSizeMinus())">
        A-
      </button>
      <input class="ce-toolbar__size-input" type="number" min="1" :value="style?.size ?? ''" title="直接输入字号，回车或失焦生效"
        @change="onSizeInput" @keydown.enter.prevent="onSizeInput" />
      <button type="button" title="增大字号" @click="run(c => c.executeSizeAdd())">
        A+
      </button>
      <button type="button" :class="{ 'is-active': isActive('bold') }" @click="run(c => c.executeBold())">
        <Icon name="bold" />
      </button>
      <button type="button" :class="{ 'is-active': isActive('italic') }" @click="run(c => c.executeItalic())">
        <Icon name="italic" />
      </button>
      <button type="button" :class="{ 'is-active': isActive('underline') }" @click="run(c => c.executeUnderline())">
        <Icon name="underline" />
      </button>
      <button type="button" :class="{ 'is-active': isActive('strikeout') }" @click="run(c => c.executeStrikeout())">
        <Icon name="strikeout" />
      </button>
      <button type="button" title="上标" @click="run(c => c.executeSuperscript())">
        <Icon name="superscript" />
      </button>
      <button type="button" title="下标" @click="run(c => c.executeSubscript())">
        <Icon name="subscript" />
      </button>
      <label class="ce-toolbar__color" title="字体颜色">
        <Icon name="color" :size="18" />
        <span :style="{ backgroundColor: style?.color || '#000000' }" />
        <input type="color" @input="evt => onColorChange(evt, 'color')" />
      </label>
      <label class="ce-toolbar__color" title="高亮">
        <Icon name="highlight" :size="18" />
        <span :style="{ backgroundColor: style?.highlight || '#ffff00' }" />
        <input type="color" @input="evt => onColorChange(evt, 'highlight')" />
      </label>
    </div>

    <span class="ce-toolbar__divider" />

    <div class="ce-toolbar__group">
      <div class="ce-toolbar__dropdown">
        <button type="button" @click="toggleDropdown('title')">
          {{ currentTitle }}
        </button>
        <ul v-if="activeDropdown === 'title'" class="ce-toolbar__options">
          <li v-for="item in TITLE_OPTIONS" :key="item.label" :class="{ 'is-active': isTitleActive(item.level) }"
            @click="run(c => c.executeTitle(item.level)); closeDropdown()">
            {{ item.label }}
          </li>
        </ul>
      </div>

      <button v-for="item in ALIGN_OPTIONS" :key="item.label" type="button" :title="item.label"
        :class="{ 'is-active': isAlignActive(item.rowFlex) }" @click="run(c => c.executeRowFlex(item.rowFlex))">
        <Icon :name="item.icon" />
      </button>

      <div class="ce-toolbar__dropdown">
        <button type="button" title="列表" @click="toggleDropdown('list')">
          <Icon name="list-bullet" />
        </button>
        <ul v-if="activeDropdown === 'list'" class="ce-toolbar__options">
          <li v-for="item in LIST_OPTIONS" :key="item.label"
            :class="{ 'is-active': isListActive(item.listType, item.listStyle) }"
            @click="run(c => c.executeList(item.listType, item.listStyle)); closeDropdown()">
            {{ item.label }}
          </li>
        </ul>
      </div>

      <div class="ce-toolbar__dropdown">
        <button type="button" @click="toggleDropdown('rowMargin')">
          {{ currentRowMargin }}
        </button>
        <ul v-if="activeDropdown === 'rowMargin'" class="ce-toolbar__options">
          <li v-for="item in ROW_MARGIN_OPTIONS" :key="item" :class="{ 'is-active': isRowMarginActive(item) }"
            @click="run(c => c.executeRowMargin(item)); closeDropdown()">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <span v-if="!simplified" class="ce-toolbar__divider" />

    <div v-if="!simplified" class="ce-toolbar__group">
      <button type="button" title="插入占位符" @click="insertTextControl">
        <Icon name="insert" />
      </button>
      <div class="ce-toolbar__dropdown">
        <button type="button" title="表格" @click="toggleDropdown('table')">
          <Icon name="table" />
        </button>
        <div v-if="activeDropdown === 'table'" class="ce-toolbar__table">
          <div class="ce-toolbar__table-title">
            {{ tableRow && tableCol ? `${tableRow}×${tableCol}` : '插入' }}
          </div>
          <div class="ce-toolbar__table-panel">
            <div v-for="row in 10" :key="row" class="ce-toolbar__table-row">
              <span v-for="col in 10" :key="col" :class="{ 'is-active': col <= tableCol && row <= tableRow }"
                @mouseenter="onCellHover(row, col)" @click="insertTable" />
            </div>
          </div>
        </div>
      </div>
      <button type="button" title="快速表格" @click="run(c => c.executeInsertTable(3, 3))">
        <Icon name="table-quick" />
      </button>
    </div>

    <span class="ce-toolbar__divider" />

    <div class="ce-toolbar__group">
      <button type="button" title="缩小" @click="run(c => c.executePageScaleMinus())">
        <Icon name="zoom-out" />
      </button>
      <span class="ce-toolbar__text">{{ scaleText }}</span>
      <button type="button" title="放大" @click="run(c => c.executePageScaleAdd())">
        <Icon name="zoom-in" />
      </button>
      <button type="button" title="复原" @click="run(c => c.executePageScaleRecovery())">
        <Icon name="zoom-reset" />
      </button>
    </div>

    <span v-if="!simplified" class="ce-toolbar__divider" />

    <div v-if="!simplified" class="ce-toolbar__group">
      <button type="button" title="打印预览（调试）" @click="run(c => c.executePrintPreview())">
        <Icon name="print-preview" />
      </button>
      <button type="button" title="导出 PDF 文件" @click="run(c => c.executePrintPdf(true))">
        <Icon name="print" />
      </button>
    </div>

    <span v-if="!simplified" class="ce-toolbar__divider" />

    <div v-if="!simplified" class="ce-toolbar__group">
      <button type="button" title="导入 docx 文件" @click="importDocx">
        <Icon name="upload" />
      </button>
      <button type="button" title="选项配置" @click="optRef?.open()">
        <Icon name="settings" />
      </button>
      <input ref="docxInputRef" type="file" accept=".docx" style="display: none" @change="onDocxFileChange" />
    </div>

    <span v-if="!simplified" class="ce-toolbar__divider" />

    <div v-if="!simplified" class="ce-toolbar__group">
      <button type="button" title="聚焦占位符" @click="focusPlaceholderNow">
        <Icon name="target" />
      </button>
    </div>

    <OptionsConfigDialog ref="optRef" />
  </div>
</template>

<style scoped>
.ce-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2px;
  padding: 6px 12px;
  background: #fff;
  border-bottom: 1px solid #e2e6ed;
  user-select: none;
}

.ce-toolbar__group {
  display: flex;
  align-items: center;
  gap: 2px;
}

.ce-toolbar__divider {
  width: 1px;
  height: 16px;
  margin: 0 8px;
  background-color: #cfd2d8;
}

.ce-toolbar button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 26px;
  padding: 0 6px;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: #3d4757;
  font-size: 13px;
  cursor: pointer;
}

/* 纯图标按钮（含 <Icon>）：方块化、去除横向内边距，更贴合图标工具栏观感 */
.ce-toolbar button:has(.ce-icon) {
  padding: 0;
  width: 28px;
}

.ce-toolbar button:hover {
  background: rgba(25, 55, 88, 0.06);
}

.ce-toolbar button.is-active {
  background: rgba(25, 55, 88, 0.12);
}

.ce-toolbar button:disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background: transparent;
}

.ce-toolbar__text {
  min-width: 32px;
  font-size: 12px;
  text-align: center;
  color: #767c85;
}

.ce-toolbar__size-input {
  width: 48px;
  height: 26px;
  padding: 0 4px;
  border: 1px solid #e2e6ed;
  border-radius: 4px;
  font-size: 13px;
  text-align: center;
  color: #3d4757;
  background: #fff;
  outline: none;
}

.ce-toolbar__size-input:focus {
  border-color: #193758;
}

/* 隐藏数字输入框的上下微调箭头，保持工具栏紧凑 */
.ce-toolbar__size-input::-webkit-outer-spin-button,
.ce-toolbar__size-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.ce-toolbar__size-input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}

.ce-toolbar__color {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 26px;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
}

.ce-toolbar__color:hover {
  background: rgba(25, 55, 88, 0.06);
}

/* 当前颜色/高亮色：绝对定位到底部细条，图标保持与其它图标按钮一致的水平居中 */
.ce-toolbar__color span {
  position: absolute;
  left: 6px;
  right: 6px;
  bottom: 2px;
  height: 3px;
  border-radius: 1.5px;
}

.ce-toolbar__color input {
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.ce-toolbar__dropdown {
  position: relative;
}

.ce-toolbar__select-btn {
  width: 96px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}

.ce-toolbar__options {
  position: absolute;
  top: 28px;
  left: 0;
  z-index: 10;
  min-width: 96px;
  max-height: 280px;
  overflow: auto;
  padding: 4px;
  background: #fff;
  border: 1px solid #e2e6ed;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
}

.ce-toolbar__options li {
  padding: 4px 8px;
  font-size: 13px;
  white-space: nowrap;
  cursor: pointer;
}

.ce-toolbar__options li:hover {
  background: #ebecef;
}

.ce-toolbar__options li.is-active {
  background: #e2e6ed;
}

.ce-toolbar__table {
  position: absolute;
  top: 28px;
  left: 0;
  z-index: 10;
  padding: 8px;
  background: #fff;
  border: 1px solid #e2e6ed;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
}

.ce-toolbar__table-title {
  margin-bottom: 6px;
  font-size: 12px;
  color: #767c85;
}

.ce-toolbar__table-panel {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.ce-toolbar__table-row {
  display: flex;
  gap: 2px;
}

.ce-toolbar__table-row span {
  width: 14px;
  height: 14px;
  border: 1px solid #e2e6ed;
  cursor: pointer;
}

.ce-toolbar__table-row span.is-active {
  background: rgba(25, 55, 88, 0.12);
  border-color: rgba(25, 55, 88, 0.4);
}
</style>
