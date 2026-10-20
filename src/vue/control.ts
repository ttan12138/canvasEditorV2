import type { Command, IElement } from '../editor'
import type { ITableCellInfo } from '../editor/interface/table/Td'
import type { IPadding } from '../editor/interface/Common'
import {
  ControlType,
  ElementType,
  VerticalAlign,
  TdBorder
} from '../editor'

export type { ITableCellInfo }

export interface IPlaceholderTextControl {
  /** 控件占位符 */
  name: string
  /** 控件当前文本值 */
  value: string | null
}

/** 取值类型：VALUE 文本 / IMAGE 图片 */
export type IReplaceValueType = 'VALUE' | 'IMAGE'

export interface IReplaceValueDetail {
  /** 明细项关联的占位符（预留，便于调用方对照） */
  name?: string
  /** 文本或图片地址 */
  value?: string
  /** 取项类型：IMAGE 图片 / VALUE 文本；缺省按顶层 valueType，再缺省视为 VALUE */
  valueType?: IReplaceValueType
  /** @deprecated 兼容旧调用，请改用 valueType */
  isImage?: boolean
  /** 指定宽度 */
  width?: number
  /** 指定高度 */
  height?: number
  /** 需求 5.3：图片左右内边距 [左, 右]，默认 [0,0]；在已算宽高基础上再内缩 */
  padding?: [number, number]
  /** 是否可删除（控件级，预留） */
  canDelete?: boolean
  /** 是否可编辑（控件级，预留） */
  canEdit?: boolean
}

export interface IReplaceControlPayload {
  /** 待匹配替换的占位符（单个 placeholder 字符串） */
  name: string
  /** 明细项列表 */
  values?: IReplaceValueDetail[]
  /** valueType=VALUE 时的纯文本值；valueType=IMAGE 时的单张图片地址 */
  value?: string
  /** 取值类型：IMAGE 图片模式 / VALUE 文本模式（缺省为 VALUE） */
  valueType?: IReplaceValueType
  /** @deprecated 兼容旧调用，请改用 valueType */
  isImage?: boolean
  /** 图片按单元格均分时的数量 */
  count?: number
}

/** 需求 8.5：更新子表数据 */
export interface ISetChildTablePayload {
  /** 子表单元格的 name（8.4.1.5） */
  name: string
  /** 表数据；data.length = 表数据行数 */
  data: unknown[][]
}

/** 需求 8.4：保存单元格联动/子表配置 */
export interface ISetCellConfigPayload {
  /** 目标单元格 tdId */
  tdId: string
  enableLink?: boolean
  linkChildIds?: string[]
  show?: boolean
  hasChild?: boolean
  childTables?: {
    header: { key: string; name?: string; width: number; height?: number }[]
    rowHeight?: number
  }
  name?: string
  /** 8.6 垂直对齐 */
  verticalAlign?: VerticalAlign
  /** 8.6 单元格边框（四边可选） */
  borderTypes?: TdBorder[]
  /** 8.7 仅含子表单元格的独立内边距（上、右、下、左） */
  childTdPadding?: IPadding
}

interface IControlCellInfo {
  /** 所在表格元素（含 colgroup 列宽） */
  table: IElement
  /** 所在单元格 */
  td: { value: IElement[]; colspan?: number }
  /** 单元格在表格中的起始列索引（按 colspan 累加得到） */
  colIndex: number
  /** 单元格 tdId（用于向 getTableCells 取真实渲染宽度） */
  tdId?: string
  /** 单元格是否仅包含该控件 */
  onlyControl: boolean
}

/**
 * 需求3：获取所有带有 placeholder 的文本控件的值
 * 返回 [{ name: placeholder, value: 当前值 }]
 */
