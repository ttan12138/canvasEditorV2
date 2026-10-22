import { EditorMode } from '../../../dataset/enum/Editor'
import { ElementType } from '../../../dataset/enum/Element'
import { IElement } from '../../../interface/Element'
import { deepClone } from '../../../utils'
import type { CanvasEvent } from '../CanvasEvent'
import type { Draw } from '../../draw/Draw'

/**
 * 需求 4.1：只读/表单模式下，图片控件内的多张图片支持拖拽调整顺序。
 * mousedown 命中控件内图片且允许拖拽时记录源序位；
 * mouseup 命中同控件内其他图片时按指示位置插入（左半插前/右半插后）。
 */

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
 * 控件配置对象（含 imageDraggable）需通过 getControlValue 读取，
 * 不应依赖渲染 elementList 中图片元素的 control 标记（可能被重新格式化重置）。
 */
function isImageDraggable(element: IElement, draw: Draw): boolean {
  const controlId = element.controlId
  if (!controlId) return false
  const results = draw.getControl().getValueById({ id: controlId })
  const control = results?.[0]
  if (control?.imageDraggable !== undefined) return control.imageDraggable
  if (element.draggable !== undefined) return element.draggable
  return false
}

/** mousedown 命中控件内图片时尝试进入排序拖拽状态 */
export function setupControlImageSortDrag(
  host: CanvasEvent,
  element: IElement
) {
  host.controlImageDrag = null
  removeDropIndicator()
  if (!element || element.type !== ElementType.IMAGE || !element.controlId) {
    return
  }
  const draw = host.getDraw()
  const mode = draw.getMode()
  const draggable = isImageDraggable(element, draw)
  if (mode !== EditorMode.READONLY && mode !== EditorMode.FORM) return
  if (!draggable) return
  const elementList = draw.getElementList()
  const sourceOrder = getImageOrderByElement(
    elementList,
    element.controlId,
    element
  )
  if (!~sourceOrder) return
  host.controlImageDrag = {
    controlId: element.controlId,
    sourceOrder
  }
  // 排序拖拽期间禁止选区扩展（mousedown 默认开启了选区，
  // 禁用原生拖拽后 mousemove 会落入选区扩展逻辑导致拖动出现选区）
  host.isAllowSelection = false
}

/** mouseup 时按松开位置把源图片插入到目标图片前/后（与指示线一致） */
export function applyControlImageSort(evt: MouseEvent, host: CanvasEvent) {
  const drag = host.controlImageDrag
  removeDropIndicator()
  if (!drag) return
  const draw = host.getDraw()
  const position = draw.getPosition()
  const positionResult = position.adjustPositionContext({
    x: evt.offsetX,
    y: evt.offsetY
  })
  if (!positionResult) return
  // 表格内命中时 index 是主列表表格元素索引，tdValueIndex 才是单元格内索引，
  // 而 getElementList() 在表格场景返回的就是当前单元格 td.value，需配套使用
  const targetIndex = positionResult.isTable
    ? positionResult.tdValueIndex!
    : positionResult.index
  if (targetIndex == null) return
  const elementList = draw.getElementList()
  const targetEl = elementList[targetIndex]
  if (
    !targetEl ||
    targetEl.type !== ElementType.IMAGE ||
    targetEl.controlId !== drag.controlId
  ) {
    return
  }
  const targetOrder = getImageOrderByIndex(
    elementList,
    drag.controlId,
    targetIndex
  )
  if (!~targetOrder) return
  // 鼠标相对目标图片左右半：左半插到其前，右半插到其后
  const positionContext = position.getPositionContext()
  const positionList = positionContext.isTable
    ? (draw.getTd()?.positionList ?? [])
    : position.getPositionList()
  const pos = positionList[targetIndex]
  let insertIndex = targetOrder
  if (pos) {
    const isLeftHalf =
      evt.offsetX <
      (pos.coordinate.leftTop[0] + pos.coordinate.rightBottom[0]) / 2
    if (!isLeftHalf) insertIndex = targetOrder + 1
  }
  // 插到自身前/后等于无变化
  if (insertIndex === drag.sourceOrder || insertIndex === drag.sourceOrder + 1) {
    return
  }
  const control = draw.getControl()
  const results = control.getValueById({ id: drag.controlId })
  if (!results?.length) return
  const imageElements = (results[0].elementList ?? []).filter(
    el => el.type === ElementType.IMAGE
  )
  if (
    drag.sourceOrder >= imageElements.length ||
    insertIndex > imageElements.length
  ) {
    return
  }
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

// ==================== 拖拽插入位置指示 ====================

let dropIndicator: HTMLDivElement | null = null

function removeDropIndicator() {
  dropIndicator?.remove()
  dropIndicator = null
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

/** 需求 4.1：排序拖拽过程中在目标图片前/后显示插入位置指示线 */
export function showControlImageDropIndicator(
  evt: MouseEvent,
  host: CanvasEvent
) {
  const drag = host.controlImageDrag
  removeDropIndicator()
  if (!drag) return
  const draw = host.getDraw()
  const position = draw.getPosition()
  // 用 getPositionByXY 避免 adjustPositionContext 更新光标上下文的副作用
  const positionResult = position.getPositionByXY({
    x: evt.offsetX,
    y: evt.offsetY
  })
  if (!positionResult || !~positionResult.index) return
  const targetIndex = positionResult.isTable
    ? positionResult.tdValueIndex!
    : positionResult.index
  const elementList = draw.getElementList()
  const targetEl = elementList[targetIndex]
  if (
    !targetEl ||
    targetEl.type !== ElementType.IMAGE ||
    targetEl.controlId !== drag.controlId
  ) {
    return
  }
  const positionContext = position.getPositionContext()
  const positionList = positionContext.isTable
    ? (draw.getTd()?.positionList ?? [])
    : position.getPositionList()
  const pos = positionList[targetIndex]
  if (!pos) return
  const { leftTop, rightBottom } = pos.coordinate
  const isLeftHalf = evt.offsetX < (leftTop[0] + rightBottom[0]) / 2
  const lineX = isLeftHalf ? leftTop[0] : rightBottom[0]
  // 单元格内 position 可能无 pageNo，回退当前页
  const pageNo = pos.pageNo ?? draw.getPageNo()
  showDropIndicator(
    draw,
    pageNo,
    lineX,
    leftTop[1],
    rightBottom[1] - leftTop[1]
  )
}
