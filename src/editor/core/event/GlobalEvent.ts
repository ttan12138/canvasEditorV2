import { EDITOR_COMPONENT } from '../../dataset/constant/Editor'
import { IEditorOption } from '../../interface/Editor'
import { findParent, findScrollContainer } from '../../utils'
import { Cursor } from '../cursor/Cursor'
import { Control } from '../draw/control/Control'
import { Draw } from '../draw/Draw'
import { HyperlinkParticle } from '../draw/particle/HyperlinkParticle'
import { HintParticle } from '../draw/particle/HintParticle'
import { DateParticle } from '../draw/particle/date/DateParticle'
import { Previewer } from '../draw/particle/previewer/Previewer'
import { TableTool } from '../draw/particle/table/TableTool'
import { RangeManager } from '../range/RangeManager'
import { CanvasEvent } from './CanvasEvent'
import { ImageParticle } from '../draw/particle/ImageParticle'
import { INTERNAL_SHORTCUT_KEY } from '../../dataset/constant/Shortcut'
import { Magnifier } from '../draw/interactive/Magnifier'

export class GlobalEvent {
  private draw: Draw
  private options: Required<IEditorOption>
  private cursor: Cursor | null
  private canvasEvent: CanvasEvent
  private range: RangeManager
  private previewer: Previewer
  private tableTool: TableTool
  private hyperlinkParticle: HyperlinkParticle
  private hintParticle: HintParticle
  private control: Control
  private magnifier: Magnifier
  private dateParticle: DateParticle
  private imageParticle: ImageParticle
  private dprMediaQueryList: MediaQueryList
  // 缩放请求合并：连续滚轮手势合并到每帧一次重绘，避免多次全量重绘排队造成卡顿
  private pendingScale: number | null
  private pendingAnchorY: number | null
  private scaleRafId: number | null

  constructor(draw: Draw, canvasEvent: CanvasEvent) {
    this.draw = draw
    this.options = draw.getOptions()
    this.canvasEvent = canvasEvent
    this.cursor = null
    this.range = draw.getRange()
    this.previewer = draw.getPreviewer()
    this.tableTool = draw.getTableTool()
    this.hyperlinkParticle = draw.getHyperlinkParticle()
    this.hintParticle = draw.getHintParticle()
    this.dateParticle = draw.getDateParticle()
    this.imageParticle = draw.getImageParticle()
    this.control = draw.getControl()
    this.magnifier = draw.getMagnifier()
    this.dprMediaQueryList = window.matchMedia(
      `(resolution: ${window.devicePixelRatio}dppx)`
    )
    this.pendingScale = null
    this.pendingAnchorY = null
    this.scaleRafId = null
  }

  public register() {
    this.cursor = this.draw.getCursor()
    this.addEvent()
  }

  private addEvent() {
    window.addEventListener('blur', this.clearSideEffect)
    document.addEventListener('mousedown', this.clearSideEffect)
    document.addEventListener('mouseup', this.setCanvasEventAbility)
    document.addEventListener('wheel', this.setPageScale, { passive: false })
    document.addEventListener('visibilitychange', this._handleVisibilityChange)
    this.dprMediaQueryList.addEventListener('change', this._handleDprChange)
  }

  public removeEvent() {
    window.removeEventListener('blur', this.clearSideEffect)
    document.removeEventListener('mousedown', this.clearSideEffect)
    document.removeEventListener('mouseup', this.setCanvasEventAbility)
    document.removeEventListener('wheel', this.setPageScale)
    document.removeEventListener(
      'visibilitychange',
      this._handleVisibilityChange
    )
    this.dprMediaQueryList.removeEventListener('change', this._handleDprChange)
    if (this.scaleRafId !== null) {
      cancelAnimationFrame(this.scaleRafId)
      this.scaleRafId = null
      this.pendingScale = null
      this.pendingAnchorY = null
    }
  }

