import { describe, expect, it, vi } from 'vitest'
import { ColumnManager } from '@/editor/core/draw/column/ColumnManager'
import {
  collectTableTds,
  resolveCellShow,
  buildsCycle
} from '@/editor/core/draw/particle/table/linkage'
import { GlobalEvent } from '@/editor/core/event/GlobalEvent'
import { PaperDirection } from '@/editor/dataset/enum/Editor'
import { makeMockDraw, makeMockCtx } from '../draw/mock'

function stub(overrides: Record<string, any> = {}): any {
  return new Proxy(
    {},
    {
      get(_t, p) {
        if (typeof p === 'symbol') return undefined
        if (Object.prototype.hasOwnProperty.call(overrides, p)) {
          return overrides[p]
        }
        return () => undefined
      }
    }
  )
}

describe('ColumnManager', () => {
  const makeDraw = (column: any = { count: 1, gap: 20 }) => {
    const draw = makeMockDraw({ scale: 1 }) as any
    draw.getOptions = () => ({
      scale: 1,
      paperDirection: PaperDirection.VERTICAL,
      column: {
        count: 1,
        gap: 20,
        separator: false,
        separatorColor: '#ccc',
        separatorWidth: 1,
        ...column
      }
    })
    draw.getInnerWidth = () => 500
    draw.getPageDirection = () => PaperDirection.VERTICAL
    draw.getPageSize = () => ({ margins: [10, 10, 10, 10], height: 1000, width: 800 })
    draw.getHeader = () => ({ getExtraHeight: () => 20 })
    draw.getFooter = () => ({ getExtraHeight: () => 20 })
    return draw
  }

  it('computeLayout 各分支', () => {
    const cm = new ColumnManager(makeDraw())
    expect(cm.computeLayout(500, undefined)).toBeNull()
    expect(cm.computeLayout(500, { count: 1 } as any)).toBeNull()
    expect(cm.computeLayout(500, { count: 0 } as any)).toBeNull()
    const layout = cm.computeLayout(500, {
      count: 2,
      gap: 20,
      separator: true
    } as any)
    expect(layout?.count).toBe(2)
    expect(layout?.offsets.length).toBe(2)
    expect(layout?.separator).toBe(true)
    // gap 过大被限制
    const clamped = cm.computeLayout(100, { count: 4, gap: 999 } as any)
    expect(clamped!.width).toBeGreaterThan(0)
    // gap 缺省回退
    expect(cm.computeLayout(500, { count: 3 } as any)!.gap).toBe(20)
  })

  it('compute / getLayout / getOffset / drawSeparator', () => {
    const cm = new ColumnManager(makeDraw({ count: 3, gap: 20, separator: true }))
    cm.compute()
    expect(cm.getLayout()).toBeTruthy()
    expect(cm.getLayout(PaperDirection.HORIZONTAL)).toBeTruthy()
    expect(cm.getOffset(undefined)).toBeGreaterThanOrEqual(0)
    expect(cm.getOffset(-1)).toBe(0)
    expect(cm.getOffset(999)).toBe(0)
    expect(cm.getOffset(1)).toBeGreaterThan(0)
    const ctx = makeMockCtx()
    expect(() => cm.drawSeparator(ctx, 0)).not.toThrow()
    // 无布局/无分隔线早退
    const cm2 = new ColumnManager(makeDraw({ count: 1 }))
    cm2.compute()
    expect(cm2.getOffset(0)).toBe(0)
    expect(() => cm2.drawSeparator(ctx, 0)).not.toThrow()
    const cm3 = new ColumnManager(makeDraw())
    expect(() => cm3.drawSeparator(ctx, 0)).not.toThrow()
  })

  it('setConfig 各分支', () => {
    const cm = new ColumnManager(makeDraw())
    cm.setConfig(null)
    expect(cm.getLayout()).toBeNull()
    cm.setConfig(undefined)
    cm.setConfig({ count: 0 } as any)
    cm.setConfig({ count: 2, gap: 30, separator: true } as any)
    cm.compute()
    expect(cm.getLayout()!.count).toBe(2)
    cm.setConfig({ count: 3.7 } as any)
    cm.compute()
    expect(cm.getLayout()!.count).toBe(3)
  })
})

describe('linkage', () => {
  const makeTable = (tds: any[]) =>
    ({
      type: 'table',
      trList: [{ height: 40, tdList: tds }]
    }) as any

  it('collectTableTds 无 trList / 正常', () => {
    expect(collectTableTds({} as any)).toEqual([])
    const tds = [{ id: 'a' }, { id: 'b' }]
    expect(collectTableTds(makeTable(tds))).toHaveLength(2)
  })

  it('resolveCellShow 各分支', () => {
    const result = resolveCellShow(
      makeTable([
        { id: 'a', show: false },
        { id: 'b', enableLink: true, linkChildIds: [] },
        { id: 'c', enableLink: true, linkChildIds: ['a', 'missing'] },
        { id: 'd', enableLink: true, linkChildIds: ['a'] },
        { id: 'e', enableLink: true, linkChildIds: ['e'] }
      ])
    )
    expect(result.get('a')).toBe(false)
    expect(result.get('b')).toBe(true)
    expect(result.get('c')).toBe(true)
    expect(result.get('d')).toBe(false)
    expect(result.get('e')).toBe(true)
  })

  it('buildsCycle 环检测', () => {
    const table = makeTable([
      { id: 'a', linkChildIds: ['b'] },
      { id: 'b', linkChildIds: ['c'] },
      { id: 'c', linkChildIds: ['a'] }
    ])
    expect(buildsCycle(table, 'a', 'c')).toBe(true)
    expect(buildsCycle(table, 'a', 'b')).toBe(true)
    expect(buildsCycle(table, 'x', 'b')).toBe(false)
    expect(buildsCycle(table, 'a', 'missing')).toBe(false)
  })
})

