import type { Command, IElement } from '../editor'
import type { IImageCaption } from '../editor/interface/Element'
import type { IControl } from '../editor/interface/Control'
import type { IAnnotationStyle } from '../editor/interface/Editor'
import type { ITableCellInfo } from '../editor/interface/table/Td'
import type { IPadding } from '../editor/interface/Common'
import {
  ControlType,
  ElementType,
  VerticalAlign,
  TdBorder,
  splitText
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
  /** 需求 5.3：图片内边距；二元组 [左, 右] 或四元组 [上, 右, 下, 左]，默认 [0,0]；
   *  在已算宽高基础上再内缩，上下内边距计入行高 */
  padding?: [number, number] | [number, number, number, number]
  /** 图片描述文字（题注）：位于图像正下方，相对（图像+padding）宽度居中，超出换行 */
  text?: string
  /** 题注样式（覆盖控件级 imageCaptionStyle 默认；仅当同时提供 text 时生效） */
  imgCaptionStyle?: Partial<IImageCaption>
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
  /** 需求 4.1：控件内图片是否支持拖拽调整顺序 */
  draggable?: boolean
  /** 需求 4.2：整组图片是否支持右键删除（作为 values 各项 canDelete 的默认值） */
  canDelete?: boolean
  /** 需求 4.3：控件内图片是否显示 resize 句柄用于调整尺寸（默认 true） */
  resize?: boolean
  /** 需求 4.5：控件内图片是否支持拖拽交换位置 */
  swappable?: boolean
}

