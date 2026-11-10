import { describe, expect, it } from 'vitest'
import { TableParticle } from '@/editor/core/draw/particle/table/TableParticle'
import { ElementType } from '@/editor/dataset/enum/Element'
import { TableBorder, TdBorder, TdSlash } from '@/editor/dataset/enum/table/Table'
import { makeMockCtx, makeMockDraw } from '../mock'
import type { IElement, ITr, ITd } from '@/editor/interface/Element'

const makeTable = (): IElement => {
  const td = (extra: any = {}): ITd =>
    ({
      type: 'td',
      value: [],
      width: 100,
      height: 40,
      x: 0,
      y: 0,
      colIndex: 0,
      rowIndex: 0,
      tdIndex: 0,
      colspan: 1,
      rowspan: 1,
      ...extra
    }) as any
  const tr = (tdList: ITd[]): ITr => ({ height: 40, tdList } as any)
  return {
    type: ElementType.TABLE,
    id: 't1',
    width: 200,
    height: 80,
    colgroup: [{ width: 100 }, { width: 100 }],
    trList: [
      tr([
        td({ colIndex: 0, rowIndex: 0, tdIndex: 0 }),
        td({ colIndex: 1, rowIndex: 0, tdIndex: 1 })
      ]),
      tr([
        td({ colIndex: 0, rowIndex: 1, tdIndex: 0 }),
        td({ colIndex: 1, rowIndex: 1, tdIndex: 1 })
      ])
    ]
  } as any
}

const tableDraw = (over: any = {}) => {
  const draw = makeMockDraw({
    scale: 1,
    table: { defaultBorderColor: '#000', tdPadding: [0, 0, 0, 0] },
    rangeAlpha: 0.3,
    rangeColor: '#ff0',
    ...over
  }) as any
  draw.getRange = () => ({
    getRange: () => ({
      isCrossRowCol: false,
      tableId: 't1',
      startTdIndex: 0,
      endTdIndex: 0,
      startTrIndex: 0,
      endTrIndex: 0
    }),
    setRange: () => {}
  })
  draw.getOriginalElementList = () => [] as any
  draw.getPosition = () => ({
    getPositionContext: () => ({ isTable: false }),
    getTableElementByContext: () => null
  })
  return draw
}

