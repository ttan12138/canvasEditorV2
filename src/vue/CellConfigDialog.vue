<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type Editor from '../editor'
import { EditorMode, RowFlex, VerticalAlign, TdBorder } from '../editor'
import type { IPositionContext } from '../editor/interface/Position'
import type { ITableCellInfo, ISetCellConfigPayload } from './control'
import { defaultTableOption } from '../editor/dataset/constant/Table'
import { useEditorContext } from './context'

const ctx = useEditorContext()
const getInstance = () => ctx.getInstance()
const getCommand = () => ctx.getCommand()

// 需求 8：子表列宽的百分比之和（用于预览百分比与最终渲染一致）
const totalWeight = computed(() => {
  const t = dialog.header.reduce((s, c) => s + (Number(c.width) || 0), 0)
  return t || dialog.header.length
})
// 需求 8：预览表宽 = 实际单元格内容宽 - 10；弹窗需据此自适应宽度以避免横向滚动条。
// 基础 460，过宽时扩展到能容纳预览表（含左右内边距与边框），并不超出视口余量。
const dialogWidth = computed(() => {
  const base = 460
  if (!dialog.cellWidth) return base
  const need = dialog.cellWidth - 10 + 60
  const viewMax = (typeof window !== 'undefined' ? window.innerWidth : 1280) - 40
  return Math.max(base, Math.min(need, viewMax))
})
const dialog = reactive({
  open: false,
  tdId: '',
  label: '',
  name: '',
  enableLink: false,
  linkChildIds: [] as string[],
  show: true,
  hasChild: false,
  header: [] as {
    key: string
    name: string
    width: number
    height?: number
    verticalAlign?: VerticalAlign
    borderTypes?: TdBorder[]
    horizontalAlign?: RowFlex
    headerVerticalAlign?: VerticalAlign
    headerBorderTypes?: TdBorder[]
    headerHorizontalAlign?: RowFlex
  }[],
  rowHeight: 26,
  cellWidth: 0,
  verticalAlign: VerticalAlign.MIDDLE,
  borderTypes: [] as TdBorder[],
  childTdPadding: 0
})

// 需求 8.6：表头行高——引擎取 header[0].height，未配置时回退到内容行高。
// 预览表头行据此高度渲染，保证与画布一致。
const headerRowHeight = computed(
  () => Number(dialog.header[0]?.height) || Number(dialog.rowHeight) || 26
)
// 表头行高双向绑定（控制首列 height，与引擎取 header[0].height 的行为一致）
const headerHeightModel = computed<number | null>({
  get: () => (dialog.header[0]?.height == null ? null : Number(dialog.header[0].height)),
  set: v => {
    if (dialog.header[0]) dialog.header[0].height = v == null ? undefined : Number(v) || undefined
  }
})

// 需求 8：把所有列宽重置为「均分百分比」（合计 100%），用于初始与「加一列」
const resetEqualWidths = () => {
  const n = dialog.header.length
  if (!n) return
  const base = Math.floor(100 / n)
  dialog.header.forEach((h, i) => {
    h.width = i === n - 1 ? 100 - base * (n - 1) : base
  })
}

// 需求 8.4：联动「拾取模式」——开启后隐藏对话框，直接在已有表格上点选单元格设置联动
const picking = ref(false)

const allCells = ref<ITableCellInfo[]>([])

const onReady = (editor: Editor) => {
  // 注册「配置单元格(子表/联动)」右键菜单项
  editor.register.contextMenuList([
    {
      key: 'CELL_CONFIG',
      name: '配置单元格(子表/联动)',
      when: (c: { isInTable?: boolean; options?: { mode?: string } }) =>
        !!c.isInTable && c.options?.mode === EditorMode.EDIT,
      callback: () => openCellDialog()
    }
  ])
  // 需求 8.4.2：编辑模式点击「子表占位符」单元格，打开配置对话框
  editor.eventBus.on('cellPlaceholderClick', (e: { tdId: string }) => {
    openCellDialog(e.tdId)
  })
  // 需求 8.4：联动拾取模式——在已有表格上点选单元格
  editor.eventBus.on('cellPick', (e: { tdId: string }) => {
    onCellPick(e.tdId)
  })
}
ctx.onReady(onReady)