export function getPlaceholderTextControls(
  command: Command
): IPlaceholderTextControl[] {
  const list = command.getControlList()
  const ids = Array.from(
    new Set(list.map(e => e.controlId).filter((v): v is string => !!v))
  )
  const result: IPlaceholderTextControl[] = []
  for (const id of ids) {
    const values = command.getControlValue({ id })
    if (!values) continue
    for (const item of values) {
      if (item.type === ControlType.TEXT && item.placeholder) {
        result.push({ name: item.placeholder, value: item.value })
      }
    }
  }
  return result
}

function loadImageSize(src: string): Promise<{ w: number; h: number }> {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight })
    img.onerror = () => resolve({ w: 0, h: 0 })
    img.src = src
  })
}

/**
 * 定位控件所在单元格（若存在），并累计计算单元格的起始列索引。
 * 注意：getValue 的表格分支不保留 td.width/height，单元格宽度需由
 * 表格 colgroup 结合 colIndex 推算。
 */
function findControlCell(
  command: Command,
  controlId: string
): IControlCellInfo | null {
  // 控件元素在 zip 时会丢失 controlId（不在 EDITOR_ELEMENT_ZIP_ATTR），
  // 需通过 extraPickAttrs 保留，否则无法定位控件所在单元格。
  const { header, main, footer } = command.getValue({
    extraPickAttrs: ['controlId']
  }).data
  const zones: IElement[][] = [header, main, footer].filter(
    (z): z is IElement[] => Array.isArray(z)
  )
  let result: IControlCellInfo | null = null
  const walk = (
    elementList: IElement[],
    parentTable: IElement | null,
    parentTd: { value: IElement[]; colspan?: number } | null,
    parentColIndex: number
  ) => {
    if (result) return
    for (const el of elementList) {
      if (el.type === ElementType.TABLE && el.trList) {
        for (const tr of el.trList) {
          let col = 0
          for (const td of tr.tdList) {
            const span = td.colspan || 1
            walk(td.value ?? [], el, td, col)
            col += span
          }
        }
      }
      if (el.controlId === controlId) {
        if (parentTd && parentTable) {
          const ids = new Set<string>()
          let only = true
          for (const c of parentTd.value) {
            if (c.controlId) ids.add(c.controlId)
            else if (c.value && c.value !== '\n') only = false
          }
          result = {
            table: parentTable,
            td: parentTd,
            colIndex: parentColIndex,
            tdId: (parentTd as { id?: string }).id,
            onlyControl: only && ids.size === 1
          }
        }
        return
      }
    }
  }
  for (const zone of zones) walk(zone, null, null, 0)
  return result
}

/** 由表格 colgroup 推算单元格宽度（colIndex 起，跨 colspan 列） */
function getCellWidth(
  table: IElement,
  td: { colspan?: number },
  colIndex: number
): number {
  const colgroup = table.colgroup
  if (colgroup?.length) {
    let width = 0
    const span = td.colspan || 1
    for (let c = colIndex; c < colIndex + span && c < colgroup.length; c++) {
      width += colgroup[c]?.width || 0
    }
    if (width > 0) return width
  }
  return 0
}

interface IImageSizeInput {
  /** 自然尺寸 */
  w0: number
  h0: number
  /** 明细中显式设置的宽高 */
  setW?: number
  setH?: number
  /** 是否在单元格内（且单元格仅含该控件） */
  inCell: boolean
  /** 单元格宽度 */
  cellWidth: number
  /** 均分数量（仅单元格内有效） */
  count?: number
  /** 需求 5.3：图片左右内边距 [左, 右] */
  padLeft?: number
  padRight?: number
}

