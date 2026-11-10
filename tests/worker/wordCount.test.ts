import { describe, it, expect } from 'vitest'
import {
  pickText,
  groupText,
  countWords
} from '../../src/editor/core/worker/works/wordCount'
import type { IElement } from '../../src/editor/interface/Element'
import { TraceType } from '../../src/editor/dataset/enum/Trace'

describe('worker/works/wordCount.pickText', () => {
  it('普通文本直接拼接', () => {
    const list: IElement[] = [{ value: 'Hello' }, { value: ' ' }, { value: '世界' }]
    expect(pickText(list)).toBe('Hello 世界')
  })

  it('被删除的留痕元素不计入', () => {
    const list: IElement[] = [
      { value: 'a' },
      { value: 'x', trace: [{ type: TraceType.DELETED } as any] },
      { value: 'b' }
    ]
    expect(pickText(list)).toBe('ab')
  })

  it('隐藏区域不计入', () => {
    const list: IElement[] = [
      { value: 'a' },
      { value: 'hide', area: { hide: true } as any },
      { value: 'b' }
    ]
    expect(pickText(list)).toBe('ab')
  })

  it('图片等无 value 文本元素跳过', () => {
    const list: IElement[] = [{ value: 'a' }, { type: 'image' } as any, { value: 'b' }]
    expect(pickText(list)).toBe('ab')
  })

  it('控件 VALUE 组件文本被计入', () => {
    const list: IElement[] = [
      { controlId: 'c1', controlComponent: 'value', value: 'ab' },
      { controlId: 'c1', controlComponent: 'value', value: 'cd' }
    ]
    expect(pickText(list)).toBe('abcd')
  })

  it('隐藏控件不计入', () => {
    const list: IElement[] = [
      { controlId: 'c1', controlComponent: 'value', value: 'x', control: { hide: true } as any }
    ]
    expect(pickText(list)).toBe('')
  })

  it('超链接文本被计入', () => {
    const list: IElement[] = [
      { type: 'hyperlink', hyperlinkId: 'h1', value: '' },
      { value: '链接', hyperlinkId: 'h1' }
    ]
    expect(pickText(list)).toBe('链接')
  })

  it('表格内文本被递归计入', () => {
    const list: IElement[] = [
      {
        type: 'table',
        trList: [
          {
            tdList: [{ value: [{ value: '格' }, { value: '内' }] } as any]
          } as any
        ]
      } as any
    ]
    expect(pickText(list)).toBe('格内')
  })

  it('LaTeX 内容计入字数', () => {
    const list: IElement[] = [{ type: 'latex', value: '\\sum' } as any]
    expect(pickText(list)).toBe('\\sum')
  })
})

describe('worker/works/wordCount.groupText', () => {
  it('半角英文单词作为一个整体', () => {
    expect(groupText('Hello')).toEqual(['Hello'])
  })

  it('空白字符切分为独立项', () => {
    expect(groupText('a b c')).toEqual(['a', 'b', 'c'])
  })

  it('全角空格同样切分', () => {
    expect(groupText('中　文')).toEqual(['中', '文'])
  })

  it('中文按单字符独立计数', () => {
    expect(groupText('世界')).toEqual(['世', '界'])
  })

  it('半角标点与字母数字连为一个 token', () => {
    expect(groupText('a.b')).toEqual(['a.b'])
  })

  it('{E_k} 形式的半角组合保持为单个 token', () => {
    expect(groupText('{E_k}')).toEqual(['{E_k}'])
  })
})

describe('worker/works/wordCount.countWords', () => {
  it('混合中英文统计：Hello 世界 => 3', () => {
    const list: IElement[] = [{ value: 'Hello 世界' }]
    expect(countWords(list)).toBe(3)
  })

  it('零宽字符被处理：前导去除、中间替换为换行切分', () => {
    const ZERO = '​'
    // 中间零宽字符拆成两个 token
    const list: IElement[] = [{ value: `ab${ZERO}cd` }]
    expect(countWords(list)).toBe(2)
  })
})
