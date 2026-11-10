import { describe, expect, it } from 'vitest'
import { Group } from '@/editor/core/draw/interactive/Group'
import { EditorZone } from '@/editor/dataset/enum/Editor'
import { ElementType } from '@/editor/dataset/enum/Element'
import { makeMockCtx, makeMockDraw } from './mock'
import type { IElement } from '@/editor/interface/Element'

const groupDraw = (over: any = {}) => {
  const draw = makeMockDraw({
    group: {
      backgroundColor: '#eee',
      opacity: 0.3,
      activeOpacity: 0.5,
      activeBackgroundColor: '#ddd'
    },
    ...over
  })
  draw.getZone = () => ({ getZone: () => EditorZone.MAIN }) as any
  draw.getRange = () =>
    ({
      getSelection: () => null,
      getRange: () => ({ startIndex: 0, endIndex: 0 }),
      getIsCollapsed: () => true,
      getSelectionElementList: () => [],
      setRange: () => {}
    }) as any
  draw.getElementList = () => [] as any
  return draw
}

describe('Group', () => {
  it('setGroup 非主体/无选区时返回 null', () => {
    const draw = groupDraw()
    draw.getZone = () => ({ getZone: () => EditorZone.HEADER }) as any
    const p = new Group(draw)
    expect(p.setGroup()).toBeNull()
    // 主体但无选区
    const draw2 = groupDraw()
    draw2.getRange = () =>
      ({ getSelection: () => null, getRange: () => ({}) }) as any
    const p2 = new Group(draw2)
    expect(p2.setGroup()).toBeNull()
  })

  it('setGroup 成功成组', () => {
    const draw = groupDraw()
    draw.getRange = () =>
      ({
        getSelection: () => [{ value: 'a' } as any],
        getRange: () => ({})
      }) as any
    const p = new Group(draw)
    const id = p.setGroup()
    expect(typeof id).toBe('string')
  })

  it('getElementListByGroupId 普通/表格/无匹配', () => {
    const p = new Group(groupDraw())
    const list: IElement[] = [{ value: 'a', groupIds: ['g'] } as any]
    expect(p.getElementListByGroupId(list, 'g')).toHaveLength(1)
    expect(p.getElementListByGroupId(list, 'x')).toHaveLength(0)
    // 表格递归
    const tableList: IElement[] = [
      {
        type: ElementType.TABLE,
        trList: [
          { tdList: [{ id: 't', value: [{ value: 'b', groupIds: ['g'] } as any] }] }
        ]
      } as any
    ]
    const r = p.getElementListByGroupId(tableList, 'g')
    expect(r).toHaveLength(1)
  })

  it('deleteGroup 空/有匹配', () => {
    const draw = groupDraw()
    draw.getOriginalMainElementList = () => [] as any
    const p = new Group(draw)
    expect(() => p.deleteGroup('g')).not.toThrow()
    const draw2 = groupDraw()
    const arr: IElement[] = [{ value: 'a', groupIds: ['g'] } as any]
    draw2.getOriginalMainElementList = () => arr as any
    const p2 = new Group(draw2)
    p2.deleteGroup('g')
    expect((arr[0] as any).groupIds).toBeUndefined()
  })

  it('getContextByGroupId 普通/表格/无匹配', () => {
    const p = new Group(groupDraw())
    const list: IElement[] = [{ value: 'a', groupIds: ['g'] } as any]
    expect(p.getContextByGroupId(list, 'g')).toMatchObject({
      isTable: false,
      startIndex: 0
    })
    expect(p.getContextByGroupId(list, 'x')).toBeNull()
    const tableList: IElement[] = [
      {
        type: ElementType.TABLE,
        tableId: 'tbl',
        trList: [
          {
            id: 'tr',
            tdList: [
              {
                id: 'td',
                value: [{ value: 'b', groupIds: ['g'] } as any]
              }
            ]
          }
        ]
      } as any
    ]
    const ctx = p.getContextByGroupId(tableList, 'g')
    expect(ctx?.isTable).toBe(true)
  })

  it('recordFillInfo / clearFillInfo', () => {
    const p = new Group(groupDraw())
    const elNoGroup = { value: 'a' } as IElement
    p.recordFillInfo(elNoGroup, 0, 0, 10, 10)
    expect(p['fillRectMap'].size).toBe(0)
    const elGroup = { value: 'b', groupIds: ['g'] } as IElement
    p.recordFillInfo(elGroup, 0, 0, 10, 10)
    expect(p['fillRectMap'].size).toBe(1)
    p.recordFillInfo(elGroup, 10, 0, 10, 10)
    expect(p['fillRectMap'].get('g')!.width).toBe(20)
    p.clearFillInfo()
    expect(p['fillRectMap'].size).toBe(0)
  })

  it('render 锚定/非锚定分支', () => {
    const draw = groupDraw()
    draw.getElementList = () =>
      [{ value: 'a', groupIds: ['g'] } as any] as any
    draw.getRange = () =>
      ({
        getRange: () => ({ startIndex: 0, endIndex: 0 }),
        getSelection: () => null
      }) as any
    const p = new Group(draw)
    p.recordFillInfo({ value: 'b', groupIds: ['g'] } as any, 0, 0, 10, 10)
    p.recordFillInfo({ value: 'c', groupIds: ['h'] } as any, 20, 0, 10, 10)
    expect(() => p.render(makeMockCtx())).not.toThrow()
    // 空 map 早退
    p.clearFillInfo()
    expect(() => p.render(makeMockCtx())).not.toThrow()
  })
})