/** 按需求5.1 / 5.2 计算单张图片的宽高（含需求5.3 左右 padding 内缩） */
function computeImageSize(input: IImageSizeInput): {
  width: number
  height: number
} {
  const { w0, h0, setW, setH, inCell, cellWidth, count, padLeft = 0, padRight = 0 } = input
  const ratio = w0 && h0 ? h0 / w0 : 1 // 原图高/宽
  const autoHeight = (w: number) => (w0 ? w * ratio : w)
  const autoWidth = (h: number) => (h0 ? h / ratio : h)

  // 先按 5.1 / 5.2 算出「槽宽」（未扣 padding），再统一扣左右 padding 并重新自适应高
  let slotW = 0
  let slotH = 0

  if (inCell) {
    // 5.1 单元格内
    if (count && count > 0) {
      // 5.1.1 按单元格宽 / count 均分，高度自适应。
      // 用 floor 避免四舍五入后多张累加宽度溢出单元格（换行）。
      slotW = Math.floor(cellWidth / count)
      slotH = autoHeight(slotW)
    } else if (setW != null && setH != null) {
      // 5.1.2 设置了宽高：超宽则限宽并等比缩放高度
      if (setW > cellWidth) {
        slotW = cellWidth
        slotH = (setH * slotW) / setW
      } else {
        slotW = setW
        slotH = setH
      }
    } else if (setW != null) {
      // 5.1.3 仅设置宽：宽度用设定值（超宽限宽），高度按原图比例
      slotW = Math.min(setW, cellWidth)
      slotH = autoHeight(slotW)
    } else if (setH != null) {
      // 5.1.3 仅设置高：高度用设定值，宽按原图比例；超宽则限宽
      const width = autoWidth(setH)
      if (width > cellWidth) {
        slotW = cellWidth
        slotH = setH
      } else {
        slotW = width
        slotH = setH
      }
    } else {
      // 5.1.4 未设置宽高：宽度用单元格宽，高度按原图比例
      slotW = cellWidth
      slotH = autoHeight(slotW)
    }
  } else {
    // 5.2 非单元格内
    if (setW != null && setH != null) {
      slotW = setW
      slotH = setH
    } else if (setW != null) {
      slotW = setW
      slotH = autoHeight(slotW)
    } else if (setH != null) {
      slotW = autoWidth(setH)
      slotH = setH
    } else {
      // 5.2.4 原图宽高
      slotW = w0
      slotH = h0
    }
  }

  // 需求 5.3：在槽宽基础上扣去左右 padding，高度按原图比例重新自适应
  const padLR = Math.max(0, padLeft) + Math.max(0, padRight)
  if (padLR > 0) {
    const contentW = Math.max(0, slotW - padLR)
    slotW = contentW
    slotH = autoHeight(contentW)
  }
  return { width: slotW, height: slotH }
}

/**
 * 需求4 + 需求5：根据 placeholder 查找控件并替换其值
 * - 文本模式：直接替换文本
 * - 图片模式：替换图片元素；当控件位于单元格且单元格仅含该控件时，
 *   按单元格尺寸自适应（优先按宽自适应），可通过 count 均分
 */
