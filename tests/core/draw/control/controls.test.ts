import { describe, expect, it, vi } from 'vitest'
import {
  ControlComponent,
  ControlType
} from '@/editor/dataset/enum/Control'
import { ElementType } from '@/editor/dataset/enum/Element'
import { mergeOption } from '@/editor/utils/option'
import { TextControl } from '@/editor/core/draw/control/text/TextControl'
import { SelectControl } from '@/editor/core/draw/control/select/SelectControl'
import { NumberControl } from '@/editor/core/draw/control/number/NumberControl'
import { DateControl } from '@/editor/core/draw/control/date/DateControl'
import { CheckboxControl } from '@/editor/core/draw/control/checkbox/CheckboxControl'
import type { IElement } from '@/editor/interface/Element'

const PREFIX = ControlComponent.PREFIX
const POSTFIX = ControlComponent.POSTFIX
const VALUE = ControlComponent.VALUE

interface Env {
  elementList: IElement[]
  control: any
  element: IElement
  draw: any
}

// 前置一个非控件元素，使 PREFIX 不在 index 0（getValueRange 以 ~0 作哨兵）
const makeEnv = (params: {
  elementList: IElement[]
  element: IElement
  startIndex?: number
  disabled?: boolean
}): Env => {
  const { element, disabled = false } = params
  const elementList = [{ value: ' ' } as any, ...params.elementList]
  const startIndex = params.startIndex ?? 1
  const options = mergeOption()
  const container = document.createElement('div')
  const draw = {
    getOptions: () => options,
    getTraceParticle: () => ({ markElementListInserted: () => {} }),
    spliceElementList: (list: any[], s: number, d: number, ins: any[]) =>
      list.splice(s, d, ...ins),
    deleteElementList: (list: any[], s: number, d: number) =>
      list.splice(s, d),
    getOriginalElementList: () => elementList
  }
  const control: any = {
    getDraw: () => draw,
    getElementList: () => elementList,
    getRange: () => ({ startIndex, endIndex: startIndex }),
    setRange: vi.fn(),
    getIsDisabledControl: () => disabled,
    shrinkBoundary: () => {},
    getValueRange: (ctx: any = {}) => {
      const range = ctx.range || { startIndex, endIndex: startIndex }
      let pre = range.startIndex
      while (
        pre > 0 &&
        elementList[pre].controlComponent !== PREFIX &&
        elementList[pre].controlComponent !== ControlComponent.PRE_TEXT
      )
        pre--
      let post = range.endIndex
      while (
        post < elementList.length &&
        elementList[post].controlComponent !== POSTFIX &&
        elementList[post].controlComponent !== ControlComponent.POST_TEXT
      )
        post++
      return { startIndex: pre, endIndex: post }
    },
    removePlaceholder: () => {},
    removePlaceholderInRange: (list: any[], start: number, count: number) => {
      let n = 0
      for (let i = start; i < start + count && i < list.length; i++) {
        const c = list[i]?.controlComponent
        if (c !== PREFIX && c !== POSTFIX) n++
      }
      return n
    },
    addPlaceholder: () => {},
    repaintControl: vi.fn(),
    emitControlContentChange: vi.fn(),
    setControlProperties: (props: any) =>
      Object.assign(element.control, props),
    removeControl: (i: number) => i,
    getPosition: () => ({
      coordinate: { leftTop: [0, 0] as [number, number] },
      lineHeight: 10
    }),
    getPreY: () => 0,
    getPreX: () => 0,
    getContainer: () => container,
    getIsRangeWithinControl: () => true,
    getIsExistValueByElementListIndex: () => false,
    getActiveControl: () => ({ getElement: () => ({ controlId: undefined }) }),
    destroyControl: () => {}
  }
  return { elementList, control, element, draw }
}

const buildControlList = (
  controlId: string,
  valueChars: string[]
): IElement[] => {
  const list: IElement[] = [{ controlId, controlComponent: PREFIX } as any]
  valueChars.forEach(c =>
    list.push({ controlId, controlComponent: VALUE, value: c } as any)
  )
  list.push({ controlId, controlComponent: POSTFIX } as any)
  return list
}

