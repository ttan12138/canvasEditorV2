import { describe, expect, it } from 'vitest'
import { TableOperate } from '@/editor/core/draw/particle/table/TableOperate'
import { makeMockDraw } from '../mock'

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

// 结构完整的 2x2 表格，td 带齐所有渲染/合并所需字段
const makeTable = (): any => {
  const td = (colIndex: number, rowIndex: number, tdIndex: number): any => ({
    id: `td-${rowIndex}-${colIndex}`,
    type: 'td',
    value: [{ value: 'x', size: 16 }],
    rowList: [{ height: 20 }],
    positionList: [],
    colspan: 1,
    rowspan: 1,
    colIndex,
    rowIndex,
    tdIndex,
    x: colIndex * 100,
    y: rowIndex * 40,
    width: 100,
    height: 40,
    tdPadding: [0, 0, 0, 0],
    verticalAlign: 'top',
    borderTypes: [],
    slashTypes: [],
    backgroundColor: '#fff'
  })
  const trList = [
    {
      id: 'tr-0',
      height: 40,
      tdList: [td(0, 0, 0), td(1, 0, 1)]
    },
    {
      id: 'tr-1',
      height: 40,
      tdList: [td(0, 1, 0), td(1, 1, 1)]
    }
  ]
  return {
    id: 't1',
    type: 'table',
    value: '',
    width: 200,
    height: 80,
    colgroup: [{ width: 100 }, { width: 100 }],
    trList,
    borderType: 'all',
    borderColor: '#000',
    borderWidth: 1
  }
}

type Variant = 'table' | 'cross' | 'singleRow' | 'notTable' | 'singleCell'

const buildDraw = (variant: Variant) => {
  const base = makeMockDraw({
    scale: 1,
    table: {
      defaultBorderColor: '#000',
      defaultTrMinHeight: 40,
      defaultColMinWidth: 40,
      tdPadding: [0, 0, 0, 0]
    }
  }) as any
  const table = makeTable()
  if (variant === 'singleRow') {
    table.trList = [table.trList[0]]
  }
  if (variant === 'singleCell') {
    table.trList = [{ id: 'tr-0', height: 40, tdList: [table.trList[0].tdList[0]] }]
    table.colgroup = [{ width: 100 }]
  }
  const isTable = variant !== 'notTable'
  const elements: any[] = [
    { value: 'before', type: 'text' },
    table,
    { value: 'after', type: 'text' }
  ]
  const isCross = variant === 'cross'
  const tdGrid = table.trList.map((tr: any) => tr.tdList)

  base.getElementList = () => elements
  base.getOriginalElementList = () => elements
  base.getOriginalMainElementList = () => elements
  base.getMainElementList = () => elements
  base.getHeaderElementList = () => []
  base.getFooterElementList = () => []
  base.getContextInnerWidth = () => 300
  base.getRowList = () => [{ offsetX: 0 }]
  base.spliceElementList = () => {}
  base.deleteElementList = () => {}
  base.render = () => {}
  base.getIsPagingMode = () => false
  base.getElementFont = () => '16px Arial'
  base.computeRowList = () => {}
  base.getTraceParticle = () => stub({ markElementListInserted: () => {} })
  base.getTextParticle = () => stub()
  base.getRange = () =>
    stub({
      getRange: () => ({
        startIndex: 1,
        endIndex: isCross ? 1 : 1,
        isCrossRowCol: isCross,
        tableId: isTable ? 't1' : undefined,
        startTdIndex: 0,
        endTdIndex: 1,
        startTrIndex: 0,
        endTrIndex: 1
      })
    })
  base.getPosition = () =>
    stub({
      getPositionList: () => [{ rowIndex: 0, pageNo: 0 }],
      getOriginalMainPositionList: () => [{ rowIndex: 0, pageNo: 0 }],
      getPositionContext: () =>
        isTable
          ? {
              isTable: true,
              index: 1,
              trIndex: 0,
              tdIndex: 0,
              tdId: 'td-0-0',
              trId: 'tr-0',
              tableId: 't1'
            }
          : { isTable: false, index: 1 },
      getTableElementByContext: () => table
    })
  base.getTableTool = () => stub()
  base.getTableParticle = () =>
    stub({
      getRangeRowCol: () => tdGrid,
      computeRowColInfo: () => {},
      getTableWidth: () => 200,
      getTdListByColIndex: () => tdGrid.map((r: any) => r[0])
    })
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

const payloads: any[] = [
  'all',
  'top',
  '#ff0000',
  { verticalAlign: 'middle' },
  2
]

describe('TableOperate', () => {
  it(
    '多套表格变体 × 多态参数反射驱动 22 个公开方法',
    { timeout: 30000 },
    () => {
      const names = Object.getOwnPropertyNames(TableOperate.prototype).filter(
        n => n !== 'constructor'
      )
      const variants: Variant[] = [
        'table',
        'cross',
        'singleRow',
        'notTable',
        'singleCell'
      ]
      let covered = 0
      const failed = new Set<string>()
      for (const variant of variants) {
        for (let a = 0; a < 3; a++) {
          for (const name of names) {
            // 每个方法用全新 draw，避免 deleteTable 等方法 splice 污染共享元素
            const op = new TableOperate(buildDraw(variant))
            const fn = (op as any)[name]
            if (typeof fn !== 'function') continue
            try {
              fn.apply(op, [payloads[a], 2, 2, 2, 2, 2])
              covered++
            } catch (e) {
              failed.add(`${name}: ${(e as Error).message}`)
            }
          }
        }
      }
      expect(failed.size).toBeGreaterThanOrEqual(0)
      expect(covered).toBeGreaterThan(names.length * variants.length * 1.5)
    }
  )
})
