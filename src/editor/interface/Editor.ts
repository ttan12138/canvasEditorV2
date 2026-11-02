import {
  EditorMode,
  PageMode,
  PaperDirection,
  RenderMode,
  WordBreak
} from '../dataset/enum/Editor'
import { IColumnOption } from './Column'
import { IBackgroundOption } from './Background'
import { ICheckboxOption } from './Checkbox'
import { IRadioOption } from './Radio'
import { IControlOption } from './Control'
import { ICursorOption } from './Cursor'
import { IFooter } from './Footer'
import { IGroup } from './Group'
import { IHeader } from './Header'
import { ILabelOption } from './Label'
import { IImgCaptionOption, IListOption } from './Element'
import { ILineBreakOption } from './LineBreak'
import { IMargin } from './Margin'
import { IPageBreak } from './PageBreak'
import { IPageNumber } from './PageNumber'
import { IPlaceholder } from './Placeholder'
import { ITitleOption } from './Title'
import { IWatermark } from './Watermark'
import { IZoneOption } from './Zone'
import { ISeparatorOption } from './Separator'
import { ITableOption } from './table/Table'
import { ILineNumberOption } from './LineNumber'
import { IPageBorderOption } from './PageBorder'
import { IBadgeOption } from './Badge'
import { IElement } from './Element'
import { LocationPosition } from '../dataset/enum/Common'
import { IRange } from './Range'
import { IGraffitiData, IGraffitiOption } from './Graffiti'
import { IWhiteSpaceOption } from './WhiteSpace'
import { IMagnifierOption } from './Magnifier'
import { IAccessibilityOption } from './Accessibility'
import { ITraceOption } from './Trace'
import { IRulerOption } from './Ruler'
import { IHintOption } from './Hint'
import type { ISpellcheckOption } from './Spellcheck'

export interface ILabOption {
  /**
   * 行级增量行计算：编辑时仅从受影响行断点续算，区间外行复用。
   * 复杂结构（表格/控件/浮动图/分栏/minWidth 控件占位等）自动退化全量。
   * 默认：false
   */
  incrementalCompute?: boolean
}

export interface IEditorData {
  header?: IElement[]
  main: IElement[]
  footer?: IElement[]
  graffiti?: IGraffitiData[]
}

export interface IAnnotationStyle {
  /** 追加内容文字颜色；缺省回退到文档默认色 defaultColor */
  color?: string
  /** 追加内容背景色（映射为元素 highlight）；缺省回退到文档背景色 background.color */
  backgroundColor?: string
  /** 追加内容字体；缺省回退到 defaultFont */
  font?: string
  /** 追加内容字号；缺省回退到 defaultSize */
  size?: number
}

/**
 * 需求 21：聚焦占位符配置。
 * 调用 executeScrollToPlaceholder()（无占位符参数）时，将按此配置滚动并聚焦到指定占位符所在行。
 */
export interface IFocusPlaceholderOption {
  /** 需要滚动聚焦的占位符文本；为空则不聚焦 */
  placeholder?: string
  /**
   * 启用的编辑器模式集合；为空数组表示全部模式均启用。
   * 例如 ['form','readonly'] 仅在该类模式下生效。
   */
  modes?: EditorMode[]
  /** 是否滚动并聚焦（默认 true）；false 时仅滚动不聚焦 */
  isFocus?: boolean
}

