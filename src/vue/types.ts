import type Editor from '../editor'
import type {
  IEditorResult,
  IElement,
  EditorZone,
  PageMode
} from '../editor'
import type {
  IRangeStyle,
  IPositionContextChangePayload
} from '../editor/interface/Listener'
import type {
  IControlChangeResult,
  IControlContentChangeResult
} from '../editor/interface/Control'
import type { IRange } from '../editor/interface/Range'
import type { ISpellcheckClick } from '../editor/interface/Spellcheck'

/** 事件总线事件名 */
export type EditorEventName =
  | 'rangeStyleChange'
  | 'visiblePageNoListChange'
  | 'intersectionPageNoChange'
  | 'pageSizeChange'
  | 'pageScaleChange'
  | 'saved'
  | 'contentChange'
  | 'controlChange'
  | 'controlContentChange'
  | 'pageModeChange'
  | 'zoneChange'
  | 'mousemove'
  | 'mouseleave'
  | 'mouseenter'
  | 'mousedown'
  | 'mouseup'
  | 'click'
  | 'input'
  | 'positionContextChange'
  | 'imageSizeChange'
  | 'imageMousedown'
  | 'imageDblclick'
  | 'labelMousedown'
  | 'rangeChange'
  | 'renderChange'
  | 'spellcheckClick'

/** 运行时需要桥接的事件名列表 */
export const EDITOR_EVENTS: EditorEventName[] = [
  'rangeStyleChange',
  'visiblePageNoListChange',
  'intersectionPageNoChange',
  'pageSizeChange',
  'pageScaleChange',
  'saved',
  'contentChange',
  'controlChange',
  'controlContentChange',
  'pageModeChange',
  'zoneChange',
  'mousemove',
  'mouseleave',
  'mouseenter',
  'mousedown',
  'mouseup',
  'click',
  'input',
  'positionContextChange',
  'imageSizeChange',
  'imageMousedown',
  'imageDblclick',
  'labelMousedown',
  'rangeChange',
  'renderChange',
  'spellcheckClick'
]

/**
 * 组件事件：编辑器事件总线的逐一映射 + 组件生命周期事件
 * 说明：此处需显式声明，@vue/compiler-sfc 无法解析由索引类型推导的键集合
 */
export interface EditorEmits {
  ready: [editor: Editor]
  destroyed: []
  rangeStyleChange: [payload: IRangeStyle]
  visiblePageNoListChange: [payload: number[]]
  intersectionPageNoChange: [payload: number]
  pageSizeChange: [payload: number]
  pageScaleChange: [payload: number]
  saved: [payload: IEditorResult]
  contentChange: []
  controlChange: [payload: IControlChangeResult]
  controlContentChange: [payload: IControlContentChangeResult]
  pageModeChange: [payload: PageMode]
  zoneChange: [payload: EditorZone]
  mousemove: [payload: MouseEvent]
  mouseleave: [payload: MouseEvent]
  mouseenter: [payload: MouseEvent]
  mousedown: [payload: MouseEvent]
  mouseup: [payload: MouseEvent]
  click: [payload: MouseEvent]
  input: [payload: Event]
  positionContextChange: [payload: IPositionContextChangePayload]
  imageSizeChange: [payload: { element: IElement }]
  imageMousedown: [payload: { evt: MouseEvent; element: IElement }]
  imageDblclick: [payload: { evt: MouseEvent; element: IElement }]
  labelMousedown: [payload: { evt: MouseEvent; element: IElement }]
  rangeChange: [payload: IRange]
  renderChange: []
  spellcheckClick: [payload: ISpellcheckClick]
}

/** 分页信息（由事件总线同步） */
export interface PageInfo {
  pageNo: number
  pageCount: number
  visiblePageNoList: number[]
  scale: number
}
