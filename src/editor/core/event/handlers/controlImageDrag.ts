import { EditorMode } from '../../../dataset/enum/Editor'
import { ElementType } from '../../../dataset/enum/Element'
import { IElement } from '../../../interface/Element'
import { deepClone } from '../../../utils'
import type { CanvasEvent } from '../CanvasEvent'
import type { Draw } from '../../draw/Draw'

/**
 * 需求 4.1 / 4.5：只读/表单模式下，图片控件内的多张图片支持拖拽。
 * - 4.1 draggable：拖拽到目标图片外 20% 区域（左 20% 插前 / 右 20% 插后）调整顺序；
 * - 4.5 swappable：拖拽到目标图片中间 60% 区域（左 20%~80%）交换两张图片位置。
 * 两个能力相互独立，由各自开关控制，互不影响。
 */

/** 拖拽落点区域：before=插到目标前，after=插到目标后，swap=与目标交换 */
type DropZone = 'before' | 'after' | 'swap'

function getImageOrderByElement(
  elementList: IElement[],
  controlId: string,
  target: IElement
): number {
  let order = -1
  let count = 0
  for (const el of elementList) {
    if (el.controlId === controlId && el.type === ElementType.IMAGE) {
      if (el === target) order = count
      count++
    }
  }
  return order
}

function getImageOrderByIndex(
  elementList: IElement[],
  controlId: string,
  targetIndex: number
): number {
  let order = -1
  let count = 0
  for (let i = 0; i < elementList.length; i++) {
    const el = elementList[i]
    if (el.controlId === controlId && el.type === ElementType.IMAGE) {
      if (i === targetIndex) order = count
      count++
    }
  }
  return order
}

/**
 * 拖拽开关优先级：控件级 imageDraggable > 图片级 draggable > 默认不可拖拽。
 * 控件配置对象直接取自渲染 elementList 中图片元素的 element.control（同一对象引用，
 * 重新格式化不会丢失；注意 getValueById 对图片控件不返回结果，不能用来读取）。
 */
function isImageDraggable(element: IElement, draw: Draw): boolean {
  const controlId = element.controlId
  if (!controlId) return false
  // 注意：getValueById 对图片控件返回空，须直接读元素上的 control 对象
  const control = element.control
  // 需求 11：控件不可编辑时禁用拖拽
  if (control?.editable === false) return false
  console.log(
    '[isImageDraggable] controlId=%s editable=%s imageDraggable=%s draggable=%s mode=%s',
    controlId,
    control?.editable,
    control?.imageDraggable,
    element.draggable,
    draw.getMode()
  )
  if (control?.imageDraggable !== undefined) return control.imageDraggable
  if (element.draggable !== undefined) return element.draggable
  return false
}

/**
 * 需求 4.5：交换开关优先级：控件级 imageSwappable > 图片级 swappable > 默认不可交换。
 */
function isImageSwappable(element: IElement): boolean {
  const controlId = element.controlId
  if (!controlId) return false
  // 注意：getValueById 对图片控件返回空，须直接读元素上的 control 对象
  const control = element.control
  // 需求 11：控件不可编辑时禁用交换
  if (control?.editable === false) return false
  console.log(
    '[isImageSwappable] controlId=%s editable=%s imageSwappable=%s swappable=%s',
    controlId,
    control?.editable,
    control?.imageSwappable,
    element.swappable
  )
  if (control?.imageSwappable !== undefined) return control.imageSwappable
  if (element.swappable !== undefined) return element.swappable
  return false
}

/** 根据落点 x 在目标图片左右边界内的相对位置判定区域 */
function getDropZone(left: number, right: number, x: number): DropZone {
  const width = right - left
  if (width <= 0) return 'before'
  const frac = (x - left) / width
  // 第一张图片无"上一张图片的右侧 20%"，其左 20% 即"插入当前图片以前"；
  // 最后一张同理，右 20% 即"插入当前图片以后"。中间 60% 为交换区。
  if (frac < 0.2) return 'before'
  if (frac > 0.8) return 'after'
  return 'swap'
}

/** mousedown 命中控件内图片时尝试进入排序/交换拖拽状态 */
export function setupControlImageSortDrag(
  host: CanvasEvent,
  element: IElement
) {
  host.controlImageDrag = null
  removeAllIndicators()
  if (!element || element.type !== ElementType.IMAGE || !element.controlId) {
    return
  }
  const draw = host.getDraw()
  const mode = draw.getMode()
  if (mode !== EditorMode.READONLY && mode !== EditorMode.FORM) return
  const canReorder = isImageDraggable(element, draw)
  const canSwap = isImageSwappable(element)
  // 两种能力都没开启则不进入拖拽
  if (!canReorder && !canSwap) return
  const elementList = draw.getElementList()
  const sourceOrder = getImageOrderByElement(
    elementList,
    element.controlId,
    element
  )
  if (!~sourceOrder) return
  host.controlImageDrag = {
    controlId: element.controlId,
    sourceOrder,
    canReorder,
    canSwap
  }
  // 排序拖拽期间禁止选区扩展（mousedown 默认开启了选区，
  // 禁用原生拖拽后 mousemove 会落入选区扩展逻辑导致拖动出现选区）
  host.isAllowSelection = false
}

