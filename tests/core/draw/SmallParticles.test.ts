import { describe, expect, it, vi } from 'vitest'
import { SubscriptParticle } from '@/editor/core/draw/particle/SubscriptParticle'
import { SuperscriptParticle } from '@/editor/core/draw/particle/SuperscriptParticle'
import { PageBreakParticle } from '@/editor/core/draw/particle/PageBreakParticle'
import { LineBreakParticle } from '@/editor/core/draw/particle/LineBreakParticle'
import { SeparatorParticle } from '@/editor/core/draw/particle/SeparatorParticle'
import { WhiteSpaceParticle } from '@/editor/core/draw/particle/WhiteSpaceParticle'
import { LabelParticle } from '@/editor/core/draw/particle/LabelParticle'
import { HyperlinkParticle } from '@/editor/core/draw/particle/HyperlinkParticle'
import { CheckboxParticle } from '@/editor/core/draw/particle/CheckboxParticle'
import { RadioParticle } from '@/editor/core/draw/particle/RadioParticle'
import { VerticalAlign } from '@/editor/dataset/enum/VerticalAlign'
import { makeMockCtx, makeMockDraw } from './mock'
import type { IElement, IRow, IRowElement, IElementPosition } from '@/editor/interface/Element'

const baseDraw = (extraOpts: any = {}) => {
  const draw = makeMockDraw({
    scale: 1,
    pageBreak: { font: 'Arial', fontSize: 12, lineDash: [3, 3] },
    defaultRowMargin: 1,
    lineBreak: { color: '#000', lineWidth: 1 },
    separator: { lineWidth: 1, strokeStyle: '#000' },
    whiteSpace: { color: '#ccc', radius: 2 },
    label: {
      defaultBackgroundColor: '#eee',
      defaultColor: '#333',
      defaultBorderRadius: 2,
      defaultPadding: [2, 4, 2, 4]
    },
    defaultHyperlinkColor: '#00f',
    checkbox: {
      gap: 2,
      lineWidth: 1,
      fillStyle: '#fff',
      strokeStyle: '#000',
      checkFillStyle: '#0f0',
      checkStrokeStyle: '#000',
      checkMarkColor: '#000',
      verticalAlign: 'bottom'
    },
    radio: {
      gap: 2,
      lineWidth: 1,
      fillStyle: '#0f0',
      strokeStyle: '#000',
      verticalAlign: 'bottom'
    },
    ...extraOpts
  })
  draw.getI18n = () => ({ t: (k: string) => k })
  draw.getDefaultBasicRowMarginHeight = () => 5
  return draw
}

const metrics = {
  width: 20,
  height: 20,
  boundingBoxAscent: 8,
  boundingBoxDescent: 2
}

describe('SubscriptParticle', () => {
  it('getOffsetY 向下偏移半字高', () => {
    const p = new SubscriptParticle()
    expect(p.getOffsetY({ metrics: { height: 20 } } as any)).toBe(10)
  })
  it('render 带/不带 color', () => {
    const p = new SubscriptParticle()
    const ctx = makeMockCtx()
    expect(() =>
      p.render(ctx, { style: '12px', value: 'x', metrics } as any, 0, 0)
    ).not.toThrow()
    expect(() =>
      p.render(
        ctx,
        { style: '12px', color: '#f00', value: 'x', metrics } as any,
        0,
        0
      )
    ).not.toThrow()
  })
})

describe('SuperscriptParticle', () => {
  it('getOffsetY 向上偏移半字高', () => {
    const p = new SuperscriptParticle()
    expect(p.getOffsetY({ metrics: { height: 20 } } as any)).toBe(-10)
  })
  it('render 带/不带 color', () => {
    const p = new SuperscriptParticle()
    const ctx = makeMockCtx()
    expect(() =>
      p.render(ctx, { style: '12px', value: 'x', metrics } as any, 0, 0)
    ).not.toThrow()
    expect(() =>
      p.render(
        ctx,
        { style: '12px', color: '#f00', value: 'x', metrics } as any,
        0,
        0
      )
    ).not.toThrow()
  })
})

describe('PageBreakParticle', () => {
  it('render 绘制分隔线与文字', () => {
    const p = new PageBreakParticle(baseDraw())
    const ctx = makeMockCtx()
    expect(() =>
      p.render(
        ctx,
        { width: 200, metrics: { width: 200, height: 20 } } as any,
        0,
        0
      )
    ).not.toThrow()
  })
})

describe('LineBreakParticle', () => {
  it('render 回车折线', () => {
    const p = new LineBreakParticle(baseDraw())
    const ctx = makeMockCtx()
    expect(() =>
      p.render(ctx, { metrics } as any, 0, 0)
    ).not.toThrow()
  })
})

describe('SeparatorParticle', () => {
  it('render 默认样式', () => {
    const p = new SeparatorParticle(baseDraw())
    const ctx = makeMockCtx()
    expect(() =>
      p.render(ctx, { width: 100, metrics } as any, 0, 0)
    ).not.toThrow()
  })
  it('render 元素自定义 color + dashArray', () => {
    const p = new SeparatorParticle(baseDraw())
    const ctx = makeMockCtx()
    expect(() =>
      p.render(
        ctx,
        {
          width: 100,
          metrics,
          color: '#f00',
          lineWidth: 2,
          dashArray: [4, 4]
        } as any,
        0,
        0
      )
    ).not.toThrow()
  })
})

describe('WhiteSpaceParticle', () => {
  it('render 圆点', () => {
    const p = new WhiteSpaceParticle(baseDraw())
    const ctx = makeMockCtx()
    expect(() =>
      p.render(ctx, { metrics } as any, 0, 0)
    ).not.toThrow()
  })
})