describe('TableParticle', () => {
  it('getTableWidth / getTableHeight', () => {
    const p = new TableParticle(tableDraw())
    const t = makeTable()
    expect(p.getTableWidth(t)).toBe(200)
    p.computeRowColInfo(t)
    expect(p.getTableHeight(t)).toBe(80)
  })

  it('computeRowColInfo 计算坐标', () => {
    const p = new TableParticle(tableDraw())
    const t = makeTable()
    p.computeRowColInfo(t)
    const td00 = (t.trList![0] as any).tdList[0]
    expect(td00.x).toBe(0)
    expect(td00.colIndex).toBe(0)
    expect(td00.rowIndex).toBe(0)
  })

  it('getTdListByColIndex / RowIndex / getRowCountByColIndex', () => {
    const p = new TableParticle(tableDraw())
    const t = makeTable()
    p.computeRowColInfo(t)
    expect(p.getTdListByColIndex(t.trList!, 0).length).toBe(2)
    expect(p.getTdListByRowIndex(t.trList!, 0).length).toBe(2)
    expect(p.getRowCountByColIndex(t.trList!, 0)).toBe(2)
  })

  it('getTrListGroupByCol 跨行重排', () => {
    const p = new TableParticle(tableDraw())
    const trList: ITr[] = [
      { height: 40, tdList: [{ rowspan: 2, colIndex: 0, rowIndex: 0 } as any] },
      { height: 40, tdList: [{ colIndex: 0, rowIndex: 1 } as any] }
    ] as any
    const grouped = p.getTrListGroupByCol(trList)
    expect((grouped[0].tdList as any).length).toBe(0)
    expect((grouped[1].tdList as any)[0].rowspan).toBe(2)
  })

  it('getFragmentTdList 进位 + 缓存', () => {
    const p = new TableParticle(tableDraw())
    const t = makeTable()
    const carried = { value: [] } as any
    const fragment = {
      startTrIndex: 0,
      endTrIndex: 2,
      carriedTds: [carried]
    } as any
    const list = p.getFragmentTdList(t, fragment)
    expect(list[0]).toBe(carried)
    // 缓存命中
    expect(p.getFragmentTdList(t, fragment)).toBe(list)
  })

  it('getFragmentContentHeight / getFragmentTrHeight', () => {
    const p = new TableParticle(tableDraw())
    const t = makeTable()
    const fragment = {
      startTrIndex: 0,
      endTrIndex: 2,
      startSplitTrOffset: 0,
      endSplitTrHeight: 40
    } as any
    expect(p.getFragmentContentHeight(t, fragment)).toBe(80)
    const tr = t.trList![0] as any
    expect(p.getFragmentTrHeight(tr, 0)).toBe(40)
    expect(p.getFragmentTrHeight(tr, 0, fragment)).toBe(40)
  })

  it('getTdWindowInFragment / getTdWindowOffsetY', () => {
    const p = new TableParticle(tableDraw())
    const t = makeTable()
    const td = (t.trList![0] as any).tdList[0]
    const fragment = {
      skipHeight: 0,
      startSplitTrOffset: 0,
      startTrIndex: 0,
      endTrIndex: 2,
      repeatHeight: 0
    } as any
    const [ws, we] = p.getTdWindowInFragment(td, t, fragment)
    expect(we).toBeGreaterThan(ws)
    expect(p.getTdWindowOffsetY(0, fragment)).toBe(0)
  })

  it('getTdRowDocPrefix / getTdLineRangeBySplitWindow / getTdVisibleRowListByWindow', () => {
    const p = new TableParticle(tableDraw())
    const td = {
      value: [],
      rowList: [{ height: 20 }, { height: 20 }],
      height: 40,
      tdPadding: [0, 0, 0, 0]
    } as any
    const prefix = p.getTdRowDocPrefix(td)
    expect(prefix.length).toBe(3)
    const [s, e] = p.getTdLineRangeBySplitWindow(td, 0, 40)
    expect(e).toBeGreaterThan(s)
    const vis = p.getTdVisibleRowListByWindow(td, 0, 40)
    expect(vis.rowList.length).toBe(2)
  })

  it('getRangeRowCol 各分支', () => {
    // 非表格
    expect(new TableParticle(tableDraw()).getRangeRowCol()).toBeNull()
    // 表格内非跨行列
    const draw = tableDraw()
    const t = makeTable()
    draw.getPosition = () => ({
      getPositionContext: () => ({ isTable: true, trIndex: 0, tdIndex: 0 }),
      getTableElementByContext: () => t
    })
    const p = new TableParticle(draw)
    expect(p.getRangeRowCol()?.[0]?.[0]).toBe((t.trList![0] as any).tdList[0])
    // 跨行列（构造前即设好 range）
    const draw2 = tableDraw()
    draw2.getPosition = () => ({
      getPositionContext: () => ({ isTable: true, trIndex: 0, tdIndex: 0 }),
      getTableElementByContext: () => t
    })
    draw2.getRange = () => ({
      getRange: () => ({
        isCrossRowCol: true,
        tableId: 't1',
        startTdIndex: 0,
        endTdIndex: 1,
        startTrIndex: 0,
        endTrIndex: 1
      }),
      setRange: () => {}
    })
    expect(new TableParticle(draw2).getRangeRowCol()?.length).toBe(2)
    // 元素未找到
    const draw3 = tableDraw()
    draw3.getPosition = () => ({
      getPositionContext: () => ({ isTable: true, trIndex: 0, tdIndex: 0 }),
      getTableElementByContext: () => null
    })
    expect(new TableParticle(draw3).getRangeRowCol()).toBeNull()
  })

  it('render 各边框类型 + 背景/斜线/单元格边框', () => {
    const draw = tableDraw()
    const t = makeTable()
    p_compute(t)
    // 默认(ALL)：外框非完整 + 单元格边框 + 表格线 + 背景 + 斜线
    ;(t.trList![0] as any).tdList[0].backgroundColor = '#eee'
    ;(t.trList![0] as any).tdList[0].borderTypes = [
      TdBorder.TOP,
      TdBorder.RIGHT,
      TdBorder.BOTTOM,
      TdBorder.LEFT
    ]
    ;(t.trList![0] as any).tdList[0].slashTypes = [TdSlash.FORWARD, TdSlash.BACK]
    t.borderType = TableBorder.ALL
    t.borderColor = '#000'
    const p = new TableParticle(draw)
    expect(() => p.render(makeMockCtx(), t, 0, 0)).not.toThrow()
    // EMPTY
    t.borderType = TableBorder.EMPTY
    expect(() => p.render(makeMockCtx(), t, 0, 0)).not.toThrow()
    // EXTERNAL
    t.borderType = TableBorder.EXTERNAL
    expect(() => p.render(makeMockCtx(), t, 0, 0)).not.toThrow()
    // INTERNAL
    t.borderType = TableBorder.INTERNAL
    expect(() => p.render(makeMockCtx(), t, 0, 0)).not.toThrow()
    // DASH
    t.borderType = TableBorder.DASH
    expect(() => p.render(makeMockCtx(), t, 0, 0)).not.toThrow()
  })

  it('render 跨页片段（回显表头 + 进位）', () => {
    const draw = tableDraw()
    const t = makeTable()
    p_compute(t)
    t.borderType = TableBorder.ALL
    t.borderColor = '#000'
    const fragment = {
      startTrIndex: 0,
      endTrIndex: 2,
      repeatTrIndexes: [0],
      repeatHeight: 40,
      carriedTds: [],
      skipHeight: 0,
      startSplitTrOffset: 0,
      endSplitTrHeight: 40
    } as any
    const p = new TableParticle(draw)
    expect(() => p.render(makeMockCtx(), t, 0, 0, fragment)).not.toThrow()
  })

  it('drawRange 各分支', () => {
    const t = makeTable()
    p_compute(t)
    const base = tableDraw()
    const p = new TableParticle(base)
    // 非 TABLE 早退
    expect(() =>
      p.drawRange(makeMockCtx(), { type: ElementType.TEXT } as any, 0, 0)
    ).not.toThrow()
    // 非跨行列早退
    expect(() => p.drawRange(makeMockCtx(), t, 0, 0)).not.toThrow()
    // 跨行列 + 命中
    const draw2 = tableDraw()
    draw2.getRange = () => ({
      getRange: () => ({
        isCrossRowCol: true,
        tableId: 't1',
        startTdIndex: 0,
        endTdIndex: 1,
        startTrIndex: 0,
        endTrIndex: 1
      }),
      setRange: () => {}
    })
    expect(() =>
      new TableParticle(draw2).drawRange(makeMockCtx(), t, 0, 0)
    ).not.toThrow()
    // tableId 不匹配
    const draw3 = tableDraw()
    draw3.getRange = () => ({
      getRange: () => ({
        isCrossRowCol: true,
        tableId: 'other',
        startTdIndex: 0,
        endTdIndex: 1,
        startTrIndex: 0,
        endTrIndex: 1
      }),
      setRange: () => {}
    })
    expect(() =>
      new TableParticle(draw3).drawRange(makeMockCtx(), t, 0, 0)
    ).not.toThrow()
  })
})

function p_compute(t: IElement) {
  new TableParticle(tableDraw()).computeRowColInfo(t)
}
