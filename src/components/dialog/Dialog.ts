import { EditorComponent, EDITOR_COMPONENT } from '../../editor'
import type { IImageCaption } from '../../editor/interface/Element'
import type { IImageCountConfig } from '../../editor/interface/Control'
import './dialog.css'

export interface IDialogData {
  type: string
  label?: string
  name?: string
  value?: string | boolean
  options?: { label: string; value: string }[]
  placeholder?: string
  width?: number
  height?: number
  required?: boolean
  /** 分组/条件显示：仅当依赖字段值等于 equals 时显示（用于“是否为图像控件”嵌套） */
  showIf?: { field: string; equals: boolean | string }
  /** 子项（section / 容器类类型使用） */
  children?: IDialogData[]
  /** countConfig：最大条数（默认 10） */
  maxCount?: number
  /** countConfig：初始显示条数（默认 4） */
  defaultCount?: number
  /** 容器类类型的回填数据：countConfig 为 IImageCountConfig[]，captionStyle 为 Partial<IImageCaption> */
  initial?: unknown
}

export interface IDialogConfirm {
  name: string
  value: string
}

export interface IDialogOptions {
  onClose?: () => void
  onCancel?: () => void
  onConfirm?: (payload: IDialogConfirm[]) => void
  title: string
  data: IDialogData[]
  /** 弹窗固定宽度（px）；不传则由内容撑开。设置后内部弹性输入自适应收缩 */
  width?: number
}

/** 解析 CSS text-shadow 字符串（offset-x offset-y blur color）为可视化子输入初值 */
function parseTextShadow(css: string): {
  x: string
  y: string
  blur: string
  color: string
} {
  const m = css.match(/^(-?[\d.]+)px\s+(-?[\d.]+)px\s+(-?[\d.]+)px\s+(.+)$/)
  if (m) return { x: m[1], y: m[2], blur: m[3], color: m[4].trim() }
  const m2 = css.match(/^(-?[\d.]+)px\s+(-?[\d.]+)px\s+(.+)$/)
  if (m2) return { x: m2[1], y: m2[2], blur: '0', color: m2[3].trim() }
  return { x: '', y: '', blur: '', color: '' }
}

/** 题注默认样式可视化配置的字段清单（绑定到控件 imageCaptionStyle） */
const CAPTION_STYLE_FIELDS: {
  prop: string
  label: string
  type: string
  /** 特殊渲染类型：shadow 拆成 横偏/纵偏/模糊/颜色 四个输入 */
  kind?: 'shadow'
  options?: { label: string; value: string }[]
  /** 输入框占位符（覆盖默认 label） */
  placeholder?: string
}[] = [
  { prop: 'color', label: '字体颜色', type: 'color' },
  { prop: 'fontSize', label: '字号', type: 'number' },
  { prop: 'fontFamily', label: '字体', type: 'text' },
  {
    prop: 'textAlign',
    label: '对齐',
    type: 'select',
    options: [
      { label: '左', value: 'left' },
      { label: '中', value: 'center' },
      { label: '右', value: 'right' }
    ]
  },
  { prop: 'backgroundColor', label: '背景色', type: 'color' },
  {
    prop: 'marginTop',
    label: '上外边距',
    type: 'number',
    placeholder: '与上方图片间隙'
  },
  {
    prop: 'marginBottom',
    label: '下外边距',
    type: 'number',
    placeholder: '与下方内容间隙'
  },
  { prop: 'paddingLeft', label: '左内边距', type: 'number' },
  { prop: 'paddingRight', label: '右内边距', type: 'number' },
  {
    prop: 'lineHeight',
    label: '行高倍数',
    type: 'number',
    placeholder: '默认 1.4'
  },
  {
    prop: 'maxLines',
    label: '最大行数',
    type: 'number',
    placeholder: '超出显示…，空为不限'
  },
  {
    prop: 'fontWeight',
    label: '粗细',
    type: 'select',
    options: [
      { label: '常规', value: 'normal' },
      { label: '加粗', value: 'bold' }
    ]
  },
  {
    prop: 'fontStyle',
    label: '斜体',
    type: 'select',
    options: [
      { label: '正常', value: 'normal' },
      { label: '斜体', value: 'italic' }
    ]
  },
  {
    prop: 'textDecoration',
    label: '修饰',
    type: 'select',
    options: [
      { label: '无', value: 'none' },
      { label: '下划线', value: 'underline' },
      { label: '删除线', value: 'line-through' }
    ]
  },
  { prop: 'textShadow', label: '阴影', type: 'text', kind: 'shadow' },
  { prop: 'transform', label: '变换', type: 'text' }
]

