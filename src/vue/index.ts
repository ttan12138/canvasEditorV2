import type { App, Plugin } from 'vue'
import CanvasEditor from './CanvasEditor.vue'
import EditorToolbar from './EditorToolbar.vue'
import CellConfigDialog from './CellConfigDialog.vue'
import OptionsConfigDialog from './OptionsConfigDialog.vue'

export { CanvasEditor, EditorToolbar, CellConfigDialog, OptionsConfigDialog }

export { EDITOR_CONTEXT_KEY, useEditorContext } from './context'
export type { EditorContext } from './context'

export { useCanvasEditor } from './useCanvasEditor'
export type { UseCanvasEditorOption } from './useCanvasEditor'

export { EDITOR_EVENTS } from './types'
export type { EditorEmits, EditorEventName, PageInfo } from './types'

export {
  getPlaceholderTextControls,
  setControlValueByPlaceholder
} from './control'
export type {
  IPlaceholderTextControl,
  IReplaceValueDetail,
  IReplaceControlPayload,
  ISetChildTablePayload,
  ISetCellConfigPayload,
  ITableCellInfo
} from './control'

export const CanvasEditorPlugin: Plugin = {
  install(app: App) {
    app.component('CanvasEditor', CanvasEditor)
    app.component('EditorToolbar', EditorToolbar)
    app.component('CellConfigDialog', CellConfigDialog)
    app.component('OptionsConfigDialog', OptionsConfigDialog)
  }
}
