import { describe, expect, it } from 'vitest'
import { Underline } from '@/editor/core/draw/richtext/Underline'
import { Highlight } from '@/editor/core/draw/richtext/Highlight'
import { Strikeout } from '@/editor/core/draw/richtext/Strikeout'
import { ControlBorder } from '@/editor/core/draw/control/richtext/Border'
import { TextDecorationStyle, DashType } from '@/editor/dataset/enum/Text'
import { makeMockCtx, makeMockDraw } from './mock'

describe('Underline', () => {
  const build = () =>
    new Underline(
      makeMockDraw({
        scale: 1,
        underlineColor: '#000',
        control: { borderWidth: 1, borderColor: '#000' }
      })
    )

  it('render 各装饰样式', () => {
    const styles = [
      TextDecorationStyle.SOLID,
      TextDecorationStyle.WAVY,
      TextDecorationStyle.DOUBLE,
      TextDecorationStyle.DASHED,
      TextDecorationStyle.DOTTED
    ]
    for (const style of styles) {
      const u = build()
      const ctx = makeMockCtx()
      ;(u as any).fillRect = { x: 0, y: 10, width: 100, height: 20 }
      ;(u as any).fillColor = '#f00'
      ;(u as any).fillDecorationStyle = style
      expect(() => u.render(ctx)).not.toThrow()
    }
  })

  it('render fillRect 无宽度时早退 + clearFillInfo 复位', () => {
    const u = build()
    const ctx = makeMockCtx()
    expect(() => u.render(ctx)).not.toThrow()
    expect((u as any).fillRect.width).toBe(0)
  })
})

describe('Highlight', () => {
  it('render 高亮填充', () => {
    const p = new Highlight(
      makeMockDraw({ scale: 1, highlightAlpha: 0.5 })
    )
    const ctx = makeMockCtx()
    ;(p as any).fillRect = { x: 0, y: 10, width: 100, height: 20 }
    ;(p as any).fillColor = '#ff0'
    expect(() => p.render(ctx)).not.toThrow()
  })
  it('render 无宽度早退', () => {
    const p = new Highlight(makeMockDraw({ highlightAlpha: 0.5 }))
    expect(() => p.render(makeMockCtx())).not.toThrow()
  })
})

describe('Strikeout', () => {
  it('render 删除线', () => {
    const p = new Strikeout(
      makeMockDraw({ scale: 1, strikeoutColor: '#000' })
    )
    const ctx = makeMockCtx()
    ;(p as any).fillRect = { x: 0, y: 10, width: 100, height: 0 }
    ;(p as any).fillColor = '#f00'
    expect(() => p.render(ctx)).not.toThrow()
  })
  it('render 无宽度早退', () => {
    const p = new Strikeout(makeMockDraw({ strikeoutColor: '#000' }))
    expect(() => p.render(makeMockCtx())).not.toThrow()
  })
})

describe('ControlBorder', () => {
  const build = () =>
    new ControlBorder(
      makeMockDraw({
        scale: 1,
        control: { borderWidth: 1, borderColor: '#000' }
      })
    )

  it('render 绘制边框', () => {
    const p = build()
    const ctx = makeMockCtx()
    ;(p as any).borderRect = { x: 0, y: 0, width: 100, height: 20 }
    expect(() => p.render(ctx)).not.toThrow()
    expect((p as any).borderRect.width).toBe(0)
  })
  it('clearBorderInfo / recordBorderInfo', () => {
    const p = build()
    const r1 = p.clearBorderInfo()
    expect(r1.width).toBe(0)
    p.recordBorderInfo(0, 0, 40, 20)
    expect((p as any).borderRect.width).toBe(40)
    p.recordBorderInfo(0, 0, 60, 20)
    expect((p as any).borderRect.width).toBe(100)
    expect((p as any).borderRect.height).toBe(20)
  })
  it('render 无宽度早退', () => {
    const p = build()
    expect(() => p.render(makeMockCtx())).not.toThrow()
  })
})
