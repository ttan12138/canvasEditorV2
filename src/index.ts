// 统一库入口：聚合核心编辑器（./editor）与 Vue 组件层（./vue）。
// 这样 `vite build --mode lib` 产出的单个 canvas-editor.js 同时包含
// Editor（核心）与 CanvasEditor / EditorToolbar / CellConfigDialog /
// OptionsConfigDialog（Vue 组件），可直接在宿主项目 import 使用。
export * from './editor'

// Vue 组件层（显式 re-export，避免 export * 可能带来的命名歧义）
export {
  CanvasEditor,
  EditorToolbar,
  CellConfigDialog,
  OptionsConfigDialog,
  CanvasEditorPlugin,
  useEditorContext,
  EDITOR_CONTEXT_KEY,
  useCanvasEditor,
  getPlaceholderTextControls,
  setControlValueByPlaceholder,
  EDITOR_EVENTS
} from './vue'
export type {
  EditorContext,
  UseCanvasEditorOption,
  EditorEmits,
  EditorEventName,
  PageInfo
} from './vue'

// 保留核心 Editor 的默认导出（兼容 import Editor from '...'）
export { default } from './editor'
