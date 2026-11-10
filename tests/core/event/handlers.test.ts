import { describe, it, expect, afterEach, vi } from 'vitest'
import { createTestEditor } from '../../factories/editor'
import { Draw } from '@/editor/core/draw/Draw'

import { input, removeComposingInput } from '@/editor/core/event/handlers/input'
import { keydown } from '@/editor/core/event/handlers/keydown'
import { enter } from '@/editor/core/event/handlers/keydown/enter'
import { backspace } from '@/editor/core/event/handlers/keydown/backspace'
import { del } from '@/editor/core/event/handlers/keydown/delete'
import { tab } from '@/editor/core/event/handlers/keydown/tab'
import { left } from '@/editor/core/event/handlers/keydown/left'
import { right } from '@/editor/core/event/handlers/keydown/right'
import { home } from '@/editor/core/event/handlers/keydown/home'
import { end } from '@/editor/core/event/handlers/keydown/end'
import { updown } from '@/editor/core/event/handlers/keydown/updown'
import composition from '@/editor/core/event/handlers/composition'
import {
  mousedown,
  hitCheckbox,
  hitRadio,
  setRangeCache
} from '@/editor/core/event/handlers/mousedown'
import { mouseup } from '@/editor/core/event/handlers/mouseup'
import { mouseleave } from '@/editor/core/event/handlers/mouseleave'
import { mousemove } from '@/editor/core/event/handlers/mousemove'
import click, {
  getWordRangeByCursor
} from '@/editor/core/event/handlers/click'
import { copy } from '@/editor/core/event/handlers/copy'
import { cut } from '@/editor/core/event/handlers/cut'
import {
  pasteElement,
  pasteHTML,
  pasteImage,
  pasteByEvent
} from '@/editor/core/event/handlers/paste'
import {
  getClipboardData,
  removeClipboardData
} from '@/editor/utils/clipboard'
import { EditorMode } from '@/editor/dataset/enum/Editor'

function makeReadonly(editor: any) {
  editor.command.executeMode(EditorMode.READONLY)
}

let capturedHost: any = null
const created: any[] = []

function captureHost() {
  capturedHost = null
  vi.spyOn(Draw.prototype, 'getCanvasEvent').mockImplementation(function (
    this: any
  ) {
    capturedHost = this.canvasEvent
    return this.canvasEvent
  })
}

function makeEditor(
  data: any,
  options?: any
): { ctx: any; host: any; editor: any } {
  captureHost()
  const ctx = createTestEditor({ data, options })
  created.push(ctx)
  ctx.editor.command.executeFocus()
  const host = capturedHost
  return { ctx, host, editor: ctx.editor }
}

function setCursor(editor: any, index: number) {
  editor.command.executeSetRange(index, index)
}

afterEach(() => {
  vi.restoreAllMocks()
  while (created.length) {
    try {
      created.pop()!.destroy()
    } catch {
      /* noop */
    }
  }
})

const simpleData = {
  header: [],
  main: [{ value: 'ab' }, { value: '\n' }],
  footer: []
}

describe('input handler', () => {
  it('在光标处插入文本', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    const before = editor.command.getText().main
    input('X', host)
    const after = editor.command.getText().main
    expect(after.length).toBe(before.length + 1)
    expect(after).toContain('X')
  })

  it('换行符被替换为 ZERO', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    const before = editor.command.getText().main
    input('a\nb', host)
    const after = editor.command.getText().main
    // 'a\nb' -> a, ZERO, b，增加 3 个字符
    expect(after.length).toBe(before.length + 3)
  })

  it('只读模式下不插入', () => {
    const { host, editor } = makeEditor(simpleData)
    makeReadonly(editor)
    setCursor(editor, 2)
    const before = editor.command.getText().main
    input('X', host)
    expect(editor.command.getText().main).toBe(before)
  })

  it('合成中且输入与合成值相同则忽略', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    host.isComposing = true
    host.compositionInfo = {
      elementList: host.getDraw().getElementList(),
      value: 'Y',
      startIndex: 2,
      endIndex: 2,
      defaultStyle: null
    }
    const before = editor.command.getText().main
    input('Y', host)
    expect(editor.command.getText().main).toBe(before)
  })

  it('清空合成输入', () => {
    const { host } = makeEditor(simpleData)
    const elementList = host.getDraw().getElementList()
    host.compositionInfo = {
      elementList,
      value: 'Z',
      startIndex: 1,
      endIndex: 1,
      defaultStyle: null
    }
    expect(() => removeComposingInput(host)).not.toThrow()
    expect(host.compositionInfo).toBeNull()
  })
})

