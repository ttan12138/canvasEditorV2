import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  shallowRef,
  watch,
  type Ref,
  type ShallowRef
} from 'vue'
import Editor from '../editor'
import docxPlugin from '../plugins/docx/docx.js'
import type { IEditorData, IEditorOption, IElement } from '../editor'
import type { IUpdateOption } from '../editor/interface/Editor'
import type { IRangeStyle } from '../editor/interface/Listener'
import { EDITOR_EVENTS, type PageInfo } from './types'

/** 事件总线的弱类型视图：便于批量注册/注销 */
interface EventBusLike {
  on: (event: string, callback: (payload: unknown) => void) => void
  off: (event: string, callback: (payload: unknown) => void) => void
}

export interface UseCanvasEditorOption {
  /** 编辑器挂载容器 */
  container: Ref<HTMLDivElement | null>
  /** 文档数据 */
  data: () => IEditorData | IElement[]
  /** 编辑器配置 */
  options: () => IEditorOption
  /** 外部 data 变化时是否自动回写编辑器（默认关闭，避免双向回环） */
  syncData: () => boolean
  /** 事件转发回调 */
  emit: (event: string, ...args: unknown[]) => void
}

export function useCanvasEditor(option: UseCanvasEditorOption) {
  const { container, data, options, syncData, emit } = option

  const editor: ShallowRef<Editor | null> = shallowRef(null)
  const rangeStyle = ref<IRangeStyle | null>(null)
  const pageInfo = ref<PageInfo>({
    pageNo: 1,
    pageCount: 1,
    visiblePageNoList: [1],
    scale: 1
  })
  const isReady = ref(false)

  const readyCallbacks: Array<(editor: Editor) => void> = []
  let handlers: Array<[string, (payload: unknown) => void]> = []
  // 内部写入标记：避免 setValue -> contentChange -> 外部更新 -> 再次 setValue
  let isInternalUpdate = false

  const getEventBus = (instance: Editor) =>
    instance.eventBus as unknown as EventBusLike

  const onReady = (callback: (editor: Editor) => void) => {
    if (editor.value) {
      callback(editor.value)
      return
    }
    readyCallbacks.push(callback)
  }

  const syncPageInfo = (name: string, payload: unknown) => {
    switch (name) {
      case 'intersectionPageNoChange':
        pageInfo.value = { ...pageInfo.value, pageNo: payload as number }
        break
      case 'pageSizeChange':
        pageInfo.value = { ...pageInfo.value, pageCount: payload as number }
        break
      case 'visiblePageNoListChange':
        pageInfo.value = {
          ...pageInfo.value,
          visiblePageNoList: payload as number[]
        }
        break
      case 'pageScaleChange':
        pageInfo.value = { ...pageInfo.value, scale: payload as number }
        break
      default:
        break
    }
  }

  const setValue = (payload: Partial<IEditorData>) => {
    const instance = editor.value
    if (!instance) return
    isInternalUpdate = true
    instance.command.executeSetValue(payload)
    nextTick(() => {
      isInternalUpdate = false
    })
  }

  const updateOptions = (payload: IEditorOption) => {
    editor.value?.command.executeUpdateOptions(<IUpdateOption>payload)
  }

  // 需求 21：按占位符滚动聚焦到其所在行。
  // 不传 placeholder 时，从编辑器 options.focusPlaceholder 读取配置（并受 modes 模式门控）；
  // 传入 placeholder 时直接使用（用于工具栏手动触发，跳过模式门控）。
  // isFocus 默认 true（滚动并聚焦）；传 false 时仅滚动不聚焦
  const executeScrollToPlaceholder = (
    placeholder?: string,
    isFocus = true
  ): boolean => {
    return (
      editor.value?.command.executeScrollToPlaceholder(placeholder, isFocus) ??
      false
    )
  }

  // 需求：清空可撤销/重做堆栈
  const executeClearHistory = (): void => {
    editor.value?.command.executeClearHistory()
  }

  const destroy = () => {
    const instance = editor.value
    if (!instance) return
    const eventBus = getEventBus(instance)
    handlers.forEach(([name, handler]) => {
      eventBus.off(name, handler)
    })
    handlers = []
    instance.destroy()
    editor.value = null
    isReady.value = false
    emit('destroyed')
  }

  onMounted(() => {
    if (!container.value) return
    const instance = new Editor(container.value, data(), options())
    // 注册 docx 导入/导出插件，挂载 command.executeImportDocx / executeExportDocx
    instance.use(docxPlugin)
    editor.value = instance
    const eventBus = getEventBus(instance)
    EDITOR_EVENTS.forEach(name => {
      const handler = (payload: unknown) => {
        if (name === 'rangeStyleChange') {
          rangeStyle.value = payload as IRangeStyle
        }
        syncPageInfo(name, payload)
        emit(name, payload)
      }
      eventBus.on(name, handler)
      handlers.push([name, handler])
    })
    isReady.value = true
    emit('ready', instance)
    readyCallbacks.splice(0, readyCallbacks.length).forEach(cb => cb(instance))
  })

  onBeforeUnmount(destroy)

  watch(
    () => data(),
    value => {
      if (isInternalUpdate || !syncData()) return
      setValue(Array.isArray(value) ? { main: value } : value)
      // 需求：切换文档数据后重置撤销/重做堆栈，避免跨文档残留历史
      executeClearHistory()
    },
    { deep: true, flush: 'post' }
  )

  watch(
    () => options(),
    value => {
      const instance = editor.value
      if (!instance) return
      // 项目内已设置的背景色/缩放比例优先级最高：外部更新 options 时保留当前值，
      // 避免外部传入的旧配置覆盖护眼模式背景色、用户手动设置的缩放等
      const current = instance.command.getOptions()
      updateOptions({
        ...value,
        background: { ...value.background, color: current.background.color },
        // 仅当外部未显式提供 scale 时才保留当前缩放（如护眼等局部更新）；
        // 显式提供（含模板自带缩放）时采用外部值，避免切模板时缩放被丢弃
        scale: value.scale ?? current.scale
      })
      // 需求：切换编辑器配置（如切模板/换文档）后重置撤销/重做堆栈
      executeClearHistory()
    },
    { deep: true }
  )

  return {
    editor,
    rangeStyle,
    pageInfo,
    isReady,
    onReady,
    setValue,
    updateOptions,
    executeScrollToPlaceholder,
    executeClearHistory,
    destroy
  }
}
