import { describe, expect, it } from 'vitest'
import { ListParticle } from '@/editor/core/draw/particle/ListParticle'
import { ZERO } from '@/editor/dataset/constant/Common'
import { ListStyle, ListType, UlStyle } from '@/editor/dataset/enum/List'
import { KeyMap } from '@/editor/dataset/enum/KeyMap'
import { makeMockCtx, makeMockDraw } from './mock'
import type { IElement, IRow, IElementPosition } from '@/editor/interface/Element'

describe('ListParticle 列表粒子', () => {
  const makeDraw = () =>
    makeMockDraw({
      list: { inheritStyle: false },
      defaultFont: 'Arial',
      defaultSize: 16,
      checkbox: { width: 16, height: 16, gap: 2 },
      defaultTabWidth: 30
    })

  it('getListStyleWidth 非递增样式返回固定值', () => {
    const p = new ListParticle(makeDraw())
    const ctx = makeMockCtx()
    expect(
      p.getListStyleWidth(ctx, [
        { listStyle: ListStyle.DISC } as IElement
      ])
    ).toBe(20)
    expect(
      p.getListStyleWidth(ctx, [
        { listStyle: ListStyle.CHECKBOX } as IElement
      ])
    ).toBe((16 + 10) * 1)
  })

  it('getListStyleWidth 递增样式按数量计算 / 无计数返回 0', () => {
    const p = new ListParticle(makeDraw())
    const ctx = makeMockCtx()
    const decimal: IElement[] = [{ listStyle: ListStyle.DECIMAL, value: ZERO }]
    expect(p.getListStyleWidth(ctx, decimal)).toBe(30)
    const noCount: IElement[] = [
      { listStyle: ListStyle.DECIMAL, value: 'x' }
    ]
    expect(p.getListStyleWidth(ctx, noCount)).toBe(0)
  })

  it('computeListStyle 按 listId 分组计算宽度', () => {
    const p = new ListParticle(makeDraw())
    const ctx = makeMockCtx()
    const elementList: IElement[] = [
      { listId: 'l1', listStyle: ListStyle.DISC } as any,
      { listId: 'l1', listStyle: ListStyle.DISC } as any,
      { listId: 'l2', listStyle: ListStyle.CHECKBOX } as any
    ]
    const map = p.computeListStyle(ctx, elementList)
    expect(map.get('l1')).toBe(20)
    expect(map.get('l2')).toBe(26)
  })

  const makeRow = (
    startElement: Partial<IElement>,
    extra: Partial<IRow> = {}
  ): IRow =>
    ({
      elementList: [startElement as IElement],
      offsetX: 0,
      listIndex: 0,
      ascent: 10,
      ...extra
    } as IRow)

  const makePosition = (startX = 100, startY = 200): IElementPosition =>
    ({ coordinate: { leftTop: [startX, startY] } } as IElementPosition)

  it('drawListStyle 无序列表(UL)绘制符号', () => {
    const p = new ListParticle(makeDraw())
    const ctx = makeMockCtx()
    const row = makeRow({
      value: ZERO,
      listType: ListType.UL,
      listStyle: UlStyle.DISC,
      listLevel: 0
    })
    expect(() => p.drawListStyle(ctx, row, makePosition())).not.toThrow()
  })

  it('drawListStyle 有序列表(OL)绘制序号', () => {
    const p = new ListParticle(makeDraw())
    const ctx = makeMockCtx()
    const row = makeRow(
      { value: ZERO, listType: ListType.OL, listStyle: ListStyle.DECIMAL, listLevel: 0 },
      { listIndex: 2 }
    )
    expect(() => p.drawListStyle(ctx, row, makePosition())).not.toThrow()
  })

  it('drawListStyle 复选框分支调用 CheckboxParticle', () => {
    const draw = makeDraw()
    draw.getCheckboxParticle = () => ({ render: () => {} })
    const p = new ListParticle(draw)
    const ctx = makeMockCtx()
    const row = makeRow({
      value: ZERO,
      listType: ListType.UL,
      listStyle: ListStyle.CHECKBOX,
      listLevel: 0
    })
    expect(() => p.drawListStyle(ctx, row, makePosition())).not.toThrow()
  })

  it('drawListStyle 首元素非 ZERO 早退', () => {
    const p = new ListParticle(makeDraw())
    const ctx = makeMockCtx()
    const row = makeRow({ value: 'x' })
    expect(() => p.drawListStyle(ctx, row, makePosition())).not.toThrow()
  })

  it('KeyMap.PERIOD 为句点', () => {
    expect(KeyMap.PERIOD).toBe('.')
  })
})
