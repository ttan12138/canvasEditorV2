import { inject, type InjectionKey, type Ref } from 'vue'
import type Editor from '../editor'
import type { Command } from '../editor'
import type { IRangeStyle } from '../editor/interface/Listener'
import type { PageInfo } from './types'

export interface EditorContext {
  /** 编辑器实例（未初始化时为 null） */
  getInstance: () => Editor | null
  /** 命令对象（未初始化时为 null） */
  getCommand: () => Command | null
  /** 当前选区样式，用于工具栏状态回显 */
  rangeStyle: Ref<IRangeStyle | null>
  /** 分页信息 */
  pageInfo: Ref<PageInfo>
  /** 是否初始化完成 */
  isReady: Ref<boolean>
  /** 注册初始化完成回调（已就绪时立即执行） */
  onReady: (callback: (editor: Editor) => void) => void
}

export const EDITOR_CONTEXT_KEY: InjectionKey<EditorContext> =
  Symbol('canvas-editor-context')

export function useEditorContext(): EditorContext {
  const context = inject(EDITOR_CONTEXT_KEY, null)
  if (!context) {
    throw new Error(
      '[canvas-editor-vue] useEditorContext 需在 <CanvasEditor> 内部使用'
    )
  }
  return context
}
