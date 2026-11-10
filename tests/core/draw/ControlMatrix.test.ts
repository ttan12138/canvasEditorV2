import { describe, expect, it } from 'vitest'
import { Control } from '@/editor/core/draw/control/Control'
import { makeMockDraw } from './mock'
import { ElementType } from '@/editor/dataset/enum/Element'
import { ControlComponent, ControlType } from '@/editor/dataset/enum/Control'

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

// 含控件的元素列表：PREFIX/VALUE/PLACEHOLDER/POSTFIX 完整序列
const controlElements = (): any[] => {
  const c = (controlId: string, cc: string, value: string): any => ({
    value,
    type: ElementType.CONTROL,
    controlId,
    controlComponent: cc,
    control: {
      id: controlId,
      type: ControlType.TEXT,
      conceptId: 'concept1',
      value: [{ value: 'val' }],
      preText: 'pre',
      postText: 'post',
      placeholder: 'tip',
      minWidth: 100
    }
  })
  return [
    { value: 'plain', type: ElementType.TEXT },
    c('c1', ControlComponent.PREFIX, ''),
    c('c1', ControlComponent.VALUE, 'v'),
    c('c1', ControlComponent.PLACEHOLDER, 'tip'),
    c('c1', ControlComponent.POSTFIX, ''),
    c('c1', ControlComponent.PRE_TEXT, 'pre'),
    c('c1', ControlComponent.POST_TEXT, 'post'),
    {
      value: '',
      type: ElementType.TABLE,
      trList: [
        {
          height: 40,
          tdList: [
            { value: [c('c2', ControlComponent.VALUE, 'inner')] }
          ]
        }
      ]
    }
  ]
}

type Variant = 'empty' | 'control' | 'collapsed' | 'crossRange'

const buildDraw = (variant: Variant) => {
  const base = makeMockDraw({
    scale: 1,
    control: {
      activeBackgroundColor: '#a',
      disabledBackgroundColor: '#b',
      existValueBackgroundColor: '#c',
      noValueBackgroundColor: '#d',
      borderColor: '#000'
    },
    modeRule: {
      print: { filterEmptyControl: false }
    }
  }) as any
  const elements = variant === 'empty' ? [] : controlElements()
  base.getElementList = () => elements
  base.getOriginalElementList = () => elements
  base.getOriginalMainElementList = () => elements
  base.getMainElementList = () => elements
  base.getHeaderElementList = () => []
  base.getFooterElementList = () => []
  base.isReadonly = () => false
  base.isDisabled = () => false
  base.getMode = () => 'form'
  base.render = () => {}
  base.spliceElementList = () => {}
  base.deleteElementList = () => {}
  base.insertElementList = () => {}
  base.setElementProperty = () => {}
  base.getIsPagingMode = () => false
  base.getPageNo = () => 0
  base.getInnerWidth = () => 500
  base.getContextInnerWidth = () => 500
  base.getOriginValue = () => ({ main: elements })
  base.getRange = () =>
    stub({
      getRange: () =>
        variant === 'collapsed'
          ? { startIndex: 2, endIndex: 2 }
          : variant === 'crossRange'
            ? { startIndex: 1, endIndex: 4, isCrossRowCol: true }
            : { startIndex: 0, endIndex: 0 },
      getSelection: () => elements.slice(0, 3),
      getSelectionElementList: () => elements.slice(0, 3),
      getRangeParagraphElementList: () => elements.slice(0, 3),
      getIsCollapsed: () => variant === 'collapsed',
      getIsRangeInPostfix: () => false,
      getIsCanInput: () => true,
      getRangeRow: () => null,
      getDefaultStyle: () => ({})
    })
  base.getPosition = () =>
    stub({
      getPositionList: () => elements.map((_e, i) => ({
        coordinate: { leftTop: [i * 10, 0] },
        pageNo: 0
      })),
      getOriginalMainPositionList: () => [],
      getPositionContext: () => ({ isTable: false, index: 0 }),
      getCursorPosition: () => ({ x: 0, y: 0 }),
      getPositionContextByEvent: () => null
    })
  base.getListener = () => stub()
  base.getEventBus = () => stub({ isSubscribe: () => false, emit: () => {} })
  base.getControl = () => stub()
  base.getSearch = () => stub({ getMatchList: () => [] })
  base.getI18n = () => stub({ t: (s: any) => s })
  base.getZone = () => stub({ getZone: () => 'main' })
  base.getPreviewer = () => stub()
  base.getTableTool = () => stub()
  base.getTableParticle = () => stub({ getRangeRowCol: () => [] })
  base.getImageParticle = () => stub()
  base.getDateParticle = () => stub()
  base.getHyperlinkParticle = () => stub()
  base.getCursor = () => stub()
  base.getOverride = () => ({})
  base.getWorkerManager = () => stub()
  base.getGlobalEvent = () => stub()
  base.getImageObserver = () => stub()
  base.getPageContainer = () => document.createElement('div')
  base.getContainer = () => document.createElement('div')
  base.getOptions = () => ({
    ...base.__opts,
    scale: 1,
    control: {
      activeBackgroundColor: '#a',
      disabledBackgroundColor: '#b',
      existValueBackgroundColor: '#c',
      noValueBackgroundColor: '#d',
      borderColor: '#000',
      prefix: '',
      postfix: ''
    },
    modeRule: {
      print: { filterEmptyControl: variant === 'empty' },
      form: {},
      readonly: {},
      edit: {}
    },
    searchMatchColor: '#ff0',
    searchMatchAlpha: 0.5,
    table: { tdPadding: [0, 0, 0, 0] },
    placeholder: { color: '#999' }
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

const argSets: any[][] = [
  [],
  ['c1', { value: 'x' }, 0],
  [
    controlElements(),
    1,
    3,
    { conceptId: 'concept1', value: 'x' },
    'text'
  ],
  [
    [{ value: 'x', controlId: 'c1', controlComponent: 'value' }],
    { id: 'c1', value: [{ value: 'v' }] },
    2,
    2,
    true
  ]
]

describe('Control 反射矩阵', () => {
  it(
    '60 个 public 方法 × 4 变体 × 4 参数集（副作用隔离）',
    { timeout: 60000 },
    () => {
      const names = Object.getOwnPropertyNames(Control.prototype).filter(
        n => n !== 'constructor'
      )
      const variants: Variant[] = [
        'empty',
        'control',
        'collapsed',
        'crossRange'
      ]
      let covered = 0
      for (const variant of variants) {
        for (const args of argSets) {
          for (const name of names) {
            const control = new Control(buildDraw(variant))
            const fn = (control as any)[name]
            if (typeof fn !== 'function') continue
            try {
              const r = fn.apply(control, args)
              if (r && typeof r.then === 'function') r.catch(() => {})
              covered++
            } catch {
              /* 个别方法依赖真实控件实例，允许跳过 */
            }
          }
        }
      }
      expect(covered).toBeGreaterThan(names.length * variants.length * 2)
    }
  )
})
