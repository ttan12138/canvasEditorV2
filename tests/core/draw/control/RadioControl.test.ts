import { describe, expect, it, vi } from 'vitest'
import { RadioControl } from '@/editor/core/draw/control/radio/RadioControl'
import { ControlComponent } from '@/editor/dataset/enum/Control'
import type { IElement } from '@/editor/interface/Element'

const buildControlMock = (
  elementList: IElement[],
  startIndex: number,
  disabled = false
) =>
  ({
    getIsDisabledControl: () => disabled,
    getElementList: () => elementList,
    getRange: () => ({ startIndex }),
    repaintControl: vi.fn(),
    emitControlContentChange: vi.fn()
  }) as any

const radioEl = (code: string, value = false): any => ({
  controlId: 'r1',
  controlComponent: ControlComponent.RADIO,
  radio: { code, value }
})

describe('RadioControl 单选控件', () => {
  it('setSelect 选中指定 code 并取消同组其余', () => {
    const elementList: IElement[] = [
      { controlId: 'r1', controlComponent: ControlComponent.PREFIX },
      radioEl('a'),
      radioEl('b'),
      radioEl('c'),
      { controlId: 'r1', controlComponent: ControlComponent.POSTFIX }
    ] as any
    const startElement = elementList[2] as any
    startElement.control = { code: '' }
    const control = buildControlMock(elementList, 2)
    const radio = new RadioControl(startElement, control)
    radio.setSelect(['b'])
    expect((elementList[1] as any).radio.value).toBe(false)
    expect((elementList[2] as any).radio.value).toBe(true)
    expect((elementList[3] as any).radio.value).toBe(false)
    expect(startElement.control.code).toBe('b')
    expect(control.emitControlContentChange).toHaveBeenCalled()
  })

  it('disabled 规则下不修改任何状态', () => {
    const elementList: IElement[] = [
      { controlId: 'r1', controlComponent: ControlComponent.PREFIX },
      radioEl('a'),
      radioEl('b'),
      { controlId: 'r1', controlComponent: ControlComponent.POSTFIX }
    ] as any
    const startElement = elementList[2] as any
    startElement.control = { code: 'a' }
    const control = buildControlMock(elementList, 2, true)
    const radio = new RadioControl(startElement, control)
    radio.setSelect(['b'])
    expect((elementList[2] as any).radio.value).toBe(false)
    expect(startElement.control.code).toBe('a')
    expect(control.repaintControl).not.toHaveBeenCalled()
    expect(control.emitControlContentChange).not.toHaveBeenCalled()
  })

  it('以 isIgnoreDisabledRule 绕过禁用规则', () => {
    const elementList: IElement[] = [
      { controlId: 'r1', controlComponent: ControlComponent.PREFIX },
      radioEl('a'),
      radioEl('b'),
      { controlId: 'r1', controlComponent: ControlComponent.POSTFIX }
    ] as any
    const startElement = elementList[2] as any
    startElement.control = { code: 'a' }
    const control = buildControlMock(elementList, 2, true)
    const radio = new RadioControl(startElement, control)
    radio.setSelect(['b'], {}, { isIgnoreDisabledRule: true })
    expect((elementList[2] as any).radio.value).toBe(true)
    expect(startElement.control.code).toBe('b')
  })
})
