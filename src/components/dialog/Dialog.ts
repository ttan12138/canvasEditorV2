import { EditorComponent, EDITOR_COMPONENT } from '../../editor'
import './dialog.css'

export interface IDialogData {
  type: string
  label?: string
  name: string
  value?: string | boolean
  options?: { label: string; value: string }[]
  placeholder?: string
  width?: number
  height?: number
  required?: boolean
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
}

export class Dialog {
  private options: IDialogOptions
  private mask: HTMLDivElement | null
  private container: HTMLDivElement | null
  private inputList: (
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement
  )[]

  constructor(options: IDialogOptions) {
    this.options = options
    this.mask = null
    this.container = null
    this.inputList = []
    this._render()
  }

  private _render() {
    const { title, data, onClose, onCancel, onConfirm } = this.options
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
      const option = data[i]
      const optionItemContainer = document.createElement('div')
      optionItemContainer.classList.add('dialog-option__item')
      // 选项名称
      if (option.label) {
        const optionName = document.createElement('span')
        optionName.append(document.createTextNode(option.label))
        optionItemContainer.append(optionName)
        if (option.required) {
          optionName.classList.add('dialog-option__item--require')
        }
      }
      // 选项输入框
      let optionInput:
        | HTMLInputElement
        | HTMLTextAreaElement
        | HTMLSelectElement
      // 实际追加到 DOM 的节点（开关类型为带样式的 label 包裹）
      let nodeToAppend: HTMLElement
      if (option.type === 'select') {
        optionInput = document.createElement('select')
        option.options?.forEach(item => {
          const optionItem = document.createElement('option')
          optionItem.value = item.value
          optionItem.label = item.label
          optionInput.append(optionItem)
        })
        nodeToAppend = optionInput
      } else if (option.type === 'textarea') {
        optionInput = document.createElement('textarea')
        nodeToAppend = optionInput
      } else if (option.type === 'switch' || option.type === 'checkbox') {
        // 需求：占位符对话框布尔项以开关（toggle）呈现，底层仍为 checkbox 以便取值
        optionInput = document.createElement('input')
        const inputEl = optionInput as HTMLInputElement
        inputEl.type = 'checkbox'
        inputEl.checked = option.value === true || option.value === 'true'
        if (option.type === 'switch') {
          // 内联样式实现开关，不依赖外部样式表，避免样式未注入/被覆盖时不可见
          optionInput.style.cssText =
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
      } else {
        optionInput = document.createElement('input')
        optionInput.type = option.type
        nodeToAppend = optionInput
      }
      if (option.width) {
        optionInput.style.width = `${option.width}px`
      }
      if (option.height) {
        optionInput.style.height = `${option.height}px`
      }
      optionInput.name = option.name
      // 复选框用 checked 表示状态，value 仅作属性，统一转字符串避免 boolean 赋值报错
      optionInput.value = (option.value ?? '').toString()
      if (!(optionInput instanceof HTMLSelectElement)) {
        optionInput.placeholder = option.placeholder || ''
      }
      optionItemContainer.append(nodeToAppend)
      optionContainer.append(optionItemContainer)
      this.inputList.push(optionInput)
    }
    dialogContainer.append(optionContainer)
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
        const payload = this.inputList.map<IDialogConfirm>(input => {
          // 复选框以 checked 状态返回 'true'/'false'，而非 input.value
          if (
            input instanceof HTMLInputElement &&
            input.type === 'checkbox'
          ) {
            return { name: input.name, value: input.checked ? 'true' : 'false' }
          }
          return { name: input.name, value: input.value }
        })
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