/** 需求 8.5：更新子表数据 */
export interface ISetChildTablePayload {
  /** 子表单元格的 name（8.4.1.5） */
  name: string
  /**
   * 表数据；两种形式二选一：
   * - 二维数组：data[r][c] 按列顺序直接对应表头（data.length = 数据行数）；
   * - 对象数组：每条对象 key 需与子表表头 key 匹配，按表头 key 顺序映射为行（缺失 key 取空值）。
   */
  data: unknown[][] | Record<string, unknown>[]
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

/**
 * 需求3（补充）：以对象形式返回带 placeholder 的文本控件值
 * 返回 { [占位符]: 内容 }；同名占位符多次出现时后者覆盖前者。
 */
export function getPlaceholderTextControlMap(
  command: Command
): Record<string, string> {
  const list = command.getControlList()
  const ids = Array.from(
    new Set(list.map(e => e.controlId).filter((v): v is string => !!v))
  )
  const result: Record<string, string> = {}
  for (const id of ids) {
    const values = command.getControlValue({ id })
    if (!values) continue
    for (const item of values) {
      if (item.type === ControlType.TEXT && item.placeholder) {
        result[item.placeholder] = item.value ?? ''
      }
    }
  }
  return result
}

function loadImageSize(src: string): Promise<{ w: number; h: number }> {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => {
      resolve({ w: img.naturalWidth, h: img.naturalHeight })
    }
    img.onerror = () => {
      resolve({ w: 0, h: 0 })
    }
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
  const {
    w0,
    h0,
    setW,
    setH,
    inCell,
    cellWidth,
    count,
    padLeft = 0,
    padRight = 0
  } = input
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
/**
 * 事件驱动等待：先尝试 apply；若控件尚未渲染（controlId 未分配）导致匹配失败，
 * 则监听 contentChange 事件——setData 渲染完成（控件 id 分配）后会触发该事件，
 * 届时再执行 apply。最多等待 timeout 毫秒（兜底），避免占位符错误时无限监听。
 */
function waitControlReady(
  command: Command,
  apply: () => boolean,
  timeout = 1500
): Promise<boolean> {
  if (apply()) return Promise.resolve(true)
  const eventBus = command.getEventBus?.()
  if (!eventBus) {
    return Promise.resolve(false)
  }
  return new Promise(resolve => {
    let settled = false
    let timer: ReturnType<typeof setTimeout> | null = null
    const cleanup = () => {
      eventBus.off('contentChange', onReady)
      if (timer) clearTimeout(timer)
    }
    const onReady = () => {
      if (settled) return
      if (apply()) {
        settled = true
        cleanup()
        resolve(true)
      }
    }
    eventBus.on('contentChange', onReady)
    timer = setTimeout(() => {
      if (settled) return
      settled = true
      cleanup()
      resolve(false)
    }, timeout)
  })
}

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
    padding?: [number, number] | [number, number, number, number]
    text?: string
    canDelete?: boolean
    imgCaptionStyle?: Partial<IImageCaption>
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
        padding: v.padding,
        text: v.text,
        imgCaptionStyle: v.imgCaptionStyle,
        // 需求 4.2：图片级删除配置；顶层 payload.canDelete 作为整组默认值
        canDelete: v.canDelete ?? payload.canDelete
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

  // 2. 根据 placeholder 查找控件 id（抽成函数，便于在 await 之后重新取最新 id）
  const matchTargetIds = (): string[] => {
    const list = command.getControlList()
    const ids = Array.from(
      new Set(list.map(e => e.controlId).filter((v): v is string => !!v))
    )
    const tIds: string[] = []
    for (const id of ids) {
      const values = command.getControlValue({ id })
      if (!values) continue
      for (const item of values) {
        if (item.placeholder && payload.name === item.placeholder) {
          tIds.push(id)
        }
      }
    }
    return tIds
  }

  // 3. 替换
  if (valueType !== 'IMAGE') {
    const applyText = (): boolean => {
      const targetIds = matchTargetIds()
      for (const id of targetIds) {
        command.executeSetControlValue({ id, value: textValue })
      }
      return targetIds.length > 0
    }
    // 控件 controlId 在 setData 渲染后才分配；若首次未匹配到（文档未渲染完），
    // 监听 contentChange 事件——渲染完成后（控件 id 分配）自动重试，而非轮询
    await waitControlReady(command, applyText)
    return
  }

  const sizes = await Promise.all(
    imageItems.map(async item => {
      if (item.width && item.height) {
        return { w: item.width, h: item.height }
      }
      return loadImageSize(item.value)
    })
  )
  const applyImage = (): boolean => {
  // await 之后（或重试时）重新按 placeholder 取最新控件 id
  const targetIds = matchTargetIds()
  if (!targetIds.length) return false
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
    // 读取控件级可视化配置：按 count 的尺寸/内边距预设 + 题注默认样式。
    // 这些配置在插入控件弹窗里设置并绑定到控件（imageCountConfigs / imageCaptionStyle）。
    const ctrl = command.getControlValue({ id })?.[0]
    const matchedCount =
      payload.count && ctrl?.imageCountConfigs
        ? ctrl.imageCountConfigs.find(c => c.count === payload.count)
        : undefined
    const captionStyle = ctrl?.imageCaptionStyle
    // 需求：默认图片配置——明细未传入宽/高/padding（四向）时的兜底
    const defaultImage = ctrl?.imageDefaultConfig
    const elements: IElement[] = imageItems.map((item, i) => {
      const size = sizes[i] ?? { w: 0, h: 0 }
      // 需求：尺寸/内边距优先级 = 明细显式 > 控件 count 预设 > 默认图片配置 > 自适应。
      // 若 set 显式给出属性，以其为主；否则回退到控件可视化配置。
      const setW = item.width ?? matchedCount?.width ?? defaultImage?.width
      const setH = item.height ?? matchedCount?.height ?? defaultImage?.height
      const presetPadding = matchedCount?.padding
      // 需求 5.3：padding 支持二元组 [left, right] 与四元组 [top, right, bottom, left]
      const p = item.padding ?? presetPadding ?? defaultImage?.padding ?? []
      let padLeft = 0
      let padRight = 0
      let padTop = 0
      let padBottom = 0
      if (p.length >= 4) {
        padTop = p[0] ?? 0
        padRight = p[1] ?? 0
        padBottom = p[2] ?? 0
        padLeft = p[3] ?? 0
      } else {
        padLeft = p[0] ?? 0
        padRight = p[1] ?? 0
      }
      const { width, height } = computeImageSize({
        w0: size.w,
        h0: size.h,
        setW,
        setH,
        inCell,
        cellWidth,
        count: payload.count,
        padLeft,
        padRight
      })
      const el: IElement = { type: ElementType.IMAGE, value: item.value }
      if (width) el.width = Math.round(width)
      if (height) el.height = Math.round(height)
      // 需求 5.3：写入完整 IPadding 四元组 [top, right, bottom, left]，
      // 保留用户设置的上下内边距（不再硬性置 0）
      if (item.padding ?? presetPadding ?? defaultImage?.padding) {
        el.padding = [padTop, padRight, padBottom, padLeft]
      }
      // 需求 5.6：单元格内“宽度自适应”（未显式指定宽、也无 count 预设宽）的图片开启 isScaling，
      // 按容器实时重算宽度（imgScaleRatio=1/count）。这样 count 张图之和恒等于
      // availableWidth，不受 getWidth 的 Math.floor 取整影响，避免不同 scale 下
      // 每行张数漂移（如 scale=0.8 时第 4 张差 0.4px 塞不进，掉到 3 张）。
      const widthAuto = inCell && !setW
      el.isScaling = widthAuto
      el.imgScaleRatio = widthAuto
        ? payload.count && payload.count > 0
          ? 1 / payload.count
          : 1
        : undefined
      // 需求 4.2：图片级删除配置
      if (item.canDelete !== undefined) el.canDelete = item.canDelete
      // 需求：图片题注 = 显式 text + 控件默认样式；
      // 若 set 同时给出 imgCaptionStyle 则覆盖默认（set 优先，未指定回退控件配置）。
      if (item.text) {
        const cap: Record<string, unknown> = { value: item.text }
        if (captionStyle) Object.assign(cap, captionStyle)
        if (item.imgCaptionStyle) Object.assign(cap, item.imgCaptionStyle)
        el.imgCaption = cap as unknown as IImageCaption
      }
      return el
    })
    command.executeSetControlValue({ id, value: elements })
    // 需求 4/12：标记图片控件并写入拖拽配置（draggable 为控件级）
    command.executeSetControlProperties({
      id,
      properties: {
        imageControl: true,
        ...(payload.draggable === undefined
          ? {}
          : { imageDraggable: payload.draggable }),
        // 需求 4.2/12：canDelete 写为控件级 imageCanDelete（图片级 canDelete 会被
        // formatElementList 的白名单剥离，控件级属性保存在 control 对象中可保留）
        ...(payload.canDelete === undefined
          ? {}
          : { imageCanDelete: payload.canDelete }),
        // 需求 4.3/12：resize 写为控件级 imageResizable（默认 true，
        // 控件内图片是否显示 resize 句柄，由 mousedown 读取此属性决定是否绘制）
        ...(payload.resize === undefined
          ? {}
          : { imageResizable: payload.resize }),
        // 需求 4.5：swappable 写为控件级 imageSwappable（图片级 swappable
        // 会被 formatElementList 剥离，控件级属性保存在 control 对象中可保留）
        ...(payload.swappable === undefined
          ? {}
          : { imageSwappable: payload.swappable })
      }
    })
  }
  return true
  }
  // 控件 controlId 在 setData 渲染后才分配；若首次未匹配到（文档未渲染完），
  // 监听 contentChange 事件——渲染完成后（控件 id 分配）自动重试，而非轮询
  await waitControlReady(command, applyImage)
}

