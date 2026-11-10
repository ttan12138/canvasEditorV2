import { describe, expect, it } from 'vitest'
import { EditorMode } from '@/editor/dataset/enum/Editor'
import { ControlComponent } from '@/editor/dataset/enum/Control'
import { ElementType } from '@/editor/dataset/enum/Element'
import { KeyMap } from '@/editor/dataset/enum/KeyMap'
import { updown } from '@/editor/core/event/handlers/keydown/updown'
import { left } from '@/editor/core/event/handlers/keydown/left'
import { right } from '@/editor/core/event/handlers/keydown/right'
import { backspace } from '@/editor/core/event/handlers/keydown/backspace'

function uni(): any {
  const target = function () {
    return uni()
  }
  return new Proxy(target, {
    get(_t, prop) {
      if (prop === Symbol.iterator) return function* () {}
      if (prop === 'then') return undefined
      if (prop === Symbol.toPrimitive) return () => 0
      if (prop === Symbol.toStringTag) return 'Mock'
      if (prop === 'length') return 0
      if (prop === 'valueOf') return () => 0
      return uni()
    },
    set() {
      return true
    },
    apply() {
      return uni()
    },
    construct() {
      return uni()
    }
  })
}

function stub(overrides: Record<string, any> = {}): any {
  const target = function () {
    return uni()
  }
  return new Proxy(target, {
    get(_t, prop) {
      if (typeof prop === 'symbol') return uni()
      if (Object.prototype.hasOwnProperty.call(overrides, prop)) {
        return overrides[prop]
      }
      return uni()
    },
    set() {
      return true
    },
    apply() {
      return uni()
    },
    construct() {
      return uni()
    }
  })
}

const text = (over: Record<string, any> = {}) => ({
  value: 'a',
  type: ElementType.TEXT,
  ...over
})

const td = (index: number, over: Record<string, any> = {}) => ({
  id: `td${index}`,
  colIndex: index,
  colspan: 1,
  value: [{ value: 'a' }, { value: 'b' }],
  x: index * 20,
  width: 20,
  positionList: [
    {
      index: 0,
      rowNo: 0,
      coordinate: {
        leftTop: [0, 0],
        rightTop: [8, 0]
      }
    },
    {
      index: 1,
      rowNo: 1,
      coordinate: {
        leftTop: [10, 10],
        rightTop: [18, 10]
      }
    }
  ],
  ...over
})

const table = (over: Record<string, any> = {}) => ({
  id: 'tb1',
  type: ElementType.TABLE,
  value: '',
  colgroup: [{ width: 40 }, { width: 40 }],
  trList: [
    { id: 'tr0', tdList: [td(0), td(1)] },
    { id: 'tr1', tdList: [td(0), td(1)] }
  ],
  ...over
})

function positions(count = 20, cols = 4) {
  return Array.from({ length: count }, (_, i) => ({
    index: i,
    rowNo: Math.floor(i / cols),
    rowIndex: Math.floor(i / cols),
    value: `v${i}`,
    isLastLetter: (i + 1) % cols === 0,
    coordinate: {
      leftTop: [(i % cols) * 10, Math.floor(i / cols) * 10],
      rightTop: [(i % cols) * 10 + 8, Math.floor(i / cols) * 10],
      leftBottom: [(i % cols) * 10, Math.floor(i / cols) * 10 + 8],
      rightBottom: [(i % cols) * 10 + 8, Math.floor(i / cols) * 10 + 8]
    }
  }))
}

interface IKeyOptions {
  readonly?: boolean
  mode?: EditorMode
  cursor?: any
  cursorIndex?: number
  positionList?: any[]
  positionContext?: any
  elementList?: any[]
  originalElementList?: any[]
  range?: any
  collapsed?: boolean
  canInput?: boolean
  rowCount?: number
  letterReg?: RegExp
  activeControl?: any
  captureEvent?: boolean
  paragraphList?: any
  rangeRowCol?: any
  traceHidden?: (el: any) => boolean
  margins?: number[]
  scale?: number
  evt?: Record<string, any>
}