describe('composition handler', () => {
  it('compositionstart 设置 isComposing', () => {
    const { host } = makeEditor(simpleData)
    composition.compositionstart(host)
    expect(host.isComposing).toBe(true)
  })

  it('compositionend 无数据移除合成输入', () => {
    const { host } = makeEditor(simpleData)
    const elementList = host.getDraw().getElementList()
    host.isComposing = true
    host.compositionInfo = {
      elementList,
      value: 'Z',
      startIndex: 1,
      endIndex: 1,
      defaultStyle: null
    }
    expect(() => composition.compositionend(host, { data: '' } as any)).not.toThrow()
    expect(host.isComposing).toBe(false)
  })

  it('compositionend 有数据写入内容', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    host.isComposing = true
    host.compositionInfo = {
      elementList: host.getDraw().getElementList(),
      value: 'Z',
      startIndex: 2,
      endIndex: 2,
      defaultStyle: null
    }
    composition.compositionend(host, { data: 'Z' } as any)
    expect(editor.command.getText().main).toContain('Z')
  })
})

describe('keydown dispatcher', () => {
  const keys = [
    'Backspace',
    'Enter',
    'Delete',
    'Tab',
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Home',
    'End',
    'Escape',
    'a'
  ]
  for (const key of keys) {
    it(`按键 ${key} 不抛错`, () => {
      const { host, editor } = makeEditor(simpleData)
      setCursor(editor, 2)
      const evt = { key, preventDefault() {} } as any
      expect(() => keydown(evt, host)).not.toThrow()
    })
  }

  it('Mod+a 全选', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    const evt = { key: 'a', metaKey: true, preventDefault() {} } as any
    expect(() => keydown(evt, host)).not.toThrow()
  })

  it('合成中直接返回', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    host.isComposing = true
    const before = editor.command.getText().main
    keydown({ key: 'a', preventDefault() {} } as any, host)
    expect(editor.command.getText().main).toBe(before)
  })
})

describe('keydown 各按键 handler 直接调用', () => {
  it('left 向左移动光标', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    left({ key: 'ArrowLeft', preventDefault() {} } as any, host)
    const range = editor.command.getRange()
    expect(range.startIndex).toBeLessThan(2)
  })

  it('right 向右移动光标', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 0)
    right({ key: 'ArrowRight', preventDefault() {} } as any, host)
    const range = editor.command.getRange()
    expect(range.startIndex).toBeGreaterThan(0)
  })

  it('home/end/updown 不抛错', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    expect(() =>
      home({ key: 'Home', preventDefault() {} } as any, host)
    ).not.toThrow()
    expect(() => end({ key: 'End', preventDefault() {} } as any, host)).not.toThrow()
    expect(() =>
      updown({ key: 'ArrowDown', preventDefault() {} } as any, host)
    ).not.toThrow()
  })

  it('enter/backspace/tab 不抛错', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    expect(() =>
      enter({ key: 'Enter', preventDefault() {} } as any, host)
    ).not.toThrow()
    expect(() =>
      backspace({ key: 'Backspace', preventDefault() {} } as any, host)
    ).not.toThrow()
    expect(() =>
      tab({ key: 'Tab', preventDefault() {} } as any, host)
    ).not.toThrow()
  })

  it('del 删除后一个元素', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 0)
    const listBefore = host.getDraw().getElementList().length
    del({ key: 'Delete', preventDefault() {} } as any, host)
    const listAfter = host.getDraw().getElementList().length
    expect(listAfter).toBe(listBefore - 1)
  })
})

describe('mousedown 辅助函数与处理器', () => {
  it('hitCheckbox 切换复选框', () => {
    const { host } = makeEditor(simpleData)
    const element: any = { checkbox: { value: false } }
    hitCheckbox(element, host.getDraw())
    expect(element.checkbox.value).toBe(true)
    hitCheckbox(element, host.getDraw())
    expect(element.checkbox.value).toBe(false)
  })

  it('hitRadio 设置单选框', () => {
    const { host } = makeEditor(simpleData)
    const element: any = { radio: { code: 'r1', value: false } }
    hitRadio(element, host.getDraw())
    expect(element.radio.value).toBe(true)
  })

  it('setRangeCache 缓存选区', () => {
    const { host } = makeEditor(simpleData)
    setRangeCache(host)
    expect(host.cacheRange).toBeTruthy()
  })

  it('右键且有选区时直接返回', () => {
    const { host, editor } = makeEditor(simpleData)
    editor.command.executeSetRange(0, 1)
    const evt = {
      button: 2,
      offsetX: 0,
      offsetY: 0,
      target: { dataset: {} }
    } as any
    expect(() => mousedown(evt, host)).not.toThrow()
  })

  it('左键 mousedown 不抛错', () => {
    const { host } = makeEditor(simpleData)
    const evt = {
      button: 0,
      offsetX: 0,
      offsetY: 0,
      target: { dataset: {} }
    } as any
    expect(() => mousedown(evt, host)).not.toThrow()
  })
})

