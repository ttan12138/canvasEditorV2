import { describe, expect, it } from 'vitest'
import {
  getImagePadding,
  countImagesBeforeTarget,
  substituteImageNo,
  wrapCaptionLines,
  getCaptionSpacing,
  truncateCaptionLines
} from '@/editor/utils/caption'
import { ElementType } from '@/editor/dataset/enum/Element'
import type { IElement, IImageCaption } from '@/editor/interface/Element'

const makeCtx = (charWidth = 10) =>
  ({
    measureText: (t: string) => ({ width: t.length * charWidth })
  } as any)

describe('caption 题注工具', () => {
  it('getImagePadding 支持四元组/二元组/缺省', () => {
    expect(getImagePadding({} as IElement)).toEqual({
      padT: 0,
      padR: 0,
      padB: 0,
      padL: 0
    })
    expect(getImagePadding({ padding: [1, 2, 3, 4] } as any)).toEqual({
      padT: 1,
      padR: 2,
      padB: 3,
      padL: 4
    })
    expect(getImagePadding({ padding: [5, 6] } as any)).toEqual({
      padT: 0,
      padR: 6,
      padB: 0,
      padL: 5
    })
  })

  it('countImagesBeforeTarget 命中返回-1 / 未命中统计总数(含嵌套表格)', () => {
    const a = { type: ElementType.IMAGE } as IElement
    const b = { type: ElementType.IMAGE } as IElement
    const text = { type: ElementType.TEXT } as IElement
    const list = [a, text, b] as IElement[]
    expect(countImagesBeforeTarget(list, a)).toBe(-1)
    expect(countImagesBeforeTarget(list, b)).toBe(-1)
    const notPresent = { type: ElementType.IMAGE } as IElement
    expect(countImagesBeforeTarget(list, notPresent)).toBe(2)
    const nested = [
      {
        type: ElementType.TABLE,
        trList: [{ tdList: [{ value: [a] as IElement[] }] }]
      } as any
    ] as IElement[]
    expect(countImagesBeforeTarget(nested, notPresent)).toBe(1)
  })

  it('substituteImageNo 替换 / 原样返回', () => {
    expect(substituteImageNo('图{imageNo}', 3)).toBe('图3')
    expect(substituteImageNo('无占位', 3)).toBe('无占位')
  })

  it('wrapCaptionLines 按宽度换行 / 显式换行 / 非正宽度', () => {
    const ctx = makeCtx(10)
    expect(wrapCaptionLines(ctx, 'abcdef', 25)).toEqual(['ab', 'cd', 'ef'])
    expect(wrapCaptionLines(ctx, 'a\nbc', 25)).toEqual(['a', 'bc'])
    expect(wrapCaptionLines(ctx, 'hello', 0)).toEqual(['hello'])
  })

  it('truncateCaptionLines 截断末行 / 不限制 / 不足不截', () => {
    const ctx = makeCtx(10)
    expect(
      truncateCaptionLines(ctx, ['hello', 'world', 'foo'], 2, 100)
    ).toEqual(['hello', 'world…'])
    expect(truncateCaptionLines(ctx, ['hello', 'world', 'foo'], 2, 55)).toEqual([
      'hello',
      'worl…'
    ])
    expect(truncateCaptionLines(ctx, ['a', 'b'], 0, 20)).toEqual(['a', 'b'])
    expect(truncateCaptionLines(ctx, ['a'], 5, 20)).toEqual(['a'])
  })

  it('getCaptionSpacing 四向间距与旧字段回退', () => {
    const c: IImageCaption = {
      marginTop: 1,
      marginBottom: 2,
      paddingLeft: 3,
      paddingRight: 4
    } as any
    expect(getCaptionSpacing(c)).toEqual({
      marginTop: 1,
      marginBottom: 2,
      paddingLeft: 3,
      paddingRight: 4
    })
    const fallback: IImageCaption = { marginY: 5, paddingX: 6 } as any
    expect(getCaptionSpacing(fallback)).toEqual({
      marginTop: 5,
      marginBottom: 5,
      paddingLeft: 6,
      paddingRight: 6
    })
  })
})