export interface IEditorOption {
  mode?: EditorMode
  locale?: string
  defaultType?: string
  defaultColor?: string
  defaultFont?: string
  defaultSize?: number
  minSize?: number
  maxSize?: number
  defaultBasicRowMarginHeight?: number
  defaultRowMargin?: number
  defaultTabWidth?: number
  width?: number
  height?: number
  scale?: number
  pageGap?: number
  underlineColor?: string
  strikeoutColor?: string
  rangeColor?: string
  rangeAlpha?: number
  rangeMinWidth?: number
  searchMatchColor?: string
  searchNavigateMatchColor?: string
  searchMatchAlpha?: number
  spellcheck?: ISpellcheckOption
  highlightAlpha?: number
  highlightMarginHeight?: number
  resizerColor?: string
  resizerSize?: number
  marginIndicatorSize?: number
  marginIndicatorColor?: string
  margins?: IMargin
  pageMode?: PageMode
  renderMode?: RenderMode
  defaultHyperlinkColor?: string
  paperDirection?: PaperDirection
  inactiveAlpha?: number
  historyMaxRecordCount?: number
  /**
   * 需求：历史记录仅收录「可编辑占位符」的变化。
   * true 时，只有 editable !== false 的控件内容变化才会进入撤销/重做堆栈，
   * 其余（不可编辑）占位符的改动不会被撤销。默认 false（保持原有全量记录行为）。
   */
  historyRecordEditableOnly?: boolean
  printPixelRatio?: number
  maskMargin?: IMargin
  letterClass?: string[]
  contextMenuDisableKeys?: string[]
  shortcutDisableKeys?: string[]
  scrollContainerSelector?: string
  pageOuterSelectionDisable?: boolean
  wordBreak?: WordBreak
  /** 需求19：setControlContentByPlaceholder 追加内容的默认样式；任一字段缺省时回退到文档默认色/背景色/字体/字号 */
  annotation?: IAnnotationStyle
  /** 需求 21：聚焦占位符配置（executeScrollToPlaceholder 无参时按此触发） */
  focusPlaceholder?: IFocusPlaceholderOption
  // 实验性功能（逐项默认关闭，未来可能调整或移除）
  lab?: ILabOption
  table?: ITableOption
  header?: IHeader
  footer?: IFooter
  pageNumber?: IPageNumber
  watermark?: IWatermark
  control?: IControlOption
  checkbox?: ICheckboxOption
  radio?: IRadioOption
  cursor?: ICursorOption
  title?: ITitleOption
  placeholder?: IPlaceholder
  group?: IGroup
  pageBreak?: IPageBreak
  zone?: IZoneOption
  background?: IBackgroundOption
  lineBreak?: ILineBreakOption
  whiteSpace?: IWhiteSpaceOption
  separator?: ISeparatorOption
  lineNumber?: ILineNumberOption
  pageBorder?: IPageBorderOption
  badge?: IBadgeOption
  modeRule?: IModeRule
  graffiti?: IGraffitiOption
  label?: ILabelOption
  imgCaption?: IImgCaptionOption
  list?: IListOption
  magnifier?: IMagnifierOption
  accessibility?: IAccessibilityOption
  column?: IColumnOption
  trace?: ITraceOption
  ruler?: IRulerOption
  hint?: IHintOption
  /** 需求：正文渲染缩放比例（百分比输入，实际记录比例值，如输入 80 记为 0.8；缺省 1 = 100%） */
  bodyRenderScale?: number
}

export interface IEditorResult {
  version: string
  data: IEditorData
  options: IEditorOption
}

export interface IEditorHTML {
  header: string
  main: string
  footer: string
}

export type IEditorText = IEditorHTML

export type IUpdateOption = Omit<
  IEditorOption,
  | 'mode'
  | 'width'
  | 'height'
  | 'scale'
  | 'pageGap'
  | 'pageMode'
  | 'paperDirection'
  | 'historyMaxRecordCount'
  | 'scrollContainerSelector'
>

export interface ISetValueOption {
  isSetCursor?: boolean
}

export interface IFocusOption {
  rowNo?: number
  range?: IRange
  position?: LocationPosition
  isMoveCursorToVisible?: boolean
}

export interface IPrintModeRule {
  imagePreviewerDisabled?: boolean
  backgroundDisabled?: boolean
  filterEmptyControl?: boolean
  areaHideDisabled?: boolean
}

export interface IReadonlyModeRule {
  imagePreviewerDisabled?: boolean
}

export interface IFormModeRule {
  controlDeletableDisabled?: boolean
}

export interface IModeRule {
  [EditorMode.PRINT]?: IPrintModeRule
  [EditorMode.READONLY]?: IReadonlyModeRule
  [EditorMode.FORM]?: IFormModeRule
}
