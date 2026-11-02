<script setup lang="ts">
import { computed, provide, ref, useSlots, watch } from 'vue'
import type {
  IEditorData,
  IEditorOption,
  IElement,
  IRegisterContextMenu
} from '../editor'
import { EditorMode } from '../editor'
import type { IPositionContext } from '../editor/interface/Position'
import { EDITOR_CONTEXT_KEY, type EditorContext, type ICellConfigApi } from './context'
import EditorDebug from './EditorDebug.vue'
import EditorToolbar from './EditorToolbar.vue'
import {
  getPlaceholderTextControls,
  getPlaceholderTextControlMap,
  setControlValueByPlaceholder,
  setControlValuesByPlaceholder,
  setControlContentByPlaceholder,
  clearControlValueByPlaceholder,
  clearControlValuesByPlaceholder,
  setControlEditableByPlaceholder,
  setAllControlEditable,
  setControlsEditableByPlaceholders,
  setImageControlConfigForAll,
  setImageControlConfigByPlaceholder,
  type IReplaceControlPayload,
  type ISetControlContentByPlaceholderPayload,
  type ISetChildTablePayload,
  type ISetCellConfigPayload,
  type ITableCellInfo,
  type IImageControlConfig
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
    /** 是否渲染内置调试面板（打印实例/打印Value/加载Value），默认关闭 */
    debug?: boolean
    /** 编辑器模式：edit / form / readonly 等（见 EditorMode），未传则由插槽控制 */
    mode?: EditorMode
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

// mode prop 变化时同步引擎模式（编辑器就绪后的首次同步也在此触发）
watch(
  [() => props.mode, isReady],
  ([m, ready]) => {
    if (m && ready) editor.value?.command.executeMode(m)
  }
)

const slots = useSlots()
// 工具栏渲染开关：未传 mode 时保持旧行为（有插槽即渲染）；
// 传入 mode 时 edit 显示（插槽或内置完整版）、form 显示内置精简版、readonly 不显示
const showToolbar = computed(() => {
  if (!props.mode) return !!slots.toolbar
  return props.mode !== EditorMode.READONLY
})

if (props.autoFocus) {
  onReady(instance => instance.command.executeFocus())
}

const command = computed(() => editor.value?.command ?? null)

// 护眼模式：文档背景使用 #cfe8cc；文档以外的空白区域使用 #d7e7da（由根节点 .eye-care 控制）
const EYE_CARE_DOC_BG = '#cfe8cc'
const NORMAL_DOC_BG = '#FFFFFF'
const eyeCare = ref(false)
const setEyeCareMode = (enabled: boolean) => {
  eyeCare.value = enabled
  command.value?.executeUpdateOptions({
    background: { color: enabled ? EYE_CARE_DOC_BG : NORMAL_DOC_BG }
  })
}

// 需求18：直接设置/获取缩放比例（1 = 100%，0.8 = 80%，1.5 = 150% …）
const setScale = (ratio: number) => {
  command.value?.executePageScale(ratio)
}
const getScale = (): number => command.value?.getOptions().scale ?? 1

// 单元格配置对话框 API（<CellConfigDialog> 挂载时注册），供 <EditorDebug> 跨 slot 调用
const cellConfigApi = ref<ICellConfigApi | null>(null)

const context: EditorContext = {
  getInstance: () => editor.value,
  getCommand: () => command.value,
  rangeStyle,
  pageInfo,
  isReady,
  onReady,
  cellConfig: cellConfigApi,
  setEyeCareMode,
  eyeCare,
  setScale,
  getScale
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
  /** 需求3（补充）：以对象形式返回带 placeholder 的文本控件值 { [占位符]: 内容 } */
  getPlaceholderTextControlMap: () =>
    editor.value ? getPlaceholderTextControlMap(editor.value.command) : {},
  /** 需求4/5：按 placeholder 查找并替换控件值（支持文本/图片，单元格自适应） */
  setControlValueByPlaceholder: (payload: IReplaceControlPayload) =>
    editor.value
      ? setControlValueByPlaceholder(editor.value.command, payload)
      : Promise.resolve(),
  /** 需求4/5（批量）：按多个 placeholder 一次性批量替换控件值 */
  setControlValuesByPlaceholder: (payloads: IReplaceControlPayload[]) =>
    editor.value
      ? setControlValuesByPlaceholder(editor.value.command, payloads)
      : Promise.resolve(),
  /** 需求19：基于 placeholder 设置带临时批注样式的内容（mode: 0=直接替换, 1=末尾追加, 2=光标处追加,光标不在占位符内时回退到1） */
  setControlContentByPlaceholder: (
    payload: ISetControlContentByPlaceholderPayload
  ) =>
    editor.value
      ? setControlContentByPlaceholder(editor.value.command, payload)
      : undefined,
  /** 需求19（补充）：按 placeholder 清空单个控件值，返回命中控件数量 */
  clearControlValueByPlaceholder: (name: string) =>
    editor.value
      ? clearControlValueByPlaceholder(editor.value.command, name)
      : 0,
  /** 需求19（补充）：按 placeholders 批量清空控件值，返回命中控件总数量 */
  clearControlValuesByPlaceholder: (names: string[]) =>
    editor.value
      ? clearControlValuesByPlaceholder(editor.value.command, names)
      : 0,
  /** 需求11：表单模式按占位符（单个或数组）设置控件可编辑/不可编辑，返回命中数量 */
  setControlEditableByPlaceholder: (name: string | string[], editable: boolean) =>
    editor.value
      ? setControlEditableByPlaceholder(editor.value.command, name, editable)
      : 0,
  /** 需求11（补充）：表单模式设置全部占位符控件可编辑/不可编辑，返回命中数量 */
  setAllControlEditable: (editable: boolean) =>
    editor.value ? setAllControlEditable(editor.value.command, editable) : 0,
  /** 需求11（补充）：表单模式按多个占位符设置控件可编辑/不可编辑，返回命中数量 */
  setControlsEditableByPlaceholders: (
    names: string[],
    editable: boolean
  ) =>
    editor.value
      ? setControlsEditableByPlaceholders(
          editor.value.command,
          names,
          editable
        )
      : 0,
  /** 需求12.1：统一设置所有图片控件的删除/拖拽能力，返回命中图片控件数量 */
  setImageControlConfigForAll: (config: IImageControlConfig) =>
    editor.value
      ? setImageControlConfigForAll(editor.value.command, config)
      : 0,
  /** 需求12.2：按占位符（单个或数组）设置图片控件的删除/拖拽能力，返回命中数量 */
  setImageControlConfigByPlaceholder: (
    name: string | string[],
    config: IImageControlConfig
  ) =>
    editor.value
      ? setImageControlConfigByPlaceholder(
          editor.value.command,
          name,
          config
        )
      : 0,
  /** 护眼模式：enabled=true 时文档背景 #cfe8cc、文档外空白区 #d7e7da */
  setEyeCareMode,
  /** 需求18：直接设置缩放比例（如 0.8 / 1.5 / 2，单位与 100% 对应 1） */
  setScale,
  /** 需求18：获取当前缩放比例（1 = 100%） */
  getScale,
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
  <div class="canvas-editor" :class="{ 'eye-care': eyeCare }">
    <slot v-if="showToolbar && (!mode || mode === EditorMode.EDIT)" name="toolbar" :command="command"
      :range-style="rangeStyle" :page-info="pageInfo" />
    <EditorToolbar v-if="mode === EditorMode.EDIT && !$slots.toolbar" />
    <EditorToolbar v-if="mode === EditorMode.FORM" simplified />
    <div class="canvas-editor__body">
      <div ref="containerRef" class="canvas-editor__container" v-bind="$attrs" />
      <!-- 右栏：默认插槽（对话框/浮层类子组件）与内置调试面板，均通过 useEditorContext 注入编辑器实例 -->
      <div class="canvas-editor__aside" v-if="mode !== EditorMode.READONLY && ($slots.default || debug)">
        <slot />
        <EditorDebug v-if="debug" />
      </div>
    </div>
    <slot name="footer" :page-info="pageInfo" />
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

/* 护眼模式：文档以外的空白区域使用 #d7e7da（文档本身底色由 background.color 控制） */
.canvas-editor.eye-care,
.canvas-editor.eye-care .canvas-editor__body,
.canvas-editor.eye-care .canvas-editor__container {
  background-color: #d7e7da;
}

.canvas-editor__body {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: row;
}

.canvas-editor__container {
  position: relative;
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;
}

.canvas-editor__aside {
  flex: none;
  display: flex;
  min-height: 0;
}
</style>