export async function setControlValueByPlaceholder(
  command: Command,
  payload: IReplaceControlPayload
): Promise<void> {
  // valueType 缺省视为 VALUE；isImage 仅作兼容别名
  const valueType: IReplaceValueType =
    payload.valueType ?? (payload.isImage ? 'IMAGE' : 'VALUE')
  // 明细项未显式指定类型时，回落到顶层 valueType（与 IReplaceValueDetail 注释契约一致）
  const itemType = (v: IReplaceValueDetail): IReplaceValueType =>
    v.valueType ?? (v.isImage ? 'IMAGE' : valueType)

  // 1. 计算目标值
  let textValue = ''
  let imageItems: {
    value: string
    width?: number
    height?: number
    padding?: [number, number]
  }[] = []
  if (valueType === 'IMAGE') {
    // IMAGE：优先用 values 中的图片项；否则用单个 value
    const valuesImages = (payload.values ?? []).filter(
      v => itemType(v) === 'IMAGE'
    )
    if (valuesImages.length) {
      imageItems = valuesImages.map(v => ({
        value: v.value ?? '',
        width: v.width,
        height: v.height,
        padding: v.padding
      }))
    } else if (payload.value != null) {
      imageItems = [{ value: payload.value }]
    }
    // 需求 5.1.1：count 表示「一行几张图」（单元格宽均分为 count 列），
    // 仅决定每张图的均分宽度（cellWidth/count），不限制图片总数。
    // 图片数量由 values（或单张 value 复制）决定：
    // - 仅单张 value / values 不足一行：复制补足到 count 张以填满首行；
    // - values 达到或超过一行：保留全部，按 count 每张均分宽度并自然换行。
    if (payload.count && payload.count > 1 && imageItems.length) {
      if (imageItems.length < payload.count) {
        const base = imageItems
        const expanded: typeof imageItems = []
        for (let i = 0; i < payload.count; i++) {
          expanded.push(base[i % base.length])
        }
        imageItems = expanded
      }
    }
  } else {
    // VALUE（含 valueType=undefined）：有 value 取 value；
    // 否则取 values 中 valueType=VALUE 的项拼接
    if (payload.value != null) {
      textValue = payload.value
    } else if (payload.values?.length) {
      textValue = payload.values
        .filter(v => itemType(v) === 'VALUE')
        .map(v => v.value ?? '')
        .join('')
    }
  }

  // 2. 根据 placeholder 查找控件 id
  const list = command.getControlList()
  const ids = Array.from(
    new Set(list.map(e => e.controlId).filter((v): v is string => !!v))
  )
  const targetIds: string[] = []
  for (const id of ids) {
    const values = command.getControlValue({ id })
    if (!values) continue
    for (const item of values) {
      if (item.placeholder && payload.name === item.placeholder) {
        targetIds.push(id)
      }
    }
  }

  // 3. 替换
  if (valueType !== 'IMAGE') {
    for (const id of targetIds) {
      command.executeSetControlValue({ id, value: textValue })
    }
    return
  }

  const sizes = await Promise.all(
    imageItems.map(async item => {
      if (item.width && item.height) return { w: item.width, h: item.height }
      return loadImageSize(item.value)
    })
  )
  // 单元格内容可用宽需扣除左右内边距（默认 tdPadding=[0,5,5,5]）
  const tdPadding = command.getOptions().table.tdPadding
  const tdPaddingWidth = tdPadding[1] + tdPadding[3]
  // 取真实渲染的单元格宽度（getTableCells 返回实际 td.width，已含表格按页宽压缩），
  // 比 colgroup 设计宽更准确；缺失时回退到 colgroup 推算。
  const cellWidthMap = new Map<string, number>()
  for (const c of command.getTableCells()) {
    if (c.tdId && c.width && c.width > 0) cellWidthMap.set(c.tdId, c.width)
  }
  for (const id of targetIds) {
    const cellInfo = findControlCell(command, id)
    const inCell = !!cellInfo && cellInfo.onlyControl
    // 注意：必须用单元格实际渲染宽度，而非 colgroup 设计宽。
    // 表格可能因超出页宽被压缩，colgroup 宽会大于实际可用宽，导致均分后溢出换行。
    const rawCellWidth = cellInfo
      ? (cellInfo.tdId && cellWidthMap.get(cellInfo.tdId)) ||
        getCellWidth(cellInfo.table, cellInfo.td, cellInfo.colIndex)
      : 0
    const cellWidth = Math.max(0, rawCellWidth - tdPaddingWidth)
    const elements: IElement[] = imageItems.map((item, i) => {
      const size = sizes[i] ?? { w: 0, h: 0 }
      const [padLeft = 0, padRight = 0] = item.padding ?? []
      const { width, height } = computeImageSize({
        w0: size.w,
        h0: size.h,
        setW: item.width,
        setH: item.height,
        inCell,
        cellWidth,
        count: payload.count,
        padLeft,
        padRight
      })
      const el: IElement = { type: ElementType.IMAGE, value: item.value }
      if (width) el.width = Math.round(width)
      if (height) el.height = Math.round(height)
      // 需求 5.3：在已算宽高之外再设置左右 padding（IPadding=[上,右,下,左]）
      if (item.padding) {
        el.padding = [0, padRight, 0, padLeft]
      }
      return el
    })
    command.executeSetControlValue({ id, value: elements })
  }
}