/**
 * 解析当前落点命中的目标图片及应执行的动作。
 * 返回 null 表示未命中同控件图片或当前区域不被允许（无可执行动作）。
 */
function resolveDropTarget(
  evt: MouseEvent,
  host: CanvasEvent
): {
  targetIndex: number
  pos: {
    coordinate: { leftTop: number[]; rightBottom: number[] }
    pageNo: number | undefined
  }
  action: DropZone
} | null {
  const drag = host.controlImageDrag
  if (!drag) return null
  const draw = host.getDraw()
  const position = draw.getPosition()
  // 用 getPositionByXY 避免 adjustPositionContext 更新光标上下文的副作用
  const positionResult = position.getPositionByXY({
    x: evt.offsetX,
    y: evt.offsetY
  })
  if (!positionResult || !~positionResult.index) return null
  // 表格内命中时 index 是主列表表格元素索引，tdValueIndex 才是单元格内索引，
  // 而 getElementList() 在表格场景返回的就是当前单元格 td.value，需配套使用
  const targetIndex = positionResult.isTable
    ? positionResult.tdValueIndex!
    : positionResult.index
  if (targetIndex == null) return null
  const elementList = draw.getElementList()
  const targetEl = elementList[targetIndex]
  if (
    !targetEl ||
    targetEl.type !== ElementType.IMAGE ||
    targetEl.controlId !== drag.controlId
  ) {
    return null
  }
  const positionContext = position.getPositionContext()
  const positionList = positionContext.isTable
    ? (draw.getTd()?.positionList ?? [])
    : position.getPositionList()
  const pos = positionList[targetIndex]
  if (!pos) return null
  const { leftTop, rightBottom } = pos.coordinate
  const zone = getDropZone(leftTop[0], rightBottom[0], evt.offsetX)
  // 按各自开关决定实际动作；区域与开关不匹配时不产生动作
  let action: DropZone
  if (zone === 'swap' && drag.canSwap) action = 'swap'
  else if (zone === 'before' && drag.canReorder) action = 'before'
  else if (zone === 'after' && drag.canReorder) action = 'after'
  else return null
  return {
    targetIndex,
    pos: { coordinate: { leftTop, rightBottom }, pageNo: pos.pageNo },
    action
  }
}

/** mouseup 时按松开位置执行交换或插入（与预览一致） */
export function applyControlImageSort(evt: MouseEvent, host: CanvasEvent) {
  const drag = host.controlImageDrag
  removeAllIndicators()
  if (!drag) return
  const r = resolveDropTarget(evt, host)
  if (!r) return
  const draw = host.getDraw()
  const elementList = draw.getElementList()
  const targetOrder = getImageOrderByIndex(
    elementList,
    drag.controlId,
    r.targetIndex
  )
  if (!~targetOrder) return
  const control = draw.getControl()
  const results = control.getValueById({ id: drag.controlId })
  if (!results?.length) return
  const imageElements = (results[0].elementList ?? []).filter(
    el => el.type === ElementType.IMAGE
  )
  if (drag.sourceOrder >= imageElements.length) return
  // 需求 4.5：交换两张图片
  if (r.action === 'swap') {
    if (targetOrder === drag.sourceOrder) return
    const newImages = [...imageElements]
    const tmp = newImages[drag.sourceOrder]
    newImages[drag.sourceOrder] = newImages[targetOrder]
    newImages[targetOrder] = tmp
    control.setValueListById([
      {
        id: drag.controlId,
        value: deepClone(newImages),
        isSubmitHistory: false
      }
    ])
    return
  }
  // 需求 4.1：插到目标前/后
  const insertIndex = r.action === 'before' ? targetOrder : targetOrder + 1
  // 插到自身前/后等于无变化
  if (
    insertIndex === drag.sourceOrder ||
    insertIndex === drag.sourceOrder + 1
  ) {
    return
  }
  if (insertIndex > imageElements.length) return
  const newImages = [...imageElements]
  const [moved] = newImages.splice(drag.sourceOrder, 1)
  const insertAt = insertIndex > drag.sourceOrder ? insertIndex - 1 : insertIndex
  newImages.splice(insertAt, 0, moved)
  control.setValueListById([
    {
      id: drag.controlId,
      value: deepClone(newImages),
      isSubmitHistory: false
    }
  ])
}

