import { INTERNAL_CONTEXT_MENU_KEY } from '../../../dataset/constant/ContextMenu'
import { ImageDisplay } from '../../../dataset/enum/Common'
import { ElementType } from '../../../dataset/enum/Element'
import {
  IContextMenuContext,
  IRegisterContextMenu
} from '../../../interface/contextmenu/ContextMenu'
import { Command } from '../../command/Command'
const {
  IMAGE: {
    CHANGE,
    SAVE_AS,
    TEXT_WRAP,
    TEXT_WRAP_EMBED,
    TEXT_WRAP_UP_DOWN,
    TEXT_WRAP_SURROUND,
    TEXT_WRAP_FLOAT_TOP,
    TEXT_WRAP_FLOAT_BOTTOM
  }
} = INTERNAL_CONTEXT_MENU_KEY

export const imageMenus: IRegisterContextMenu[] = [
  {
    key: CHANGE,
    i18nPath: 'contextmenu.image.change',
    icon: 'image-change',
    when: payload => {
      // 需求 13：表单/只读模式下不显示「更改图片」
      return (
        !payload.isReadonly &&
        !payload.isFormMode &&
        !payload.editorHasSelection &&
        payload.startElement?.type === ElementType.IMAGE
      )
    },
    callback: (command: Command) => {
      // 创建代理元素
      const proxyInputFile = document.createElement('input')
      proxyInputFile.type = 'file'
      proxyInputFile.accept = '.png, .jpg, .jpeg'
      // 监听上传
      proxyInputFile.onchange = () => {
        const file = proxyInputFile.files![0]!
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          const value = fileReader.result as string
          command.executeReplaceImageElement(value)
        }
      }
      proxyInputFile.click()
    }
  },
  {
    key: SAVE_AS,
    i18nPath: 'contextmenu.image.saveAs',
    icon: 'image',
    when: payload => {
      // 需求 13：表单/只读模式下不显示「另存为图片」
      return (
        !payload.isReadonly &&
        !payload.isFormMode &&
        !payload.editorHasSelection &&
        payload.startElement?.type === ElementType.IMAGE
      )
    },
    callback: (command: Command) => {
      command.executeSaveAsImageElement()
    }
  },
  {
    key: TEXT_WRAP,
    i18nPath: 'contextmenu.image.textWrap',
    when: payload => {
      // 需求 13：表单/只读模式下不显示「文字环绕」
      return (
        !payload.isReadonly &&
        !payload.isFormMode &&
        !payload.editorHasSelection &&
        payload.startElement?.type === ElementType.IMAGE
      )
    },
    childMenus: [
      {
        key: TEXT_WRAP_EMBED,
        i18nPath: 'contextmenu.image.textWrapType.embed',
        when: () => true,
        callback: (command: Command, context: IContextMenuContext) => {
          command.executeChangeImageDisplay(
            context.startElement!,
            ImageDisplay.BLOCK
          )
        }
      },
      {
        key: TEXT_WRAP_UP_DOWN,
        i18nPath: 'contextmenu.image.textWrapType.upDown',
        when: () => true,
        callback: (command: Command, context: IContextMenuContext) => {
          command.executeChangeImageDisplay(
            context.startElement!,
            ImageDisplay.INLINE
          )
        }
      },
      {
        key: TEXT_WRAP_SURROUND,
        i18nPath: 'contextmenu.image.textWrapType.surround',
        when: () => true,
        callback: (command: Command, context: IContextMenuContext) => {
          command.executeChangeImageDisplay(
            context.startElement!,
            ImageDisplay.SURROUND
          )
        }
      },
      {
        key: TEXT_WRAP_FLOAT_TOP,
        i18nPath: 'contextmenu.image.textWrapType.floatTop',
        when: () => true,
        callback: (command: Command, context: IContextMenuContext) => {
          command.executeChangeImageDisplay(
            context.startElement!,
            ImageDisplay.FLOAT_TOP
          )
        }
      },
      {
        key: TEXT_WRAP_FLOAT_BOTTOM,
        i18nPath: 'contextmenu.image.textWrapType.floatBottom',
        when: () => true,
        callback: (command: Command, context: IContextMenuContext) => {
          command.executeChangeImageDisplay(
            context.startElement!,
            ImageDisplay.FLOAT_BOTTOM
          )
        }
      }
    ]
  },
  {
    // 需求 4.2：只读/表单模式下删除图片控件内的图片（canDelete/imageCanDelete 控制）
    key: 'imageControlDelete',
    name: '删除图片',
    when: payload => {
      const el = payload.startElement
      if (!el || el.type !== ElementType.IMAGE || !el.controlId) return false
      if (!payload.isReadonly && !payload.isFormMode) return false
      // 控件级 imageCanDelete 优先（图片级 canDelete 会被 formatElementList 剥离），默认不可删
      if (payload.imageCanDelete !== undefined) return payload.imageCanDelete
      if (el.canDelete !== undefined) return el.canDelete
      return false
    },
    callback: (command: Command, context: IContextMenuContext) => {
      const el = context.startElement
      if (!el?.controlId) return
      command.executeDeleteControlImage({
        controlId: el.controlId,
        elementIndex: context.startIndex,
        deletedImageValue: el.value ?? ''
      })
    }
  }
]