const openCellDialog = (tdId?: string) => {
  const id = tdId ?? getCommand()?.getPositionContext()?.tdId
  if (!id) return
  allCells.value = getCommand()?.getTableCells() ?? []
  getCommand()?.setLinkSource(null) // 非拾取模式不显示联动源高亮
  const cur = allCells.value.find(c => c.tdId === id)
  if (!cur) return
  dialog.open = true
  dialog.tdId = cur.tdId
  dialog.label = cur.label
  dialog.name = cur.name ?? ''
  dialog.enableLink = !!cur.enableLink
  dialog.linkChildIds = [...(cur.linkChildIds ?? [])]
  dialog.show = cur.show ?? true
  dialog.hasChild = !!cur.hasChild
  dialog.header = (cur.childTables?.header ?? []).map(h => ({
    key: h.key,
    name: h.name ?? h.key,
    width: h.width,
    height: h.height,
    verticalAlign: h.verticalAlign,
    borderTypes: h.borderTypes ? [...h.borderTypes] : [TdBorder.TOP, TdBorder.RIGHT, TdBorder.BOTTOM, TdBorder.LEFT],
    horizontalAlign: h.horizontalAlign,
    headerVerticalAlign: h.headerVerticalAlign,
    headerBorderTypes: h.headerBorderTypes ? [...h.headerBorderTypes] : [TdBorder.TOP, TdBorder.RIGHT, TdBorder.BOTTOM, TdBorder.LEFT],
    headerHorizontalAlign: h.headerHorizontalAlign
  }))
  if (dialog.hasChild && !cur.childTables?.header?.length) {
    resetEqualWidths()
  }
  dialog.cellWidth = cur.width ?? 0
  dialog.rowHeight = cur.childTables?.rowHeight ?? 26
  dialog.verticalAlign = cur.verticalAlign ?? VerticalAlign.MIDDLE
  dialog.borderTypes = cur.borderTypes ? [...cur.borderTypes] : []
  dialog.childTdPadding = cur.childTdPadding?.[0] ?? 0
}

// 环校验：若 candidateId 沿 linkChildIds 向下能到达当前单元格，则禁止（8.4.1.4）
const wouldCycle = (candidateId: string): boolean => {
  const byId = new Map(allCells.value.map(c => [c.tdId, c]))
  const visiting = new Set<string>()
  const dfs = (id: string): boolean => {
    if (id === dialog.tdId) return true
    if (visiting.has(id)) return false
    visiting.add(id)
    const cell = byId.get(id)
    for (const child of cell?.linkChildIds ?? []) {
      if (dfs(child)) return true
    }
    visiting.delete(id)
    return false
  }
  return dfs(candidateId)
}

const isChildSelected = (id: string) => dialog.linkChildIds.includes(id)
const toggleChild = (id: string) => {
  if (isChildSelected(id)) {
    dialog.linkChildIds = dialog.linkChildIds.filter(x => x !== id)
  } else if (!wouldCycle(id)) {
    dialog.linkChildIds.push(id)
  }
}

// 需求 8.6：开关单元格某一侧边框
const onBorderToggle = (b: TdBorder, checked: boolean) => {
  if (checked) {
    if (!dialog.borderTypes.includes(b)) dialog.borderTypes.push(b)
  } else {
    dialog.borderTypes = dialog.borderTypes.filter(x => x !== b)
  }
}

// 需求 8.6：开关子表某一列的「表头 / 内容」边框
const onColBorderToggle = (
  col: (typeof dialog.header)[number],
  part: 'header' | 'body',
  b: TdBorder,
  checked: boolean
) => {
  const key = part === 'header' ? 'headerBorderTypes' : 'borderTypes'
  let arr = col[key] ? [...(col[key] as TdBorder[])] : []
  if (checked) {
    if (!arr.includes(b)) arr.push(b)
  } else {
    arr = arr.filter(x => x !== b)
  }
  col[key] = arr.length ? arr : []
}

// 需求 8.6：预览——水平对齐映射到 CSS textAlign
const hAlignToCss = (a?: RowFlex): string =>
  a === RowFlex.CENTER ? 'center' : a === RowFlex.RIGHT ? 'right' : 'left'

