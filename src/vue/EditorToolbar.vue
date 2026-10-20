<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
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

const ctx = useEditorContext()

const rootRef = ref<HTMLDivElement | null>(null)
const activeDropdown = ref<string | null>(null)
const tableRow = ref(0)
const tableCol = ref(0)

const style = computed(() => ctx.rangeStyle.value)

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

const ALIGN_OPTIONS: Array<{ label: string; rowFlex: RowFlex }> = [
  { label: '左对齐', rowFlex: RowFlex.LEFT },
  { label: '居中', rowFlex: RowFlex.CENTER },
  { label: '右对齐', rowFlex: RowFlex.RIGHT },
  { label: '两端对齐', rowFlex: RowFlex.ALIGNMENT }
]

const currentTitle = computed(() => {
  const level = style.value?.level
  return TITLE_OPTIONS.find(item => item.level === level)?.label ?? '正文'
})

const currentRowMargin = computed(() => {
  const rowMargin = style.value?.rowMargin
  return rowMargin ? `${rowMargin}` : '行距'
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
      }
    ],
    onConfirm: payload => {
      const placeholder = payload.find(p => p.name === 'placeholder')?.value
      if (!placeholder) return
      const value = payload.find(p => p.name === 'value')?.value || ''
      const prefix = payload.find(p => p.name === 'prefix')?.value || '\u200c'
      const postfix = payload.find(p => p.name === 'postfix')?.value || '\u200c'
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
            postfix
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
</script>

<template>
  <div ref="rootRef" class="ce-toolbar">
    <div class="ce-toolbar__group">
      <button type="button" title="撤销" :disabled="!style?.undo" @click="run(c => c.executeUndo())">
        撤销
      </button>
      <button type="button" title="重做" :disabled="!style?.redo" @click="run(c => c.executeRedo())">
        重做
      </button>
      <button type="button" title="清除格式" @click="run(c => c.executeFormat())">
        清除格式
      </button>
    </div>

    <span class="ce-toolbar__divider" />

    <div class="ce-toolbar__group">
      <button type="button" :class="{ 'is-active': isActive('bold') }" @click="run(c => c.executeBold())">
        <b>B</b>
      </button>
      <button type="button" :class="{ 'is-active': isActive('italic') }" @click="run(c => c.executeItalic())">
        <i>I</i>
      </button>
      <button type="button" :class="{ 'is-active': isActive('underline') }" @click="run(c => c.executeUnderline())">
        <u>U</u>
      </button>
      <button type="button" :class="{ 'is-active': isActive('strikeout') }" @click="run(c => c.executeStrikeout())">
        <s>S</s>
      </button>
      <button type="button" title="减小字号" @click="run(c => c.executeSizeMinus())">
        A-
      </button>
      <span class="ce-toolbar__text">{{ style?.size ?? '--' }}</span>
      <button type="button" title="增大字号" @click="run(c => c.executeSizeAdd())">
        A+
      </button>
      <label class="ce-toolbar__color" title="字体颜色">
        A
        <span :style="{ backgroundColor: style?.color || '#000000' }" />
        <input type="color" @input="evt => onColorChange(evt, 'color')" />
      </label>
      <label class="ce-toolbar__color" title="高亮">
        H
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
        {{ item.label[0] }}
      </button>

      <div class="ce-toolbar__dropdown">
        <button type="button" @click="toggleDropdown('list')">列表</button>
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

    <span class="ce-toolbar__divider" />

    <div class="ce-toolbar__group">
      <button type="button" @click="insertTextControl">插入占位符</button>
      <div class="ce-toolbar__dropdown">
        <button type="button" @click="toggleDropdown('table')">表格</button>
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
      <button type="button" @click="run(c => c.executeInsertTable(3, 3))">
        快速表格
      </button>
    </div>

    <span class="ce-toolbar__divider" />

    <div class="ce-toolbar__group">
      <button type="button" @click="run(c => c.executePageScaleMinus())">
        缩小
      </button>
      <span class="ce-toolbar__text">{{ scaleText }}</span>
      <button type="button" @click="run(c => c.executePageScaleAdd())">
        放大
      </button>
      <button type="button" @click="run(c => c.executePageScaleRecovery())">
        复原
      </button>
    </div>

    <span class="ce-toolbar__divider" />

    <div class="ce-toolbar__group">
      <button type="button" title="打印预览（调试）" @click="run(c => c.executePrintPreview())">
        打印预览
      </button>
      <button type="button" title="导出 PDF 文件" @click="run(c => c.executePrintPdf(true))">
        打印文件
      </button>
    </div>
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

.ce-toolbar__color {
  position: relative;
  display: flex;
  flex-direction: column;
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

.ce-toolbar__color span {
  width: 14px;
  height: 3px;
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

.ce-toolbar__options {
  position: absolute;
  top: 28px;
  left: 0;
  z-index: 10;
  min-width: 96px;
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