describe('GlobalEvent', () => {
  const makeDraw = () => {
    const draw = makeMockDraw({
      scale: 1,
      shortcutDisableKeys: []
    }) as any
    draw.getOptions = () => ({
      scale: 1,
      shortcutDisableKeys: [],
      column: { count: 1 }
    })
    draw.getRange = () =>
      stub({
        getIsCollapsed: () => true,
        getRange: () => ({ startIndex: 1, endIndex: 1 }),
        recoveryRangeStyle: () => {},
        replaceRange: () => {}
      })
    draw.getCursor = () =>
      stub({
        getAgentIsActive: () => false,
        drawCursor: () => {},
        recoveryCursor: () => {}
      })
    draw.getPreviewer = () => stub()
    draw.getTableTool = () => stub()
    draw.getHyperlinkParticle = () => stub()
    draw.getHintParticle = () => stub()
    draw.getDateParticle = () => stub()
    draw.getImageParticle = () => stub()
    draw.getControl = () => stub()
    draw.getMagnifier = () => stub()
    draw.getPageList = () => []
    draw.getContainer = () => document.createElement('div')
    draw.setPageScale = vi.fn()
    draw.setPageDevicePixel = vi.fn()
    draw.render = vi.fn()
    draw.getOriginValue = () => ({})
    return draw
  }

  const makeEvt = (over: any = {}) =>
    ({
      composedPath: () => [document.createElement('div')],
      target: document.createElement('div'),
      ctrlKey: true,
      deltaY: -1,
      clientY: 100,
      preventDefault: vi.fn(),
      ...over
    }) as any

  it('register / removeEvent / 事件处理器反射', () => {
    const canvasEvent = stub({
      setIsAllowDrag: () => {},
      setIsAllowSelection: () => {}
    })
    const ge = new GlobalEvent(makeDraw(), canvasEvent) as any
    expect(() => ge.register()).not.toThrow()
    expect(() => ge.removeEvent()).not.toThrow()
    expect(() => ge.setCanvasEventAbility()).not.toThrow()
    expect(() => ge.watchCursorActive()).not.toThrow()
    expect(() => ge._handleDprChange()).not.toThrow()
    expect(() => ge._handleVisibilityChange()).not.toThrow()
    expect(() => ge._applyPendingScale()).not.toThrow()
    expect(() => ge.clearSideEffect(makeEvt())).not.toThrow()
  })

  it('setPageScale 各分支（禁用/无 Ctrl/放大/缩小/边界）', () => {
    const canvasEvent = stub()
    const draw = makeDraw()
    const ge = new GlobalEvent(draw, canvasEvent) as any
    // 无 ctrl
    ge.setPageScale(makeEvt({ ctrlKey: false }))
    // 禁用快捷键
    const draw2 = makeDraw()
    draw2.getOptions = () => ({ scale: 1, shortcutDisableKeys: ['pageScale'] })
    const ge2 = new GlobalEvent(draw2, canvasEvent) as any
    ge2.setPageScale(makeEvt())
    // 放大
    ge.setPageScale(makeEvt({ deltaY: -1 }))
    expect(ge.pendingScale).toBe(1.1)
    // 缩小
    ge.pendingScale = null
    ge.setPageScale(makeEvt({ deltaY: 1 }))
    expect(ge.pendingScale).toBe(0.9)
    // 边界：scale 过大不再放大
    ge.pendingScale = 3
    ge.setPageScale(makeEvt({ deltaY: -1 }))
    expect(ge.pendingScale).toBe(3)
    // 边界：scale 过小不再缩小
    ge.pendingScale = 0.5
    ge.setPageScale(makeEvt({ deltaY: 1 }))
    expect(ge.pendingScale).toBe(0.5)
    // 提交 pending
    ge.pendingScale = 1.2
    expect(() => ge._applyPendingScale()).not.toThrow()
    expect(draw.setPageScale).toHaveBeenCalled()
  })

  it('clearSideEffect 内部/外部组件/页面命中分支', () => {
    const canvasEvent = stub()
    const draw = makeDraw()
    const page = document.createElement('canvas')
    draw.getPageList = () => [page]
    const ge = new GlobalEvent(draw, canvasEvent) as any
    ge.register()
    // 命中编辑器内部 canvas
    const innerEvt = makeEvt({
      composedPath: () => [page],
      target: page
    })
    expect(() => ge.clearSideEffect(innerEvt)).not.toThrow()
    // 命中外部组件（带 EDITOR_COMPONENT 属性）
    const outer = document.createElement('div')
    outer.setAttribute('editor-component', 'popup')
    expect(() =>
      ge.clearSideEffect(makeEvt({ composedPath: () => [outer], target: outer }))
    ).not.toThrow()
    // 无 cursor 早退
    ge.cursor = null
    expect(() => ge.clearSideEffect(makeEvt())).not.toThrow()
  })

  it('removeEvent 清理 pending RAF', () => {
    const ge = new GlobalEvent(makeDraw(), stub()) as any
    ge.scaleRafId = 1
    ge.pendingScale = 1.2
    ge.pendingAnchorY = 10
    expect(() => ge.removeEvent()).not.toThrow()
    expect(ge.scaleRafId).toBeNull()
    expect(ge.pendingScale).toBeNull()
  })
})