// 需求 8.6：预览——垂直对齐映射到 CSS flex align-items（画布单元格内文字垂直居中）
const vAlignCss = (v?: VerticalAlign): string =>
  v === VerticalAlign.TOP ? 'flex-start' : v === VerticalAlign.BOTTOM ? 'flex-end' : 'center'

// 需求 8.6：预览——按选中边框生成 CSS border（未选时给默认网格线）
const borderCss = (types?: TdBorder[]): Record<string, string> => {
  if (!types?.length) return { border: '1px solid #d0d0d0' }
  const top = types.includes(TdBorder.TOP)
  const right = types.includes(TdBorder.RIGHT)
  const bottom = types.includes(TdBorder.BOTTOM)
  const left = types.includes(TdBorder.LEFT)
  return {
    borderTop: `${top ? 1 : 0}px solid #333`,
    borderRight: `${right ? 1 : 0}px solid #333`,
    borderBottom: `${bottom ? 1 : 0}px solid #333`,
    borderLeft: `${left ? 1 : 0}px solid #333`
  }
}

// 需求 8.7：全局单元格内边距（含子表格自身单元格的内边距），四边数组 → CSS padding
const globalTdPaddingCss = defaultTableOption.childTableTdPadding.map((v: number) => `${v}px`).join(' ')

// 需求 8.6：预览同步画布——子表最外四边（top/bottom/left/right 由位置决定）不绘制
const stripOuterBordersPreview = (
  borders: TdBorder[] | undefined,
  outer: { top: boolean; bottom: boolean; left: boolean; right: boolean }
): TdBorder[] => {
  const arr = borders ?? [TdBorder.TOP, TdBorder.RIGHT, TdBorder.BOTTOM, TdBorder.LEFT]
  return arr.filter(b => {
    if (b === TdBorder.TOP && outer.top) return false
    if (b === TdBorder.BOTTOM && outer.bottom) return false
    if (b === TdBorder.LEFT && outer.left) return false
    if (b === TdBorder.RIGHT && outer.right) return false
    return true
  })
}

// 需求 8.6：点击单元格「设置」按钮弹出边框与对齐设置（替代平铺按钮）
type AlignTarget = { col: (typeof dialog.header)[number]; part: 'header' | 'body'; index: number }
const alignTarget = ref<AlignTarget | null>(null)
const alignPos = ref({ x: 0, y: 0 })
const openAlign = (e: MouseEvent, col: (typeof dialog.header)[number], part: 'header' | 'body', index: number) => {
  alignTarget.value = { col, part, index }
  alignPos.value = { x: e.clientX, y: e.clientY }
}
const curVert = computed(() =>
  alignTarget.value &&
  (alignTarget.value.part === 'header'
    ? alignTarget.value.col.headerVerticalAlign
    : alignTarget.value.col.verticalAlign)
)
const curHori = computed(() =>
  alignTarget.value &&
  (alignTarget.value.part === 'header'
    ? alignTarget.value.col.headerHorizontalAlign
    : alignTarget.value.col.horizontalAlign)
)
const chooseAlign = (axis: 'v' | 'h', val: VerticalAlign | RowFlex) => {
  const t = alignTarget.value
  if (!t) return
  if (axis === 'v') {
    if (t.part === 'header') t.col.headerVerticalAlign = val as VerticalAlign
    else t.col.verticalAlign = val as VerticalAlign
  } else {
    if (t.part === 'header') t.col.headerHorizontalAlign = val as RowFlex
    else t.col.horizontalAlign = val as RowFlex
  }
  alignTarget.value = null
}

