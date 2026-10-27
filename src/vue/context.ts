import { inject, type InjectionKey, type Ref } from 'vue'
import type Editor from '../editor'
import type { Command } from '../editor'
import type { IRangeStyle } from '../editor/interface/Listener'
import type { PageInfo } from './types'

/** 单元格配置对话框对外暴露的能力（由 <CellConfigDialog> 挂载时注册到 context） */
export interface ICellConfigApi {
  /** 按单元格 name 打开配置对话框 */
  openByName: (name: string) => void
}

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
  /** 单元格配置对话框 API（<CellConfigDialog> 挂载后可用） */
  cellConfig: Ref<ICellConfigApi | null>
  /** 护眼模式：设置文档背景色与文档外空白区配色 */
  setEyeCareMode: (enabled: boolean) => void
  /** 当前是否处于护眼模式 */
  eyeCare: Ref<boolean>
  /** 直接设置缩放比例（1 = 100%，如 0.8 / 1.5 / 2） */
  setScale: (ratio: number) => void
  /** 获取当前缩放比例（1 = 100%） */
  getScale: () => number
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
