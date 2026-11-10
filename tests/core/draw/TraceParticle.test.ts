import { describe, expect, it } from 'vitest'
import { TraceParticle } from '@/editor/core/draw/particle/TraceParticle'
import { ElementType } from '@/editor/dataset/enum/Element'
import { EditorMode } from '@/editor/dataset/enum/Editor'
import { TraceType } from '@/editor/dataset/enum/Trace'
import { makeMockCtx, makeMockDraw } from './mock'
import type {
  IElement,
  IRow,
  IElementMetrics,
  IElementPosition
} from '@/editor/interface/Element'

const makeTraceDraw = (over: any = {}) => {
  const draw = makeMockDraw({
    scale: 1,
    trace: {
      disabled: false,
      author: 'tester',
      lineWidth: 1,
      insertColor: '#00f',
      deleteColor: '#f00'
    },
    group: { deletable: true },
    modeRule: { [EditorMode.EDIT]: { controlDeletableDisabled: false } },
    ...over
  })
  draw.isTraceMode = () => over.isTraceMode ?? false
  draw.getTextParticle = () => ({
    measureBasisWord: () => ({ actualBoundingBoxDescent: 2 })
  })
  draw.getElementFont = () => '12px Arial'
  draw.getSubscriptParticle = () => ({ getOffsetY: () => 0 })
  draw.getSuperscriptParticle = () => ({ getOffsetY: () => 0 })
  draw.getElementRowMargin = () => 0
  draw.getPageOffset = () => ({ x: 0, y: 0 })
  draw.getI18n = () => ({ t: (k: string) => k })
  draw.isDesignMode = () => false
  draw.getControl = () => ({ getIsRangeWithinControl: () => false })
  draw.getMode = () => EditorMode.EDIT
  draw.getTd = () => undefined
  return draw
}

describe('TraceParticle 留痕', () => {
  it('isTraceHidden 软删除在非留痕模式隐藏', () => {
    const draw = makeTraceDraw({ isTraceMode: false })
    const p = new TraceParticle(draw)
    expect(
      p.isTraceHidden({ trace: [{ type: TraceType.DELETED }] } as any)
    ).toBe(true)
    expect(
      p.isTraceHidden({ trace: [{ type: TraceType.INSERTED }] } as any)
    ).toBe(false)
  })

  it('isTraceHidden 留痕模式下不隐藏', () => {
    const draw = makeTraceDraw({ isTraceMode: true })
    const p = new TraceParticle(draw)
    expect(
      p.isTraceHidden({ trace: [{ type: TraceType.DELETED }] } as any)
    ).toBe(false)
  })

  it('markElementListInserted 追加 INSERTED 记录', () => {
    const draw = makeTraceDraw({ isTraceMode: true })
    const p = new TraceParticle(draw)
    const list = [{ value: 'a' }] as IElement[]
    p.markElementListInserted(list)
    expect(list[0].trace?.[0].type).toBe(TraceType.INSERTED)
  })

  it('markElementListDeleted 忽略规则时直接打标', () => {
    const draw = makeTraceDraw({ isTraceMode: true })
    const p = new TraceParticle(draw)
    const list = [{ value: 'a' }] as IElement[]
    const res = p.markElementListDeleted(list, {
      isIgnoreDeletedRule: true
    })
    expect(res[0].trace?.[0].type).toBe(TraceType.DELETED)
  })

  it('markElementListDeleted trace.disabled 时不打标', () => {
    const draw = makeTraceDraw({
      isTraceMode: true,
      trace: {
        disabled: true,
        author: 'x',
        lineWidth: 1,
        insertColor: '#000',
        deleteColor: '#000'
      }
    })
    const p = new TraceParticle(draw)
    const list = [{ value: 'a' }] as IElement[]
    const res = p.markElementListDeleted(list)
    expect(res[0].trace).toBeUndefined()
  })

  it('render+flush 删除/新增痕迹绘制', () => {
    const draw = makeTraceDraw({ isTraceMode: true })
    const p = new TraceParticle(draw)
    const ctx = makeMockCtx()
    const metrics = { width: 20, height: 16 } as IElementMetrics
    const curRow = { height: 30 } as IRow
    const base = (el: any) =>
      ({
        ctx,
        element: el,
        x: 10,
        y: 20,
        curRow,
        metrics,
        offsetY: 0,
        scale: 1
      } as any)
    p.render(base({ type: ElementType.TEXT, trace: [{ type: TraceType.DELETED }] }))
    p.render(
      base({ type: ElementType.TEXT, trace: [{ type: TraceType.INSERTED }] })
    )
    expect(() => p.flush(ctx)).not.toThrow()
  })

  it('render 非留痕模式早退', () => {
    const draw = makeTraceDraw({ isTraceMode: false })
    const p = new TraceParticle(draw)
    const ctx = makeMockCtx()
    expect(() =>
      p.render({
        ctx,
        element: { trace: [] } as any,
        x: 0,
        y: 0,
        curRow: {} as any,
        metrics: { width: 1, height: 1 } as any,
        offsetY: 0,
        scale: 1
      } as any)
    ).not.toThrow()
  })

  it('drawTracePopup 渲染记录 / 无记录清空', () => {
    const draw = makeTraceDraw({ isTraceMode: true })
    const p = new TraceParticle(draw)
    const position = {
      coordinate: { leftTop: [10, 20] },
      lineHeight: 30
    } as IElementPosition
    const el = {
      trace: [{ type: TraceType.INSERTED, author: 'u', timestamp: 123 }]
    } as IElement
    expect(() => p.drawTracePopup(el, position, 0)).not.toThrow()
    expect(() => p.drawTracePopup({ trace: [] } as any, position, 0)).not.toThrow()
    expect(() => p.clearTracePopup()).not.toThrow()
  })

  it('handleMouseMove 非留痕模式早退', () => {
    const draw = makeTraceDraw({ isTraceMode: false })
    const p = new TraceParticle(draw)
    expect(() =>
      p.handleMouseMove({
        target: document.createElement('div'),
        offsetX: 0,
        offsetY: 0
      } as any)
    ).not.toThrow()
  })
})