/**
 * 需求4/5（批量）：一次性按多个 placeholder 设置控件值（支持文本/图片）
 * 内部顺序执行每个 payload，避免并发修改控件内部状态。
 * @returns 完成 Promise
 */
export async function setControlValuesByPlaceholder(
  command: Command,
  payloads: IReplaceControlPayload[]
): Promise<void> {
  for (const payload of payloads) {
    await setControlValueByPlaceholder(command, payload)
  }
}

/**
 * 需求19（补充）：按 placeholder 清空控件值（文本控件置空，SELECT/CHECKBOX/RADIO/DATE/NUMBER 均清空其值）
 * @returns 命中的控件数量
 */
export function clearControlValueByPlaceholder(
  command: Command,
  name: string
): number {
  const ids = findControlIdsByPlaceholder(command, name)
  for (const id of ids) {
    command.executeSetControlValue({ id, value: '' })
  }
  return ids.length
}

/**
 * 需求19（补充）：按多个 placeholder 批量清空控件值
 * @returns 命中的控件总数量
 */
export function clearControlValuesByPlaceholder(
  command: Command,
  names: string[]
): number {
  let total = 0
  for (const name of names) {
    total += clearControlValueByPlaceholder(command, name)
  }
  return total
}

/**
 * 需求19：基于 placeholder 当前内容设置内容（带临时批注样式）
 * - name：目标占位符（placeholder）
 * - value：要设置/追加的文本值
 * - mode：
 *    0 = 直接替换当前已有内容；
 *    1 = 基于已有内容的最后一部分追加（末尾追加）；
 *    2 = 基于当前光标追加（若光标不在占位符/控件内则回退到 1）
 * - options：设置内容的 color / backgroundColor(背景色) / font / size；缺省时回退到编辑器 annotation 选项，
 *   再缺省回退到文档默认色与背景色（defaultColor / background.color）
 * 设置内容被标记 annotation，其样式为临时态：下一次聚焦 / 下一次设置 / 打印前 / 获取值前会被清除。
 */
