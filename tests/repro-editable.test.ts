import { describe, it, expect, afterEach } from 'vitest'
import { ElementType } from '../src/editor/dataset/enum/Element'
import { ControlType } from '../src/editor/dataset/enum/Control'
import type { IElement } from '../src/editor/interface/Element'
import { createTestEditor } from './factories/editor'
import {
  setAllControlEditable,
  setControlEditableByPlaceholder,
  setControlsEditableByPlaceholders
} from '../src/vue/control'

const tableControl: IElement = {
  value: '',
  type: ElementType.TABLE,
  width: 600,
  colgroup: [{ width: 300 }, { width: 300 }],
  trList: [
    {
      height: 40,
      tdList: [
        {
          colspan: 1,
          rowspan: 1,
          value: [
            {
              type: ElementType.CONTROL,
              value: '',
              control: {
                conceptId: 'cell-sign',
                type: ControlType.TEXT,
                prefix: '​',
                postfix: '​',
                value: null,
                placeholder: '单元格签名'
              }
            }
          ]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [{ value: '普通单元格' }]
        }
      ]
    }
  ]
}

const mainControl: IElement = {
  type: ElementType.CONTROL,
  value: '',
  control: {
    conceptId: 'patient-name',
    type: ControlType.TEXT,
    value: null,
    placeholder: '患者姓名'
  }
}

const editableOf = (command: any, placeholder: string) =>
  command
    .getControlList()
    .find((e: IElement) => e.control?.placeholder === placeholder)?.control
    ?.editable

describe('占位符在表格中时 editable 设置（需求11 回归）', () => {
  let ctx: ReturnType<typeof createTestEditor>
  afterEach(() => ctx?.destroy())

  const buildCtx = () => {
    ctx = createTestEditor({
      data: {
        header: [],
        main: [mainControl, { value: '\n' }, tableControl],
        footer: []
      }
    })
    return ctx.editor.command
  }

  it('setAllControlEditable 对表格内控件也生效', () => {
    const command = buildCtx()
    setAllControlEditable(command, false)
    expect(editableOf(command, '患者姓名')).toBe(false)
    expect(editableOf(command, '单元格签名')).toBe(false)
  })

  it('setControlEditableByPlaceholder 对表格内控件生效', () => {
    const command = buildCtx()
    setControlEditableByPlaceholder(command, '单元格签名', false)
    expect(editableOf(command, '单元格签名')).toBe(false)
    expect(editableOf(command, '患者姓名')).toBeUndefined()
  })

  it('setControlsEditableByPlaceholders 对表格内控件生效', () => {
    const command = buildCtx()
    setControlsEditableByPlaceholders(
      command,
      ['单元格签名', '患者姓名'],
      false
    )
    expect(editableOf(command, '单元格签名')).toBe(false)
    expect(editableOf(command, '患者姓名')).toBe(false)
  })

  it('全部可编辑可恢复', () => {
    const command = buildCtx()
    setAllControlEditable(command, false)
    setAllControlEditable(command, true)
    expect(editableOf(command, '单元格签名')).toBe(true)
    expect(editableOf(command, '患者姓名')).toBe(true)
  })
})
