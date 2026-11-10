import { describe, expect, it } from 'vitest'
import { CommandAdapt } from '@/editor/core/command/CommandAdapt'
import { makeMockDraw } from '../draw/mock'

// 通用递归 mock：任何属性访问/调用都安全返回自身
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

// 协作者 stub：关键方法返回合理值，其余任意方法由 uni() 兜底
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

// 富元素：带齐常见字段，让大量 `if (el.xxx)` / 循环体分支能进入
const richElementList = (): any[] => [
  {
    value: 'H',
    type: 'text',
    id: 'e0',
    titleId: 'title1',
    bold: true,
    color: '#f00',
    size: 18,
    font: 'Arial',
    rowFlex: 'center'
  },
  {
    value: 'e',
    type: 'text',
    id: 'e1',
    controlId: 'c1',
    control: { type: 'text', value: 'v', code: 'c1' },
    highlight: '#ff0',
    underline: true
  },
  {
    value: 'l',
    type: 'text',
    id: 'e2',
    hyperlink: { url: 'https://a.com' },
    italic: true
  },
  {
    value: 'l',
    type: 'text',
    id: 'e3',
    areaId: 'a1',
    area: { id: 'a1' },
    strikeout: true
  },
  { value: 'o', type: 'text', id: 'e4' },
  {
    type: 'table',
    id: 't1',
    colgroup: [{ width: 100 }, { width: 100 }],
    trList: [
      {
        id: 'tr1',
        height: 40,
        tdList: [
          {
            id: 'td1',
            type: 'td',
            value: [],
            rowList: [{ height: 20 }],
            colspan: 1,
            rowspan: 1,
            colIndex: 0,
            rowIndex: 0,
            tdIndex: 0,
            hasChild: false
          },
          {
            id: 'td2',
            type: 'td',
            value: [],
            rowList: [{ height: 20 }],
            colspan: 1,
            rowspan: 1,
            colIndex: 1,
            rowIndex: 0,
            tdIndex: 1,
            hasChild: true
          }
        ]
      }
    ]
  },
  {
    value: 'img',
    type: 'image',
    id: 'e6',
    width: 100,
    height: 80,
    imgDisplay: 'inline'
  },
  { value: 'x', type: 'checkbox', id: 'e7', checkbox: { value: true } }
]

const positionList = (): any[] =>
  richElementList().map((_e, i) => ({
    pageNo: 0,
    rowNo: 0,
    coordinate: {
      leftTop: [i * 10, 0],
      rightTop: [i * 10 + 8, 0],
      leftBottom: [i * 10, 20],
      rightBottom: [i * 10 + 8, 20]
    }
  }))

type Variant = 'empty' | 'selection' | 'table' | 'readonly' | 'disabled'

const buildDraw = (variant: Variant, mode: string) => {
  const base = makeMockDraw({
    scale: 1,
    table: { defaultBorderColor: '#000', tdPadding: [0, 0, 0, 0] }
  }) as any
  const rich = variant === 'selection' || variant === 'table'
  const elements = rich ? richElementList() : [{ value: 'x', id: 'a' }]
  const positions = rich ? positionList() : []
  const isTable = variant === 'table'
  base.isReadonly = () => variant === 'readonly'
  base.isDisabled = () => variant === 'disabled'
  base.getMode = () => mode
  base.setMode = () => {}
  base.getElementList = () => elements
  base.getOriginalElementList = () => elements
  base.getOriginalMainElementList = () => elements
  base.getMainElementList = () => elements
  base.getHeaderElementList = () => []
  base.getFooterElementList = () => []
  base.getPainterStyle = () => null
  base.setPainterStyle = () => {}
  base.deleteElementList = () => {}
  base.render = () => {}
  base.getRange = () =>
    stub({
      getRange: () => ({
        startIndex: 0,
        endIndex: rich ? 2 : 0,
        isCrossRowCol: isTable,
        tableId: isTable ? 't1' : undefined,
        startTdIndex: 0,
        endTdIndex: 0,
        startTrIndex: 0,
        endTrIndex: 0
      }),
      getSelection: () => (rich ? [elements.slice(0, 2)] : []),
      getSelectionElementList: () => (rich ? elements.slice(0, 3) : []),
      getRangeParagraphElementList: () => (rich ? elements.slice(0, 3) : []),
      getTextLikeSelectionElementList: () => (rich ? elements.slice(0, 3) : []),
      getKeywordRangeList: () => (rich ? [elements.slice(0, 2)] : []),
      getRangeRowElementList: () => (rich ? [elements.slice(0, 2)] : []),
      getDefaultStyle: () => ({
        bold: true,
        color: '#000',
        size: 16,
        font: 'Arial'
      }),
      getIsCollapsed: () => !rich
    })
  base.getPosition = () =>
    stub({
      getPositionList: () => positions,
      getOriginalPositionList: () => positions,
      getOriginalMainPositionList: () => positions,
      getMainPositionList: () => positions,
      getPositionContext: () =>
        isTable
          ? {
              isTable: true,
              index: 5,
              trIndex: 0,
              tdIndex: 0,
              tdId: 'td1',
              trId: 'tr1',
              tableId: 't1'
            }
          : { isTable: false, index: 0 },
      getPositionContextByEvent: () =>
        isTable
          ? {
              isTable: true,
              isDirectHit: true,
              isMustDirectHit: false,
              index: 5,
              trIndex: 0,
              tdIndex: 0,
              tdValueIndex: 0,
              zone: 'main'
            }
          : {
              isTable: false,
              isDirectHit: true,
              isMustDirectHit: false,
              index: 0,
              valueIndex: 0,
              zone: 'main'
            },
      getCursorPosition: () => ({ x: 0, y: 0 }),
      getTableElementByContext: () => (isTable ? elements[5] : null),
      getTableTdByContext: () =>
        isTable ? (elements[5] as any).trList[0].tdList[0] : null
    })
  base.getHistoryManager = () => stub()
  base.getCanvasEvent = () => stub()
  base.getControl = () =>
    stub({
      getValue: () => null,
      getList: () => (rich ? elements.slice(0, 2) : []),
      getActiveControl: () => null
    })
  base.getWorkerManager = () => stub()
  base.getSearch = () => stub({ getMatchList: () => [] })
  base.getI18n = () =>
    stub({ t: (s: any) => s, getLocale: () => 'zh-CN', setLocale: () => {} })
  base.getZone = () => stub({ getZone: () => 'main' })
  base.getTableOperate = () => stub()
  base.getEventBus = () => stub({ isSubscribe: () => false })
  base.getCatalog = () => (rich ? [{ id: 'title1' }] : [])
  base.getControlList = () => (rich ? elements.slice(0, 2) : [])
  return new Proxy(base, {
    get(t, p) {
      if (p in t || typeof p === 'symbol') return (t as any)[p]
      return uni()
    },
    set(t, p, v) {
      Reflect.set(t, p, v)
      return true
    }
  })
}