describe('TextControl 文本控件', () => {
  it('getValue 收集 VALUE 元素', () => {
    const elementList = buildControlList('t1', ['a', 'b'])
    const element = { controlId: 't1', control: { type: ControlType.TEXT } } as any
    const { control } = makeEnv({ elementList, element })
    control.getRange = () => ({ startIndex: 3, endIndex: 3 })
    const tc = new TextControl(element, control)
    expect(tc.getValue().map(v => v.value)).toEqual(['a', 'b'])
  })

  it('setValue 插入新值（占位态）', () => {
    const elementList = buildControlList('t1', [])
    const element = { controlId: 't1', control: { type: ControlType.TEXT } } as any
    const { control } = makeEnv({ elementList, element })
    const tc = new TextControl(element, control)
    const end = tc.setValue([
      { type: ElementType.TEXT, value: 'x' },
      { type: ElementType.TEXT, value: 'y' }
    ])
    expect(end).toBe(3)
    control.getRange = () => ({ startIndex: 3, endIndex: 3 })
    expect(tc.getValue().map(v => v.value).join('')).toBe('xy')
  })

  it('disabled 规则下 setValue 返回 -1', () => {
    const elementList = buildControlList('t1', [])
    const element = { controlId: 't1', control: { type: ControlType.TEXT } } as any
    const { control } = makeEnv({ elementList, element })
    control.getIsDisabledControl = () => true
    const tc = new TextControl(element, control)
    expect(tc.setValue([{ type: ElementType.TEXT, value: 'x' }])).toBe(-1)
  })

  it('clearValue 清空值', () => {
    const elementList = buildControlList('t1', ['a', 'b'])
    const element = { controlId: 't1', control: { type: ControlType.TEXT } } as any
    const { control } = makeEnv({ elementList, element })
    const tc = new TextControl(element, control)
    const idx = tc.clearValue()
    expect(idx).toBe(1)
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    expect(tc.getValue().length).toBe(0)
  })

  it('keydown Backspace 删除单个文本字符', () => {
    const elementList = buildControlList('t1', ['a', 'b'])
    const element = { controlId: 't1', control: { type: ControlType.TEXT } } as any
    const { control } = makeEnv({ elementList, element })
    const tc = new TextControl(element, control)
    control.getRange = () => ({ startIndex: 3, endIndex: 3 })
    const next = tc.keydown({ key: 'Backspace' } as KeyboardEvent)
    expect(next).toBe(2)
    control.getRange = () => ({ startIndex: 2, endIndex: 2 })
    expect(tc.getValue().map(v => v.value)).toEqual(['a'])
  })

  it('keydown Backspace 落在 PREFIX 时移除控件', () => {
    const elementList = buildControlList('t1', ['a'])
    const element = { controlId: 't1', control: { type: ControlType.TEXT } } as any
    const { control } = makeEnv({ elementList, element })
    const tc = new TextControl(element, control)
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    expect(tc.keydown({ key: 'Backspace' } as KeyboardEvent)).toBe(1)
  })

  it('cut 选区删除', () => {
    const elementList = buildControlList('t1', ['a', 'b', 'c'])
    const element = { controlId: 't1', control: { type: ControlType.TEXT } } as any
    const { control } = makeEnv({ elementList, element })
    const tc = new TextControl(element, control)
    control.getRange = () => ({ startIndex: 1, endIndex: 3 })
    expect(tc.cut()).toBe(1)
  })
})

describe('SelectControl 选择控件', () => {
  const selectEnv = () => {
    const elementList: IElement[] = [
      { controlId: 's1', controlComponent: PREFIX } as any,
      { controlId: 's1', controlComponent: POSTFIX } as any
    ]
    const element = {
      controlId: 's1',
      control: {
        type: ControlType.SELECT,
        code: 'a',
        valueSets: [
          { code: 'a', value: '苹果' },
          { code: 'b', value: '香蕉' }
        ]
      }
    } as any
    return makeEnv({ elementList, element })
  }

  it('getCodes 解析 code', () => {
    const { element, control } = selectEnv()
    const sc = new SelectControl(element, control)
    expect(sc.getCodes()).toEqual(['a'])
  })

  it('getText 由 codes 转文本', () => {
    const { element, control } = selectEnv()
    const sc = new SelectControl(element, control)
    expect(sc.getText(['a', 'b'])).toBe('苹果,香蕉')
    expect(sc.getText(['z'])).toBeNull()
  })

  it('setSelect 选中并更新文本与 code', () => {
    const { element, control } = selectEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const sc = new SelectControl(element, control)
    sc.setSelect('b')
    expect(element.control.code).toBe('b')
    control.getRange = () => ({ startIndex: 3, endIndex: 3 })
    expect(sc.getValue().map(v => v.value).join('')).toBe('香蕉')
  })

  it('setSelect 相同 code 不重复渲染', () => {
    const { element, control } = selectEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const sc = new SelectControl(element, control)
    sc.setSelect('a')
    expect(control.repaintControl).toHaveBeenCalled()
    expect(element.control.code).toBe('a')
  })

  it('setValue 需要 inputAble 否则返回 -1', () => {
    const { element, control } = selectEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const sc = new SelectControl(element, control)
    expect(sc.setValue([{ type: ElementType.TEXT, value: 'x' }])).toBe(-1)
    element.control.selectExclusiveOptions = { inputAble: true }
    const end = sc.setValue([{ type: ElementType.TEXT, value: 'x' }])
    expect(end).toBeGreaterThan(0)
  })

  it('clearSelect 清空选项', () => {
    const { element, control } = selectEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const sc = new SelectControl(element, control)
    sc.setSelect('a')
    const idx = sc.clearSelect()
    expect(idx).toBe(1)
    expect(element.control.code).toBeNull()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    expect(sc.getValue().length).toBe(0)
  })

  it('awake 创建下拉弹窗，destroy 销毁', () => {
    const { element, control } = selectEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const sc = new SelectControl(element, control)
    sc.awake()
    expect(sc.getIsPopup()).toBe(true)
    expect(
      control.getContainer().querySelector('.ce-select-control-popup')
    ).toBeTruthy()
    sc.destroy()
    expect(sc.getIsPopup()).toBe(false)
  })
})

