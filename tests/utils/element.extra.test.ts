import { describe, expect, it } from 'vitest'
import {
  visitElementTree,
  groupElementListByRowFlex,
  pickSurroundElementList,
  deleteSurroundElementList,
  getNonHideElementIndex,
  splitListElement,
  convertTextNodeToElement
} from '@/editor/utils/element'
import { ElementType } from '@/editor/dataset/enum/Element'
import { LocationPosition, ImageDisplay } from '@/editor/dataset/enum/Common'
import { RowFlex } from '@/editor/dataset/enum/Row'
import type { IElement } from '@/editor/interface/Element'

describe('element 工具(补充覆盖)', () => {
  it('visitElementTree 遍历扁平/表格/valueList', () => {
    const table = {
      type: ElementType.TABLE,
      trList: [{ tdList: [{ value: [{ value: 'x' } as IElement] }] }]
    } as any
    const withValueList = { valueList: [{ value: 'v' } as IElement] } as any
    const flat = { value: 'a' } as IElement
    const seen: (string | undefined)[] = []
    visitElementTree([flat, table, withValueList], el =>
      seen.push(el.value)
    )
    expect(seen).toContain('a')
    expect(seen).toContain('x')
    expect(seen).toContain('v')
  })

  it('groupElementListByRowFlex 分组/空/块元素断开/不同对齐断开', () => {
    expect(groupElementListByRowFlex([])).toEqual([])
    const e1 = { value: 'a', rowFlex: RowFlex.CENTER } as any
    const e2 = { value: 'b', rowFlex: RowFlex.CENTER } as any
    const merged = groupElementListByRowFlex([e1, e2])
    expect(merged.length).toBe(1)
    const block = {
      value: 'c',
      type: ElementType.IMAGE,
      imgDisplay: ImageDisplay.INLINE
    } as any
    expect(groupElementListByRowFlex([e1, block]).length).toBe(2)
    const diff = { value: 'd', rowFlex: RowFlex.RIGHT } as any
    expect(groupElementListByRowFlex([e1, diff]).length).toBe(2)
  })

  it('pickSurroundElementList 仅返回环绕图片', () => {
    const surround = { imgDisplay: ImageDisplay.SURROUND } as any
    const normal = { value: 'a' } as any
    expect(pickSurroundElementList([normal, surround, normal])).toEqual([
      surround
    ])
  })

  it('deleteSurroundElementList 按 pageNo 删除', () => {
    const s1 = {
      imgFloatPosition: { pageNo: 1 },
      imgDisplay: ImageDisplay.SURROUND
    } as any
    const s2 = {
      imgFloatPosition: { pageNo: 2 },
      imgDisplay: ImageDisplay.SURROUND
    } as any
    const list = [s1, s2]
    deleteSurroundElementList(list, 1)
    expect(list).toEqual([s2])
  })

  it('getNonHideElementIndex 隐藏元素跳过 / 方向 / 回调 / 无前驱返回-1', () => {
    const a = { value: 'a' } as any
    const hidden = { value: 'h', hide: true } as any
    const b = { value: 'b' } as any
    const list = [a, hidden, b]
    expect(getNonHideElementIndex(list, 0)).toBe(0)
    expect(getNonHideElementIndex(list, 1, LocationPosition.BEFORE)).toBe(0)
    expect(getNonHideElementIndex(list, 1, LocationPosition.AFTER)).toBe(2)
    const controlled = { value: 'c', control: { hide: true } } as any
    expect(
      getNonHideElementIndex([a, controlled, b], 1, LocationPosition.BEFORE)
    ).toBe(0)
    expect(getNonHideElementIndex([hidden], 0, LocationPosition.BEFORE)).toBe(-1)
    expect(
      getNonHideElementIndex(list, 2, LocationPosition.BEFORE, el =>
        el.value === 'a'
      )
    ).toBe(2)
  })

  it('splitListElement 按 listWrap / 换行拆分', () => {
    const map = splitListElement([
      { value: 'a' } as any,
      { value: 'b', listWrap: true } as any,
      { value: 'c' } as any
    ])
    expect(map.get(0)?.length).toBe(3)
    const map2 = splitListElement([{ value: 'x\ny' } as any])
    expect(map2.size).toBe(2)
    expect(map2.get(0)?.[0]?.value).toBe('x')
    expect(map2.get(1)?.[0]?.value).toBe('y')
  })

  it('convertTextNodeToElement 文本节点转元素 / 非文本节点 / STYLE 返回 null', () => {
    const span = document.createElement('span')
    span.textContent = 'hello'
    const textNode = span.firstChild!
    expect(convertTextNodeToElement(textNode)?.value).toBe('hello')
    expect(convertTextNodeToElement(span)).toBeNull()
    const style = document.createElement('style')
    style.textContent = 'x'
    expect(convertTextNodeToElement(style.firstChild!)).toBeNull()
  })
})
