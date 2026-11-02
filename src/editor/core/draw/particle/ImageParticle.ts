import { EDITOR_PREFIX } from '../../../dataset/constant/Editor'
import { ImageDisplay } from '../../../dataset/enum/Common'
import { ElementType } from '../../../dataset/enum/Element'
import { DeepRequired } from '../../../interface/Common'
import { IEditorOption } from '../../../interface/Editor'
import { IElement } from '../../../interface/Element'
import { convertStringToBase64 } from '../../../utils'
import {
  getImagePadding,
  substituteImageNo,
  wrapCaptionLines
} from '../../../utils/caption'
import { Draw } from '../Draw'

export class ImageParticle {
  private draw: Draw
  protected options: DeepRequired<IEditorOption>
  protected imageCache: Map<string, HTMLImageElement>
  private container: HTMLDivElement
  private floatImageContainer: HTMLDivElement | null
  private floatImage: HTMLImageElement | null

  constructor(draw: Draw) {
    this.draw = draw
    this.options = draw.getOptions()
    this.container = draw.getContainer()
    this.imageCache = new Map()
    this.floatImageContainer = null
    this.floatImage = null
  }

  public getOriginalMainImageList(): IElement[] {
    const imageList: IElement[] = []
    const getImageList = (elementList: IElement[]) => {
      for (const element of elementList) {
        if (element.type === ElementType.TABLE) {
          const trList = element.trList!
          for (let r = 0; r < trList.length; r++) {
            const tr = trList[r]
            for (let d = 0; d < tr.tdList.length; d++) {
              const td = tr.tdList[d]
              getImageList(td.value)
            }
          }
        } else if (element.type === ElementType.IMAGE) {
          imageList.push(element)
        }
      }
    }
    // 获取正文图片列表
    getImageList(this.draw.getOriginalMainElementList())
    return imageList
  }

  // 返回-1表示已命中目标，上层收到后立即终止计数
  private _countImagesBeforeTarget(
    elementList: IElement[],
    targetElement: IElement
  ): number {
    let count = 0
    for (const element of elementList) {
      if (element === targetElement) {
        return -1
      }
      if (element.type === ElementType.TABLE) {
        const trList = element.trList!
        for (const tr of trList) {
          for (const td of tr.tdList) {
            const subCount = this._countImagesBeforeTarget(
              td.value,
              targetElement
            )
            if (subCount < 0) {
              return -1
            }
            count += subCount
          }
        }
      } else if (element.type === ElementType.IMAGE) {
        count++
      }
    }
    return count
  }

  public createFloatImage(element: IElement) {
    const { scale } = this.options
    // 复用浮动元素
    let floatImageContainer = this.floatImageContainer
    let floatImage = this.floatImage
    if (!floatImageContainer) {
      floatImageContainer = document.createElement('div')
      floatImageContainer.classList.add(`${EDITOR_PREFIX}-float-image`)
      this.container.append(floatImageContainer)
      this.floatImageContainer = floatImageContainer
    }
    if (!floatImage) {
      floatImage = document.createElement('img')
      floatImageContainer.append(floatImage)
      this.floatImage = floatImage
    }
    floatImageContainer.style.display = 'none'
    floatImage.style.width = `${element.width! * scale}px`
    floatImage.style.height = `${element.height! * scale}px`
    // 浮动图片初始信息
    const { x: preX, y: preY } = this.draw.getPageOffset(this.draw.getPageNo())
    const position = this.draw.getPosition()
    const floatPosition = position.getFloatPositionByElement(element)
    if (!floatPosition) return
    const { x, y } = position.getFloatPositionCoordinate(floatPosition)
    floatImageContainer.style.left = `${x + preX}px`
    floatImageContainer.style.top = `${preY + y}px`
    floatImage.src = element.value
  }

  public dragFloatImage(movementX: number, movementY: number) {
    if (!this.floatImageContainer) return
    this.floatImageContainer.style.display = 'block'
    // 之前的坐标加移动长度
    const x = parseFloat(this.floatImageContainer.style.left) + movementX
    const y = parseFloat(this.floatImageContainer.style.top) + movementY
    this.floatImageContainer.style.left = `${x}px`
    this.floatImageContainer.style.top = `${y}px`
  }

  public destroyFloatImage() {
    if (this.floatImageContainer) {
      this.floatImageContainer.style.display = 'none'
    }
  }

  protected addImageObserver(promise: Promise<unknown>) {
    this.draw.getImageObserver().add(promise)
  }

