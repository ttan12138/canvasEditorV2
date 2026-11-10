import { describe, expect, it } from 'vitest'
import { getParagraphNo } from '@/editor/utils/paragraph'
import { ZERO } from '@/editor/dataset/constant/Common'
import type { IElement } from '@/editor/interface/Element'

describe('utils/paragraph getParagraphNo', () => {
  it('单行文本段落号为 0', () => {
    const list: IElement[] = [{ value: 'hello' }, { value: '\n' }]
    expect(getParagraphNo(list, 2)).toBe(0)
  })

  it('遇到 ZERO 换行占位符时段落号 +1', () => {
    const list: IElement[] = [
      { value: 'a' },
      { value: ZERO },
      { value: 'b' }
    ]
    expect(getParagraphNo(list, 3)).toBe(1)
  })

  it('多段文本段落号累计', () => {
    const list: IElement[] = [
      { value: 'a' },
      { value: ZERO },
      { value: 'b' },
      { value: ZERO },
      { value: 'c' }
    ]
    expect(getParagraphNo(list, 5)).toBe(2)
  })

  it('index 为 0 时返回 0', () => {
    const list: IElement[] = [{ value: 'a' }]
    expect(getParagraphNo(list, 0)).toBe(0)
  })
})