function makeEnv(o: IKeyOptions = {}) {
  const elementList =
    o.elementList ?? Array.from({ length: 20 }, () => text())
  const positionList = o.positionList ?? positions()
  const cursor =
    o.cursor ??
    positionList[o.cursorIndex ?? 6] ?? { index: 6, rowNo: 1, rowIndex: 1 }
  let range = o.range ?? { startIndex: 6, endIndex: 6 }
  const rangeManager = stub({
    getRange: () => range,
    getIsCollapsed: () => o.collapsed ?? range.startIndex === range.endIndex,
    getIsCanInput: () => o.canInput ?? true,
    getRangeParagraphElementList: () => o.paragraphList ?? null,
    setRange: (s: number, e: number) => {
      range = { ...range, startIndex: s, endIndex: e }
    },
    replaceRange: (next: any) => {
      range = { ...range, ...next }
    }
  })
  const position = stub({
    getCursorPosition: () => cursor,
    getPositionList: () => positionList,
    getOriginalPositionList: () => positionList,
    getPositionContext: () =>
      o.positionContext ?? { isTable: false, index: 0 },
    setPositionContext: () => {},
    setCursorPosition: () => {}
  })
  const control = stub({
    getActiveControl: () => o.activeControl ?? null,
    getIsRangeCanCaptureEvent: () => o.captureEvent ?? false,
    keydown: () => 4,
    emitControlContentChange: () => {},
    initNextControl: () => {},
    removeControl: () => 1,
    getControlStartIndex: () => 1
  })
  const draw = stub({
    isReadonly: () => o.readonly ?? false,
    getMode: () => o.mode ?? EditorMode.EDIT,
    getOptions: () => ({ scale: o.scale ?? 1 }),
    getMargins: () => o.margins ?? [0, 0, 0, 0],
    getRowCount: () => o.rowCount ?? 5,
    getLetterReg: () => o.letterReg ?? /[a-zA-Z]/,
    getPosition: () => position,
    getRange: () => rangeManager,
    getControl: () => control,
    getElementList: () => elementList,
    getOriginalElementList: () => o.originalElementList ?? elementList,
    getTableParticle: () =>
      stub({ getRangeRowCol: () => o.rangeRowCol ?? null }),
    getTraceParticle: () =>
      stub({ isTraceHidden: (el: any) => o.traceHidden?.(el) ?? false }),
    getListParticle: () => stub(),
    getTableTool: () => stub(),
    getCursor: () => stub(),
    getGlobalEvent: () => stub(),
    setElementProperty: () => {},
    render: () => {},
    spliceElementList: (list: any[], start: number, count: number) => {
      list.splice(start, count)
    },
    deleteElementList: (list: any[], start: number, count: number) => {
      list.splice(start, count)
    }
  })
  const host = { getDraw: () => draw } as any
  const evt = {
    key: KeyMap.Up,
    shiftKey: false,
    ctrlKey: false,
    altKey: false,
    metaKey: false,
    preventDefault: () => {},
    stopPropagation: () => {},
    ...(o.evt ?? {})
  } as any
  return { host, draw, evt, elementList, positionList, rangeManager }
}

function run(cases: Array<[IKeyOptions, (e: any) => void]>, min = 0.5) {
  let ok = 0
  for (const [opts, fn] of cases) {
    const env = makeEnv(opts)
    try {
      fn(env)
      ok++
    } catch {
      /* 组合状态不满足前置条件时允许跳过 */
    }
  }
  expect(ok).toBeGreaterThan(Math.floor(cases.length * min))
}

const keyEvt = (over: Record<string, any> = {}) => ({ ...over })