  protected getFallbackImage(width: number, height: number): HTMLImageElement {
    const tileSize = 8
    const x = (width - Math.ceil(width / tileSize) * tileSize) / 2
    const y = (height - Math.ceil(height / tileSize) * tileSize) / 2
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                  <rect width="${width}" height="${height}" fill="url(#mosaic)" />
                  <defs>
                    <pattern id="mosaic" x="${x}" y="${y}" width="${
                      tileSize * 2
                    }" height="${tileSize * 2}" patternUnits="userSpaceOnUse">
                      <rect width="${tileSize}" height="${tileSize}" fill="#cccccc" />
                      <rect width="${tileSize}" height="${tileSize}" fill="#cccccc" transform="translate(${tileSize}, ${tileSize})" />
                    </pattern>
                  </defs>
                </svg>`
    const fallbackImage = new Image()
    fallbackImage.src = `data:image/svg+xml;base64,${convertStringToBase64(
      svg
    )}`
    return fallbackImage
  }

  private _drawImageWithCrop(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    element: IElement,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    if (element.imgCrop) {
      const {
        x: cropX,
        y: cropY,
        width: cropWidth,
        height: cropHeight
      } = element.imgCrop
      ctx.drawImage(
        img,
        cropX,
        cropY,
        cropWidth,
        cropHeight,
        x,
        y,
        width,
        height
      )
    } else {
      ctx.drawImage(img, x, y, width, height)
    }
  }

  private _renderCaption(
    ctx: CanvasRenderingContext2D,
    element: IElement,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    const caption = element.imgCaption
    if (!caption?.value) return
    const { scale, imgCaption } = this.options
    const { padL, padR, padB } = getImagePadding(element)
    const padLScale = padL * scale
    const padRScale = padR * scale
    const padBScale = padB * scale
    // 题注相对（图像 + 左右 padding）整盒宽度居中
    const boxWidth = width + padLScale + padRScale
    const centerX = x - padLScale + boxWidth / 2
    let captionText = caption.value
    // 替换特殊字符
    if (captionText.includes('{imageNo}')) {
      const elementList = this.draw.getOriginalMainElementList()
      const imageNo =
        Math.max(this._countImagesBeforeTarget(elementList, element), 0) + 1
      captionText = substituteImageNo(captionText, imageNo)
    }
    const fontSize = (caption.size || imgCaption.size) * scale
    const fontFamily = caption.font || imgCaption.font
    const color = caption.color || imgCaption.color
    const captionTop = (caption.top ?? imgCaption.top) * scale
    const lineHeight = fontSize * 1.4
    ctx.save()
    ctx.font = `${fontSize}px ${fontFamily}`
    ctx.fillStyle = color
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    // 超出（图像 + padding）宽度时换行展示
    const lines = wrapCaptionLines(ctx, captionText, boxWidth)
    // 题注位于图像底部 + 下内边距之下
    let lineY = y + height + padBScale + captionTop
    for (const line of lines) {
      ctx.fillText(line, centerX, lineY)
      lineY += lineHeight
    }
    ctx.restore()
  }

  public render(
    ctx: CanvasRenderingContext2D,
    element: IElement,
    x: number,
    y: number
  ) {
    const { scale } = this.options
    // 需求 5.3：图片四向内边距，绘制时整体内缩 padL/padT，内容宽即 element.width
    const { padL, padT } = getImagePadding(element)
    const drawX = x + padL * scale
    const drawY = y + padT * scale
    // 需求 5.6：isScaling 使用实时计算的临时尺寸，否则回退到 element.width/height
    const liveW = element.imgLiveWidth ?? element.width!
    const liveH = element.imgLiveHeight ?? element.height!
    const width = liveW * scale
    const height = liveH * scale
    if (this.imageCache.has(element.value)) {
      const img = this.imageCache.get(element.value)!
      this._drawImageWithCrop(ctx, img, element, drawX, drawY, width, height)
      this._renderCaption(ctx, element, drawX, drawY, width, height)
    } else {
      const cacheRenderCount = this.draw.getRenderCount()
      const imageLoadPromise = new Promise((resolve, reject) => {
        const img = new Image()
        img.setAttribute('crossOrigin', 'Anonymous')
        img.src = element.value
        img.onload = () => {
          this.imageCache.set(element.value, img)
          resolve(element)
          // 因图片加载异步，图片加载后可能属于上一次渲染方法
          if (cacheRenderCount !== this.draw.getRenderCount()) {
            return
          }
          // 衬于文字下方图片需要重新首先绘制
          if (element.imgDisplay === ImageDisplay.FLOAT_BOTTOM) {
            this.draw.render({
              isCompute: false,
              isSetCursor: false,
              isSubmitHistory: false
            })
          } else {
            this._drawImageWithCrop(ctx, img, element, drawX, drawY, width, height)
            this._renderCaption(ctx, element, drawX, drawY, width, height)
          }
        }
        img.onerror = error => {
          // 调试：实际图片解码失败（如 base64 损坏/被截断/超长导致解析失败），
          // 将回退为灰色占位图。这里打印出错的 src 头部与异常，便于核对。
          let errStr = ''
          try {
            errStr = JSON.stringify(error, (_k, val) =>
              typeof val === 'string' && val.length > 200
                ? val.slice(0, 200) + '…'
                : val
            )
          } catch {
            errStr = String(error)
          }
          console.warn(
            '[logo][ImageParticle] 图片解码失败，已回退灰色占位图',
            JSON.stringify({
              srcHead: String(element.value).slice(0, 48),
              srcLen: String(element.value).length,
              width,
              height,
              error: errStr
            })
          )
          const fallbackImage = this.getFallbackImage(width, height)
          fallbackImage.onload = () => {
            this._drawImageWithCrop(
              ctx,
              fallbackImage,
              element,
              drawX,
              drawY,
              width,
              height
            )
            this.imageCache.set(element.value, fallbackImage)
            this._renderCaption(ctx, element, drawX, drawY, width, height)
          }
          reject(error)
        }
      })
      this.addImageObserver(imageLoadPromise)
    }
  }
}