describe('LabelParticle', () => {
  it('render 默认样式 + 自定义 label', () => {
    const p = new LabelParticle(baseDraw())
    const ctx = makeMockCtx()
    expect(() =>
      p.render(ctx, { style: '12px', value: 'x', metrics } as any, 0, 0)
    ).not.toThrow()
    expect(() =>
      p.render(
        ctx,
        {
          style: '12px',
          value: 'x',
          metrics,
          label: {
            backgroundColor: '#ff0',
            color: '#00f',
            borderRadius: 3,
            padding: [1, 2, 1, 2]
          }
        } as any,
        0,
        0
      )
    ).not.toThrow()
  })
})

describe('HyperlinkParticle', () => {
  it('render 默认下划线 + 自定义 color', () => {
    const p = new HyperlinkParticle(baseDraw())
    const ctx = makeMockCtx()
    const el = { style: '12px', value: 'x' } as IElement
    p.render(ctx, el as any, 0, 0)
    expect(el.color).toBe('#00f')
    const el2 = { style: '12px', value: 'x', color: '#f00' } as IElement
    expect(() => p.render(ctx, el2 as any, 0, 0)).not.toThrow()
  })
  it('drawHyperlinkPopup / clearHyperlinkPopup', () => {
    const p = new HyperlinkParticle(baseDraw())
    const position = {
      coordinate: { leftTop: [10, 20] },
      lineHeight: 20
    } as IElementPosition
    const el = { url: 'http://x.com' } as IElement
    expect(() => p.drawHyperlinkPopup(el, position)).not.toThrow()
    expect(() => p.clearHyperlinkPopup()).not.toThrow()
  })
  it('openHyperlink 不抛错', () => {
    const p = new HyperlinkParticle(baseDraw())
    const spy = vi.spyOn(window, 'open').mockReturnValue(null)
    expect(() =>
      p.openHyperlink({ url: 'http://x.com' } as IElement)
    ).not.toThrow()
    spy.mockRestore()
  })
})

describe('CheckboxParticle', () => {
  const makeRow = (index: number, el: any, next?: any): IRow =>
    ({ elementList: next ? [el, next] : [el] }) as IRow

  it('render 选中/未选中', () => {
    const p = new CheckboxParticle(baseDraw())
    const ctx = makeMockCtx()
    const checked: IRowElement = { metrics, checkbox: { value: true } } as any
    const unchecked: IRowElement = {
      metrics,
      checkbox: { value: false }
    } as any
    expect(() =>
      p.render({ ctx, x: 0, y: 0, row: makeRow(0, checked), index: 0 } as any)
    ).not.toThrow()
    expect(() =>
      p.render({
        ctx,
        x: 0,
        y: 0,
        row: makeRow(0, unchecked),
        index: 0
      } as any)
    ).not.toThrow()
  })

  it('render verticalAlign=TOP 垂直调整分支', () => {
    const p = new CheckboxParticle(
      baseDraw({ checkbox: { verticalAlign: VerticalAlign.TOP } })
    )
    const ctx = makeMockCtx()
    const el: IRowElement = { metrics, checkbox: { value: true } } as any
    const next: IRowElement = {
      value: 'a',
      metrics: { width: 10, height: 30, boundingBoxAscent: 25, boundingBoxDescent: 2 }
    } as any
    expect(() =>
      p.render({ ctx, x: 0, y: 0, row: makeRow(0, el, next), index: 0 } as any)
    ).not.toThrow()
  })

  it('setSelect 切换 checkbox.value / 初始化', () => {
    const p = new CheckboxParticle(baseDraw())
    const withCb = { checkbox: { value: false } } as IElement
    p.setSelect(withCb)
    expect(withCb.checkbox!.value).toBe(true)
    const noCb = {} as IElement
    p.setSelect(noCb)
    expect(noCb.checkbox).toEqual({ value: true })
  })
})

describe('RadioParticle', () => {
  const makeRow = (index: number, el: any, next?: any): IRow =>
    ({ elementList: next ? [el, next] : [el] }) as IRow

  it('render 选中/未选中', () => {
    const p = new RadioParticle(baseDraw())
    const ctx = makeMockCtx()
    const checked: IRowElement = { metrics, radio: { value: true } } as any
    const unchecked: IRowElement = { metrics, radio: { value: false } } as any
    expect(() =>
      p.render({ ctx, x: 0, y: 0, row: makeRow(0, checked), index: 0 } as any)
    ).not.toThrow()
    expect(() =>
      p.render({
        ctx,
        x: 0,
        y: 0,
        row: makeRow(0, unchecked),
        index: 0
      } as any)
    ).not.toThrow()
  })

  it('render verticalAlign=TOP 垂直调整分支', () => {
    const p = new RadioParticle(
      baseDraw({ radio: { verticalAlign: VerticalAlign.TOP } })
    )
    const ctx = makeMockCtx()
    const el: IRowElement = { metrics, radio: { value: true } } as any
    const next: IRowElement = {
      value: 'a',
      metrics: { width: 10, height: 30, boundingBoxAscent: 25, boundingBoxDescent: 2 }
    } as any
    expect(() =>
      p.render({ ctx, x: 0, y: 0, row: makeRow(0, el, next), index: 0 } as any)
    ).not.toThrow()
  })

  it('setSelect 切换 radio.value / 初始化', () => {
    const p = new RadioParticle(baseDraw())
    const withR = { radio: { value: false } } as IElement
    p.setSelect(withR)
    expect(withR.radio!.value).toBe(true)
    const noR = {} as IElement
    p.setSelect(noR)
    expect(noR.radio).toEqual({ value: true })
  })
})