export interface ISetControlContentByPlaceholderPayload {
  /**
   * 单条设置：目标占位符（placeholder）；与 value 配对使用。
   * 多占位符逐条设置时改用 items，name/value 可省略。
   */
  name?: string
  /** 与 name 配对的文本值（单条） */
  value?: string
  /**
   * 多占位符逐条设置：name 与 value 一一对应（每条各自的占位符与内容）。
   * 提供 items 时优先于 name/value。
   */
  items?: { name: string; value: string }[]
  /** 0=直接替换；1=末尾追加；2=光标处追加（光标不在占位符内时回退到 1） */
  mode: 0 | 1 | 2
  /** 设置内容样式；缺省回退到编辑器 annotation 选项，再缺省回退到文档默认色/背景 */
  options?: IAnnotationStyle
}

export function setControlContentByPlaceholder(
  command: Command,
  payload: ISetControlContentByPlaceholderPayload
): void {
  const { mode, options } = payload
  const editorOptions = command.getOptions()
  const ann = editorOptions.annotation || {}
  // 样式解析：调用参数 > 编辑器 annotation 选项 > 文档默认色/背景/字体/字号
  const color = options?.color ?? ann.color ?? editorOptions.defaultColor
  const backgroundColor =
    options?.backgroundColor ??
    ann.backgroundColor ??
    editorOptions.background.color
  const font = options?.font ?? ann.font ?? editorOptions.defaultFont
  const size = options?.size ?? ann.size ?? editorOptions.defaultSize

  // 下一次设置：先清除上一次批注样式
  command.executeClearAnnotation?.()

  // 组装逐条设置项：items 优先；否则使用单条 name/value（一一对应）
  const pairs: { name: string; value: string }[] = []
  if (payload.items?.length) {
    pairs.push(...payload.items)
  } else if (payload.name != null && payload.value != null) {
    pairs.push({ name: payload.name, value: payload.value })
  }
  if (!pairs.length) return

  const buildNew = (text: string): IElement[] =>
    splitText(text).map(ch => ({
      value: ch,
      color,
      // 文本背景色由 highlight 承载
      highlight: backgroundColor,
      font,
      size,
      annotation: true
    }))

  // 当前光标是否位于占位符/控件内（用于 mode=2 判断）
  const isCursorInPlaceholder = !!command.getPositionContext().isControl

  for (const { name: singleName, value: text } of pairs) {
    const ids = findControlIdsByPlaceholder(command, singleName)
    if (!ids.length) continue
    for (const id of ids) {
      if (mode === 2 && isCursorInPlaceholder) {
        // 基于当前光标追加（光标位于占位符/控件内）
        command.executeInsertElementList(buildNew(text), { isReplace: false })
        continue
      }
      if (mode === 0) {
        // 直接替换当前已有内容
        command.executeSetControlValue({ id, value: buildNew(text) })
        continue
      }
      // mode=1，或 mode=2 时光标不在占位符内（回退到 1）：基于已有内容末尾追加
      const results = command.getControlValue({ id })
      const currentText = results?.[0]?.value ?? results?.[0]?.innerText ?? ''
      const existing: IElement[] = splitText(currentText).map(ch => ({
        value: ch
      }))
      command.executeSetControlValue({
        id,
        value: [...existing, ...buildNew(text)]
      })
    }
  }
}

