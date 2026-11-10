import { describe, expect, it, vi } from 'vitest'
import { Override } from '@/editor/core/override/Override'
import { DateParticle } from '@/editor/core/draw/particle/date/DateParticle'
import { LaTexParticle } from '@/editor/core/draw/particle/latex/LaTexParticle'
import { MouseObserver } from '@/editor/core/observer/MouseObserver'
import { SelectionObserver } from '@/editor/core/observer/SelectionObserver'
import { ElementType } from '@/editor/dataset/enum/Element'
import { makeMockDraw, makeMockCtx } from '../draw/mock'

const baseDraw = (over: any = {}) => {
  const draw = makeMockDraw({ scale: 1, ...over.options }) as any
  draw.getI18n = () => ({ t: (k: string) => k })
  draw.getPageNo = () => 0
  draw.getPageOffset = () => ({ x: 0, y: 0 })
  draw.getContainer = () => document.createElement('div')
  draw.getPageContainer = () => over.pageContainer ?? document.createElement('div')
  draw.getEventBus = () =>
    over.eventBus ?? { isSubscribe: () => true, emit: vi.fn() }
  draw.getRange = () =>
    over.range ?? {
      getRange: () => ({ startIndex: 0, endIndex: 0 }),
      setRange: vi.fn(),
      getIsCollapsed: () => false
    }
  draw.getPosition = () => ({ getPositionList: () => [] })
  draw.getElementList = () => over.elements ?? []
  draw.deleteElementList = vi.fn()
  draw.insertElementList = vi.fn()
  draw.getOptions = () => ({
    scale: 1,
    scrollContainerSelector: over.scrollContainerSelector,
    ...over.options
  })
  return draw
}

describe('Override', () => {
  it('默认字段为空，可赋值并调用', () => {
    const o = new Override()
    expect(o.paste).toBeUndefined()
    expect(o.pasteImage).toBeUndefined()
    expect(o.copy).toBeUndefined()
    expect(o.drop).toBeUndefined()
    o.paste = () => ({ preventDefault: false })
    o.pasteImage = () => ({ preventDefault: true })
    o.copy = () => undefined
    o.drop = () => ({ preventDefault: false })
    expect((o.paste as any)()).toEqual({ preventDefault: false })
    expect((o.pasteImage as any)(new Blob())).toEqual({ preventDefault: true })
    expect((o.copy as any)()).toBeUndefined()
    expect((o.drop as any)({} as any)).toEqual({ preventDefault: false })
  })
})

describe('LaTexParticle', () => {
  it('convertLaTextToSVG 生成 svg 数据', () => {
    const svg = LaTexParticle.convertLaTextToSVG('x^2')
    expect(svg).toBeTruthy()
  })

  it('render 命中缓存与未命中分支', () => {
    const draw = baseDraw()
    const p = new LaTexParticle(draw) as any
    const ctx = makeMockCtx()
    const el = { value: 'a', width: 20, height: 20, laTexSVG: '<svg/>' }
    // 未命中缓存：进入 Image 加载分支
    expect(() => p.render(ctx, el, 0, 0)).not.toThrow()
    // 命中缓存
    const img = document.createElement('img')
    p.imageCache.set('a', img)
    expect(() => p.render(ctx, el, 0, 0)).not.toThrow()
  })
})

describe('DateParticle', () => {
  const dateElements = () => [
    { value: 'head', type: ElementType.TEXT, dateFormat: 'yyyy-MM-dd' },
    { value: '2026', type: ElementType.DATE, dateId: 'd1', dateFormat: 'yyyy-MM-dd' },
    { value: '-11', type: ElementType.DATE, dateId: 'd1' },
    { value: '-09', type: ElementType.DATE, dateId: 'd1' },
    { value: 'tail', type: ElementType.TEXT }
  ]

  it('getDateElementRange：非 date / 左右查找 / 末尾 / 无效范围', () => {
    const els = dateElements()
    const p = new DateParticle(
      baseDraw({
        elements: els,
        range: {
          getRange: () => ({ startIndex: 1, endIndex: 1 }),
          setRange: vi.fn()
        }
      })
    )
    expect(p.getDateElementRange()).toEqual([0, 3])
    // 起始元素非 DATE
    const p2 = new DateParticle(
      baseDraw({
        elements: els,
        range: {
          getRange: () => ({ startIndex: 4, endIndex: 4 }),
          setRange: vi.fn()
        }
      })
    )
    expect(p2.getDateElementRange()).toBeNull()
    // 无效索引
    const p3 = new DateParticle(
      baseDraw({
        elements: els,
        range: {
          getRange: () => ({ startIndex: -1, endIndex: -1 }),
          setRange: vi.fn()
        }
      })
    )
    expect(p3.getDateElementRange()).toBeNull()
    // date 在列表末尾
    const tailDate = [
      { value: 'x', type: ElementType.TEXT },
      { value: '', type: ElementType.DATE, dateId: 'd2' },
      { value: '2026', type: ElementType.DATE, dateId: 'd2' }
    ]
    const p4 = new DateParticle(
      baseDraw({
        elements: tailDate,
        range: {
          getRange: () => ({ startIndex: 1, endIndex: 1 }),
          setRange: vi.fn()
        }
      })
    )
    expect(p4.getDateElementRange()).toEqual([0, 2])
  })

  it('renderDatePicker / clearDatePicker / _setValue 各分支', () => {
    const els = dateElements()
    const draw = baseDraw({
      elements: els,
      range: {
        getRange: () => ({ startIndex: 1, endIndex: 1 }),
        setRange: vi.fn()
      }
    })
    const p = new DateParticle(draw) as any
    const position = {
      coordinate: { leftTop: [0, 0] },
      lineHeight: 20,
      pageNo: 0
    }
    expect(() =>
      p.renderDatePicker({ dateFormat: 'yyyy-MM-dd' } as any, position as any)
    ).not.toThrow()
    expect(() => p.clearDatePicker()).not.toThrow()
    // 有效日期写入
    expect(() => p._setValue('2026-11-09')).not.toThrow()
    // 空字符串早退
    expect(() => p._setValue('')).not.toThrow()
    // 无范围时早退
    const p2 = new DateParticle(
      baseDraw({
        elements: [{ value: 'x', type: ElementType.TEXT }],
        range: {
          getRange: () => ({ startIndex: 0, endIndex: 0 }),
          setRange: vi.fn()
        }
      })
    ) as any
    expect(() => p2._setValue('2026-11-09')).not.toThrow()
    expect(() =>
      p2.renderDatePicker({ dateFormat: 'yyyy' } as any, position as any)
    ).not.toThrow()
  })
})