describe('NumberControl 数字控件', () => {
  const numberEnv = (calculatorDisabled = true) => {
    const elementList: IElement[] = [
      { controlId: 'n1', controlComponent: PREFIX } as any,
      { controlId: 'n1', controlComponent: POSTFIX } as any
    ]
    const element = {
      controlId: 'n1',
      control: {
        type: ControlType.NUMBER,
        numberExclusiveOptions: { calculatorDisabled }
      }
    } as any
    const env = makeEnv({ elementList, element })
    env.control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    return env
  }

  it('setValue 合法数字写入', () => {
    const { element, control } = numberEnv()
    const nc = new NumberControl(element, control)
    const end = nc.setValue([
      { type: ElementType.TEXT, value: '1' },
      { type: ElementType.TEXT, value: '2' }
    ])
    expect(end).toBe(3)
    control.getRange = () => ({ startIndex: 3, endIndex: 3 })
    expect(nc.getValue().map(v => v.value).join('')).toBe('12')
  })

  it('setValue 含非数字字符返回 -1', () => {
    const { element, control } = numberEnv()
    const nc = new NumberControl(element, control)
    expect(nc.setValue([{ type: ElementType.TEXT, value: '1a' }])).toBe(-1)
  })

  it('awake 计算器禁用时不弹窗', () => {
    const { element, control } = numberEnv(true)
    const nc = new NumberControl(element, control)
    nc.awake()
    expect(nc.getIsPopup()).toBe(false)
  })

  it('awake 计算器启用时弹窗', () => {
    const { element, control } = numberEnv(false)
    const nc = new NumberControl(element, control)
    nc.awake()
    expect(nc.getIsPopup()).toBe(true)
    expect(control.getContainer().querySelector('.ce-calculator')).toBeTruthy()
    nc.destroy()
    expect(nc.getIsPopup()).toBe(false)
  })
})

describe('DateControl 日期控件', () => {
  const dateEnv = (valueChars: string[] = []) => {
    const elementList = buildControlList('d1', valueChars)
    const element = {
      controlId: 'd1',
      control: { type: ControlType.DATE, dateFormat: 'yyyy-MM-dd' }
    } as any
    return makeEnv({ elementList, element })
  }

  it('getValue 收集日期字符', () => {
    const { element, control } = dateEnv(['2', '0', '2', '6'])
    control.getRange = () => ({ startIndex: 5, endIndex: 5 })
    const dc = new DateControl(element, control)
    expect(dc.getValue().map(v => v.value).join('')).toBe('2026')
  })

  it('setSelect 写入日期并标记 code', () => {
    const { element, control } = dateEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const dc = new DateControl(element, control)
    dc.setSelect('2026-11-09')
    control.getRange = () => ({ startIndex: 11, endIndex: 11 })
    expect(dc.getValue().map(v => v.value).join('')).toBe('2026-11-09')
    expect(control.emitControlContentChange).toHaveBeenCalled()
  })

  it('clearSelect 清空日期', () => {
    const { element, control } = dateEnv(['2', '0', '2', '6'])
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const dc = new DateControl(element, control)
    const idx = dc.clearSelect()
    expect(idx).toBe(1)
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    expect(dc.getValue().length).toBe(0)
  })

  it('disabled 规则下 setSelect 直接返回', () => {
    const { element, control } = dateEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    control.getIsDisabledControl = () => true
    const dc = new DateControl(element, control)
    dc.setSelect('2026-11-09')
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    expect(dc.getValue().length).toBe(0)
  })

  it('keydown Backspace 删除字符', () => {
    const { element, control } = dateEnv(['2', '0', '2', '6'])
    const dc = new DateControl(element, control)
    control.getRange = () => ({ startIndex: 5, endIndex: 5 })
    const next = dc.keydown({ key: 'Backspace' } as KeyboardEvent)
    expect(next).toBe(4)
    control.getRange = () => ({ startIndex: 2, endIndex: 4 })
    expect(dc.getValue().map(v => v.value).join('')).toBe('202')
  })

  it('cut 选区删除', () => {
    const { element, control } = dateEnv(['2', '0', '2', '6'])
    const dc = new DateControl(element, control)
    control.getRange = () => ({ startIndex: 1, endIndex: 5 })
    expect(dc.cut()).toBe(1)
  })

  it('destroy 未弹窗时直接返回', () => {
    const { element, control } = dateEnv()
    const dc = new DateControl(element, control)
    expect(() => dc.destroy()).not.toThrow()
  })
})