/** 查找占位符匹配的控件 id 列表 */
function findControlIdsByPlaceholder(command: Command, name: string): string[] {
  const list = command.getControlList()
  const ids = Array.from(
    new Set(list.map(e => e.controlId).filter((v): v is string => !!v))
  )
  const result: string[] = []
  for (const id of ids) {
    const values = command.getControlValue({ id })
    if (!values) continue
    if (values.some(item => item.placeholder === name)) result.push(id)
  }
  return result
}

/** 判断控件是否为图片控件（显式标记，或值元素全部为图片） */
function isImageControlValues(
  values: NonNullable<ReturnType<Command['getControlValue']>>
): boolean {
  if (values.some(v => v.imageControl)) return true
  const elementLists = values.map(v => v.elementList ?? [])
  if (!elementLists.some(list => list.length > 0)) return false
  return elementLists.every(
    list => list.length === 0 || list.every(el => el.type === ElementType.IMAGE)
  )
}

function findImageControlIds(command: Command): string[] {
  const list = command.getControlList()
  const ids = Array.from(
    new Set(list.map(e => e.controlId).filter((v): v is string => !!v))
  )
  const result: string[] = []
  for (const id of ids) {
    const values = command.getControlValue({ id })
    if (!values?.length) continue
    if (isImageControlValues(values)) result.push(id)
  }
  return result
}

function applyImageControlConfig(
  command: Command,
  ids: string[],
  config: IImageControlConfig
): number {
  // 需求 12：未显式指定的能力，回退到对应控件自身已配置的 imageXxx（即插入对话框
  // 里设置的四个开关值）作为默认值；显式传入的 config 字段优先级最高。
  const resolveOne = (
    id: string
  ): { id: string; properties: Partial<IControl> } | null => {
    const existing = command.getControlValue({ id })?.[0]
    const canDelete =
      config.canDelete !== undefined
        ? config.canDelete
        : existing?.imageCanDelete
    const draggable =
      config.draggable !== undefined
        ? config.draggable
        : existing?.imageDraggable
    const resize =
      config.resize !== undefined ? config.resize : existing?.imageResizable
    const swappable =
      config.swappable !== undefined
        ? config.swappable
        : existing?.imageSwappable
    const properties: Partial<IControl> = {}
    if (canDelete !== undefined) properties.imageCanDelete = canDelete
    if (draggable !== undefined) properties.imageDraggable = draggable
    if (resize !== undefined) properties.imageResizable = resize
    if (swappable !== undefined) properties.imageSwappable = swappable
    if (!Object.keys(properties).length) return null
    return { id, properties }
  }
  const list = ids
    .map(resolveOne)
    .filter(
      (v): v is { id: string; properties: Partial<IControl> } => v !== null
    )
  if (!list.length) return 0
  // 批量一次性设置：executeSetControlProperties 会重建文档并重新生成 controlId，
  // 逐个调用会导致后续 id 失效（多个图片控件时尤为明显）
  command.executeSetControlPropertiesList(list)
  return ids.length
}