// ============ 预览表拖拽（细条手柄，悬停显示，不占单元格空间） ============
const previewTableRef = ref<HTMLTableElement | null>(null)
let colDrag: { col: (typeof dialog.header)[number]; startX: number; startW: number } | null = null
const onColResizeStart = (e: PointerEvent, col: (typeof dialog.header)[number]) => {
  e.preventDefault()
  e.stopPropagation()
  colDrag = { col, startX: e.clientX, startW: Number(col.width) || 1 }
  window.addEventListener('pointermove', onColResizeMove)
  window.addEventListener('pointerup', onColResizeEnd)
}
const onColResizeMove = (e: PointerEvent) => {
  if (!colDrag || !previewTableRef.value) return
  const w = previewTableRef.value.clientWidth
  const dxPct = ((e.clientX - colDrag.startX) / w) * 100
  colDrag.col.width = Math.max(5, Math.round((colDrag.startW + dxPct) * 10) / 10)
}
const onColResizeEnd = () => {
  colDrag = null
  window.removeEventListener('pointermove', onColResizeMove)
  window.removeEventListener('pointerup', onColResizeEnd)
}
let rowDrag: { kind: 'data' | 'header'; startY: number; startH: number } | null = null
const onRowResizeStart = (e: PointerEvent, kind: 'data' | 'header') => {
  e.preventDefault()
  e.stopPropagation()
  const startH = kind === 'header' ? headerRowHeight.value : Number(dialog.rowHeight) || 26
  rowDrag = { kind, startY: e.clientY, startH }
  window.addEventListener('pointermove', onRowResizeMove)
  window.addEventListener('pointerup', onRowResizeEnd)
}
const onRowResizeMove = (e: PointerEvent) => {
  if (!rowDrag) return
  const v = Math.max(10, Math.min(200, Math.round(rowDrag.startH + (e.clientY - rowDrag.startY))))
  if (rowDrag.kind === 'header') headerHeightModel.value = v
  else dialog.rowHeight = v
}
const onRowResizeEnd = () => {
  rowDrag = null
  window.removeEventListener('pointermove', onRowResizeMove)
  window.removeEventListener('pointerup', onRowResizeEnd)
}

// 需求 8.6：设置弹层——当前单元格生效的边框（表头→headerBorderTypes，内容→borderTypes）
const curBorder = (b: TdBorder): boolean => {
  const t = alignTarget.value
  if (!t) return false
  const key = t.part === 'header' ? 'headerBorderTypes' : 'borderTypes'
  const arr = (t.col[key] as TdBorder[] | undefined) ?? []
  return arr.includes(b)
}
// 需求 8.6：子表最外四边（表头顶/末行底/首列左/末列右）始终不显示，对应勾选禁用
// 注意：内容(body)的「下边框」是行与行之间的分隔线，应可逐列配置；真正的末行最外下边
// 由预览渲染层 stripOuterBordersPreview({ bottom: r === 末行 }) 压制，故此处不禁用 BOTTOM。
const isOuterBorder = (part: 'header' | 'body', index: number, b: TdBorder): boolean => {
  const last = dialog.header.length - 1
  if (part === 'header' && b === TdBorder.TOP) return true
  if (b === TdBorder.LEFT && index === 0) return true
  if (b === TdBorder.RIGHT && index === last) return true
  return false
}
// 需求 8.6：新增列时，默认边框 = 该列位置上所有「非禁用（最外边）」侧都勾选
const defaultBorderTypes = (part: 'header' | 'body', index: number): TdBorder[] => {
  const all: TdBorder[] = [TdBorder.TOP, TdBorder.RIGHT, TdBorder.BOTTOM, TdBorder.LEFT]
  return all.filter(b => !isOuterBorder(part, index, b))
}
const toggleTargetBorder = (b: TdBorder) => {
  const t = alignTarget.value
  if (!t || isOuterBorder(t.part, t.index, b)) return
  onColBorderToggle(t.col, t.part, b, !curBorder(b))
}

// 需求 8.4：联动「拾取模式」——直接在已有表格上点选单元格设置联动子单元格
const onCellPick = (tdId: string) => {
  if (tdId === dialog.tdId) return // 不能关联自身
  if (isChildSelected(tdId)) {
    dialog.linkChildIds = dialog.linkChildIds.filter(x => x !== tdId)
  } else if (!wouldCycle(tdId)) {
    dialog.linkChildIds.push(tdId)
  }
  getCommand()?.setCellConfig({
    tdId: dialog.tdId,
    enableLink: dialog.enableLink,
    linkChildIds: dialog.linkChildIds
  })
}

const startPicking = () => {
  if (!dialog.enableLink) dialog.enableLink = true
  dialog.open = false
  picking.value = true
  getCommand()?.setLinkSource(dialog.tdId) // 橙色高亮联动源单元格
  getCommand()?.setLinkPicking(true)
}

const stopPicking = () => {
  picking.value = false
  getCommand()?.setLinkPicking(false)
  getCommand()?.setLinkSource(null)
  openCellDialog(dialog.tdId) // 重新打开并刷新已选联动
}

