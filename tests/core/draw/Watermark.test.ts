import { describe, expect, it } from 'vitest'
import { Watermark } from '@/editor/core/draw/frame/Watermark'
import { WatermarkType } from '@/editor/dataset/enum/Watermark'
import { makeMockCtx, makeMockDraw } from './mock'

describe('Watermark 水印', () => {
  it('renderText 非平铺分支 + {pageNo}/{pageCount} 占位替换', () => {
    const ctx = makeMockCtx()
    const draw = makeMockDraw({
      watermark: {
        type: WatermarkType.TEXT,
        data: '第{pageNo}页/共{pageCount}页',
        opacity: 0.3,
        font: 'Arial',
        size: 20,
        color: '#cccccc',
        repeat: false,
        gap: [0, 0],
        numberType: 0
      }
    })
    const wm = new Watermark(draw)
    expect(() => wm.renderText(ctx, 0)).not.toThrow()
  })

  it('renderText 纯文本非占位', () => {
    const ctx = makeMockCtx()
    const draw = makeMockDraw({
      watermark: {
        type: WatermarkType.TEXT,
        data: 'confidential',
        opacity: 1,
        font: 'Arial',
        size: 16,
        color: '#000000',
        repeat: false,
        gap: [0, 0],
        numberType: 0
      }
    })
    expect(() => new Watermark(draw).renderText(ctx, 2)).not.toThrow()
  })

  it('renderImage 空缓存时仅设置 src 不抛错', () => {
    const ctx = makeMockCtx()
    const draw = makeMockDraw({
      watermark: {
        type: WatermarkType.IMAGE,
        data: 'data:image/png;base64,xxx',
        width: 100,
        height: 80,
        opacity: 1,
        repeat: false,
        gap: [0, 0]
      }
    })
    expect(() => new Watermark(draw).renderImage(ctx, 0)).not.toThrow()
  })

  it('render 按类型分发到 renderText / renderImage', () => {
    const ctx = makeMockCtx()
    const drawText = makeMockDraw({
      watermark: { type: WatermarkType.TEXT, data: 'wm', repeat: false }
    })
    expect(() => new Watermark(drawText).render(ctx, 0)).not.toThrow()
    const drawImg = makeMockDraw({
      watermark: {
        type: WatermarkType.IMAGE,
        data: 'img',
        width: 10,
        height: 10,
        repeat: false
      }
    })
    expect(() => new Watermark(drawImg).render(ctx, 0)).not.toThrow()
  })
})