// ==================== 拖拽插入/交换位置指示 ====================

let dropIndicator: HTMLDivElement | null = null
let swapIndicator: HTMLDivElement | null = null

function removeDropIndicator() {
  dropIndicator?.remove()
  dropIndicator = null
}

function removeSwapIndicator() {
  swapIndicator?.remove()
  swapIndicator = null
}

function removeAllIndicators() {
  removeDropIndicator()
  removeSwapIndicator()
}

function showDropIndicator(
  draw: Draw,
  pageNo: number,
  x: number,
  y: number,
  h: number
) {
  const page = draw.getPageList()[pageNo]
  const host = page?.parentElement
  if (!page || !host) return
  // 宿主容器若为 static，absolute 指示线会相对更上层定位祖先导致错位/不可见
  if (getComputedStyle(host).position === 'static') {
    host.style.position = 'relative'
  }
  if (!dropIndicator) {
    dropIndicator = document.createElement('div')
    dropIndicator.style.position = 'absolute'
    dropIndicator.style.width = '3px'
    dropIndicator.style.background = '#4a90d9'
    dropIndicator.style.borderRadius = '2px'
    dropIndicator.style.pointerEvents = 'none'
    dropIndicator.style.zIndex = '9'
  }
  // 页内坐标 -> 宿主容器坐标：canvas 可能水平居中（margin auto）且
  // 非首页相对宿主有前面页累积的垂直偏移，用视口坐标差值换算最可靠
  const canvasRect = page.getBoundingClientRect()
  const hostRect = host.getBoundingClientRect()
  const dx = canvasRect.left - hostRect.left
  const dy = canvasRect.top - hostRect.top
  dropIndicator.style.left = `${x - 1 + dx}px`
  dropIndicator.style.top = `${y + dy}px`
  dropIndicator.style.height = `${h}px`
  if (dropIndicator.parentElement !== host) host.append(dropIndicator)
}

/** 需求 4.5：交换预览——在目标图片上覆盖橙色虚线高亮框 */
function showSwapIndicator(
  draw: Draw,
  pageNo: number,
  left: number,
  top: number,
  width: number,
  height: number
) {
  const page = draw.getPageList()[pageNo]
  const host = page?.parentElement
  if (!page || !host) return
  if (getComputedStyle(host).position === 'static') {
    host.style.position = 'relative'
  }
  if (!swapIndicator) {
    swapIndicator = document.createElement('div')
    swapIndicator.style.position = 'absolute'
    swapIndicator.style.border = '2px dashed #f59e0b'
    swapIndicator.style.background = 'rgba(245,158,11,0.15)'
    swapIndicator.style.borderRadius = '4px'
    swapIndicator.style.pointerEvents = 'none'
    swapIndicator.style.zIndex = '9'
    swapIndicator.style.display = 'flex'
    swapIndicator.style.alignItems = 'center'
    swapIndicator.style.justifyContent = 'center'
    swapIndicator.style.color = '#b45309'
    swapIndicator.style.fontSize = '12px'
    swapIndicator.style.fontWeight = 'bold'
    swapIndicator.textContent = '⇄ 交换'
  }
  const canvasRect = page.getBoundingClientRect()
  const hostRect = host.getBoundingClientRect()
  const dx = canvasRect.left - hostRect.left
  const dy = canvasRect.top - hostRect.top
  swapIndicator.style.left = `${left + dx}px`
  swapIndicator.style.top = `${top + dy}px`
  swapIndicator.style.width = `${width}px`
  swapIndicator.style.height = `${height}px`
  if (swapIndicator.parentElement !== host) host.append(swapIndicator)
}

/** 需求 4.1/4.5：拖拽过程中显示插入位置指示线或交换高亮 */
export function showControlImageDropIndicator(
  evt: MouseEvent,
  host: CanvasEvent
) {
  const drag = host.controlImageDrag
  removeAllIndicators()
  if (!drag) return
  const r = resolveDropTarget(evt, host)
  if (!r) return
  const { leftTop, rightBottom } = r.pos.coordinate
  // 单元格内 position 可能无 pageNo，回退当前页
  const pageNo = r.pos.pageNo ?? host.getDraw().getPageNo()
  if (r.action === 'swap') {
    showSwapIndicator(
      host.getDraw(),
      pageNo,
      leftTop[0],
      leftTop[1],
      rightBottom[0] - leftTop[0],
      rightBottom[1] - leftTop[1]
    )
  } else {
    const lineX = r.action === 'before' ? leftTop[0] : rightBottom[0]
    showDropIndicator(
      host.getDraw(),
      pageNo,
      lineX,
      leftTop[1],
      rightBottom[1] - leftTop[1]
    )
  }
}