const addHeaderCol = () => {
  const idx = dialog.header.length
  dialog.header.push({
    key: `col${idx + 1}`,
    name: '',
    width: 100,
    verticalAlign: VerticalAlign.MIDDLE,
    horizontalAlign: RowFlex.CENTER,
    borderTypes: [],
    headerVerticalAlign: VerticalAlign.MIDDLE,
    headerHorizontalAlign: RowFlex.CENTER,
    headerBorderTypes: []
  })
  const newCol = dialog.header[idx]
  newCol.borderTypes = defaultBorderTypes('body', idx)
  newCol.headerBorderTypes = defaultBorderTypes('header', idx)
  resetEqualWidths()
}
const removeHeaderCol = (i: number) => {
  dialog.header.splice(i, 1)
}

const saveCellConfig = () => {
  const payload: ISetCellConfigPayload = {
    tdId: dialog.tdId,
    enableLink: dialog.enableLink,
    linkChildIds: dialog.linkChildIds,
    show: dialog.show,
    hasChild: dialog.hasChild,
    name: dialog.name || undefined,
    verticalAlign: dialog.verticalAlign,
    borderTypes: dialog.borderTypes,
    childTdPadding: dialog.childTdPadding
      ? [dialog.childTdPadding, dialog.childTdPadding, dialog.childTdPadding, dialog.childTdPadding]
      : undefined
  }
  if (dialog.hasChild) {
    payload.childTables = {
      header: dialog.header.map(h => ({
        key: h.key,
        name: h.name,
        width: Number(h.width) || 100,
        height: h.height,
        verticalAlign: h.verticalAlign,
        borderTypes: h.borderTypes,
        horizontalAlign: h.horizontalAlign,
        headerVerticalAlign: h.headerVerticalAlign,
        headerBorderTypes: h.headerBorderTypes,
        headerHorizontalAlign: h.headerHorizontalAlign
      })),
      rowHeight: Number(dialog.rowHeight) || 26
    }
  }
  getCommand()?.setCellConfig(payload)
  dialog.open = false
}

// 供宿主调用：按 tdId 打开 / 按单元格 name 打开
const open = (tdId?: string) => openCellDialog(tdId)
const openByName = (name: string) => {
  const cells = getCommand()?.getTableCells() ?? []
  const c = cells.find(x => x.name === name)
  if (c) openCellDialog(c.tdId)
  else console.warn('[CellConfigDialog] 未找到单元格 name=' + name)
}

defineExpose({ open, openByName })
</script>

