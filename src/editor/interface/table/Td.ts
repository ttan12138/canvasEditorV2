import { VerticalAlign } from '../../dataset/enum/VerticalAlign'
import { TdBorder, TdSlash } from '../../dataset/enum/table/Table'
import { IPadding } from '../Common'
import { IElement, IElementPosition } from '../Element'
import { IRow } from '../Row'
import { IChildTable } from './ChildTable'

export interface ITd {
  conceptId?: string
  id?: string
  extension?: unknown
  externalId?: string
  /** 需求 8.6：本单元格实际生效的内边距（由所属表格元素 tdPadding 决议后写入，渲染复用） */
  tdPadding?: IPadding
  /** 需求 8.7：含子表单元格的独立内边距（仅 hasChild 单元格生效），优先于 childTableTdPadding / tdPadding */
  childTdPadding?: IPadding
  /** 8.1.1 是否开启联动 */
  enableLink?: boolean
  /** 8.1.2 联动的子单元格 tdId(id) 集合 */
  linkChildIds?: string[]
  /** 8.1.3 是否显示（编辑模式始终为 true） */
  show?: boolean
  /** 8.1.4 是否有子表结构 */
  hasChild?: boolean
  /** 8.1.5 子表结构定义 */
  childTables?: IChildTable
  /** 8.4.1.5 子表单元格名称（供 setChildTable 查找） */
  name?: string
  /** 8.5 当前子表数据（data[i] 为一行表数据）；编辑模式不渲染，表单模式据此构建子表 */
  childData?: unknown[][]
  x?: number
  y?: number
  width?: number
  height?: number
  colspan: number
  rowspan: number
  value: IElement[]
  trIndex?: number
  tdIndex?: number
  isLastRowTd?: boolean
  isLastColTd?: boolean
  isLastTd?: boolean
  rowIndex?: number
  colIndex?: number
  rowList?: IRow[]
  positionList?: IElementPosition[]
  verticalAlign?: VerticalAlign
  backgroundColor?: string
  borderTypes?: TdBorder[]
  slashTypes?: TdSlash[]
  mainHeight?: number // 内容 + 内边距高度
  realHeight?: number // 真实高度（包含跨列）
  realMinHeight?: number // 真实最小高度（包含跨列）
  disabled?: boolean // 内容不可编辑
  deletable?: boolean // 内容不可删除
  hint?: string // 单元格悬浮提示文案：鼠标移入单元格内任意元素时展示
}

/** 需求 8.4：右键对话框保存单元格联动/子表配置 */
export interface ISetCellConfigPayload {
  /** 目标单元格 tdId（即 ITd.id） */
  tdId: string
  /** 8.1.1 是否开启联动 */
  enableLink?: boolean
  /** 8.1.2 联动的子单元格 tdId 集合 */
  linkChildIds?: string[]
  /** 8.1.3 是否显示（编辑模式始终为 true） */
  show?: boolean
  /** 8.1.4 是否有子表结构 */
  hasChild?: boolean
  /** 8.1.5 子表结构定义 */
  childTables?: IChildTable
  /** 8.4.1.5 子表单元格名称 */
  name?: string
  /** 8.6 垂直对齐 */
  verticalAlign?: VerticalAlign
  /** 8.6 单元格边框（四边可选） */
  borderTypes?: TdBorder[]
  /** 8.7 仅含子表单元格的独立内边距（上、右、下、左） */
  childTdPadding?: IPadding
}

/** 需求 8.4：对话框用——列出文档所有单元格及其当前配置 */
export interface ITableCellInfo {
  /** 单元格 tdId */
  tdId: string
  /** 子表名称（若有） */
  name?: string
  /** 展示标签，如「表1 R1C2」 */
  label: string
  /** 8.1.1 是否开启联动 */
  enableLink?: boolean
  /** 8.1.2 联动子单元格 tdId */
  linkChildIds?: string[]
  /** 8.1.3 是否显示 */
  show?: boolean
  /** 8.1.4 是否有子表 */
  hasChild?: boolean
  /** 8.1.5 子表结构 */
  childTables?: IChildTable
  /** 8.1.6 单元格内容宽度（未缩放；用于预览表与实际渲染等宽） */
  width?: number
  /** 8.6 垂直对齐 */
  verticalAlign?: VerticalAlign
  /** 8.6 单元格边框 */
  borderTypes?: TdBorder[]
  /** 8.7 仅含子表单元格的独立内边距 */
  childTdPadding?: IPadding
}
