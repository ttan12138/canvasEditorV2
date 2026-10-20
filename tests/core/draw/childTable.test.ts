import { describe, it, expect } from 'vitest'
import { buildChildTableElement } from '@/editor/core/draw/particle/table/childTable'
import { VerticalAlign } from '@/editor/dataset/enum/VerticalAlign'
import { TdBorder, TableBorder } from '@/editor/dataset/enum/table/Table'
import { defaultTableOption } from '@/editor/dataset/constant/Table'
import { RowFlex } from '@/editor/dataset/enum/Row'

// 需求 8.6：子表列外观——表头与列表内容可分别设置垂直对齐 / 水平对齐 / 边框
describe('buildChildTableElement 列外观（需求 8.6）', () => {
  const header = [
    {
      key: 'name',
      name: '姓名',
      width: 100,
      // 列表内容外观
      verticalAlign: VerticalAlign.BOTTOM,
      borderTypes: [TdBorder.LEFT, TdBorder.RIGHT],
      horizontalAlign: RowFlex.RIGHT,
      // 表头外观（应与列表内容不同）
      headerVerticalAlign: VerticalAlign.TOP,
      headerBorderTypes: [TdBorder.TOP],
      headerHorizontalAlign: RowFlex.LEFT
    },
    { key: 'age', name: '年龄', width: 100 }
  ]
  const el = buildChildTableElement(header, [['张三', 20]], { rowHeight: 26 })

  it('子表边框类型为空（EMPTY）：边框完全由每列 borderTypes 控制，不被引擎内框覆盖', () => {
    expect(el.borderType).toBe(TableBorder.EMPTY)
  })

  it('子表拥有独立于全局选项的 tdPadding（默认取引擎默认，不受外部单元格影响）', () => {
    expect(el.tdPadding).toEqual([...defaultTableOption.tdPadding])
  })

  it('表头单元格应用 header* 外观', () => {
    const thTd = el.trList![0].tdList[0]
    expect(thTd.verticalAlign).toBe(VerticalAlign.TOP)
    // 表头最外上边（首行顶）按位置剥离，故仅配置 TOP 时结果无边框
    expect(thTd.borderTypes).toEqual([])
    expect(thTd.value[0].rowFlex).toBe(RowFlex.LEFT)
  })

  it('列表内容单元格应用 * 外观（与表头可不同）', () => {
    const bodyTd = el.trList![1].tdList[0]
    expect(bodyTd.verticalAlign).toBe(VerticalAlign.BOTTOM)
    // 首列最外左边（首列左）按位置剥离，故 [LEFT,RIGHT] 仅保留 RIGHT
    expect(bodyTd.borderTypes).toEqual([TdBorder.RIGHT])
    expect(bodyTd.value[0].rowFlex).toBe(RowFlex.RIGHT)
  })

  it('未设置边框的列默认四边全选（上/右/下/左），但子表最外四边按位置剥离', () => {
    const bodyTd = el.trList![1].tdList[1]
    // 垂直对齐 / 水平对齐未设置仍为 undefined
    expect(bodyTd.verticalAlign).toBeUndefined()
    expect(bodyTd.value[0].rowFlex).toBeUndefined()
    // 默认四边全选后，数据末行底（下）与末列右被剥离
    expect(bodyTd.borderTypes).toEqual([TdBorder.TOP, TdBorder.LEFT])
    const thTd = el.trList![0].tdList[1]
    // 表头首行顶（上）与末列右被剥离，保留下/左
    expect(thTd.borderTypes).toEqual([TdBorder.BOTTOM, TdBorder.LEFT])
  })
})