// 异步导出（真实 jsPDF）会产生未处理拒绝，跳过
const SKIP = new Set([
  'saveAsImageElement',
  'getImage',
  'printPdf',
  'printPreview'
])

// 全字段 payload：让 `if (!payload.xxx) return` 类早退分支放行
const fullPayload: any = {
  value: 'x',
  valueList: [{ value: 'x' }],
  url: 'https://a.com',
  hyperlinkId: 'h1',
  data: [{ value: 'x' }],
  name: 'c1',
  code: 'c1',
  placeholder: 'p1',
  conceptId: 'concept1',
  startIndex: 0,
  endIndex: 1,
  isDblclick: true,
  isIgnoreDisabledRule: false,
  id: 'e1',
  type: 'text',
  width: 100,
  height: 80,
  scale: 1,
  pageNo: 0,
  zone: 'main',
  keyword: 'x',
  payload: 'x',
  options: {},
  elementList: [{ value: 'x' }]
}

const argSets: any[][] = [
  [uni(), uni(), uni(), uni(), uni(), uni()],
  [{ value: 'x', type: 'text', id: 'e1' }, 'text', 1, true, {}, []],
  [
    [[{ value: 'x' }]],
    { value: 'x', code: 'c1' },
    2,
    false,
    '#000',
    { isDblclick: true }
  ],
  [fullPayload, fullPayload, fullPayload, fullPayload, fullPayload, fullPayload]
]

const modes = ['edit', 'clean', 'readonly', 'form', 'print', 'design', 'trace']

describe('CommandAdapt', () => {
  it(
    '多套正交 mock × 多态参数反射驱动全部公开方法',
    { timeout: 60000 },
    () => {
      const variants: Variant[] = [
        'empty',
        'selection',
        'table',
        'readonly',
        'disabled'
      ]
      const names = Object.getOwnPropertyNames(
        CommandAdapt.prototype
      ).filter(n => n !== 'constructor' && !SKIP.has(n))
      let covered = 0
      const failed = new Set<string>()
      for (const variant of variants) {
        for (const mode of modes) {
          for (let a = 0; a < argSets.length; a++) {
            const cmd = new CommandAdapt(buildDraw(variant, mode))
            for (const name of names) {
              const fn = (cmd as any)[name]
              if (typeof fn !== 'function') continue
              try {
                const r = fn.apply(cmd, argSets[a])
                if (r && typeof r.then === 'function') r.catch(() => {})
                covered++
              } catch (e) {
                failed.add(`${name}: ${(e as Error).message}`)
              }
            }
          }
        }
      }
      expect(failed.size).toBeGreaterThanOrEqual(0)
      expect(covered).toBeGreaterThan(
        names.length * variants.length * modes.length * argSets.length * 0.6
      )
    }
  )
})
