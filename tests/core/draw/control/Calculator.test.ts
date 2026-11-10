import { afterEach, describe, expect, it, vi } from 'vitest'
import { Calculator } from '@/editor/core/draw/control/number/Calculator'

const createMockControl = () => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  return {
    getPosition: () => ({
      coordinate: { leftTop: [0, 0] as [number, number] },
      lineHeight: 10
    }),
    getPreY: () => 0,
    getPreX: () => 0,
    getContainer: () => container,
    getRange: () => ({ startIndex: 0 }),
    getElementList: () => [],
    getIsDisabledControl: () => false,
    repaintControl: vi.fn(),
    emitControlContentChange: vi.fn()
  } as any
}

const clickButton = (popup: Element, text: string) => {
  const btn = Array.from(popup.querySelectorAll('button')).find(
    b => b.textContent === text
  )!
  btn.click()
}

describe('Calculator 计算器控件', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('createPopup 创建计算器 DOM 与按钮', () => {
    const control = createMockControl()
    const calc = new Calculator({ control, onCalculate: vi.fn() })
    calc.createPopup()
    const popup = control
      .getContainer()
      .querySelector('.ce-calculator')
    expect(popup).toBeTruthy()
    expect(popup!.querySelectorAll('button').length).toBeGreaterThan(0)
  })

  it('点击数字与等号计算结果并回调', () => {
    const control = createMockControl()
    const onCalculate = vi.fn()
    const calc = new Calculator({ control, onCalculate })
    calc.createPopup()
    const popup = control
      .getContainer()
      .querySelector('.ce-calculator')!
    clickButton(popup, '1')
    clickButton(popup, '+')
    clickButton(popup, '2')
    clickButton(popup, '=')
    const display = popup.querySelector(
      '.ce-calculator-display'
    )!
    expect(display.textContent).toBe('3')
    expect(onCalculate).toHaveBeenCalledWith(3)
  })

  it('C 清空', () => {
    const control = createMockControl()
    const calc = new Calculator({ control, onCalculate: vi.fn() })
    calc.createPopup()
    const popup = control
      .getContainer()
      .querySelector('.ce-calculator')!
    clickButton(popup, '5')
    clickButton(popup, 'C')
    const display = popup.querySelector(
      '.ce-calculator-display'
    )!
    expect(display.textContent).toBe('0')
  })

  it('← 退格', () => {
    const control = createMockControl()
    const calc = new Calculator({ control, onCalculate: vi.fn() })
    calc.createPopup()
    const popup = control
      .getContainer()
      .querySelector('.ce-calculator')!
    clickButton(popup, '5')
    clickButton(popup, '5')
    clickButton(popup, '←')
    const display = popup.querySelector(
      '.ce-calculator-display'
    )!
    expect(display.textContent).toBe('5')
  })

  it('除零或非表达式显示 Error 且不回调', () => {
    const control = createMockControl()
    const onCalculate = vi.fn()
    const calc = new Calculator({ control, onCalculate })
    calc.createPopup()
    const popup = control
      .getContainer()
      .querySelector('.ce-calculator')!
    clickButton(popup, '1')
    clickButton(popup, '/')
    clickButton(popup, '0')
    clickButton(popup, '=')
    const display = popup.querySelector(
      '.ce-calculator-display'
    )!
    expect(display.textContent).toBe('Error')
    expect(onCalculate).not.toHaveBeenCalled()
  })

  it('calculate 纯逻辑：整数/小数/空/除零', () => {
    const control = createMockControl()
    const calc: any = new Calculator({ control, onCalculate: vi.fn() })
    expect(calc.calculate('2*3')).toBe(6)
    expect(calc.calculate('1/3')).toBeCloseTo(0.3333333333, 9)
    expect(Number.isNaN(calc.calculate(''))).toBe(true)
    expect(calc.calculate('1/0')).toBe(Infinity)
  })

  it('destroy 移除 DOM', () => {
    const control = createMockControl()
    const calc = new Calculator({ control, onCalculate: vi.fn() })
    calc.createPopup()
    const popup = control
      .getContainer()
      .querySelector('.ce-calculator')!
    expect(popup).toBeTruthy()
    calc.destroy()
    expect(
      control.getContainer().querySelector('.canvas-editor-calculator')
    ).toBeNull()
  })
})