describe('CheckboxControl 复选框控件', () => {
  const checkboxEnv = () => {
    const elementList: IElement[] = [
      { controlId: 'c1', controlComponent: PREFIX } as any,
      {
        controlId: 'c1',
        controlComponent: ControlComponent.CHECKBOX,
        checkbox: { code: 'a', value: false }
      } as any,
      {
        controlId: 'c1',
        controlComponent: ControlComponent.CHECKBOX,
        checkbox: { code: 'b', value: false }
      } as any,
      { controlId: 'c1', controlComponent: POSTFIX } as any
    ]
    const element = {
      controlId: 'c1',
      control: { type: ControlType.CHECKBOX, code: '' }
    } as any
    return makeEnv({ elementList, element })
  }

  it('setSelect 按 codes 数组勾选并写 code', () => {
    const { element, control, elementList } = checkboxEnv()
    control.getRange = () => ({ startIndex: 2, endIndex: 2 })
    const cc = new CheckboxControl(element, control)
    cc.setSelect(['a', 'b'])
    expect((elementList[2] as any).checkbox.value).toBe(true)
    expect((elementList[3] as any).checkbox.value).toBe(true)
    expect(element.control.code).toBe('a,b')
  })

  it('disabled 规则下 setSelect 不修改', () => {
    const { element, control, elementList } = checkboxEnv()
    control.getRange = () => ({ startIndex: 2, endIndex: 2 })
    control.getIsDisabledControl = () => true
    const cc = new CheckboxControl(element, control)
    cc.setSelect(['a'])
    expect((elementList[2] as any).checkbox.value).toBe(false)
    expect(element.control.code).toBe('')
  })
})

