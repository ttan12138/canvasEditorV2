import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Magnifier } from '@/editor/core/draw/interactive/Magnifier'
import { KeyMap } from '@/editor/dataset/enum/KeyMap'
import { makeMockCtx, makeMockDraw } from './mock'

const magDraw = (disabled = false) =>
  makeMockDraw({
    magnifier: {
      size: 100,
      disabled,
      zoom: 2,
      borderColor: '#000'
    }
  })

describe('Magnifier', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
      makeMockCtx()
    )
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('构造函数创建画布并监听事件', () => {
    expect(() => new Magnifier(magDraw())).not.toThrow()
  })

  it('show/hide 切换显隐（启用时）', () => {
    const p = new Magnifier(magDraw(false))
    p.show()
    expect((p as any).isActive).toBe(true)
    expect((p as any).canvas.style.display).toBe('block')
    p.hide()
    expect((p as any).isActive).toBe(false)
    expect((p as any).canvas.style.display).toBe('none')
  })

  it('show/hide 禁用时早退', () => {
    const p = new Magnifier(magDraw(true))
    p.show()
    expect((p as any).isActive).toBe(false)
    p.hide()
    expect((p as any).isActive).toBe(false)
  })

  it('_handleKeyDown/_handleKeyUp 响应 Alt', () => {
    const p = new Magnifier(magDraw(false))
    ;(p as any)._handleKeyDown({ key: KeyMap.ALT } as KeyboardEvent)
    expect((p as any).isActive).toBe(true)
    ;(p as any)._handleKeyUp({ key: KeyMap.ALT } as KeyboardEvent)
    expect((p as any).isActive).toBe(false)
  })

  it('_update 命中页面绘制放大 / 未命中早退', () => {
    const draw = magDraw(false)
    draw.getPageList = () => [
      {
        getBoundingClientRect: () => ({
          left: 0,
          top: 0,
          right: 100,
          bottom: 100
        })
      } as any
    ]
    const p = new Magnifier(draw)
    p.show()
    expect(() =>
      (p as any)._update({ clientX: 50, clientY: 50 } as MouseEvent)
    ).not.toThrow()
    // 鼠标在页面区域外：sourceCanvas 为空，清空后直接返回
    expect(() =>
      (p as any)._update({ clientX: 500, clientY: 500 } as MouseEvent)
    ).not.toThrow()
  })

  it('destroy 移除画布与监听', () => {
    const p = new Magnifier(magDraw(false))
    expect(() => p.destroy()).not.toThrow()
  })
})
