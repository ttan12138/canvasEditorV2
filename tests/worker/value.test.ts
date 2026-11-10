import { describe, it, expect } from 'vitest'
import { getValueData } from '../../src/editor/core/worker/works/value'
import type { IEditorData } from '../../src/editor/interface/Editor'
import type { IGetValueOption } from '../../src/editor/interface/Draw'
import type { IElement } from '../../src/editor/interface/Element'

function makeData(main: IElement[]): Required<IEditorData> {
  return {
    header: [],
    main,
    footer: []
  } as Required<IEditorData>
}

describe('worker/works/value.getValueData', () => {
  it('返回 header/main/footer 三段结构', () => {
    const data = makeData([{ value: '正文' }])
    const result = getValueData(data, {} as IGetValueOption)
    expect(Object.keys(result).sort()).toEqual(['footer', 'header', 'main'])
    expect(result.main.length).toBe(1)
    expect(result.header).toEqual([])
    expect(result.footer).toEqual([])
  })

  it('main 段走 isClassifyArea 路径并保留文本', () => {
    const data = makeData([{ value: 'a' }, { value: 'b' }])
    const result = getValueData(data, {} as IGetValueOption)
    // isClassifyArea 下相邻纯文本会被合并为单个元素
    expect(result.main.map(e => e.value).join('')).toBe('ab')
  })

  it('extraPickAttrs 透传给 zipElementList', () => {
    const data = makeData([{ value: 'a', custom: 'keep' } as any])
    const result = getValueData(data, {
      extraPickAttrs: ['custom']
    } as IGetValueOption)
    expect((result.main[0] as any).custom).toBe('keep')
  })

  it('空文档不产生异常', () => {
    const data = makeData([])
    const result = getValueData(data, {} as IGetValueOption)
    expect(result.main).toEqual([])
    expect(result.header).toEqual([])
    expect(result.footer).toEqual([])
  })
})