/**
 * 需求 11：表单模式下按占位符设置控件可编辑/不可编辑
 * @param name 占位符名称，支持单个字符串或字符串数组（多个占位符的并集）
 * @returns 命中的控件数量
 */
export function setControlEditableByPlaceholder(
  command: Command,
  name: string | string[],
  editable: boolean
): number {
  const names = Array.isArray(name) ? name : [name]
  // 直接遍历文档按占位符设置 editable，不依赖 controlId（模板加载初期尚未分配）。
  return command.setControlsEditableByPlaceholders(names, editable)
}

/**
 * 需求 11（补充）：表单模式下设置【全部】占位符控件可编辑/不可编辑
 * @returns 命中的控件数量
 */
export function setAllControlEditable(
  command: Command,
  editable: boolean
): number {
  // 直接遍历文档内（含表格单元格）所有控件对象设置 editable，
  // 不依赖 controlId——模板加载初期 controlId 尚未分配时 getControlList 会返回空，
  // 但渲染展开后会复用同一个 control 对象引用，因此此处写入的 editable 会生效。
  return command.setAllControlsEditable(editable)
}

/**
 * 需求 11（补充）：表单模式下按【多个】占位符设置控件可编辑/不可编辑
 * @param names 占位符名称数组（并集）
 * @returns 命中的控件数量
 */
export function setControlsEditableByPlaceholders(
  command: Command,
  names: string[],
  editable: boolean
): number {
  // 直接遍历文档按占位符集合设置 editable，不依赖 controlId（模板加载初期尚未分配）。
  return command.setControlsEditableByPlaceholders(names, editable)
}

/**
 * 需求 11（补充）：一键设置【全部图片控件】（control.imageControl === true）可编辑/不可编辑
 * @returns 命中的图片控件数量
 */
export function setAllImageControlsEditable(
  command: Command,
  editable: boolean
): number {
  return command.setAllImageControlsEditable(editable)
}

/** 需求 12：图片控件删除/拖拽/缩放能力配置 */
export interface IImageControlConfig {
  /** 是否支持右键删除控件内图片 */
  canDelete?: boolean
  /** 是否支持拖拽调整图片顺序 */
  draggable?: boolean
  /** 需求 4.3/12：是否显示控件内图片的 resize 句柄用于调整尺寸（默认 true） */
  resize?: boolean
  /** 需求 4.5：是否支持拖拽交换图片位置 */
  swappable?: boolean
}

/**
 * 需求 12.1：统一设置所有图片控件的删除/拖拽能力
 * @returns 命中的图片控件数量
 */
export function setImageControlConfigForAll(
  command: Command,
  config: IImageControlConfig
): number {
  return applyImageControlConfig(command, findImageControlIds(command), config)
}

/**
 * 需求 12.2：按占位符单独设置图片控件的删除/拖拽能力（非图片控件无效果）
 * @param name 占位符名称，支持单个字符串或字符串数组（多个占位符的并集）
 * @returns 命中的图片控件数量
 */
export function setImageControlConfigByPlaceholder(
  command: Command,
  name: string | string[],
  config: IImageControlConfig
): number {
  const names = Array.isArray(name) ? name : [name]
  const nameIds = new Set(
    names.flatMap(n => findControlIdsByPlaceholder(command, n))
  )
  const ids = findImageControlIds(command).filter(id => nameIds.has(id))
  return applyImageControlConfig(command, ids, config)
}