export class Dialog {
  private options: IDialogOptions
  private mask: HTMLDivElement | null
  private container: HTMLDivElement | null
  private inputList: (
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
  )[]
  /** 字段名 -> 当前值 getter（showIf 依赖判断用） */
  private fieldGetters: Map<string, () => boolean | string>
  /** 条件显示容器：依赖字段变化时切换显示 */
  private dependents: {
    el: HTMLElement
    field: string
    equals: boolean | string
  }[]

  constructor(options: IDialogOptions) {
    this.options = options
    this.mask = null
    this.container = null
    this.inputList = []
    this.fieldGetters = new Map()
    this.dependents = []
    this._render()
  }

  /** 构建单个输入控件，返回待挂载节点与底层 input（统一登记到 inputList / fieldGetters） */
  private _mkInput(option: IDialogData): {
    el: HTMLElement
    input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  } {
    let optionInput: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    let nodeToAppend: HTMLElement
    if (option.type === 'select') {
      optionInput = document.createElement('select')
      option.options?.forEach(item => {
        const optionItem = document.createElement('option')
        optionItem.value = item.value
        optionItem.label = item.label
        optionInput.append(optionItem)
      })
      if (option.value != null) optionInput.value = String(option.value)
      nodeToAppend = optionInput
    } else if (option.type === 'textarea') {
      optionInput = document.createElement('textarea')
      if (option.value != null) optionInput.value = String(option.value)
      nodeToAppend = optionInput
    } else if (option.type === 'switch' || option.type === 'checkbox') {
      // 占位符对话框布尔项以开关（toggle）呈现，底层仍为 checkbox 以便取值
      optionInput = document.createElement('input')
      const inputEl = optionInput as HTMLInputElement
      inputEl.type = 'checkbox'
      inputEl.checked = option.value === true || option.value === 'true'
      if (option.type === 'switch') {
        // 内联样式实现开关，不依赖外部样式表，避免样式未注入/被覆盖时不可见
        inputEl.style.cssText =
          'position:absolute;width:0;height:0;margin:0;opacity:0;'
        const switchEl = document.createElement('label')
        switchEl.style.cssText =
          'position:relative;display:inline-block;width:44px;height:22px;cursor:pointer;user-select:none;'
        const track = document.createElement('span')
        track.style.cssText =
          'position:absolute;left:0;top:0;width:44px;height:22px;border-radius:11px;background:#c0c4cc;transition:background .2s;'
        const knob = document.createElement('span')
        knob.style.cssText =
          'position:absolute;left:2px;top:2px;width:18px;height:18px;border-radius:50%;background:#fff;transition:transform .2s;'
        const applyState = () => {
          track.style.background = inputEl.checked ? '#4991f2' : '#c0c4cc'
          knob.style.transform = inputEl.checked
            ? 'translateX(22px)'
            : 'translateX(0)'
        }
        inputEl.addEventListener('change', applyState)
        applyState()
        switchEl.append(inputEl, track, knob)
        nodeToAppend = switchEl
      } else {
        nodeToAppend = optionInput
      }
      // 注册 getter 供 showIf 依赖
      if (option.name) {
        const elRef = inputEl
        this.fieldGetters.set(option.name, () => elRef.checked)
      }
    } else {
      optionInput = document.createElement('input')
      optionInput.type = option.type || 'text'
      if (option.value != null) optionInput.value = String(option.value)
      nodeToAppend = optionInput
      // 文本类字段也登记 getter（供 showIf 按字符串比对）
      if (option.name) {
        const elRef = optionInput as HTMLInputElement
        this.fieldGetters.set(option.name, () => elRef.value)
      }
    }
    if (option.width) {
      optionInput.style.width = `${option.width}px`
    }
    if (option.height) {
      optionInput.style.height = `${option.height}px`
    }
    optionInput.name = option.name ?? ''
    // 复选框用 checked 表示状态，value 仅作属性，统一转字符串避免 boolean 赋值报错
    optionInput.value = (option.value ?? '').toString()
    if (!(optionInput instanceof HTMLSelectElement)) {
      optionInput.placeholder = option.placeholder || ''
    }
    return { el: nodeToAppend, input: optionInput }
  }

