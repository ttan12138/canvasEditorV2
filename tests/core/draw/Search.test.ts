import { describe, expect, it } from 'vitest'
import { Search } from '@/editor/core/draw/interactive/Search'
import { EditorContext } from '@/editor/dataset/enum/Editor'
import { makeMockCtx, makeMockDraw } from './mock'
import type { IElement, IElementPosition } from '@/editor/interface/Element'

const searchDraw = (over: any = {}) => {
  const draw = makeMockDraw({
    searchMatchAlpha: 0.5,
    searchMatchColor: '#ff0',
    searchNavigateMatchColor: '#f00',
    trace: { disabled: false },
    ...over
  })
  draw.getPosition = () =>
    ({
      getOriginalPositionList: () => [],
      setPositionContext: () => {}
    }) as any
  draw.getRange = () =>
    ({
      getIsCollapsed: () => true,
      getSelectionElementList: () => [],
      getRange: () => ({ startIndex: 0, endIndex: 0 }),
      setRange: () => {}
    }) as any
  draw.getTraceParticle = () => ({
    isTraceHidden: () => false,
    markElementListInserted: () => {}
  }) as any
  draw.getOriginalElementList = () => [] as any
  draw.isReadonly = () => false
  draw.isDesignMode = () => false
  draw.getPageOffset = () => ({ x: 0, y: 0 })
  draw.spliceElementList = () => {}
  draw.deleteElementList = (list: any[], start: number) =>
    [list[start]].filter(Boolean) as any
  return draw
}

const coordinate = {
  leftTop: [0, 0],
  leftBottom: [0, 10],
  rightTop: [10, 0]
}

describe('Search', () => {
  it('getSearchKeyword / setSearchKeyword', () => {
    const p = new Search(searchDraw())
    expect(p.getSearchKeyword()).toBeNull()
    p.setSearchKeyword('abc')
    expect(p.getSearchKeyword()).toBe('abc')
  })

  it('getMatchList 计算匹配', () => {
    const p = new Search(searchDraw())
    const list: IElement[] = [
      { value: 'hello ' } as any,
      { value: 'world' } as any
    ]
    const matches = (p as any).getMatchList('world', list)
    expect(matches.length).toBe('world'.length)
    expect(matches[0].index).toBe('hello '.length)
  })

  it('compute + 导航 + 信息', () => {
    const draw = searchDraw()
    draw.getOriginalElementList = () =>
      [{ value: 'hello ' } as any, { value: 'world' } as any] as any
    const p = new Search(draw)
    p.setSearchKeyword('world')
    p.compute('world')
    expect(p.getSearchMatchList().length).toBe('world'.length)
    expect(p.getSearchNavigateInfo()).toMatchObject({ count: 1 })
    expect(p.searchNavigateNext()).toBe(0)
    expect(p.getSearchNavigateIndexList().length).toBe('world'.length)
    expect(p.searchNavigatePre()).toBeNull()
  })

  it('render 高亮命中词', () => {
    const draw = searchDraw()
    draw.getOriginalElementList = () =>
      [{ value: 'hello ' } as any, { value: 'world' } as any] as any
    draw.getPosition = () =>
      ({
        getOriginalPositionList: () =>
          Array.from({ length: 12 }, () => ({
            coordinate,
            pageNo: 0
          })) as IElementPosition[]
      }) as any
    const p = new Search(draw)
    p.setSearchKeyword('world')
    p.compute('world')
    p.searchNavigateNext()
    expect(() => p.render(makeMockCtx(), 0)).not.toThrow()
    // 无匹配早退
    const p2 = new Search(searchDraw())
    expect(() => p2.render(makeMockCtx(), 0)).not.toThrow()
  })

  it('replace 非 trace 模式（整体替换）', () => {
    const draw = searchDraw({ trace: { disabled: true } })
    draw.getOriginalElementList = () =>
      [{ value: 'a' }, { value: 'b' }] as any
    const p = new Search(draw)
    ;(p as any).searchKeyword = 'a'
    ;(p as any).searchMatchList = [
      { type: EditorContext.PAGE, index: 0, groupId: 'g' }
    ]
    expect(() => p.replace('X')).not.toThrow()
  })

  it('replace 带 index 选项', () => {
    const draw = searchDraw()
    draw.getOriginalElementList = () =>
      [{ value: 'a' }, { value: 'b' }, { value: 'c' }] as any
    const p = new Search(draw)
    ;(p as any).searchKeyword = 'x'
    ;(p as any).searchMatchList = [
      { type: EditorContext.PAGE, index: 0, groupId: 'g1' },
      { type: EditorContext.PAGE, index: 1, groupId: 'g1' },
      { type: EditorContext.PAGE, index: 2, groupId: 'g2' }
    ]
    expect(() => p.replace('Y', { index: 1 })).not.toThrow()
  })

  it('replace trace 模式（replaceWithTrace）', () => {
    const draw = searchDraw({ trace: { disabled: false } })
    draw.getOriginalElementList = () =>
      [{ value: 'a' }, { value: 'b' }] as any
    const p = new Search(draw)
    ;(p as any).searchKeyword = 'a'
    ;(p as any).searchMatchList = [
      { type: EditorContext.PAGE, index: 0, groupId: 'g' }
    ]
    expect(() => p.replace('Z')).not.toThrow()
  })

  it('replace trace 模式 表格分支', () => {
    const draw = searchDraw({ trace: { disabled: false } })
    draw.getOriginalElementList = () =>
      [
        {
          trList: [
            { id: 'tr', tdList: [{ id: 'td', value: [{ value: 'a' }] }] }
          ]
        }
      ] as any
    const p = new Search(draw)
    ;(p as any).searchKeyword = 'a'
    ;(p as any).searchMatchList = [
      {
        type: EditorContext.TABLE,
        tableIndex: 0,
        trIndex: 0,
        tdIndex: 0,
        index: 0,
        groupId: 'g',
        tdId: 'td'
      }
    ]
    expect(() => p.replace('Z')).not.toThrow()
  })

  it('replace 非 trace 模式 表格分支', () => {
    const draw = searchDraw({ trace: { disabled: true } })
    draw.getOriginalElementList = () =>
      [
        {
          trList: [
            { id: 'tr', tdList: [{ id: 'td', value: [{ value: 'a' }] }] }
          ]
        }
      ] as any
    const p = new Search(draw)
    ;(p as any).searchKeyword = 'a'
    ;(p as any).searchMatchList = [
      {
        type: EditorContext.TABLE,
        tableIndex: 0,
        trIndex: 0,
        tdIndex: 0,
        index: 0,
        groupId: 'g',
        tdId: 'td'
      }
    ]
    expect(() => p.replace('Z')).not.toThrow()
  })

  it('replace 只读 / 空 payload 早退', () => {
    const draw = searchDraw()
    draw.isReadonly = () => true
    const p = new Search(draw)
    expect(() => p.replace('X')).not.toThrow()
    const draw2 = searchDraw()
    const p2 = new Search(draw2)
    expect(() => p2.replace(null)).not.toThrow()
  })
})
