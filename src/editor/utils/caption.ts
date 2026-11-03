import { ElementType } from '../dataset/enum/Element'
import type { IElement, IImageCaption } from '../interface/Element'

/**
 * 图片四向内边距，返回未缩放（doc）单位的 [上, 右, 下, 左]。
 * 数据按需求 5.3 约定为二元组 [left, right]（如 padding:[10,20]，上下为 0）；
 * 同时兼容引擎通用四元组 [top, right, bottom, left]。
 */
export function getImagePadding(element: IElement): {
  padT: number
  padR: number
  padB: number
  padL: number
} {
  // 需求 5.3 数据约定为二元组 [left, right]，但 IPadding 类型为固定四元组，
  // 运行时长度可能为 2，故按普通数组处理以兼容两种格式。
  const p = element.padding as number[] | undefined
  if (!p || p.length === 0) {
    return { padT: 0, padR: 0, padB: 0, padL: 0 }
  }
  // 四元组 [top, right, bottom, left]
  if (p.length >= 4) {
    return { padT: p[0], padR: p[1], padB: p[2], padL: p[3] }
  }
  // 二元组 [left, right]（需求 5.3 约定）
  return { padT: 0, padR: p[1], padB: 0, padL: p[0] }
}

/** 统计目标图片元素之前（按文档顺序）的图片数量；命中目标返回 -1 */
export function countImagesBeforeTarget(
  elementList: IElement[],
  targetElement: IElement
): number {
  let count = 0
  for (const element of elementList) {
    if (element === targetElement) return -1
    if (element.type === ElementType.TABLE && element.trList) {
      for (const tr of element.trList) {
        for (const td of tr.tdList) {
          const subCount = countImagesBeforeTarget(td.value, targetElement)
          if (subCount < 0) return -1
          count += subCount
        }
      }
    } else if (element.type === ElementType.IMAGE) {
      count++
    }
  }
  return count
}

/** 将题注中的 {imageNo} 占位替换为图片序号 */
export function substituteImageNo(text: string, imageNo: number): string {
  return text.includes('{imageNo}')
    ? text.replace(/\{imageNo\}/g, String(imageNo))
    : text
}

/**
 * 按最大宽度对题注文本换行（逐字符断行，兼容中文无空格场景；显式 \n 强制换行）。
 * @returns 换行后的文本行数组
 */
export function wrapCaptionLines(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number
): string[] {
  if (maxWidth <= 0) return [text]
  const lines: string[] = []
  for (const paragraph of text.split('\n')) {
    if (paragraph === '') {
      lines.push('')
      continue
    }
    let current = ''
    for (const ch of paragraph) {
      const test = current + ch
      if (current && ctx.measureText(test).width > maxWidth) {
        lines.push(current)
        current = ch
      } else {
        current = test
      }
    }
    if (current) lines.push(current)
  }
  return lines
}

/**
 * 题注四向间距取值（doc 单位）：上下外边距、左右内边距。
 * 兼容旧的单值字段 marginY/paddingX（作为未单独配置时的回退）。
 * 布局预留与绘制必须调用同一实现，确保两侧行数与间隙一致。
 */
export function getCaptionSpacing(caption: IImageCaption): {
  marginTop: number
  marginBottom: number
  paddingLeft: number
  paddingRight: number
} {
  return {
    marginTop: caption.marginTop ?? caption.marginY ?? 0,
    marginBottom: caption.marginBottom ?? caption.marginY ?? 0,
    paddingLeft: caption.paddingLeft ?? caption.paddingX ?? 0,
    paddingRight: caption.paddingRight ?? caption.paddingX ?? 0
  }
}

/**
 * 需求：题注最大显示行数，超出截断并在末行追加省略号（…）。
 * 末行逐字回退直到「剩余文本 + …」不超过 maxWidth，保证省略号不越界。
 * 布局预留与绘制必须调用同一实现，确保两侧行数一致。
 * @param maxLines 最大行数（0/负数表示不限制）
 */
export function truncateCaptionLines(
  ctx: CanvasRenderingContext2D,
  lines: string[],
  maxLines: number,
  maxWidth: number
): string[] {
  if (!maxLines || maxLines <= 0 || lines.length <= maxLines) return lines
  const kept = lines.slice(0, maxLines)
  const ELLIPSIS = '…'
  let last = kept[maxLines - 1] ?? ''
  while (last.length > 0 && ctx.measureText(last + ELLIPSIS).width > maxWidth) {
    last = last.slice(0, -1)
  }
  kept[maxLines - 1] = last + ELLIPSIS
  return kept
}