  /** 递归渲染单个配置项（含 section / countConfig / captionStyle 容器类型） */
  private _renderOption(option: IDialogData): HTMLElement {
    const itemContainer = document.createElement('div')
    itemContainer.classList.add('dialog-option__item')

    // ============ 分组（带条件显示） ============
    if (option.type === 'section') {
      // 容器型条目改为块级堆叠（标题/内容上下排布），
      // 避免继承 dialog-option__item 的 flex 横排导致内容溢出
      itemContainer.classList.add(
        'dialog-section',
        'dialog-option__item--block'
      )
      if (option.label) {
        const title = document.createElement('div')
        title.classList.add('dialog-section__title')
        title.append(document.createTextNode(option.label))
        itemContainer.append(title)
      }
      const body = document.createElement('div')
      body.classList.add('dialog-section__body')
      // 紧凑布局：连续的 switch 子项合并进双列网格，避免每项独占一行
      let switchGrid: HTMLDivElement | null = null
      for (const child of option.children ?? []) {
        if (child.type === 'switch') {
          if (!switchGrid) {
            switchGrid = document.createElement('div')
            switchGrid.classList.add('dialog-switch-grid')
            body.append(switchGrid)
          }
          switchGrid.append(this._renderOption(child))
          continue
        }
        switchGrid = null
        body.append(this._renderOption(child))
      }
      itemContainer.append(body)
      if (option.showIf) {
        itemContainer.style.display = 'none'
        this.dependents.push({
          el: itemContainer,
          field: option.showIf.field,
          equals: option.showIf.equals
        })
      }
      return itemContainer
    }

    // ============ 水平分组：子项左右排布（如 开关组 + count 预设） ============
    // 连续 switch 子项合并为一个双列网格单元，其余子项各占一格
    if (option.type === 'hgroup') {
      itemContainer.classList.add('dialog-hgroup')
      let switchCell: HTMLDivElement | null = null
      for (const child of option.children ?? []) {
        if (child.type === 'switch') {
          if (!switchCell) {
            switchCell = document.createElement('div')
            switchCell.classList.add(
              'dialog-hgroup__cell',
              'dialog-switch-grid'
            )
            itemContainer.append(switchCell)
          }
          switchCell.append(this._renderOption(child))
          continue
        }
        switchCell = null
        const cell = document.createElement('div')
        cell.classList.add('dialog-hgroup__cell')
        cell.append(this._renderOption(child))
        itemContainer.append(cell)
      }
      return itemContainer
    }

    // ============ 按 count 的图片尺寸/内边距预设 ============
    // 全量渲染（1..maxCount），区域限高约 4 行、超出滚动（CSS .cc-grid），
    // 不再使用“展开更多”折叠按钮
    if (option.type === 'countConfig') {
      // 容器型条目：标签与网格上下堆叠，网格内的弹性输入可随弹窗宽度收缩
      itemContainer.classList.add('dialog-option__item--block')
      itemContainer.classList.add('dialog-option__item--count-config')
      const max = option.maxCount ?? 10
      if (option.label) {
        const label = document.createElement('div')
        label.classList.add('dialog-option__label')
        label.append(document.createTextNode(option.label))
        itemContainer.append(label)
      }
      const grid = document.createElement('div')
      grid.classList.add('cc-grid')
      const initialConfigs =
        (option.initial as IImageCountConfig[] | undefined) ?? []
      for (let c = 1; c <= max; c++) {
        const cfg = initialConfigs.find(x => x.count === c)
        const row = document.createElement('div')
        row.classList.add('cc-row')
        const cl = document.createElement('span')
        cl.classList.add('cc-row__label')
        cl.append(document.createTextNode(`${c}`))
        row.append(cl)
        // 需求：padding 改为 上/右/下/左 四个输入框；回填兼容二元组 [左,右]
        // 与四元组 [上,右,下,左]（二元组时上下留空）
        const p = cfg?.padding
        const p4 = !!p && p.length >= 4
        const padInit: { suf: string; ph: string; val: string }[] = [
          { suf: 't', ph: '上', val: p4 && p ? String(p[0]) : '' },
          { suf: 'r', ph: '右', val: p ? String(p[1]) : '' },
          { suf: 'b', ph: '下', val: p4 && p ? String(p[2]) : '' },
          { suf: 'l', ph: '左', val: p ? String(p4 ? p[3] : p[0]) : '' }
        ]
        const padInputs: (
          | HTMLInputElement
          | HTMLSelectElement
          | HTMLTextAreaElement
        )[] = []
        for (const it of padInit) {
          const inp = this._mkInput({
            type: 'number',
            name: `cc_padding_${it.suf}_${c}`,
            placeholder: it.ph,
            value: it.val
          })
          padInputs.push(inp.input)
          row.append(inp.el)
        }
        const w = this._mkInput({
          type: 'number',
          name: `cc_width_${c}`,
          placeholder: '宽',
          value: cfg?.width != null ? String(cfg.width) : ''
        })
        const h = this._mkInput({
          type: 'number',
          name: `cc_height_${c}`,
          placeholder: '高',
          value: cfg?.height != null ? String(cfg.height) : ''
        })
        row.append(w.el, h.el)
        this.inputList.push(...padInputs, w.input, h.input)
        grid.append(row)
      }
      itemContainer.append(grid)
      return itemContainer
    }

    // ============ 默认图片配置（宽/高/四向内边距） ============
    // 明细图片未传入宽/高/padding 时按此兜底；绑定到控件 imageDefaultConfig
    if (option.type === 'defaultImageConfig') {
      itemContainer.classList.add('dialog-option__item--block')
      if (option.label) {
        const label = document.createElement('div')
        label.classList.add('dialog-option__label')
        label.append(document.createTextNode(option.label))
        itemContainer.append(label)
      }
      const init =
        (option.initial as
          | {
              width?: number
              height?: number
              padding?: number[]
            }
          | undefined) ?? {}
      const row = document.createElement('div')
      row.classList.add('cc-row')
      const p = init.padding
      const p4 = !!p && p.length >= 4
      const fields: { name: string; ph: string; type: string; val: string }[] =
        [
          {
            name: 'dic_width',
            ph: '宽',
            type: 'number',
            val: init.width != null ? String(init.width) : ''
          },
          {
            name: 'dic_height',
            ph: '高',
            type: 'number',
            val: init.height != null ? String(init.height) : ''
          },
          {
            name: 'dic_padding_t',
            ph: '上',
            type: 'number',
            val: p4 && p ? String(p[0]) : ''
          },
          {
            name: 'dic_padding_r',
            ph: '右',
            type: 'number',
            val: p ? String(p[1]) : ''
          },
          {
            name: 'dic_padding_b',
            ph: '下',
            type: 'number',
            val: p4 && p ? String(p[2]) : ''
          },
          {
            name: 'dic_padding_l',
            ph: '左',
            type: 'number',
            val: p ? String(p4 ? p[3] : p[0]) : ''
          }
        ]
      for (const f of fields) {
        const inp = this._mkInput({
          type: f.type,
          name: f.name,
          placeholder: f.ph,
          value: f.val
        })
        row.append(inp.el)
        this.inputList.push(inp.input)
      }
      itemContainer.append(row)
      return itemContainer
    }

    // ============ 题注默认样式（value 以外的可视化配置） ============
    if (option.type === 'captionStyle') {
      // 容器型条目：标签与网格上下堆叠，网格内的弹性输入可随弹窗宽度收缩
      itemContainer.classList.add('dialog-option__item--block')
      if (option.label) {
        const label = document.createElement('div')
        label.classList.add('dialog-option__label')
        label.append(document.createTextNode(option.label))
        itemContainer.append(label)
      }
      const grid = document.createElement('div')
      grid.classList.add('cap-grid')
      const init = (option.initial as Partial<IImageCaption> | undefined) ?? {}
      for (const f of CAPTION_STYLE_FIELDS) {
        // 阴影：可视化拆成 横偏/纵偏/模糊/颜色，确认时合并为 CSS text-shadow
        if (f.kind === 'shadow') {
          const shadowInit = parseTextShadow(
            typeof init.textShadow === 'string' ? init.textShadow : ''
          )
          const row = document.createElement('div')
          row.classList.add('cap-field', 'cap-field--shadow')
          const lab = document.createElement('span')
          lab.append(document.createTextNode(f.label))
          row.append(lab)
          const wrap = document.createElement('div')
          wrap.classList.add('cap-shadow')
          const parts = [
            { suf: 'x', ph: '横偏', type: 'number', val: shadowInit.x },
            { suf: 'y', ph: '纵偏', type: 'number', val: shadowInit.y },
            { suf: 'blur', ph: '模糊', type: 'number', val: shadowInit.blur },
            // 阴影颜色默认值改为白色（无已有阴影时）
            {
              suf: 'color',
              ph: '颜色',
              type: 'color',
              val: shadowInit.color || '#ffffff'
            }
          ]
          for (const part of parts) {
            const inp = this._mkInput({
              type: part.type,
              name: `cap_${f.prop}_${part.suf}`,
              placeholder: part.ph,
              value: part.val
            })
            wrap.append(inp.el)
            this.inputList.push(inp.input)
          }
          row.append(wrap)
          grid.append(row)
          continue
        }
        const row = document.createElement('div')
        row.classList.add('cap-field')
        const lab = document.createElement('span')
        lab.append(document.createTextNode(f.label))
        row.append(lab)
        const initVal = (init as Record<string, unknown>)[f.prop]
        const input = this._mkInput({
          type: f.type,
          name: `cap_${f.prop}`,
          options: f.options,
          placeholder: f.placeholder ?? f.label,
          // 仅当用户主动设置才写入：无已有值时留空，不强制默认色
          value: initVal != null ? String(initVal) : ''
        })
        row.append(input.el)
        this.inputList.push(input.input)
        grid.append(row)
      }
      itemContainer.append(grid)
      return itemContainer
    }

    // ============ 普通字段（text/select/textarea/switch/checkbox） ============
    if (option.label) {
      const optionName = document.createElement('span')
      optionName.append(document.createTextNode(option.label))
      itemContainer.append(optionName)
      if (option.required) {
        optionName.classList.add('dialog-option__item--require')
      }
    }
    const { el, input } = this._mkInput(option)
    itemContainer.append(el)
    this.inputList.push(input)
    return itemContainer
  }

