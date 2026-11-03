import { EDITOR_PREFIX } from '../../../dataset/constant/Editor'
import { ImageDisplay } from '../../../dataset/enum/Common'
import { ElementType } from '../../../dataset/enum/Element'
import { DeepRequired } from '../../../interface/Common'
import { IEditorOption } from '../../../interface/Editor'
import { IElement } from '../../../interface/Element'
import { convertStringToBase64 } from '../../../utils'
import {
  getCaptionSpacing,
  getImagePadding,
  substituteImageNo,
  truncateCaptionLines,
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

  private _roundRectPath(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
  ) {
    if (r <= 0) {
      ctx.beginPath()
      ctx.rect(x, y, w, h)
      return
    }
    const radius = Math.min(r, w / 2, h / 2)
    ctx.beginPath()
    ctx.moveTo(x + radius, y)
    ctx.arcTo(x + w, y, x + w, y + h, radius)
    ctx.arcTo(x + w, y + h, x, y + h, radius)
    ctx.arcTo(x, y + h, x, y, radius)
    ctx.arcTo(x, y, x + w, y, radius)
    ctx.closePath()
  }

  // 解析 CSS 阴影语法："offsetX offsetY blur color"（单位 px，颜色可后置）
  private _parseCssShadow(shadow: string, scale: number) {
    const tokens = shadow.trim().split(/\s+/)
    const nums: number[] = []
    let color = '#000000'
    for (const t of tokens) {
      const m = t.match(/^(-?[\d.]+)px$/)
      if (m) nums.push(parseFloat(m[1]))
      else color = t
    }
    if (nums.length < 2) return null
    return {
      offsetX: nums[0] * scale,
      offsetY: nums[1] * scale,
      blur: (nums[2] ?? 0) * scale,
      color
    }
  }

  // 应用 CSS transform（translate/rotate/scale/skew），绕 (cx,cy) 旋转/缩放
  private _applyTransform(
    ctx: CanvasRenderingContext2D,
    transform: string,
    cx: number,
    cy: number
  ) {
    const re = /(translate|rotate|scale|skew|matrix)\(([^)]*)\)/g
    let m: RegExpExecArray | null
    ctx.translate(cx, cy)
    while ((m = re.exec(transform))) {
      const fn = m[1]
      const args = m[2].split(',').map(s => parseFloat(s))
      if (fn === 'translate') ctx.translate(args[0] || 0, args[1] || 0)
      else if (fn === 'rotate')
        ctx.rotate(((args[0] || 0) * Math.PI) / 180)
      else if (fn === 'scale')
        ctx.scale(args[0] ?? 1, args[1] ?? args[0] ?? 1)
      else if (fn === 'skew')
        ctx.transform(
          1,
          Math.tan(((args[1] || 0) * Math.PI) / 180),
          Math.tan(((args[0] || 0) * Math.PI) / 180),
          1,
          0,
          0
        )
    }
    ctx.translate(-cx, -cy)
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
    // 题注盒（含图像左右内边距）几何
    const boxX = x - padLScale
    const boxWidth = width + padLScale + padRScale
    // 样式：优先题注自身，回退到编辑器全局配置，再回退到内置默认
    const fontFamily =
      caption.fontFamily || caption.font || imgCaption.font || 'Microsoft YaHei'
    const fontSize = (caption.fontSize ?? caption.size ?? imgCaption.size) * scale
    const color = caption.color || imgCaption.color || '#666666'
    const fontWeight: string = `${caption.fontWeight ?? 'normal'}`
    const fontStyle = caption.fontStyle || 'normal'
    const textAlign = (caption.textAlign || 'center') as CanvasTextAlign
    const lineHeightRatio = caption.lineHeight ?? 1.4
    const lineHeight = fontSize * lineHeightRatio
    // 需求：题注四向间距独立配置（上下外边距 / 左右内边距），
    // 与布局预留共用 getCaptionSpacing 取值（兼容旧 marginY/paddingX 单值）
    const spacing = getCaptionSpacing(caption)
    const marginTop = spacing.marginTop * scale
    const paddingRight = spacing.paddingRight * scale
    const paddingLeft = spacing.paddingLeft * scale
    const maxLines = caption.maxLines ?? 0
    const bgColor = caption.backgroundColor
    const highlight = caption.highlight
    const opacity = caption.opacity ?? 1
    const decoration = caption.textDecoration || 'none'
    const radius = (caption.borderRadius ?? 0) * scale
    const borderW = caption.borderWidth
    const borderColor = caption.borderColor

    // 文本与 {imageNo} 占位替换
    let captionText = caption.value
    if (captionText.includes('{imageNo}')) {
      const elementList = this.draw.getOriginalMainElementList()
      const imageNo =
        Math.max(this._countImagesBeforeTarget(elementList, element), 0) + 1
      captionText = substituteImageNo(captionText, imageNo)
    }

    // 先量取字体用于换行
    ctx.save()
    ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`
    const innerWidth = Math.max(boxWidth - paddingLeft - paddingRight, 1)
    const wrapped = wrapCaptionLines(ctx, captionText, innerWidth)
    // 需求：超过 maxLines 截断并显示省略号（与布局预留共用同一实现）
    const lines = truncateCaptionLines(ctx, wrapped, maxLines, innerWidth)
    const textBlockH = lines.length * lineHeight
    // 盒高仅文本块（左右 padding 不产生纵向占位），上下间隙由 marginY 控制
    const boxHeight = textBlockH
    // 题注盒顶部 = 图片内容底 + 图片下内边距(padB) + 上外边距(marginTop)
    const boxY = y + height + padBScale + marginTop
    const cx = boxX + boxWidth / 2
    const cy = boxY + boxHeight / 2

    // transform 绕题注盒中心
    if (caption.transform) {
      this._applyTransform(ctx, caption.transform, cx, cy)
    }
    ctx.globalAlpha = opacity

    // 背景 + 阴影
    if (bgColor) {
      ctx.save()
      const bs = caption.boxShadow
        ? this._parseCssShadow(caption.boxShadow, scale)
        : null
      if (bs) {
        ctx.shadowColor = bs.color
        ctx.shadowBlur = bs.blur
        ctx.shadowOffsetX = bs.offsetX
        ctx.shadowOffsetY = bs.offsetY
      }
      ctx.fillStyle = bgColor
      this._roundRectPath(ctx, boxX, boxY, boxWidth, boxHeight, radius)
      ctx.fill()
      ctx.restore()
    }
    // 边框
    if (borderW && borderColor) {
      this._roundRectPath(ctx, boxX, boxY, boxWidth, boxHeight, radius)
      ctx.lineWidth = borderW * scale
      ctx.strokeStyle = borderColor
      ctx.stroke()
    }

    // 文字
    ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`
    ctx.fillStyle = color
    ctx.textBaseline = 'top'
    ctx.textAlign = textAlign
    const sh = caption.textShadow
      ? this._parseCssShadow(caption.textShadow, scale)
      : null
    if (sh) {
      ctx.shadowColor = sh.color
      ctx.shadowBlur = sh.blur
      ctx.shadowOffsetX = sh.offsetX
      ctx.shadowOffsetY = sh.offsetY
    }
    const textX =
      textAlign === 'center'
        ? boxX + boxWidth / 2
        : textAlign === 'right'
          ? boxX + boxWidth - paddingRight
          : boxX + paddingLeft
    let lineY = boxY
    for (const line of lines) {
      const w = ctx.measureText(line).width
      const hx =
        textAlign === 'center'
          ? textX - w / 2
          : textAlign === 'right'
            ? textX - w
            : textX
      // 高亮背景（逐行）
      if (highlight) {
        ctx.save()
        ctx.fillStyle = highlight
        ctx.fillRect(hx, lineY, w, lineHeight)
        ctx.restore()
        ctx.fillStyle = color
      }
      ctx.fillText(line, textX, lineY)
      // 下划线 / 删除线
      if (decoration && decoration !== 'none') {
        ctx.save()
        ctx.strokeStyle = color
        ctx.lineWidth = Math.max(1, fontSize / 12)
        ctx.beginPath()
        if (decoration.includes('underline')) {
          const dy = lineY + lineHeight - fontSize / 10
          ctx.moveTo(hx, dy)
          ctx.lineTo(hx + w, dy)
        }
        if (decoration.includes('line-through')) {
          const dy = lineY + lineHeight / 2
          ctx.moveTo(hx, dy)
          ctx.lineTo(hx + w, dy)
        }
        ctx.stroke()
        ctx.restore()
      }
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
