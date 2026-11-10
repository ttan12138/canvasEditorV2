import { describe, it, expect } from 'vitest'
import { getCatalog } from '../../src/editor/core/worker/works/catalog'
import type { IElement, IElementPosition } from '../../src/editor/interface/Element'

function pos(n: number): IElementPosition {
  return { pageNo: n } as unknown as IElementPosition
}

function titleBlock(titleId: string, level: string, text: string): IElement[] {
  return [
    { titleId, level: level as any, value: '' },
    { titleId, value: text }
  ]
}

describe('worker/works/catalog.getCatalog', () => {
  it('无标题时返回 null', () => {
    const elementList: IElement[] = [{ value: '普通文本' }]
    const positionList = elementList.map(() => pos(0))
    expect(getCatalog({ elementList, positionList })).toBeNull()
  })

  it('解析单个一级标题', () => {
    const elementList = titleBlock('t1', 'first', '第一章')
    const positionList = elementList.map((_, i) => pos(i))
    const catalog = getCatalog({ elementList, positionList })
    expect(catalog).not.toBeNull()
    expect(catalog!.length).toBe(1)
    expect(catalog![0]).toMatchObject({
      id: 't1',
      name: '第一章',
      level: 'first',
      pageNo: 0
    })
    expect(catalog![0].subCatalog).toEqual([])
  })

  it('同级标题并列', () => {
    const elementList = [
      ...titleBlock('t1', 'first', '一'),
      ...titleBlock('t2', 'first', '二')
    ]
    const positionList = elementList.map((_, i) => pos(i))
    const catalog = getCatalog({ elementList, positionList })
    expect(catalog!.length).toBe(2)
    expect(catalog!.map(c => c.name)).toEqual(['一', '二'])
  })

  it('低级别标题归入上一级标题的子目录', () => {
    const elementList = [
      ...titleBlock('t1', 'first', '一'),
      ...titleBlock('t2', 'second', '1.1')
    ]
    const positionList = elementList.map((_, i) => pos(i))
    const catalog = getCatalog({ elementList, positionList })
    expect(catalog!.length).toBe(1)
    expect(catalog![0].name).toBe('一')
    expect(catalog![0].subCatalog.length).toBe(1)
    expect(catalog![0].subCatalog[0]).toMatchObject({
      id: 't2',
      name: '1.1',
      level: 'second'
    })
  })

  it('跨两级嵌套：二三级归属各自父级', () => {
    const elementList = [
      ...titleBlock('t1', 'first', '一'),
      ...titleBlock('t2', 'second', '1.1'),
      ...titleBlock('t3', 'third', '1.1.1')
    ]
    const positionList = elementList.map((_, i) => pos(i))
    const catalog = getCatalog({ elementList, positionList })
    expect(catalog!.length).toBe(1)
    const sub = catalog![0].subCatalog
    expect(sub.length).toBe(1)
    expect(sub[0].subCatalog.length).toBe(1)
    expect(sub[0].subCatalog[0].name).toBe('1.1.1')
  })

  it('表格内嵌标题也能被收集', () => {
    const innerTitle = titleBlock('tt', 'first', '表内标题')
    const elementList: IElement[] = [
      {
        type: 'table',
        trList: [
          {
            tdList: [
              {
                value: innerTitle
              } as any
            ]
          } as any
        ]
      } as any
    ]
    const positionList = elementList.map(() => pos(0))
    const catalog = getCatalog({ elementList, positionList })
    expect(catalog).not.toBeNull()
    expect(catalog!.length).toBe(1)
    expect(catalog![0].name).toBe('表内标题')
  })
})