describe('控件子类补充覆盖', () => {
  const selectEnv = () => {
    const elementList: IElement[] = [
      { controlId: 's1', controlComponent: PREFIX } as any,
      { controlId: 's1', controlComponent: POSTFIX } as any
    ]
    const element = {
      controlId: 's1',
      control: {
        type: ControlType.SELECT,
        code: 'a',
        valueSets: [
          { code: 'a', value: '苹果' },
          { code: 'b', value: '香蕉' }
        ]
      }
    } as any
    return makeEnv({ elementList, element })
  }

  const dateEnv = (valueChars: string[] = []) => {
    const elementList = buildControlList('d1', valueChars)
    const element = {
      controlId: 'd1',
      control: { type: ControlType.DATE, dateFormat: 'yyyy-MM-dd' }
    } as any
    return makeEnv({ elementList, element })
  }

  const checkboxEnv = () => {
    const elementList: IElement[] = [
      { controlId: 'c1', controlComponent: PREFIX } as any,
      {
        controlId: 'c1',
        controlComponent: ControlComponent.CHECKBOX,
        checkbox: { code: 'a', value: false }
      } as any,
      {
        controlId: 'c1',
        controlComponent: ControlComponent.CHECKBOX,
        checkbox: { code: 'b', value: false }
      } as any,
      { controlId: 'c1', controlComponent: POSTFIX } as any
    ]
    const element = {
      controlId: 'c1',
      control: { type: ControlType.CHECKBOX, code: '' }
    } as any
    return makeEnv({ elementList, element })
  }

  it('TextControl.getElement', () => {
    const elementList = buildControlList('t1', ['a'])
    const element = { controlId: 't1', control: { type: ControlType.TEXT } } as any
    const { control, element: el } = makeEnv({ elementList, element })
    const tc = new TextControl(element, control)
    expect(tc.getElement()).toBe(el)
  })

  it('TextControl.keydown 在 VALUE 处删除单字符', () => {
    const elementList = buildControlList('t1', ['a', 'b'])
    const element = { controlId: 't1', control: { type: ControlType.TEXT } } as any
    const { control } = makeEnv({ elementList, element })
    const tc = new TextControl(element, control)
    control.getRange = () => ({ startIndex: 2, endIndex: 2 })
    expect(tc.keydown({ key: 'Backspace' } as KeyboardEvent)).toBe(1)
    control.getRange = () => ({ startIndex: 2, endIndex: 2 })
    expect(tc.getValue().map(v => v.value)).toEqual(['b'])
  })

  it('SelectControl.keydown 边界(前缀)移除控件', () => {
    const { element, control } = selectEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const sc = new SelectControl(element, control)
    expect(sc.keydown({ key: 'Backspace' } as KeyboardEvent)).toBe(1)
  })

  it('SelectControl.keydown 选区清空选项', () => {
    const { element, control } = selectEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const sc = new SelectControl(element, control)
    sc.setSelect('b')
    control.getRange = () => ({ startIndex: 1, endIndex: 3 })
    const idx = sc.keydown({ key: 'Backspace' } as KeyboardEvent)
    expect(idx).toBe(1)
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    expect(sc.getValue().length).toBe(0)
  })

  it('SelectControl.cut 闭合返回起始 / disabled 返回 -1', () => {
    const { element, control } = selectEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const sc = new SelectControl(element, control)
    expect(sc.cut()).toBe(1)
    control.getIsDisabledControl = () => true
    expect(sc.cut()).toBe(-1)
  })

  it('SelectControl.awake 弹窗点击切换选项', () => {
    const { element, control } = selectEnv()
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const sc = new SelectControl(element, control)
    sc.awake()
    expect(sc.getIsPopup()).toBe(true)
    const lis = control.getContainer().querySelectorAll('li')
    expect(lis.length).toBe(2)
    ;(lis[1] as any).onclick()
    expect(element.control.code).toBe('b')
    expect(sc.getIsPopup()).toBe(false)
  })

  it('NumberControl.keydown / cut / clearValue', () => {
    const elementList = buildControlList('n1', ['1', '2'])
    const element = {
      controlId: 'n1',
      control: {
        type: ControlType.NUMBER,
        numberExclusiveOptions: { calculatorDisabled: true }
      }
    } as any
    const { control } = makeEnv({ elementList, element })
    const nc = new NumberControl(element, control)
    control.getRange = () => ({ startIndex: 2, endIndex: 2 })
    expect(nc.keydown({ key: 'Backspace' } as KeyboardEvent)).toBe(1)
    control.getRange = () => ({ startIndex: 1, endIndex: 3 })
    expect(nc.cut()).toBe(1)
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    expect(nc.clearValue()).toBe(1)
    expect(nc.getValue().length).toBe(0)
  })

  it('DateControl.keydown / cut / clearValue', () => {
    const { element, control } = dateEnv(['2', '0', '2', '6'])
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const dc = new DateControl(element, control)
    control.getRange = () => ({ startIndex: 2, endIndex: 2 })
    expect(dc.keydown({ key: 'Backspace' } as KeyboardEvent)).toBe(1)
    control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    expect(dc.keydown({ key: 'Delete' } as KeyboardEvent)).toBe(1)
    const env2 = dateEnv(['2', '0', '2', '6'])
    env2.control.getRange = () => ({ startIndex: 1, endIndex: 5 })
    const dc2 = new DateControl(env2.element, env2.control)
    expect(dc2.cut()).toBe(1)
    const env3 = dateEnv(['2', '0', '2', '6'])
    env3.control.getRange = () => ({ startIndex: 1, endIndex: 1 })
    const dc3 = new DateControl(env3.element, env3.control)
    expect(dc3.clearSelect()).toBe(1)
    expect(dc3.getValue().length).toBe(0)
  })

  it('CheckboxControl.keydown 删除控件 / disabled 返回 null', () => {
    const { element, control } = checkboxEnv()
    const cc = new CheckboxControl(element, control)
    expect(cc.keydown({ key: 'Backspace' } as KeyboardEvent)).toBe(1)
    control.getIsDisabledControl = () => true
    expect(cc.keydown({ key: 'Backspace' } as KeyboardEvent)).toBeNull()
  })

  it('CheckboxControl.getElement', () => {
    const { element, control } = checkboxEnv()
    const cc = new CheckboxControl(element, control)
    expect(cc.getElement()).toBe(element)
  })
})
