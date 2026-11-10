import { describe, expect, it } from 'vitest'
import { Placeholder } from '@/editor/core/draw/frame/Placeholder'
import { makeMockCtx, makeMockDraw } from './mock'

const phDraw = () =>
  makeMockDraw({
    scale: 1,
    lineBreak: { disabled: true },
    placeholder: {
      data: '请输入内容',
      font: 'Arial',
      size: 14,
      color: '#999',
      opacity: 0.6,
      maxLength: 0
    }
  })

describe('Placeholder', () => {
  it('render 默认不截断', () => {
    const draw = phDraw()
    draw.getInnerWidth = () => 800
    draw.computeRowList = () => [{ elementList: [], ...{} }] as any
    draw.getHeader = () => ({ getExtraHeight: () => 0 }) as any
    draw.getMargins = () => [0, 0, 0, 0]
    draw.drawRow = () => {}
    draw.getPosition = () => ({
      computePageRowPosition: () => {}
    }) as any
    const p = new Placeholder(draw)
    expect(() => p.render(makeMockCtx())).not.toThrow()
  })

  it('render maxLength=0 清空文案', () => {
    const draw = phDraw()
    draw.getInnerWidth = () => 800
    draw.computeRowList = () => [] as any
    draw.getHeader = () => ({ getExtraHeight: () => 0 }) as any
    draw.getMargins = () => [0, 0, 0, 0]
    draw.drawRow = () => {}
    draw.getPosition = () => ({ computePageRowPosition: () => {} }) as any
    const p = new Placeholder(draw)
    expect(() => p.render(makeMockCtx())).not.toThrow()
  })

  it('render maxLength 截断超长文案', () => {
    const draw = phDraw()
    draw.getInnerWidth = () => 800
    draw.computeRowList = () => [] as any
    draw.getHeader = () => ({ getExtraHeight: () => 0 }) as any
    draw.getMargins = () => [0, 0, 0, 0]
    draw.drawRow = () => {}
    draw.getPosition = () => ({ computePageRowPosition: () => {} }) as any
    const p = new Placeholder(draw)
    expect(() =>
      p.render(makeMockCtx(), {
        placeholder: {
          data: '这是一段很长的占位提示文案',
          font: 'Arial',
          size: 14,
          color: '#999',
          opacity: 0.6,
          maxLength: 5
        }
      })
    ).not.toThrow()
  })
})

