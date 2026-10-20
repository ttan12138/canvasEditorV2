<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import type {
  EditorMode,
  IEditorData,
  IEditorOption,
  IElement,
  IRegisterContextMenu
} from '../editor'
import type { IPositionContext } from '../editor/interface/Position'
import { EDITOR_CONTEXT_KEY, type EditorContext } from './context'
import {
  getPlaceholderTextControls,
  setControlValueByPlaceholder,
  type IReplaceControlPayload,
  type ISetChildTablePayload,
  type ISetCellConfigPayload,
  type ITableCellInfo
} from './control'
import type { EditorEmits } from './types'
import { useCanvasEditor } from './useCanvasEditor'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    /** 文档数据 */
    data: IEditorData | IElement[]
    /** 编辑器配置 */
    options?: IEditorOption
    /** 外部 data 变化时自动回写编辑器（默认关闭，避免双向回环） */
    syncData?: boolean
    /** 初始化完成后自动聚焦 */
    autoFocus?: boolean
  }>(),
  {
    options: () => ({}),
    syncData: false,
    autoFocus: false
  }
)

const emit = defineEmits<EditorEmits>()

const containerRef = ref<HTMLDivElement | null>(null)

const { editor, rangeStyle, pageInfo, isReady, onReady, setValue, destroy } =
  useCanvasEditor({
    container: containerRef,
    data: () => props.data,
    options: () => props.options,
    syncData: () => props.syncData,
    emit: emit as unknown as (event: string, ...args: unknown[]) => void
  })

if (props.autoFocus) {
  onReady(instance => instance.command.executeFocus())
}

const command = computed(() => editor.value?.command ?? null)

const context: EditorContext = {
  getInstance: () => editor.value,
  getCommand: () => command.value,
  rangeStyle,
  pageInfo,
  isReady,
  onReady
}
provide(EDITOR_CONTEXT_KEY, context)

defineExpose({
  getInstance: () => editor.value,
  getCommand: () => command.value,
  getValue: () => editor.value?.command.getValue() ?? null,
  setValue: (payload: Partial<IEditorData>) => setValue(payload),
  focus: () => editor.value?.command.executeFocus(),
  /** 切换编辑器模式：编辑 / 表单 / 只读 */
  setMode: (mode: EditorMode) => editor.value?.command.executeMode(mode),
  /** 需求3：获取所有带 placeholder 的文本控件值 */
  getPlaceholderTextControls: () =>
    editor.value ? getPlaceholderTextControls(editor.value.command) : [],
  /** 需求4/5：按 placeholder 查找并替换控件值（支持文本/图片，单元格自适应） */
  setControlValueByPlaceholder: (payload: IReplaceControlPayload) =>
    editor.value
      ? setControlValueByPlaceholder(editor.value.command, payload)
      : Promise.resolve(),
  /** 需求 8.5：按 name 更新子表数据 */
  setChildTable: (payload: ISetChildTablePayload) =>
    editor.value?.command.setChildTable(payload),
  /** 需求 8.4：保存单元格联动/子表配置 */
  setCellConfig: (payload: ISetCellConfigPayload) =>
    editor.value?.command.setCellConfig(payload),
  /** 需求 8.4：注册右键菜单 */
  registerContextMenuList: (payload: IRegisterContextMenu[]) =>
    editor.value?.register.contextMenuList(payload),
  /** 需求 8.4：获取当前光标所在单元格上下文 */
  getPositionContext: (): IPositionContext | null =>
    editor.value?.command.getPositionContext() ?? null,
  /** 需求 8.4：列出所有单元格及其联动/子表配置 */
  getTableCells: (): ITableCellInfo[] =>
    editor.value?.command.getTableCells() ?? [],
  /** 需求 8.4：联动「拾取模式」开关 */
  setLinkPicking: (payload: boolean) =>
    editor.value?.command.setLinkPicking(payload),
  /** 需求 8.4：设置当前联动源单元格（拾取模式橙色高亮） */
  setLinkSource: (tdId: string | null) =>
    editor.value?.command.setLinkSource(tdId),
  destroy
})
</script>

<template>
  <div class="canvas-editor">
    <slot name="toolbar" :command="command" :range-style="rangeStyle" :page-info="pageInfo" />
    <div ref="containerRef" class="canvas-editor__container" v-bind="$attrs" />
    <slot name="footer" :page-info="pageInfo" />
    <!-- 默认插槽：承载对话框/浮层类子组件（如 CellConfigDialog / OptionsConfigDialog），
         它们通过 useEditorContext() 注入本组件提供的编辑器实例 -->
    <slot />
  </div>
</template>

<style scoped>
.canvas-editor {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  background-color: #f2f4f7;
}

.canvas-editor__container {
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: auto;
}
</style>
