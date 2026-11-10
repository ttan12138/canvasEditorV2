import { afterEach, describe, expect, it } from 'vitest'
import { Previewer } from '@/editor/core/draw/particle/previewer/Previewer'
import { EditorMode } from '@/editor/dataset/enum/Editor'
import { makeMockDraw } from './mock'

const previewerDraw = (over: any = {}) => {
  const draw = makeMockDraw({
    scale: 1,
    resizerColor: '#000',
    resizerSize: 8,
    modeRule: {
      [EditorMode.READONLY]: { imagePreviewerDisabled: false },
      [EditorMode.PRINT]: { imagePreviewerDisabled: false }
    },
    ...over
  })
  draw.getContainer = () => document.createElement('div')
  draw.getPage = () => document.createElement('canvas')
  draw.getEventBus = () => ({ isSubscribe: () => false, emit: () => {} })
  draw.getMode = () => EditorMode.EDIT
  draw.isDesignMode = () => false
  draw.isReadonly = () => false
  draw.getImageParticle = () => ({ getOriginalMainImageList: () => [] })
  draw.getPageOffset = () => ({ x: 0, y: 0 })
  draw.getPosition = () => ({
    getFloatPositionByElement: () => null,
    getFloatPositionCoordinate: () => ({ x: 5, y: 6 })
  })
  return draw
}

describe('Previewer', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('构造函数创建 resizer DOM', () => {
    expect(() => new Previewer(previewerDraw())).not.toThrow()
  })

  it('_updateResizerRect / _updateResizerSizeView', () => {
    const p = new Previewer(previewerDraw())
    expect(() => (p as any)._updateResizerRect(100, 80)).not.toThrow()
    expect(() => (p as any)._updateResizerSizeView(100, 80)).not.toThrow()
    expect((p as any).resizerSize.innerText).toBe('100 × 80')
  })

  it('drawResizer resizeDisable 早退', () => {
    const p = new Previewer(previewerDraw())
    expect(() =>
      p.drawResizer(
        { value: 'x', width: 100, height: 80 } as any,
        null,
        { resizeDisable: true }
      )
    ).not.toThrow()
  })

  it('drawResizer 常规路径（更新 resizer）', () => {
    const p = new Previewer(previewerDraw())
    expect(() =>
      p.drawResizer(
        { value: 'x', width: 100, height: 80 } as any,
        {
          coordinate: { leftTop: [0, 0], rightBottom: [10, 10] },
          pageNo: 0
        } as any
      )
    ).not.toThrow()
    expect((p as any).curElement?.value).toBe('x')
  })

  it('updateResizer 浮动位置分支', () => {
    const draw = previewerDraw()
    draw.getPosition = () => ({
      getFloatPositionByElement: () => ({}),
      getFloatPositionCoordinate: () => ({ x: 5, y: 6 })
    })
    const p = new Previewer(draw)
    expect(() =>
      p.updateResizer(
        { value: 'x', width: 100, height: 80, imgFloatPosition: true } as any,
        { coordinate: { leftTop: [0, 0] }, pageNo: 0 } as any
      )
    ).not.toThrow()
  })

  it('render 早退分支', () => {
    const p = new Previewer(previewerDraw())
    // 无 curElement
    expect(() => p.render()).not.toThrow()
    // imgToolDisabled 且非设计模式
    ;(p as any).curElement = { value: 'x', imgToolDisabled: true }
    ;(p as any).draw.isDesignMode = () => false
    expect(() => p.render()).not.toThrow()
    // PRINT 模式禁用
    const p2 = new Previewer(previewerDraw())
    ;(p2 as any).curElement = { value: 'x' }
    ;(p2 as any).draw.getMode = () => EditorMode.PRINT
    ;(p2 as any).options.modeRule[EditorMode.PRINT].imagePreviewerDisabled = true
    expect(() => p2.render()).not.toThrow()
    // READONLY 模式禁用
    const p3 = new Previewer(previewerDraw())
    ;(p3 as any).curElement = { value: 'x' }
    ;(p3 as any).draw.getMode = () => EditorMode.READONLY
    ;(p3 as any).options.modeRule[EditorMode.READONLY].imagePreviewerDisabled = true
    expect(() => p3.render()).not.toThrow()
  })

  it('render 完整路径 + 操作栏交互', () => {
    const p = new Previewer(previewerDraw())
    ;(p as any).curElement = { value: 'x', width: 100, height: 80 }
    expect(() => p.render()).not.toThrow()
    // 操作栏：放大/缩小/旋转/还原
    const zoomIn = document.querySelector('.zoom-in') as HTMLElement
    expect(zoomIn).toBeTruthy()
    zoomIn.click()
    const zoomOut = document.querySelector('.zoom-out') as HTMLElement
    zoomOut.click()
    const rotate = document.querySelector('.rotate') as HTMLElement
    rotate.click()
    const original = document.querySelector('.original-size') as HTMLElement
    original.click()
    // 切换上一张（首张，早退）/ 下一张（越界，早退）
    ;(document.querySelector('.image-pre') as HTMLElement).click()
    ;(document.querySelector('.image-next') as HTMLElement).click()
    // 关闭
    ;(document.querySelector('.image-close') as HTMLElement).click()
    // 更新导航 + 变换
    expect(() => (p as any)._updateImageNavigate()).not.toThrow()
    expect(() => (p as any)._setPreviewerTransform(1.2, 1, 0, 0)).not.toThrow()
  })

  it('clearResizer', () => {
    const p = new Previewer(previewerDraw())
    expect(() => p.clearResizer()).not.toThrow()
  })

  it('_mousedown 拖拽起始', () => {
    const p = new Previewer(previewerDraw())
    ;(p as any).curElement = { value: 'x', width: 100, height: 80 }
    const handle = (p as any).resizerHandleList[0]
    expect(() =>
      (p as any)._mousedown({ target: handle, x: 0, y: 0, preventDefault() {} })
    ).not.toThrow()
  })

  it('_mousemove 各拖拽方向', () => {
    const p = new Previewer(previewerDraw())
    ;(p as any).curElement = { value: 'x', width: 100, height: 80 }
    ;(p as any).previewerDrawOption = { dragDisable: false }
    ;(p as any).mousedownX = 0
    ;(p as any).mousedownY = 0
    for (const idx of [0, 3, 5, 7]) {
      ;(p as any).curHandleIndex = idx
      expect(() =>
        (p as any)._mousemove({ x: 10, y: 10, preventDefault() {} })
      ).not.toThrow()
    }
  })
})
