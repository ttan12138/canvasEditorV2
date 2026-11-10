import { describe, it, expect } from 'vitest'
import { getGroupIds } from '../../src/editor/core/worker/works/group'
import type { IElement } from '../../src/editor/interface/Element'

describe('worker/works/group.getGroupIds', () => {
  it('无分组信息时返回空数组', () => {
    const elementList: IElement[] = [{ value: 'a' }, { value: 'b' }]
    expect(getGroupIds(elementList)).toEqual([])
  })

  it('收集普通元素的 groupIds', () => {
    const elementList: IElement[] = [
      { value: 'a', groupIds: ['g1'] },
      { value: 'b', groupIds: ['g2'] }
    ]
    expect(getGroupIds(elementList).sort()).toEqual(['g1', 'g2'])
  })

  it('同一 groupId 去重', () => {
    const elementList: IElement[] = [
      { value: 'a', groupIds: ['g1'] },
      { value: 'b', groupIds: ['g1', 'g2'] }
    ]
    expect(getGroupIds(elementList).sort()).toEqual(['g1', 'g2'])
  })

  it('递归收集表格单元格内的 groupIds', () => {
    const elementList: IElement[] = [
      {
        type: 'table',
        trList: [
          {
            tdList: [
              { value: [{ value: 'x', groupIds: ['inside'] }] } as any
            ]
          } as any
        ]
      } as any
    ]
    expect(getGroupIds(elementList)).toEqual(['inside'])
  })

  it('嵌套表格深度递归不遗漏', () => {
    const elementList: IElement[] = [
      {
        type: 'table',
        trList: [
          {
            tdList: [
              {
                value: [
                  {
                    type: 'table',
                    trList: [
                      {
                        tdList: [
                          { value: [{ value: 'y', groupIds: ['deep'] }] } as any
                        ]
                      } as any
                    ]
                  } as any
                ]
              } as any
            ]
          } as any
        ]
      } as any
    ]
    expect(getGroupIds(elementList)).toEqual(['deep'])
  })
})
