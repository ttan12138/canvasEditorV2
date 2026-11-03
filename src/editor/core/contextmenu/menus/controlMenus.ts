import { INTERNAL_CONTEXT_MENU_KEY } from '../../../dataset/constant/ContextMenu'
import { EditorMode } from '../../../dataset/enum/Editor'
import { IRegisterContextMenu } from '../../../interface/contextmenu/ContextMenu'
import { Command } from '../../command/Command'
import { openControlConfigDialog } from '../../../../components/dialog/controlConfigDialog'
const {
  CONTROL: { DELETE, EDIT }
} = INTERNAL_CONTEXT_MENU_KEY

export const controlMenus: IRegisterContextMenu[] = [
  {
    key: EDIT,
    name: '编辑控件',
    when: payload => {
      return (
        !payload.isReadonly &&
        !payload.editorHasSelection &&
        !!payload.startElement?.controlId &&
        payload.options.mode === EditorMode.EDIT
      )
    },
    callback: (command: Command, context) => {
      const controlId = context?.startElement?.controlId
      if (!controlId) return
      openControlConfigDialog(command, { mode: 'edit', controlId })
    }
  },
  {
    key: DELETE,
    i18nPath: 'contextmenu.control.delete',
    when: payload => {
      return (
        !payload.isReadonly &&
        !payload.editorHasSelection &&
        !!payload.startElement?.controlId &&
        payload.options.mode !== EditorMode.FORM
      )
    },
    callback: (command: Command) => {
      command.executeRemoveControl()
    }
  }
]
