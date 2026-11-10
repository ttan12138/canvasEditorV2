import { describe, expect, it } from 'vitest'
import { Area } from '@/editor/core/draw/interactive/Area'
import { EditorZone } from '@/editor/dataset/enum/Editor'
import { AreaMode } from '@/editor/dataset/enum/Area'
import { LocationPosition } from '@/editor/dataset/enum/Common'
import { ElementType } from '@/editor/dataset/enum/Element'
import { makeMockCtx, makeMockDraw } from './mock'
import type { IAreaInfo, IElement, IElementPosition } from '@/editor/interface/Element'

const pos = (pageNo = 0): IElementPosition =>
  ({
    coordinate: { leftTop: [0, 0], rightBottom: [10, 20], rightTop: [10, 0] },
    pageNo
  }) as any

const areaDraw = (over: any = {}) => {
  const draw = makeMockDraw({
    control: { deletable: true },
    ...over
  })
  draw.getZone = () => ({
    getZone: () => EditorZone.MAIN,
    setZone: () => {}
  })
  draw.getRange = () => ({
    getRange: () => ({ startIndex: 0, endIndex: 0 }),
    setRange: () => {}
  })
  draw.getElementList = () => [] as any
  draw.getMainElementList = () => [] as any
  draw.getTdPadding = () => [0, 0, 0, 0]
  draw.isAreaHideDisabled = () => false
  draw.getControl = () => ({ getIsRangeWithinControl: () => false })
  draw.getMargins = () => [0, 0, 0, 0]
  draw.getInnerWidth = () => 800
  draw.deleteElementList = () => {}
  draw.spliceElementList = () => {}
  draw.insertElementList = () => {}
  draw.getTraceParticle = () => ({ markElementListInserted: () => {} })
  draw.getOriginalMainElementList = () => [] as any
  draw.getPosition = () => ({ getOriginalMainPositionList: () => [] })
  draw.getImageObserver = () => ({ add: () => {} })
  draw.computeRowList = () => [] as any
  draw.getHeader = () => ({ getExtraHeight: () => 0 }) as any
  draw.getMargins = () => [0, 0, 0, 0]
  draw.drawRow = () => {}
  return draw
}

const makeArea = (draw: any, info?: Partial<IAreaInfo>) => {
  const a = new Area(draw)
  if (info) {
    a['areaInfoMap'].set(info.id!, info as IAreaInfo)
  }
  return a
}

