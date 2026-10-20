import {
  IContentChange,
  IControlChange,
  IControlContentChange,
  IImageDblclick,
  IImageMousedown,
  IImageSizeChange,
  IInputEventChange,
  IIntersectionPageNoChange,
  ILabelMousedown,
  IMouseEventChange,
  IPageModeChange,
  IPageScaleChange,
  IPageSizeChange,
  IPositionContextChange,
  IRangeChange,
  IRenderChange,
  IRangeStyleChange,
  ISaved,
  IVisiblePageNoListChange,
  IZoneChange
} from './Listener'
import type { ISpellcheckClick } from './Spellcheck'

export interface EventBusMap {
  rangeStyleChange: IRangeStyleChange
  visiblePageNoListChange: IVisiblePageNoListChange
  intersectionPageNoChange: IIntersectionPageNoChange
  pageSizeChange: IPageSizeChange
  pageScaleChange: IPageScaleChange
  saved: ISaved
  contentChange: IContentChange
  controlChange: IControlChange
  controlContentChange: IControlContentChange
  pageModeChange: IPageModeChange
  zoneChange: IZoneChange
  mousemove: IMouseEventChange
  mouseleave: IMouseEventChange
  mouseenter: IMouseEventChange
  mousedown: IMouseEventChange
  mouseup: IMouseEventChange
  click: IMouseEventChange
  input: IInputEventChange
  positionContextChange: IPositionContextChange
  imageSizeChange: IImageSizeChange
  imageMousedown: IImageMousedown
  imageDblclick: IImageDblclick
  labelMousedown: ILabelMousedown
  rangeChange: IRangeChange
  renderChange: IRenderChange
  spellcheckClick: ISpellcheckClick
  /** 需求 8.4.2：编辑模式下点击「子表占位符」单元格时触发，由宿主打开配置对话框 */
  cellPlaceholderClick: (payload: { tdId: string }) => void
  /** 需求 8.4：联动「拾取模式」下点击表格单元格时触发，由宿主用于设置联动关系 */
  cellPick: (payload: { tdId: string }) => void
}
