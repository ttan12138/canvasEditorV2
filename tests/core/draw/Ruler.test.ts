import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { Ruler } from '@/editor/core/draw/ruler/Ruler'
import { EditorMode, PageMode } from '@/editor/dataset/enum/Editor'
import { makeMockCtx, makeMockDraw } from './mock'

describe('Ruler 标尺', () => {
  let spy: any
  beforeEach(() => {
    spy = vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      makeMockCtx() as any
    )
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const makeDraw = (over: any = {}) => {
    const draw = makeMockDraw({
      scale: 1,
      pageMode: PageMode.PAGING,
      ruler: { disabled: false, height: 20 },
      ...over
    })
    const container = document.createElement('div')
    const page = document.createElement('div')
    container.append(page)
    draw.getContainer = () => container
    draw.getPageContainer = () => page
    draw.getWidth = () => 800
    draw.getHeight = () => 1000
    draw.getMargins = () => [50, 50, 50, 50]
    draw.getPagePixelRatio = () => 1
    draw.getMode = () => over.mode ?? EditorMode.EDIT
    draw.isReadonly = () => over.readonly ?? false
    return draw
  }

  it('isEnable / clampMargin', () => {
    const draw = makeDraw()
    const r = new Ruler(draw)
    expect(r.isEnable()).toBe(true)
    expect(r.clampMargin(-5, 100)).toBe(0)
    expect(r.clampMargin(50, 100)).toBe(50)
    expect(r.clampMargin(200, 100)).toBe(100)
    expect(r.clampMargin(50, -10)).toBe(0)
  })

  it('_getHitMarginSideX/Y', () => {
    const draw = makeDraw()
    const r = new Ruler(draw)
    expect((r as any)._getHitMarginSideX(50)).toBe('left')
    expect((r as any)._getHitMarginSideX(750)).toBe('right')
    expect((r as any)._getHitMarginSideX(400)).toBe(null)
    expect((r as any)._getHitMarginSideY(50)).toBe('top')
    expect((r as any)._getHitMarginSideY(950)).toBe('bottom')
    expect((r as any)._getHitMarginSideY(500)).toBe(null)
  })

  it('_isMarginDragDisabled 只读/打印模式', () => {
    const edit = new Ruler(makeDraw({ mode: EditorMode.EDIT, readonly: false }))
    expect((edit as any)._isMarginDragDisabled()).toBe(false)
    const print = new Ruler(makeDraw({ mode: EditorMode.PRINT }))
    expect((print as any)._isMarginDragDisabled()).toBe(true)
  })

  it('render 创建 DOM 并绘制 X/Y 标尺（含二次更新路径）', () => {
    const draw = makeDraw()
    const r = new Ruler(draw)
    expect(() => r.render()).not.toThrow()
    expect(() => r.render()).not.toThrow()
  })

  it('setEnabled(false) 隐藏标尺 + dispose 清理', () => {
    const draw = makeDraw()
    const r = new Ruler(draw)
    r.render()
    r.setEnabled(false)
    expect(r.isEnable()).toBe(false)
    expect(() => r.dispose()).not.toThrow()
  })
})
