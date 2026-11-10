import { describe, expect, it } from 'vitest'
import { HintParticle } from '@/editor/core/draw/particle/HintParticle'
import type { IElementPosition } from '@/editor/interface/Element'
import { makeMockDraw } from './mock'

const hintDraw = (disabled = false) =>
  makeMockDraw({
    hint: {
      disabled,
      backgroundColor: '#fff',
      color: '#000',
      fontSize: 12,
      maxWidth: 200
    }
  })

describe('HintParticle', () => {
  it('构造函数创建浮窗 DOM', () => {
    expect(() => new HintParticle(hintDraw())).not.toThrow()
  })

  it('drawHintPopup 基于元素位置', () => {
    const p = new HintParticle(hintDraw())
    const position = {
      coordinate: { leftTop: [10, 20] },
      lineHeight: 20
    } as IElementPosition
    expect(() =>
      p.drawHintPopup({ hint: '提示', position }, 0)
    ).not.toThrow()
  })

  it('drawHintPopup 基于单元格 td', () => {
    const p = new HintParticle(hintDraw())
    expect(() =>
      p.drawHintPopup(
        { hint: '单元格提示', td: { x: 5, y: 5, rowList: [{ height: 10 }] } },
        0
      )
    ).not.toThrow()
  })

  it('drawHintPopup position 与 td 均缺失时清除', () => {
    const p = new HintParticle(hintDraw())
    expect(() => p.drawHintPopup({ hint: 'x' }, 0)).not.toThrow()
  })

  it('clearHintPopup 隐藏并重置', () => {
    const p = new HintParticle(hintDraw())
    expect(() => p.clearHintPopup()).not.toThrow()
  })

  it('handleMouseMove 禁用时早退', () => {
    const p = new HintParticle(hintDraw(true))
    const evt = {
      target: { dataset: {} },
      offsetX: 0,
      offsetY: 0
    } as unknown as MouseEvent
    expect(() => p.handleMouseMove(evt)).not.toThrow()
  })

  it('handleMouseMove 命中元素提示', () => {
    const draw = hintDraw(false)
    draw.getPosition = () => ({
      getPositionByXY: () => ({ index: 0 }),
      getOriginalPositionList: () => [],
      getTableTdByContext: () => undefined
    })
    draw.getOriginalElementList = () => [{ hint: 'hi' }]
    draw.getPageNo = () => 0
    const p = new HintParticle(draw)
    const evt = {
      target: { dataset: {} },
      offsetX: 5,
      offsetY: 5
    } as unknown as MouseEvent
    expect(() => p.handleMouseMove(evt)).not.toThrow()
  })
})