describe('mousemove / mouseup / mouseleave', () => {
  it('mouseup 默认无拖拽不抛错', () => {
    const { host } = makeEditor(simpleData)
    const evt = { offsetX: 0, offsetY: 0, target: { dataset: {} } } as any
    expect(() => mouseup(evt, host)).not.toThrow()
  })

  it('mouseleave 边界内提前返回', () => {
    const { host } = makeEditor(simpleData)
    expect(() => mouseleave({ x: 0, y: 0 } as any, host)).not.toThrow()
  })

  it('mouseleave 边界外禁用选区', () => {
    const { host } = makeEditor(simpleData, {
      options: { pageOuterSelectionDisable: true }
    })
    mouseleave({ x: 99999, y: 99999 } as any, host)
    expect(host.isAllowSelection).toBe(false)
  })

  it('mousemove 无起点提前返回', () => {
    const { host } = makeEditor(simpleData)
    const evt = {
      offsetX: 0,
      offsetY: 0,
      movementX: 0,
      movementY: 0,
      target: { dataset: {} }
    } as any
    expect(() => mousemove(evt, host)).not.toThrow()
  })

  it('mousemove 允许拖拽时进入拖放态', () => {
    const { host } = makeEditor(simpleData)
    host.isAllowDrag = true
    setRangeCache(host)
    const evt = {
      offsetX: 0,
      offsetY: 0,
      movementX: 0,
      movementY: 0,
      target: { dataset: {} },
      preventDefault() {}
    } as any
    expect(() => mousemove(evt, host)).not.toThrow()
    expect(host.isAllowDrop).toBe(true)
  })
})

describe('click 处理器', () => {
  it('getWordRangeByCursor 返回单词选区', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 1)
    const result = getWordRangeByCursor(host)
    expect(result).not.toBeNull()
  })

  it('dblclick 不抛错', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 1)
    const evt = { offsetX: 0, offsetY: 0, target: { dataset: {} } } as any
    expect(() => click.dblclick(host, evt)).not.toThrow()
  })

  it('threeClick 不抛错', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 1)
    expect(() => click.threeClick(host)).not.toThrow()
  })
})

describe('copy / cut', () => {
  it('copy 写入剪贴板缓存', async () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    editor.command.executeSetRange(0, 2)
    ;(document as any).execCommand = vi.fn()
    await copy(host, { isPlainText: true })
    expect(getClipboardData()).toBeTruthy()
  })

  it('cut 删除选区并写入剪贴板', async () => {
    const { host, editor } = makeEditor(simpleData)
    editor.command.executeSetRange(0, 1)
    ;(document as any).execCommand = vi.fn()
    await cut(host)
    expect(getClipboardData()).toBeTruthy()
    expect(editor.command.getText().main).not.toContain('a')
  })
})

describe('paste', () => {
  it('pasteElement 直接插入元素', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    pasteElement(host, [{ value: 'pasted' }])
    expect(editor.command.getText().main).toContain('pasted')
  })

  it('pasteHTML 插入 HTML 文本', () => {
    const { host, editor } = makeEditor(simpleData)
    setCursor(editor, 2)
    pasteHTML(host, '<span>hi</span>')
    expect(editor.command.getText().main).toContain('hi')
  })

  it('pasteImage 不抛错', () => {
    const { host } = makeEditor(simpleData)
    const file = new Blob(['x']) as any
    expect(() => pasteImage(host, file)).not.toThrow()
  })

  it('pasteByEvent 只读模式提前返回', () => {
    const { host, editor } = makeEditor(simpleData)
    makeReadonly(editor)
    const evt = {
      clipboardData: { items: [] },
      preventDefault() {}
    } as any
    expect(() => pasteByEvent(host, evt)).not.toThrow()
  })

  it('pasteByEvent 通过 text/plain 粘贴', () => {
    const { host, editor } = makeEditor(simpleData)
    removeClipboardData()
    setCursor(editor, 2)
    const clipboardData: any = {
      getData: () => '',
      items: [
        {
          kind: 'string',
          type: 'text/plain',
          getAsString: (cb: (s: string) => void) => cb('hello')
        }
      ]
    }
    pasteByEvent(host, { clipboardData, preventDefault() {} } as any)
    expect(editor.command.getText().main).toContain('hello')
  })
})