  private _render() {
    const { title, data, onClose, onCancel, onConfirm, width } = this.options
    // 渲染遮罩层
    const mask = document.createElement('div')
    mask.classList.add('dialog-mask')
    mask.setAttribute(EDITOR_COMPONENT, EditorComponent.COMPONENT)
    document.body.append(mask)
    // 渲染容器
    const container = document.createElement('div')
    container.classList.add('dialog-container')
    container.setAttribute(EDITOR_COMPONENT, EditorComponent.COMPONENT)
    // 弹窗
    const dialogContainer = document.createElement('div')
    dialogContainer.classList.add('dialog')
    // 需求：支持固定宽度，避免多列布局（如左右分组）把弹窗撑得过宽；
    // 设宽后内部弹性输入（flex:1 + min-width:0）自适应收缩
    if (width) {
      dialogContainer.style.width = `${width}px`
      dialogContainer.style.maxWidth = '90vw'
      dialogContainer.style.boxSizing = 'border-box'
    }
    container.append(dialogContainer)
    // 标题容器
    const titleContainer = document.createElement('div')
    titleContainer.classList.add('dialog-title')
    // 标题&关闭按钮
    const titleSpan = document.createElement('span')
    titleSpan.append(document.createTextNode(title))
    const titleClose = document.createElement('i')
    titleClose.onclick = () => {
      if (onClose) {
        onClose()
      }
      this._dispose()
    }
    titleContainer.append(titleSpan)
    titleContainer.append(titleClose)
    dialogContainer.append(titleContainer)
    // 选项容器
    const optionContainer = document.createElement('div')
    optionContainer.classList.add('dialog-option')
    // 选项
    for (let i = 0; i < data.length; i++) {
      optionContainer.append(this._renderOption(data[i]))
    }
    dialogContainer.append(optionContainer)

    // 依赖字段变化驱动条件显示
    for (const dep of this.dependents) {
      const getter = this.fieldGetters.get(dep.field)
      const apply = () => {
        const v = getter ? getter() : undefined
        const show = v === dep.equals
        dep.el.style.display = show ? '' : 'none'
      }
      const input = this.inputList.find(i => i.name === dep.field)
      if (input) input.addEventListener('change', apply)
      apply()
    }

    // 按钮容器
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('dialog-menu')
    // 取消按钮
    const cancelBtn = document.createElement('button')
    cancelBtn.classList.add('dialog-menu__cancel')
    cancelBtn.append(document.createTextNode('取消'))
    cancelBtn.type = 'button'
    cancelBtn.onclick = () => {
      if (onCancel) {
        onCancel()
      }
      this._dispose()
    }
    menuContainer.append(cancelBtn)
    // 确认按钮
    const confirmBtn = document.createElement('button')
    confirmBtn.append(document.createTextNode('确定'))
    confirmBtn.type = 'submit'
    confirmBtn.onclick = () => {
      if (onConfirm) {
        let payload = this.inputList.map<IDialogConfirm>(input => {
          // 复选框以 checked 状态返回 'true'/'false'，而非 input.value
          if (input instanceof HTMLInputElement && input.type === 'checkbox') {
            return { name: input.name, value: input.checked ? 'true' : 'false' }
          }
          return { name: input.name, value: input.value }
        })
        // 阴影子输入合并为单个 CSS text-shadow 字段（cap_textShadow）
        for (const f of CAPTION_STYLE_FIELDS) {
          if (f.kind !== 'shadow') continue
          const get = (suf: string) =>
            payload.find(p => p.name === `cap_${f.prop}_${suf}`)?.value || ''
          const x = get('x')
          const y = get('y')
          const blur = get('blur')
          const color = get('color')
          payload = payload.filter(
            p =>
              p.name !== `cap_${f.prop}_x` &&
              p.name !== `cap_${f.prop}_y` &&
              p.name !== `cap_${f.prop}_blur` &&
              p.name !== `cap_${f.prop}_color`
          )
          // 仅当设置了偏移/模糊才写入阴影（颜色默认白色，避免无意义的 0px 0px 0px #fff）
          if (x || y || blur) {
            payload.push({
              name: `cap_${f.prop}`,
              value: `${x || '0'}px ${y || '0'}px ${blur || '0'}px ${
                color || '#ffffff'
              }`
            })
          }
        }
        onConfirm(payload)
      }
      this._dispose()
    }
    menuContainer.append(confirmBtn)
    dialogContainer.append(menuContainer)
    // 渲染
    document.body.append(container)
    this.container = container
    this.mask = mask
  }

  private _dispose() {
    this.mask?.remove()
    this.container?.remove()
  }
}