  public clearSideEffect = (evt: Event) => {
    if (!this.cursor) return
    // 编辑器内部dom
    const target = <Element>(evt?.composedPath()[0] || evt.target)
    const pageList = this.draw.getPageList()
    const innerEditorDom = findParent(
      target,
      (node: HTMLCanvasElement) => pageList.includes(node),
      true
    )
    if (innerEditorDom) return
    // 编辑器外部组件dom
    const outerEditorDom = findParent(
      target,
      (node: Node & Element) =>
        !!node && node.nodeType === 1 && !!node.getAttribute(EDITOR_COMPONENT),
      true
    )
    if (outerEditorDom) {
      this.watchCursorActive()
      return
    }
    this.cursor.recoveryCursor()
    this.range.recoveryRangeStyle()
    this.previewer.clearResizer()
    this.tableTool.dispose()
    this.hyperlinkParticle.clearHyperlinkPopup()
    this.hintParticle.clearHintPopup()
    this.control.destroyControl()
    this.dateParticle.clearDatePicker()
    this.imageParticle.destroyFloatImage()
    this.magnifier.hide()
  }

  public setCanvasEventAbility = () => {
    this.canvasEvent.setIsAllowDrag(false)
    this.canvasEvent.setIsAllowSelection(false)
  }

  public watchCursorActive() {
    // 选区闭合&实际光标移出光标代理
    if (!this.range.getIsCollapsed()) return
    setTimeout(() => {
      // 将模拟光标变成失活显示状态
      if (!this.cursor?.getAgentIsActive()) {
        this.cursor?.drawCursor({
          isFocus: false,
          isBlink: false
        })
      }
    })
  }

  public setPageScale = (evt: WheelEvent) => {
    // 设置禁用快捷键
    if (
      this.options.shortcutDisableKeys.includes(
        INTERNAL_SHORTCUT_KEY.PAGE_SCALE
      )
    ) {
      return
    }
    // 仅在按下Ctrl键时生效
    if (!evt.ctrlKey) return
    evt.preventDefault()
    // 基于尚未提交的缩放值累积，将一个连续滚轮手势合并到每帧一次重绘
    const baseScale = this.pendingScale ?? this.options.scale
    if (evt.deltaY < 0) {
      // 放大
      const nextScale = baseScale * 10 + 1
      if (nextScale <= 30) {
        this.pendingScale = nextScale / 10
        this.pendingAnchorY = this._getScaleAnchorY(evt)
      }
    } else {
      // 缩小
      const nextScale = baseScale * 10 - 1
      if (nextScale >= 5) {
        this.pendingScale = nextScale / 10
        this.pendingAnchorY = this._getScaleAnchorY(evt)
      }
    }
    // 仅当有待提交的缩放请求且尚未安排帧时，调度一次重绘
    if (this.pendingScale !== null && this.scaleRafId === null) {
      this.scaleRafId = requestAnimationFrame(this._applyPendingScale)
    }
  }

  // 在下一帧统一提交缩放（以最后一次鼠标位置为锚点），避免连续缩放频繁全量重绘
  private _applyPendingScale = () => {
    this.scaleRafId = null
    const scale = this.pendingScale
    const anchorY = this.pendingAnchorY
    this.pendingScale = null
    this.pendingAnchorY = null
    if (scale !== null) {
      this.draw.setPageScale(scale, anchorY ?? undefined)
    }
  }

  // 计算鼠标指针相对滚动内容顶部的像素位置，作为缩放锚点
  private _getScaleAnchorY(evt: WheelEvent): number {
    const scrollContainer = findScrollContainer(this.draw.getContainer())
    const isDocumentScroll = scrollContainer === document.documentElement
    const rect = isDocumentScroll
      ? { top: 0, left: 0 }
      : (scrollContainer as HTMLElement).getBoundingClientRect()
    const scrollTop = isDocumentScroll
      ? window.scrollY
      : (scrollContainer as HTMLElement).scrollTop
    return evt.clientY - rect.top + scrollTop
  }

  private _handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      // 页面可见时重新渲染激活页面
      const range = this.range.getRange()
      const isSetCursor =
        !!~range.startIndex &&
        !!~range.endIndex &&
        range.startIndex === range.endIndex
      this.range.replaceRange(range)
      this.draw.render({
        isSetCursor,
        isCompute: false,
        isSubmitHistory: false,
        curIndex: range.startIndex
      })
    }
  }

  private _handleDprChange = () => {
    this.draw.setPageDevicePixel()
  }
}