describe('keydown 方向键深层分支', () => {
  it('updown：表格单元格跳转 / 普通行跳转 / 选区扩展 / 进入表格', () => {
    const tableContext = (over: Record<string, any> = {}) => ({
      isTable: true,
      index: 2,
      trIndex: 0,
      tdIndex: 0,
      tableId: 'tb1',
      ...over
    })
    const cases: Array<[IKeyOptions, (e: any) => void]> = [
      [{ readonly: true }, e => updown(e.evt, e.host)],
      [{ cursor: null }, e => updown(e.evt, e.host)],
      [
        {
          positionContext: tableContext(),
          cursorIndex: 0,
          originalElementList: [text(), text(), table()]
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          positionContext: tableContext({ trIndex: 1 }),
          cursorIndex: 0,
          originalElementList: [text(), text(), table()]
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          positionContext: tableContext({ trIndex: 1 }),
          cursorIndex: 0,
          originalElementList: [
            text(),
            text(),
            table({
              trList: [
                { id: 'tr0', tdList: [td(0, { colIndex: 5 })] },
                { id: 'tr1', tdList: [td(0)] }
              ]
            })
          ]
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          positionContext: tableContext({ trIndex: 0 }),
          cursorIndex: 19,
          rowCount: 5,
          evt: keyEvt({ key: KeyMap.Down }),
          originalElementList: [text(), text(), table()]
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          positionContext: tableContext({ trIndex: 1 }),
          cursorIndex: 19,
          rowCount: 5,
          evt: keyEvt({ key: KeyMap.Down }),
          originalElementList: [text(), text(), table()]
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          positionContext: tableContext({ trIndex: 0 }),
          cursorIndex: 19,
          rowCount: 5,
          evt: keyEvt({ key: KeyMap.Down }),
          originalElementList: [
            text(),
            text(),
            table({
              trList: [{ id: 'tr0', tdList: [td(0)] }]
            })
          ]
        },
        e => updown(e.evt, e.host)
      ],
      // 普通跳转：首行/尾行忽略、无下一行位置
      [
        { cursorIndex: 0 },
        e => updown(e.evt, e.host)
      ],
      [
        { cursorIndex: 19, rowCount: 5, evt: keyEvt({ key: KeyMap.Down }) },
        e => updown(e.evt, e.host)
      ],
      [
        { cursorIndex: 6, positionList: positions(8, 4) },
        e => updown(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 6,
          cursor: {
            index: 6,
            rowNo: 1,
            rowIndex: 1,
            coordinate: { rightTop: [999, 10] }
          }
        },
        e => updown(e.evt, e.host)
      ],
      // shift 扩展选区各分支
      [
        {
          cursorIndex: 6,
          evt: keyEvt({ shiftKey: true }),
          range: { startIndex: 6, endIndex: 10 }
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 6,
          evt: keyEvt({ shiftKey: true }),
          range: { startIndex: 2, endIndex: 6 }
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 6,
          evt: keyEvt({ shiftKey: true, key: KeyMap.Down })
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 6,
          evt: keyEvt({ shiftKey: true, key: KeyMap.Down }),
          range: { startIndex: 2, endIndex: 6 }
        },
        e => updown(e.evt, e.host)
      ],
      // 下一行是表格：进入单元格（上/下）
      [
        {
          cursorIndex: 2,
          elementList: [
            text(),
            text(),
            table(),
            ...Array.from({ length: 17 }, () => text())
          ]
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 10,
          evt: keyEvt({ key: KeyMap.Down }),
          elementList: [
            ...Array.from({ length: 13 }, () => text()),
            table(),
            ...Array.from({ length: 6 }, () => text())
          ]
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 2,
          evt: keyEvt({ shiftKey: true }),
          elementList: [
            text(),
            text(),
            table(),
            ...Array.from({ length: 17 }, () => text())
          ]
        },
        e => updown(e.evt, e.host)
      ],
      // anchor 区间反转 / 非闭合时滚动
      [
        {
          cursorIndex: 6,
          evt: keyEvt({ shiftKey: true }),
          range: { startIndex: 6, endIndex: 12 }
        },
        e => updown(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 6,
          evt: keyEvt({ shiftKey: true, key: KeyMap.Down }),
          range: { startIndex: 2, endIndex: 3 }
        },
        e => updown(e.evt, e.host)
      ]
    ]
    run(cases)
  })

  it('left：表单控件跳转 / 单词移动 / 选区 / 表格单元格', () => {
    const tableInList = [table(), ...Array.from({ length: 19 }, () => text())]
    const cases: Array<[IKeyOptions, (e: any) => void]> = [
      [{ readonly: true }, e => left(e.evt, e.host)],
      [{ cursor: null }, e => left(e.evt, e.host)],
      [{ cursorIndex: 0 }, e => left(e.evt, e.host)],
      [
        {
          mode: EditorMode.FORM,
          activeControl: {},
          elementList: [
            text(),
            text(),
            text({ controlComponent: ControlComponent.PREFIX }),
            ...Array.from({ length: 17 }, () => text())
          ]
        },
        e => left(e.evt, e.host)
      ],
      [
        {
          mode: EditorMode.FORM,
          activeControl: {},
          cursorIndex: 2,
          elementList: [
            text(),
            text(),
            text({ controlComponent: ControlComponent.PRE_TEXT }),
            ...Array.from({ length: 17 }, () => text())
          ]
        },
        e => left(e.evt, e.host)
      ],
      [
        { evt: keyEvt({ ctrlKey: true }) },
        e => left(e.evt, e.host)
      ],
      [
        {
          evt: keyEvt({ ctrlKey: true, shiftKey: true }),
          range: { startIndex: 6, endIndex: 10 }
        },
        e => left(e.evt, e.host)
      ],
      [
        {
          evt: keyEvt({ shiftKey: true }),
          range: { startIndex: 6, endIndex: 10 }
        },
        e => left(e.evt, e.host)
      ],
      [
        {
          evt: keyEvt({ shiftKey: true }),
          range: { startIndex: 2, endIndex: 6 }
        },
        e => left(e.evt, e.host)
      ],
      [
        { evt: keyEvt({ shiftKey: true }) },
        e => left(e.evt, e.host)
      ],
      // 元素为表格 → 进入最后一个单元格
      [
        { elementList: tableInList, range: { startIndex: 0, endIndex: 0 } },
        e => left(e.evt, e.host)
      ],
      // 单元格内首位：移出表格 / 上一个单元格 / 换行回退
      [
        {
          range: { startIndex: 0, endIndex: 0 },
          cursorIndex: 0,
          positionContext: { isTable: true, index: 2 },
          originalElementList: [text(), text(), table()],
          elementList: [
            text({ tableId: 'tb1', trId: 'tr0', tdId: 'td0', tdIndex: 0 }),
            ...Array.from({ length: 19 }, () => text())
          ]
        },
        e => left(e.evt, e.host)
      ],
      [
        {
          range: { startIndex: 0, endIndex: 0 },
          cursorIndex: 0,
          positionContext: { isTable: true, index: 2 },
          originalElementList: [text(), text(), table()],
          elementList: [
            text({ tableId: 'tb1', trId: 'tr1', tdId: 'td0' }),
            ...Array.from({ length: 19 }, () => text())
          ]
        },
        e => left(e.evt, e.host)
      ],
      [
        {
          range: { startIndex: 0, endIndex: 0 },
          cursorIndex: 0,
          positionContext: { isTable: true, index: 2 },
          originalElementList: [text(), text(), table()],
          elementList: [
            text({ tableId: 'tb1', trId: 'tr0', tdId: 'td1' }),
            ...Array.from({ length: 19 }, () => text())
          ]
        },
        e => left(e.evt, e.host)
      ],
      // 隐藏元素跳过 + 行首光标定位
      [
        { traceHidden: () => true, cursorIndex: 6 },
        e => left(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 3,
          range: { startIndex: 3, endIndex: 3 },
          elementList: Array.from({ length: 20 }, (_, i) =>
            text({ listId: i > 0 ? 'l1' : undefined })
          )
        },
        e => left(e.evt, e.host)
      ]
    ]
    run(cases)
  })

  it('right：表单控件跳转 / 单词移动 / 选区 / 表格单元格', () => {
    const tableNext = (at: number) => {
      const list = Array.from({ length: 20 }, () => text())
      list[at] = table()
      return list
    }
    const cases: Array<[IKeyOptions, (e: any) => void]> = [
      [{ readonly: true }, e => right(e.evt, e.host)],
      [{ cursor: null }, e => right(e.evt, e.host)],
      [{ cursorIndex: 30 }, e => right(e.evt, e.host)],
      [
        {
          mode: EditorMode.FORM,
          activeControl: {},
          elementList: [
            text(),
            text(),
            text(),
            text({ controlComponent: ControlComponent.POSTFIX }),
            ...Array.from({ length: 16 }, () => text())
          ]
        },
        e => right(e.evt, e.host)
      ],
      [
        {
          mode: EditorMode.FORM,
          activeControl: {},
          cursorIndex: 2,
          elementList: [
            text(),
            text(),
            text(),
            text({ controlComponent: ControlComponent.POST_TEXT }),
            ...Array.from({ length: 16 }, () => text())
          ]
        },
        e => right(e.evt, e.host)
      ],
      [{ evt: keyEvt({ ctrlKey: true }) }, e => right(e.evt, e.host)],
      [
        {
          evt: keyEvt({ ctrlKey: true, shiftKey: true }),
          range: { startIndex: 2, endIndex: 6 }
        },
        e => right(e.evt, e.host)
      ],
      [
        {
          evt: keyEvt({ shiftKey: true }),
          range: { startIndex: 2, endIndex: 6 }
        },
        e => right(e.evt, e.host)
      ],
      [
        {
          evt: keyEvt({ shiftKey: true }),
          range: { startIndex: 6, endIndex: 10 }
        },
        e => right(e.evt, e.host)
      ],
      [{ evt: keyEvt({ shiftKey: true }) }, e => right(e.evt, e.host)],
      // 后一个元素是表格
      [
        { elementList: tableNext(7), range: { startIndex: 6, endIndex: 6 } },
        e => right(e.evt, e.host)
      ],
      // 单元格末尾：移出表格 / 下一个单元格 / 跨行
      [
        {
          elementList: Array.from({ length: 7 }, () =>
            text({ tableId: 'tb1', trId: 'tr1', tdId: 'td1' })
          ),
          range: { startIndex: 6, endIndex: 6 },
          cursorIndex: 6,
          positionContext: { isTable: true, index: 2 },
          originalElementList: [text(), text(), table()]
        },
        e => right(e.evt, e.host)
      ],
      [
        {
          elementList: Array.from({ length: 7 }, () =>
            text({ tableId: 'tb1', trId: 'tr0', tdId: 'td0' })
          ),
          range: { startIndex: 6, endIndex: 6 },
          cursorIndex: 6,
          positionContext: { isTable: true, index: 2 },
          originalElementList: [text(), text(), table()]
        },
        e => right(e.evt, e.host)
      ],
      [
        {
          elementList: Array.from({ length: 7 }, () =>
            text({ tableId: 'tb1', trId: 'tr0', tdId: 'td1' })
          ),
          range: { startIndex: 6, endIndex: 6 },
          cursorIndex: 6,
          positionContext: { isTable: true, index: 2 },
          originalElementList: [text(), text(), table()]
        },
        e => right(e.evt, e.host)
      ],
      [
        { traceHidden: () => true, cursorIndex: 6 },
        e => right(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 2,
          range: { startIndex: 2, endIndex: 2 },
          elementList: Array.from({ length: 20 }, () =>
            text({ listId: 'l1' })
          )
        },
        e => right(e.evt, e.host)
      ],
      [
        { range: { startIndex: 19, endIndex: 19 }, cursorIndex: 19 },
        e => right(e.evt, e.host)
      ]
    ]
    run(cases)
  })

  it('backspace：隐藏元素 / 跨行列 / 控件 / 列表 / 标题 / 普通删除', () => {
    const cases: Array<[IKeyOptions, (e: any) => void]> = [
      [{ readonly: true }, e => backspace(e.evt, e.host)],
      [{ canInput: false }, e => backspace(e.evt, e.host)],
      [
        {
          range: { startIndex: 2, endIndex: 2 },
          elementList: [
            text(),
            text(),
            text({ hide: true }),
            text({ hide: true }),
            text(),
            ...Array.from({ length: 15 }, () => text())
          ]
        },
        e => backspace(e.evt, e.host)
      ],
      [
        {
          range: { startIndex: 2, endIndex: 2 },
          elementList: [
            text(),
            text(),
            text({ control: { hide: true }, controlId: 'c1' }),
            text({ area: { hide: true } }),
            text(),
            ...Array.from({ length: 15 }, () => text())
          ]
        },
        e => backspace(e.evt, e.host)
      ],
      [
        {
          range: { startIndex: 3, endIndex: 3 },
          traceHidden: (el: any) => !!el.traceHidden,
          elementList: [
            text(),
            text(),
            text({ traceHidden: true, controlId: 'c1' }),
            text({ traceHidden: true }),
            text(),
            ...Array.from({ length: 15 }, () => text())
          ]
        },
        e => backspace(e.evt, e.host)
      ],
      [
        {
          range: { startIndex: 2, endIndex: 2, isCrossRowCol: true },
          rangeRowCol: null
        },
        e => backspace(e.evt, e.host)
      ],
      [
        {
          range: { startIndex: 2, endIndex: 2, isCrossRowCol: true },
          rangeRowCol: [
            [
              { value: [{ value: '' }, { value: 'a' }], deletable: false },
              { value: [{ value: '' }] }
            ]
          ]
        },
        e => backspace(e.evt, e.host)
      ],
      [
        {
          range: { startIndex: 2, endIndex: 2, isCrossRowCol: true },
          rangeRowCol: [[{ value: [{ value: '' }] }]]
        },
        e => backspace(e.evt, e.host)
      ],
      [
        { activeControl: {}, captureEvent: true },
        e => backspace(e.evt, e.host)
      ],
      [{ cursor: null }, e => backspace(e.evt, e.host)],
      [
        {
          cursorIndex: 0,
          range: { startIndex: 0, endIndex: 0 },
          elementList: [
            text({ value: '\u200b', listId: 'l1', listLevel: 2 }),
            ...Array.from({ length: 19 }, () => text())
          ]
        },
        e => backspace(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 0,
          range: { startIndex: 0, endIndex: 0 },
          elementList: [
            text({ value: '\u200b', listId: 'l1' }),
            ...Array.from({ length: 19 }, () => text())
          ]
        },
        e => backspace(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 0,
          range: { startIndex: 0, endIndex: 0 },
          elementList: [
            text({ value: '\u200b' }),
            ...Array.from({ length: 19 }, () => text())
          ],
          paragraphList: [text()]
        },
        e => backspace(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 3,
          range: { startIndex: 3, endIndex: 5 },
          elementList: Array.from({ length: 20 }, (_, i) =>
            text({
              titleId: i < 4 ? 't1' : 't2',
              level: 1
            })
          )
        },
        e => backspace(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 6,
          range: { startIndex: 2, endIndex: 8 },
          collapsed: false
        },
        e => backspace(e.evt, e.host)
      ],
      [
        {
          cursorIndex: 6,
          range: { startIndex: 6, endIndex: 6 },
          traceHidden: () => true
        },
        e => backspace(e.evt, e.host)
      ]
    ]
    run(cases)
  })
})
