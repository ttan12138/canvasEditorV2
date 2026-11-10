import { describe, expect, it } from 'vitest'
import { ImageParticle } from '@/editor/core/draw/particle/ImageParticle'
import { ElementType } from '@/editor/dataset/enum/Element'
import { ImageDisplay } from '@/editor/dataset/enum/Common'
import { makeMockCtx, makeMockDraw, imgElement } from './mock'
import type { IElement } from '@/editor/interface/Element'

describe('ImageParticle 图片粒子', () => {
  it('getOriginalMainImageList 收集正文与表格内图片', () => {
    const imgA = { type: ElementType.IMAGE, value: 'a' } as IElement
    const imgB = { type: ElementType.IMAGE, value: 'b' } as IElement
    const table = {
      type: ElementType.TABLE,
      trList: [{ tdList: [{ value: [imgB] as IElement[] }] }]
    } as any
    const draw = makeMockDraw()
    draw.getOriginalMainElementList = () =>
      [imgA, { type: ElementType.TEXT } as any, table]
    const p = new ImageParticle(draw)
    expect(p.getOriginalMainImageList().length).toBe(2)
  })

  it('render 缓存命中时绘制图片 + 富题注(背景/边框/高亮/装饰/阴影/截断)', () => {
    const ctx = makeMockCtx()
    const draw = makeMockDraw()
    const p = new ImageParticle(draw)
    ;(p as any).imageCache.set('img1', { width: 100, height: 80 })
    const element = imgElement('img1', {
      imgCaption: {
        value: '这是一段很长的题注用来触发换行',
        backgroundColor: '#eeeeee',
        borderWidth: 1,
        borderColor: '#333333',
        highlight: '#ffff00',
        textDecoration: 'underline line-through',
        maxLines: 1,
        boxShadow: '2px 2px 4px #000000',
        textShadow: '1px 1px 2px #888888'
      }
    })
    expect(() => p.render(ctx, element, 0, 0)).not.toThrow()
  })

  it('render 题注含 {imageNo} 占位替换', () => {
    const ctx = makeMockCtx()
    const draw = makeMockDraw()
    draw.getOriginalMainElementList = () => [
      { type: ElementType.IMAGE, value: 'other' } as any,
      { type: ElementType.IMAGE, value: 'img2' } as any
    ]
    const p = new ImageParticle(draw)
    ;(p as any).imageCache.set('img2', { width: 10, height: 10 })
    const element = imgElement('img2', {
      imgCaption: { value: '第{imageNo}图' }
    })
    expect(() => p.render(ctx, element, 0, 0)).not.toThrow()
  })

  it('render 未命中缓存时异步加载分支不抛错', () => {
    const ctx = makeMockCtx()
    const draw = makeMockDraw()
    const p = new ImageParticle(draw)
    const element = imgElement('nocache')
    expect(() => p.render(ctx, element, 0, 0)).not.toThrow()
  })

  it('render 浮动图(disabled 不影响绘制逻辑) 普通装饰', () => {
    const ctx = makeMockCtx()
    const draw = makeMockDraw()
    const p = new ImageParticle(draw)
    ;(p as any).imageCache.set('f', { width: 30, height: 30 })
    const element = imgElement('f', {
      imgDisplay: ImageDisplay.SURROUND,
      imgCaption: { value: 'caption', borderRadius: 4 }
    })
    expect(() => p.render(ctx, element, 0, 0)).not.toThrow()
  })
})
