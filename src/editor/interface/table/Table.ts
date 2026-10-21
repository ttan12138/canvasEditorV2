import { IPadding } from '../Common'

export interface ITableOption {
  tdPadding?: IPadding
  /** 需求 8.7：仅含子表的单元格使用的独立内边距（上、右、下、左）。
   *  与普通 tdPadding 解耦，专门作用于 hasChild === true 的容器单元格，
   *  不设置时回退到 tdPadding。 */
  childTableTdPadding?: IPadding
  defaultTrMinHeight?: number
  defaultColMinWidth?: number
  defaultBorderColor?: string
  overflow?: boolean
  /** 表格作为块元素时，与后续内容之间的垂直间距（px，未缩放）。
   *  作用于「表格底部 → 下一段落/文档末尾」的留白；表格顶部始终紧贴上一行。
   *  默认 8，与 defaultBasicRowMarginHeight * defaultRowMargin 等价，即沿用原行距。
   *  设为 0 可去除表格底部多余空白；单个表格可用 element.blockMargin 单独覆盖。 */
  blockMargin?: number
}
