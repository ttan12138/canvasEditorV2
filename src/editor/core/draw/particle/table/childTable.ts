import { ElementType } from '../../../../dataset/enum/Element'
import { TableBorder, TdBorder } from '../../../../dataset/enum/table/Table'
import { defaultTableOption } from '../../../../dataset/constant/Table'
import type { IChildTableCol } from '../../../../interface/table/ChildTable'
import type { IElement } from '../../../../interface/Element'
import type { IPadding } from '../../../../interface/Common'

// 需求 8.6：单元格边框默认四边全选（上/右/下/左）
const ALL_BORDERS: TdBorder[] = [
  TdBorder.TOP,
  TdBorder.RIGHT,
  TdBorder.BOTTOM,
  TdBorder.LEFT
]

// 需求 8.6：子表最外四边（上=首行顶、下=末行底、左=首列左、右=末列右）始终不绘制，
// 与「配置」弹层中外侧勾选项禁用保持一致。按单元格位置剥离对应外侧边。
const stripOuterBorders = (
  borders: TdBorder[] | undefined,
  pos: { isHeader: boolean; isLastRow: boolean; colIndex: number; colCount: number }
): TdBorder[] => {
  const arr = borders ?? ALL_BORDERS
  const lastCol = pos.colCount - 1
  return arr.filter(b => {
    if (pos.isHeader && b === TdBorder.TOP) return false
    if (pos.isLastRow && b === TdBorder.BOTTOM) return false
    if (pos.colIndex === 0 && b === TdBorder.LEFT) return false
    if (pos.colIndex === lastCol && b === TdBorder.RIGHT) return false
    return true
  })
}

/**
 * 需求 8.5 / 8.2：依据子表结构(header)与运行数据(data)构建嵌套表格元素。
 * - 第 0 行为表头（取 header[*].name）
 * - 第 1..data.length 行为数据行（取 data[r-1][c]）
 * - 边框：TableBorder.EMPTY，仅由每列「borderTypes / headerBorderTypes」控制各单元格边框
 *   （若用 INTERNAL 会强制绘制全部内框，覆盖每列自定义边框设置，见 TableParticle._drawBorder）。
 *   每列未配置边框时默认四边全选（ALL_BORDERS）。
 * - 总宽超过 maxWidth 时按比例缩放，保证不超过单元格内容宽（8.4.1.4.1）
 */
export function buildChildTableElement(
  header: IChildTableCol[],
  data: unknown[][],
  options?: { rowHeight?: number; maxWidth?: number; tdPadding?: IPadding }
): IElement {
  const rowHeight = options?.rowHeight ?? 30
  const headerHeight = header[0]?.height ?? rowHeight
  // 需求 8.7：子表自身内边距（决定子表边框相对其单元格的列内缩，也作为「容器单元格」的留白）。
  // 默认取引擎默认，可被调用方传入的 tdPadding（= childTableTdPadding / 单元格 childTdPadding）覆盖。
  const nestedTdPadding = options?.tdPadding ?? [...defaultTableOption.tdPadding]
  const nestedTdPaddingWidth = nestedTdPadding[1] + nestedTdPadding[3]
  // 需求 8.4.1.4.1：列宽按「相对权重」分配，并填满父级单元格内容宽（百分比方式），
  // 不依赖具体像素；因此总宽恒等于父级单元格内容宽（不超过单元格）。
  const weights = header.map(col => Number(col.width) || 1)
  const totalWeight = weights.reduce((a, b) => a + b, 0) || header.length
  // 需求 8.7：列宽需扣除子表自身左右内边距，否则子表边框盒宽 = 列宽 + 内边距，
  // 在 Position 以 nestedTdPadding 为偏移定位时会向右溢出单元格。
  const available = Math.max(
    0,
    (options?.maxWidth ?? 600) - nestedTdPaddingWidth
  )
  const minCol = 24
  const widths = weights.map(w =>
    Math.max(minCol, Math.round((w / totalWeight) * available))
  )
  const colgroup = widths.map(w => ({ width: w }))
  const trList: IElement['trList'] = []
  // 表头（需求 8.6：表头单元格应用 headerVerticalAlign / headerHorizontalAlign / headerBorderTypes）
  trList.push({
    height: headerHeight,
    tdList: header.map((col, c) => ({
      colspan: 1,
      rowspan: 1,
      verticalAlign: col.headerVerticalAlign,
      borderTypes: stripOuterBorders(col.headerBorderTypes, {
        isHeader: true,
        isLastRow: data.length === 0,
        colIndex: c,
        colCount: header.length
      }),
      value: [
        { value: col.name ?? col.key, rowFlex: col.headerHorizontalAlign }
      ]
    }))
  })
  // 数据行（需求 8.6：列表内容单元格应用 verticalAlign / horizontalAlign / borderTypes）
  for (let r = 0; r < data.length; r++) {
    const row = data[r]
    const isLastRow = r === data.length - 1
    trList.push({
      height: rowHeight,
      tdList: header.map((col, i) => ({
        colspan: 1,
        rowspan: 1,
        verticalAlign: col.verticalAlign,
        borderTypes: stripOuterBorders(col.borderTypes, {
          isHeader: false,
          isLastRow,
          colIndex: i,
          colCount: header.length
        }),
        value: [
          {
            value: row[i] == null ? '' : String(row[i]),
            rowFlex: col.horizontalAlign
          }
        ]
      }))
    })
  }
  return {
    type: ElementType.TABLE,
    value: '',
    colgroup,
    trList,
    // 需求 8.6/8.7：子表内边距 = 传入的 tdPadding（= childTableTdPadding / 单元格 childTdPadding），
    // 与文档全局 table.tdPadding 解耦，且已在上文列宽分配中扣除。
    tdPadding: [...nestedTdPadding],
    // 需求 8.6：不强制内框，边框完全由每列 borderTypes / headerBorderTypes 控制
    borderType: TableBorder.EMPTY
  }
}