describe('MouseObserver', () => {
  it('构造绑定 6 个事件；反射私有处理器（订阅/未订阅）', () => {
    const container = document.createElement('div')
    const emit = vi.fn()
    let subscribed = true
    const o = new MouseObserver(
      baseDraw({
        pageContainer: container,
        eventBus: {
          isSubscribe: () => subscribed,
          emit
        }
      })
    ) as any
    const evt = new MouseEvent('click')
    for (const name of [
      '_mousemove',
      '_mouseenter',
      '_mouseleave',
      '_mousedown',
      '_mouseup',
      '_click'
    ]) {
      expect(() => o[name](evt)).not.toThrow()
    }
    expect(emit).toHaveBeenCalledTimes(6)
    subscribed = false
    for (const name of [
      '_mousemove',
      '_mouseenter',
      '_mouseleave',
      '_mousedown',
      '_mouseup',
      '_click'
    ]) {
      expect(() => o[name](evt)).not.toThrow()
    }
    expect(emit).toHaveBeenCalledTimes(6)
    // 真实 DOM 触发也能走 emit
    subscribed = true
    container.dispatchEvent(new MouseEvent('mousemove'))
    expect(emit.mock.calls.length).toBeGreaterThan(6)
  })
})

describe('SelectionObserver', () => {
  it('构造 / removeEvent / 私有处理器各方向分支', () => {
    const pageContainer = document.createElement('div')
    document.body.appendChild(pageContainer)
    const o = new SelectionObserver(
      baseDraw({ pageContainer })
    ) as any
    expect(() => o._mousedown()).not.toThrow()
    expect(() => o._mouseup()).not.toThrow()
    // mousemove：未按下早退
    expect(() =>
      o._mousemove({ x: 0, y: 0, target: pageContainer })
    ).not.toThrow()
    // 按下后各方向（需 target 在 pageContainer 内）
    o.isMousedown = true
    const child = document.createElement('div')
    pageContainer.appendChild(child)
    o.clientWidth = 200
    o.clientHeight = 200
    for (const [x, y] of [
      [0, 0],
      [0, 199],
      [0, 100],
      [199, 100],
      [100, 100]
    ]) {
      expect(() => o._mousemove({ x, y, target: child })).not.toThrow()
      o.isMoving = false
    }
    // 带 containerRect 的分支
    o.containerRect = { x: 5, y: 5 } as any
    expect(() => o._mousemove({ x: 10, y: 10, target: child })).not.toThrow()
    // _move 四方向 + _stopMove
    for (const d of ['UP', 'DOWN', 'LEFT', 'RIGHT']) {
      expect(() => o._move(d)).not.toThrow()
    }
    expect(() => o.removeEvent()).not.toThrow()
    pageContainer.remove()
  })

  it('scrollContainerSelector 使用自定义容器', () => {
    const scroll = document.createElement('div')
    scroll.className = 'scroll-host'
    document.body.appendChild(scroll)
    const o = new SelectionObserver(
      baseDraw({
        pageContainer: scroll,
        scrollContainerSelector: '.scroll-host'
      })
    ) as any
    expect(() => o._mousedown()).not.toThrow()
    expect(() => o._mouseup()).not.toThrow()
    expect(() => o.removeEvent()).not.toThrow()
    scroll.remove()
  })
})
