// 子表格结构定义（需求 8.1.5 / 8.4.1.4）
// 注意：运行时数据(data) 由 setChildTable 注入，不存于该结构；
// 该结构仅描述表头与列宽高。

import { VerticalAlign } from '../../dataset/enum/VerticalAlign'
import { TdBorder } from '../../dataset/enum/table/Table'
import { RowFlex } from '../../dataset/enum/Row'

export interface IChildTableCol {
  /** 数据 key，对应 setChildTable 中 data[r][colIndex] */
  key: string
  /** 列标题（展示用） */
  name?: string
  /** 列宽（px，未缩放）；不超过单元格内容宽 */
  width: number
  /** 表头行高（px） */
  height?: number
  /** 需求 8.6：列表内容——垂直对齐 */
  verticalAlign?: VerticalAlign
  /** 需求 8.6：列表内容——单元格边框（四边可选） */
  borderTypes?: TdBorder[]
  /** 需求 8.6：列表内容——水平对齐 */
  horizontalAlign?: RowFlex
  /** 需求 8.6：表头——垂直对齐（可与列表内容分别设置） */
  headerVerticalAlign?: VerticalAlign
  /** 需求 8.6：表头——单元格边框（四边可选） */
  headerBorderTypes?: TdBorder[]
  /** 需求 8.6：表头——水平对齐 */
  headerHorizontalAlign?: RowFlex
}

export interface IChildTable {
  /** 表头列定义 */
  header: IChildTableCol[]
  /** 【表数据】每行高度（px） */
  rowHeight?: number
}
