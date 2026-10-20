import { ITableOption } from '../../interface/table/Table'

export const defaultTableOption: Readonly<Required<ITableOption>> = {
  tdPadding: [0, 5, 0, 5],
  // 需求 8.7：子表容器单元格独立内边距，默认与 tdPadding 一致（不破坏现有渲染）
  childTableTdPadding: [0, 0, 0, 0],
  defaultTrMinHeight: 20,
  defaultColMinWidth: 20,
  defaultBorderColor: '#000000',
  overflow: false
}