describe('Area', () => {
  it('getAreaInfo 返回内部 Map', () => {
    const p = new Area(areaDraw())
    expect(p.getAreaInfo()).toBeInstanceOf(Map)
  })

  it('getActiveAreaId 空/命中', () => {
    const draw = areaDraw()
    const p = new Area(draw)
    expect(p.getActiveAreaId()).toBeNull()
    draw.getElementList = () => [{ areaId: 'a' }] as any
    const p2 = makeArea(draw, { id: 'a', area: {}, elementList: [], positionList: [] } as any)
    expect(p2.getActiveAreaId()).toBe('a')
  })

  it('getActiveAreaInfo 空/命中', () => {
    const draw = areaDraw()
    const p = new Area(draw)
    expect(p.getActiveAreaInfo()).toBeNull()
    const p2 = makeArea(draw, { id: 'a', area: {}, elementList: [], positionList: [] } as any)
    draw.getElementList = () => [{ areaId: 'a' }] as any
    expect(p2.getActiveAreaInfo()?.id).toBe('a')
  })

  it('isReadonly 各模式', () => {
    const draw = areaDraw()
    const base = { id: 'a', area: {} as any, elementList: [], positionList: [] } as any
    // 无区域
    expect(new Area(draw).isReadonly()).toBe(false)
    // EDIT
    const pEdit = makeArea(draw, { ...base, area: { mode: AreaMode.EDIT } })
    draw.getElementList = () => [{ areaId: 'a' }] as any
    expect(pEdit.isReadonly()).toBe(false)
    // READONLY
    const pRo = makeArea(draw, { ...base, area: { mode: AreaMode.READONLY } })
    expect(pRo.isReadonly()).toBe(true)
    // FORM：在控件内 -> 可编辑
    const drawIn = areaDraw()
    drawIn.getControl = () => ({ getIsRangeWithinControl: () => true })
    const pFormIn = makeArea(drawIn, { ...base, area: { mode: AreaMode.FORM } })
    drawIn.getElementList = () => [{ areaId: 'a' }] as any
    expect(pFormIn.isReadonly()).toBe(false)
    // FORM：不在控件内 -> 只读
    const drawOut = areaDraw()
    drawOut.getControl = () => ({ getIsRangeWithinControl: () => false })
    const pFormOut = makeArea(drawOut, { ...base, area: { mode: AreaMode.FORM } })
    drawOut.getElementList = () => [{ areaId: 'a' }] as any
    expect(pFormOut.isReadonly()).toBe(true)
  })

  it('insertArea 成功/带 range/越界返回 null', () => {
    const draw = areaDraw()
    draw.getMainElementList = () => [{ value: 'z' }, { value: 'z' }] as any
    const p = new Area(draw)
    const id = p.insertArea({ value: [{ value: 'x' }], area: {} } as any)
    expect(typeof id).toBe('string')
    // 带 range 且当前不在区域
    const id2 = p.insertArea({
      value: [{ value: 'y' }],
      area: {},
      range: { startIndex: 0, endIndex: 1 }
    } as any)
    expect(typeof id2).toBe('string')
    // 越界
    const draw2 = areaDraw()
    draw2.getMainElementList = () => [] as any
    const p2 = new Area(draw2)
    expect(
      p2.insertArea({
        value: [{ value: 'y' }],
        area: {},
        range: { startIndex: 5, endIndex: 5 }
      } as any)
    ).toBeNull()
  })

  it('compute 普通区域 / 表格区域', () => {
    const draw = areaDraw()
    draw.getOriginalMainElementList = () =>
      [
        { type: ElementType.AREA, areaId: 'a', area: {}, valueList: [{ value: 'x' }] }
      ] as any
    draw.getPosition = () => ({ getOriginalMainPositionList: () => [pos()] })
    const p = new Area(draw)
    p.compute()
    expect(p.getAreaInfo().has('a')).toBe(true)
    // 表格区域
    const draw2 = areaDraw()
    draw2.getOriginalMainElementList = () =>
      [
        {
          type: ElementType.TABLE,
          trList: [
            {
              tdList: [
                {
                  positionList: [pos()],
                  value: [{ areaId: 'b', area: {}, value: 'v' }]
                }
              ]
            }
          ]
        }
      ] as any
    draw2.getPosition = () => ({ getOriginalMainPositionList: () => [pos()] })
    const p2 = new Area(draw2)
    p2.compute()
    expect(p2.getAreaInfo().has('b')).toBe(true)
  })

  it('render 背景/边框/隐藏/无样式分支', () => {
    const draw = areaDraw()
    const entry = (area: any, positionList: any[] = [pos()]): IAreaInfo =>
      ({
        id: 'a',
        area,
        elementList: [],
        positionList,
        sourceElementList: []
      }) as any
    const p = new Area(draw)
    const map = p['areaInfoMap']
    map.set('bg', entry({ backgroundColor: '#eee' }))
    map.set('border', entry({ borderColor: '#000' }))
    map.set('hide', entry({ hide: true }))
    map.set('none', entry({}))
    expect(() => p.render(makeMockCtx(), 0)).not.toThrow()
  })

  it('getAreaValue 返回区域值', () => {
    const draw = areaDraw()
    const p = makeArea(draw, {
      id: 'a',
      area: {},
      elementList: [{ value: 'x' }],
      positionList: [pos(0), pos(1)]
    } as any)
    draw.getElementList = () => [{ areaId: 'a' }] as any
    const r = p.getAreaValue()
    expect(r?.id).toBe('a')
    expect(p.getAreaValue({ id: 'nope' })).toBeNull()
  })

  it('getContextByAreaId 各位置', () => {
    const draw = areaDraw()
    draw.getOriginalMainElementList = () =>
      [{ areaId: 'x' }, { areaId: 'a' }, { areaId: 'x' }] as any
    draw.getPosition = () => ({
      getOriginalMainPositionList: () => [pos(), pos(), pos()] as any
    })
    const p = new Area(draw)
    expect(p.getContextByAreaId('a')).not.toBeNull()
    expect(
      p.getContextByAreaId('a', { position: LocationPosition.OUTER_BEFORE })
    ).not.toBeNull()
    expect(
      p.getContextByAreaId('a', { position: LocationPosition.AFTER })
    ).not.toBeNull()
    expect(
      p.getContextByAreaId('a', { position: LocationPosition.OUTER_AFTER })
    ).not.toBeNull()
    expect(p.getContextByAreaId('z')).toBeNull()
  })

  it('setAreaProperties 设置属性并触发计算', () => {
    const draw = areaDraw()
    const p = makeArea(draw, {
      id: 'a',
      area: {} as any,
      elementList: [],
      positionList: [pos()]
    } as any)
    draw.getElementList = () => [{ areaId: 'a' }] as any
    p.setAreaProperties({
      id: 'a',
      properties: { top: 10, backgroundColor: '#eee', hide: true }
    } as any)
    expect((p.getAreaInfo().get('a')!.area as any).backgroundColor).toBe('#eee')
  })

  it('setAreaValue 替换区域内容', () => {
    const draw = areaDraw()
    const p = makeArea(draw, {
      id: 'a',
      area: {},
      elementList: [{ value: 'old' }],
      positionList: [{ index: 0, pageNo: 0 }],
      sourceElementList: [{ value: 'old' }]
    } as any)
    draw.getElementList = () => [{ areaId: 'a' }] as any
    expect(() =>
      p.setAreaValue({ id: 'a', value: [{ value: 'new' }] } as any)
    ).not.toThrow()
  })

  it('deleteArea 删除区域', () => {
    const draw = areaDraw()
    const p = makeArea(draw, {
      id: 'a',
      area: {},
      elementList: [{ value: 'old' }],
      positionList: [{ index: 0, pageNo: 0 }],
      sourceElementList: [{ value: 'old' }]
    } as any)
    draw.getElementList = () => [{ areaId: 'a' }] as any
    expect(() => p.deleteArea({ id: 'a' })).not.toThrow()
    expect(() => p.deleteArea({ id: 'nope' })).not.toThrow()
  })
})