<template>
  <!-- 需求 8.4：联动拾取模式提示条（独立于对话框遮罩，拾取时可点击编辑器表格） -->
  <div v-if="picking" class="cc-pick-banner">
    <span>拾取中：请点击表格中的单元格进行关联 / 取消关联（高亮蓝底为已关联子单元格）</span>
    <button type="button" @click="stopPicking">完成拾取</button>
  </div>

  <!-- 需求 8.4：单元格配置对话框 -->
  <div v-if="dialog.open" class="cc-mask" @click.self="dialog.open = false">
    <div class="cc-dialog" :style="{ width: dialogWidth + 'px' }">
      <div class="cc-dialog__title">
        配置单元格 · {{ dialog.label }}
      </div>

      <div class="cc-row">
        <label>名称(name)</label>
        <input v-model="dialog.name" placeholder="子表单元格名称，供 setChildTable 查找" />
      </div>

      <div class="cc-row">
        <label>开启联动</label>
        <input type="checkbox" v-model="dialog.enableLink" />
        <button v-if="dialog.enableLink" type="button" class="cc-pick-btn" @click="startPicking">在表格上拾取联动子单元格</button>
      </div>

      <div class="cc-row" v-if="dialog.enableLink">
        <label>联动子单元格</label>
        <div class="cc-children">
          <label v-for="c in allCells.filter(x => x.tdId !== dialog.tdId)" :key="c.tdId" class="cc-child"
            :class="{ 'is-cycle': wouldCycle(c.tdId) }" :title="wouldCycle(c.tdId) ? '选择该单元格将形成环路，已禁用' : ''">
            <input type="checkbox" :checked="isChildSelected(c.tdId)"
              :disabled="wouldCycle(c.tdId) && !isChildSelected(c.tdId)" @change="toggleChild(c.tdId)" />
            {{ c.name ? c.name + '（' + c.label + '）' : c.label }}
          </label>
        </div>
      </div>

      <div class="cc-row">
        <label>是否显示</label>
        <input type="checkbox" v-model="dialog.show" />
        <span class="cc-hint">表单模式生效；编辑模式始终显示</span>
      </div>

      <div class="cc-row">
        <label>有子表</label>
        <input type="checkbox" v-model="dialog.hasChild" />
      </div>

      <!-- 需求 8.6：单元格外观（仅非子表单元格；子表单元格见下方「列外观」） -->
      <template v-if="!dialog.hasChild">
        <div class="cc-row">
          <label>垂直对齐</label>
          <div class="cc-seg">
            <button type="button" v-for="v in [VerticalAlign.TOP, VerticalAlign.MIDDLE, VerticalAlign.BOTTOM]" :key="v"
              :class="{ 'is-active': dialog.verticalAlign === v }" @click="dialog.verticalAlign = v">
              {{ v === VerticalAlign.TOP ? '上' : v === VerticalAlign.MIDDLE ? '中' : '下' }}
            </button>
          </div>
        </div>

        <div class="cc-row">
          <label>单元格边框</label>
          <div class="cc-seg">
            <label v-for="b in [TdBorder.TOP, TdBorder.RIGHT, TdBorder.BOTTOM, TdBorder.LEFT]" :key="b"
              class="cc-border-opt">
              <input type="checkbox" :checked="dialog.borderTypes.includes(b)"
                @change="onBorderToggle(b, ($event.target as HTMLInputElement).checked)" />
              {{ { top: '上', right: '右', bottom: '下', left: '左' }[b] }}
            </label>
          </div>
        </div>
      </template>

      <div class="cc-block" v-if="dialog.hasChild">
        <div class="cc-block__title">子表结构</div>
        <div class="cc-row" style="margin-bottom:8px">
          <!-- <label>行高</label>
          <input v-model.number="dialog.rowHeight" type="number" min="10" max="120" />
          <label>表头行高</label>
          <input v-model.number="headerHeightModel" type="number" min="10" max="120" placeholder="同内容" /> -->
          <button type="button" class="cc-add" @click="addHeaderCol">+ 加一列</button>
        </div>
        <div v-if="dialog.header.length" class="cc-preview-wrap"
          :style="{ width: (dialog.cellWidth > 0 ? dialog.cellWidth + 'px' : '100%'), padding: (dialog.childTdPadding || 0) + 'px' }">
          <div class="cc-preview-inner" :style="{ padding: globalTdPaddingCss }">
            <table class="cc-preview" ref="previewTableRef" style="width:100%">
              <colgroup>
                <col v-for="col in dialog.header" :key="'c-' + col.key"
                  :style="{ width: ((Number(col.width) || 1) / totalWeight * 100) + '%' }" />
              </colgroup>
              <thead>
                <tr class="cc-hrow" :style="{ height: headerRowHeight + 'px' }">
                  <th v-for="(col, i) in dialog.header" :key="col.key" class="cc-th">
                    <div class="cc-cell"
                      :style="{ ...borderCss(stripOuterBordersPreview(col.headerBorderTypes, { top: true, bottom: false, left: i === 0, right: i === dialog.header.length - 1 })), alignItems: vAlignCss(col.headerVerticalAlign), justifyContent: hAlignToCss(col.headerHorizontalAlign), textAlign: hAlignToCss(col.headerHorizontalAlign), height: headerRowHeight + 'px', padding: globalTdPaddingCss }"
                      @click.stop="openAlign($event, col, 'header', i)">
                      <span class="cc-cell__txt">{{ col.name || col.key }}</span>
                    </div>
                    <div class="cc-resizer cc-resizer--col" @pointerdown.stop="onColResizeStart($event, col)"></div>
                    <div class="cc-resizer cc-resizer--row" @pointerdown.stop="onRowResizeStart($event, 'header')">
                    </div>
                    <button type="button" class="cc-del-col" @click.stop="removeHeaderCol(i)" title="删除列">×</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in 2" :key="'r' + r" class="cc-drow" :style="{ height: dialog.rowHeight + 'px' }">
                  <td v-for="(col, i) in dialog.header" :key="col.key">
                    <div class="cc-cell"
                      :style="{ ...borderCss(stripOuterBordersPreview(col.borderTypes, { top: false, bottom: r === 2, left: i === 0, right: i === dialog.header.length - 1 })), alignItems: vAlignCss(col.verticalAlign), justifyContent: hAlignToCss(col.horizontalAlign), textAlign: hAlignToCss(col.horizontalAlign), height: dialog.rowHeight + 'px', padding: globalTdPaddingCss }"
                      @click.stop="openAlign($event, col, 'body', i)">
                      <span class="cc-cell__txt">{{ col.key }}</span>
                    </div>
                    <div v-if="r === 1" class="cc-resizer cc-resizer--row"
                      @pointerdown.stop="onRowResizeStart($event, 'data')"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="cc-hint">外侧框即父单元格（宽度=画布父单元格宽，内边距用 childTableTdPadding）；其内部子表的外缩与单元格内边距用全局
          tdPadding，子表总宽与画布一致。表头显示标题、数据行显示
          key；悬停列右侧竖条拖拽调列宽、悬停行右侧横条拖拽调行高（表头行高见上方「表头行高」）；悬停列右上角「×」删除该列；点击单元格弹出边框与对齐（及标题/key）配置。上方「＋加一列」新增列。</div>
      </div>

      <!-- 需求 8.6：单元格「设置」弹层——边框显隐 + 垂直/水平对齐（表头/内容分别） -->
      <div v-if="alignTarget" class="cc-align-mask" @click="alignTarget = null"></div>
      <div v-if="alignTarget" class="cc-align-pop" :style="{ left: alignPos.x + 'px', top: alignPos.y + 'px' }"
        @click.stop>
        <div class="cc-pop-title">{{ alignTarget.part === 'header' ? '表头单元格' : '内容单元格' }} · 边框与对齐</div>
        <div class="cc-align-pop__grp" v-if="alignTarget.part === 'header'">
          <span>标题</span>
          <input v-model="alignTarget.col.name" class="cc-pop-input" placeholder="标题" />
        </div>
        <div class="cc-align-pop__grp" v-else>
          <span>key</span>
          <input v-model="alignTarget.col.key" class="cc-pop-input" placeholder="key" />
        </div>
        <div class="cc-align-pop__grp">
          <span>边框</span>
          <label v-for="b in [TdBorder.TOP, TdBorder.RIGHT, TdBorder.BOTTOM, TdBorder.LEFT]" :key="b"
            class="cc-border-opt" :class="{ 'is-disabled': isOuterBorder(alignTarget.part, alignTarget.index, b) }">
            <input type="checkbox" :checked="!isOuterBorder(alignTarget.part, alignTarget.index, b) && curBorder(b)"
              :disabled="isOuterBorder(alignTarget.part, alignTarget.index, b)" @change="toggleTargetBorder(b)" />
            {{ { top: '上', right: '右', bottom: '下', left: '左' }[b] }}
          </label>
        </div>
        <div class="cc-align-pop__grp">
          <span>垂直</span>
          <button type="button" v-for="v in [VerticalAlign.TOP, VerticalAlign.MIDDLE, VerticalAlign.BOTTOM]" :key="v"
            :class="{ 'is-active': curVert === v }" @click="chooseAlign('v', v)">
            {{ v === VerticalAlign.TOP ? '上' : v === VerticalAlign.MIDDLE ? '中' : '下' }}
          </button>
        </div>
        <div class="cc-align-pop__grp">
          <span>水平</span>
          <button type="button" v-for="h in [RowFlex.LEFT, RowFlex.CENTER, RowFlex.RIGHT]" :key="h"
            :class="{ 'is-active': curHori === h }" @click="chooseAlign('h', h)">
            {{ h === RowFlex.LEFT ? '左' : h === RowFlex.CENTER ? '中' : '右' }}
          </button>
        </div>
      </div>

      <div class="cc-actions">
        <button type="button" @click="saveCellConfig">保存</button>
        <button type="button" @click="dialog.open = false">取消</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cc-pick-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 12px;
  background: #193758;
  color: #fff;
  font-size: 13px;
}

