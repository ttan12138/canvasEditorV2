import { describe, expect, it } from 'vitest'
import { ControlSearch } from '@/editor/core/draw/control/interactive/ControlSearch'
import { makeMockCtx, makeMockDraw } from './mock'

const makeControl = (draw: any, over: any = {}) => ({
  getDraw: () => draw,
  getActiveControl: () => ({ getElement: () => ({ controlId: 'active' }) }),
  getIsRangeInPostfix: () => false,
  getIsExistValueByElementListIndex: () => false,
  ...over
})

const csDraw = (over: any = {}) => {
  const draw = makeMockDraw({
    control: {
      activeBackgroundColor: '#a',
      disabledBackgroundColor: '#b',
      existValueBackgroundColor: '#c',
      noValueBackgroundColor: '#d'
    },
    searchMatchAlpha: 0.5,
    searchMatchColor: '#ff0',
    ...over
  }) as any
  draw.isPrintMode = () => false
  draw.getSearch = () => ({ getMatchList: () => [] })
  return draw
}

describe('ControlSearch', () => {
  it('构造与列表存取', () => {
    const draw = csDraw()
    const p = new ControlSearch(makeControl(draw))
    expect(p.getHighlightList()).toEqual([])
    p.setHighlightList([{ id: 'c', ruleList: [] } as any])
    expect(p.getHighlightList()).toHaveLength(1)
    expect(p.getHighlightMatchResult()).toEqual([])
  })

  it('getControlHighlight: element.highlight 置空返回', () => {
    const draw = csDraw()
    const p = new ControlSearch(makeControl(draw))
    expect(p.getControlHighlight([{ highlight: true } as any], 0)).toBe('')
  })

  it('getControlHighlight: 打印模式返回空', () => {
    const draw = csDraw()
    draw.isPrintMode = () => true
    const p = new ControlSearch(makeControl(draw))
    expect(p.getControlHighlight([{ controlId: 'active' } as any], 0)).toBe('')
  })

  it('getControlHighlight: 激活控件高亮色', () => {
    const draw = csDraw()
    const p = new ControlSearch(makeControl(draw))
    expect(
      p.getControlHighlight([{ controlId: 'active' } as any], 0)
    ).toBe('#a')
  })

  it('getControlHighlight: 禁用控件高亮色', () => {
    const draw = csDraw()
    const ctrl = makeControl(draw, {
      getActiveControl: () => ({ getElement: () => ({ controlId: 'other' }) })
    })
    const p = new ControlSearch(ctrl)
    expect(
      p.getControlHighlight(
        [{ controlId: 'active', control: { disabled: true } } as any],
        0
      )
    ).toBe('#b')
  })

  it('getControlHighlight: 存在值/不存在值高亮色', () => {
    const draw = csDraw()
    const ctrlExist = makeControl(draw, {
      getActiveControl: () => ({ getElement: () => ({ controlId: 'other' }) }),
      getIsExistValueByElementListIndex: () => true
    })
    const p1 = new ControlSearch(ctrlExist)
    expect(p1.getControlHighlight([{ controlId: 'c' } as any], 0)).toBe('#c')
    const ctrlNo = makeControl(draw, {
      getActiveControl: () => ({ getElement: () => ({ controlId: 'other' }) }),
      getIsExistValueByElementListIndex: () => false
    })
    const p2 = new ControlSearch(ctrlNo)
    expect(p2.getControlHighlight([{ controlId: 'c' } as any], 0)).toBe('#d')
  })

  it('computeHighlightList + renderHighlightList', () => {
    const draw = csDraw()
    draw.getSearch = () => ({
      getMatchList: () => [{ type: 'page', index: 0, groupId: 'g' }]
    })
    draw.getOriginalMainElementList = () =>
      [
        { controlId: 'c', control: {}, controlComponent: 'value' }
      ] as any
    draw.getPosition = () =>
      ({
        getOriginalPositionList: () =>
          [
            { coordinate: { leftTop: [0, 0], leftBottom: [0, 10], rightTop: [10, 0] }, pageNo: 0 }
          ] as any
      }) as any
    draw.getOriginalElementList = () => [] as any
    const p = new ControlSearch(makeControl(draw))
    p.setHighlightList([
      { id: 'c', conceptId: '', ruleList: [{ keyword: 'ab' }] }
    ] as any)
    p.computeHighlightList()
    expect(p.getHighlightMatchResult().length).toBe(1)
    expect(() => p.renderHighlightList(makeMockCtx(), 0)).not.toThrow()
    // 空结果早退
    p.setHighlightList([] as any)
    expect(() => p.renderHighlightList(makeMockCtx(), 0)).not.toThrow()
  })

  it('computeHighlightList 表格递归', () => {
    const draw = csDraw()
    draw.getSearch = () => ({
      getMatchList: () => [{ type: 'table', index: 0, groupId: 'g' }]
    })
    draw.getOriginalMainElementList = () =>
      [
        {
          type: 'table' as any,
          id: 'tbl',
          trList: [
            {
              tdList: [
                {
                  id: 'td',
                  value: [
                    { controlId: 'c', control: {}, controlComponent: 'value' }
                  ]
                }
              ]
            }
          ]
        }
      ] as any
    const p = new ControlSearch(makeControl(draw))
    p.setHighlightList([
      { id: 'c', conceptId: '', ruleList: [{ keyword: 'ab' }] }
    ] as any)
    p.computeHighlightList()
    expect(p.getHighlightMatchResult().length).toBeGreaterThan(0)
  })
})
