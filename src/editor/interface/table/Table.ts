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
}