.cc-pick-banner button {
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  border-radius: 4px;
  padding: 2px 10px;
  cursor: pointer;
}

.cc-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.cc-dialog {
  width: 460px;
  max-height: 86vh;
  overflow: auto;
  background: #fff;
  border-radius: 8px;
  padding: 16px 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  font-size: 13px;
  color: #3d4757;
}

.cc-dialog__title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
}

.cc-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.cc-row>label {
  flex: none;
  color: #767c85;
  min-width: 64px;
}

.cc-row>input[type='text'],
.cc-row>input:not([type]) {
  flex: 1;
  min-width: 160px;
  height: 28px;
  padding: 0 8px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
}

.cc-row>input[type='number'] {
  width: 80px;
  height: 28px;
  padding: 0 8px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
}

.cc-pick-btn {
  height: 26px;
  padding: 0 10px;
  border: 1px solid #193758;
  border-radius: 4px;
  background: #fff;
  color: #193758;
  cursor: pointer;
}

.cc-children {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  flex: 1;
}

.cc-child {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.cc-child.is-cycle {
  opacity: 0.5;
}

.cc-hint {
  color: #9097a1;
  font-size: 12px;
}

.cc-seg {
  display: flex;
  gap: 4px;
}

.cc-seg button {
  min-width: 30px;
  height: 26px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}

.cc-seg button.is-active {
  border-color: #193758;
  background: rgba(25, 55, 88, 0.12);
  color: #193758;
}

.cc-border-opt {
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;
}

.cc-border-opt.is-disabled {
  opacity: 0.45;
}

.cc-block {
  border: 1px solid #eef1f5;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
}

.cc-block__title {
  font-weight: 600;
  margin-bottom: 8px;
}

.cc-add {
  height: 26px;
  padding: 0 10px;
  border: 1px solid #193758;
  border-radius: 4px;
  background: #fff;
  color: #193758;
  cursor: pointer;
}

.cc-preview-wrap {
  overflow: auto;
}

.cc-preview-inner {
  background: #fff;
}

.cc-preview {
  border-collapse: collapse;
}

.cc-th,
.cc-drow td {
  position: relative;
  padding: 0;
}

.cc-cell {
  display: flex;
  box-sizing: border-box;
  min-height: 24px;
  padding: 2px 6px;
  background: #fff;
  cursor: pointer;
}

.cc-cell__txt {
  pointer-events: none;
  user-select: none;
}

.cc-resizer {
  position: absolute;
  z-index: 2;
  opacity: 0;
}

.cc-resizer--col {
  top: 0;
  right: -3px;
  width: 6px;
  height: 100%;
  cursor: col-resize;
}

.cc-resizer--row {
  right: 0;
  bottom: -3px;
  width: 100%;
  height: 6px;
  cursor: row-resize;
}

.cc-th:hover>.cc-resizer,
.cc-drow td:hover>.cc-resizer {
  opacity: 1;
  background: rgba(25, 55, 88, 0.18);
}

.cc-del-col {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  width: 16px;
  height: 16px;
  border: none;
  border-radius: 0 0 0 4px;
  background: rgba(25, 55, 88, 0.7);
  color: #fff;
  font-size: 12px;
  line-height: 16px;
  cursor: pointer;
  opacity: 0;
}

.cc-th:hover>.cc-del-col {
  opacity: 1;
}

.cc-align-mask {
  position: fixed;
  inset: 0;
  z-index: 1050;
}

.cc-align-pop {
  position: fixed;
  z-index: 1051;
  width: 220px;
  padding: 10px 12px;
  background: #fff;
  border: 1px solid #e2e6ed;
  border-radius: 6px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.18);
  font-size: 13px;
}

.cc-pop-title {
  font-weight: 600;
  margin-bottom: 8px;
}

.cc-align-pop__grp {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
}

.cc-align-pop__grp>span {
  color: #767c85;
  min-width: 32px;
}

.cc-pop-input {
  flex: 1;
  height: 26px;
  padding: 0 6px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
}

.cc-align-pop__grp button {
  min-width: 28px;
  height: 26px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}

.cc-align-pop__grp button.is-active {
  border-color: #193758;
  background: rgba(25, 55, 88, 0.12);
  color: #193758;
}

.cc-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
}

.cc-actions button {
  height: 30px;
  padding: 0 16px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}

.cc-actions button:first-child {
  border-color: #193758;
  background: #193758;
  color: #fff;
}
</style>
