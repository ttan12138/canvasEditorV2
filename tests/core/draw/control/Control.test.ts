import { describe, expect, it } from 'vitest'
import { mergeOption } from '@/editor/utils/option'
import { Control } from '@/editor/core/draw/control/Control'
import { ControlComponent, ControlType } from '@/editor/dataset/enum/Control'
import { EditorMode } from '@/editor/dataset/enum/Editor'
import type { IElement } from '@/editor/interface/Element'

const makeDraw = () => {
  const options = mergeOption()
  return {
    getOptions: () => options,
    getRange: () => ({ getRange: () => ({ startIndex: 0, endIndex: 0 }) }),
    getListener: () => ({}),
    getEventBus: () => ({ emit: () => {} }),
    getContainer: () => document.createElement('div'),
    getElementList: () => [],
    getPosition: () => ({ getPositionList: () => [] }),
    getPageNo: () => 0,
    getPageOffset: () => ({ x: 0, y: 0 }),
    getActiveControl: () => null,
    isDesignMode: () => false,
    getMode: () => EditorMode.WYSIWYG
  } as any
}

describe('Control 基类', () => {
  it('getValueRange 从 PREFIX/VALUE/POSTFIX 起算', () => {
    const elementList: IElement[] = [
      { value: ' ' } as any,
      { controlId: 'c1', controlComponent: ControlComponent.PREFIX } as any,
      { controlId: 'c1', controlComponent: ControlComponent.VALUE, value: 'a' } as any,
      { controlId: 'c1', controlComponent: ControlComponent.VALUE, value: 'b' } as any,
      { controlId: 'c1', controlComponent: ControlComponent.POSTFIX } as any
    ]
    const control = new Control(makeDraw())
    expect(
      control.getValueRange({ elementList, range: { startIndex: 1, endIndex: 1 } })
    ).toEqual({ startIndex: 1, endIndex: 3 })
    expect(
      control.getValueRange({ elementList, range: { startIndex: 2, endIndex: 2 } })
    ).toEqual({ startIndex: 1, endIndex: 3 })
    expect(
      control.getValueRange({ elementList, range: { startIndex: 4, endIndex: 4 } })
    ).toEqual({ startIndex: 1, endIndex: 4 })
    // 无值（只有前后缀）—— preIndex === nextIndex 返回 null
    const empty: IElement[] = [
      { value: ' ' } as any,
      { controlId: 'c1', controlComponent: ControlComponent.PREFIX } as any,
      { controlId: 'c1', controlComponent: ControlComponent.POSTFIX } as any
    ]
    expect(
      control.getValueRange({ elementList: empty, range: { startIndex: 1, endIndex: 1 } })
    ).toBeNull()
  })

  it('getIsExistValueByElementListIndex', () => {
    const elementList: IElement[] = [
      { value: ' ' } as any,
      { controlId: 'c1', controlComponent: ControlComponent.PREFIX } as any,
      { controlId: 'c1', controlComponent: ControlComponent.VALUE, value: 'a' } as any,
      { controlId: 'c1', controlComponent: ControlComponent.POSTFIX } as any
    ]
    const control = new Control(makeDraw())
    expect(control.getIsExistValueByElementListIndex(elementList, 0)).toBe(false)
    expect(control.getIsExistValueByElementListIndex(elementList, 2)).toBe(true)
    expect(control.getIsExistValueByElementListIndex(elementList, 1)).toBe(true)
    expect(control.getIsExistValueByElementListIndex(elementList, 3)).toBe(true)
    // 复选/单选以 code 判断
    const cb = [
      {
        controlId: 'c2',
        controlComponent: ControlComponent.CHECKBOX,
        control: { type: ControlType.CHECKBOX, code: 'x' }
      } as any
    ]
    expect(control.getIsExistValueByElementListIndex(cb, 0)).toBe(true)
    const cb2 = [
      {
        controlId: 'c2',
        controlComponent: ControlComponent.CHECKBOX,
        control: { type: ControlType.CHECKBOX }
      } as any
    ]
    expect(control.getIsExistValueByElementListIndex(cb2, 0)).toBe(false)
    // 占位符视为无值
    const ph = [
      { controlId: 'c3', controlComponent: ControlComponent.PREFIX } as any,
      { controlId: 'c3', controlComponent: ControlComponent.PLACEHOLDER } as any,
      { controlId: 'c3', controlComponent: ControlComponent.POSTFIX } as any
    ]
    expect(control.getIsExistValueByElementListIndex(ph, 1)).toBe(false)
  })

  it('filterAssistElement 过滤前后缀、保留值元素', () => {
    const control = new Control(makeDraw())
    const elementList: IElement[] = [
      { controlId: 'c1', controlComponent: ControlComponent.PREFIX } as any,
      { controlId: 'c1', controlComponent: ControlComponent.VALUE, value: 'a' } as any,
      { controlId: 'c1', controlComponent: ControlComponent.POSTFIX } as any,
      { value: 'x' } as any
    ]
    const result = control.filterAssistElement(elementList)
    expect(result.map(e => e.controlComponent)).toEqual([
      ControlComponent.VALUE,
      undefined
    ])
  })

  it('getIsDisabledControl / getIsDisabledPasteControl', () => {
    const ctx = {
      elementList: [{ value: ' ' } as any],
      range: { startIndex: 0, endIndex: 0 }
    }
    const control = new Control(makeDraw())
    expect(control.getIsDisabledControl(ctx)).toBe(false)
    ;(control as any).activeControl = {
      getElement: () => ({ control: { disabled: true } })
    }
    expect(control.getIsDisabledControl(ctx)).toBe(true)
    ;(control as any).activeControl = {
      getElement: () => ({ control: { disabled: false } })
    }
    expect(control.getIsDisabledControl(ctx)).toBe(false)
    // 表单模式 editable === false
    const draw = makeDraw()
    draw.getMode = () => EditorMode.FORM
    const control2 = new Control(draw)
    ;(control2 as any).activeControl = {
      getElement: () => ({ control: { editable: false } })
    }
    expect(control2.getIsDisabledControl(ctx)).toBe(true)

    const c3 = new Control(makeDraw())
    expect(c3.getIsDisabledPasteControl(ctx)).toBe(false)
    ;(c3 as any).activeControl = {
      getElement: () => ({ control: { pasteDisabled: true } })
    }
    expect(c3.getIsDisabledPasteControl(ctx)).toBe(true)
  })
})
