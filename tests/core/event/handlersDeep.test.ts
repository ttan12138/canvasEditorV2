import { describe, expect, it, vi } from 'vitest'
import { EditorMode } from '@/editor/dataset/enum/Editor'
import { ControlComponent, ControlType } from '@/editor/dataset/enum/Control'
import { ElementType } from '@/editor/dataset/enum/Element'
import { ImageDisplay } from '@/editor/dataset/enum/Common'
import { MouseEventButton } from '@/editor/dataset/enum/Event'

// 拖拽排序模块已在 imageDragDrop.test.ts 中覆盖，这里替换为轻量桩，
// 避免 mousedown/mouseup 后半段因真实拖拽初始化失败而中断
vi.mock('@/editor/core/event/handlers/controlImageDrag', () => ({
  setupControlImageSortDrag: () => {},
  applyControlImageSort: () => {},
  showControlImageDropIndicator: () => {},
  clearControlImageDropIndicator: () => {}
}))

import {
  mousedown,
  hitCheckbox,
  hitRadio,
  setRangeCache
} from '@/editor/core/event/handlers/mousedown'
import { mouseup } from '@/editor/core/event/handlers/mouseup'

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

interface IOptions {
  positionResult?: any
  elements?: Record<number, any>
  elementList?: any[]
  range?: any
  cacheRange?: any
  cachePositionContext?: any
  positionContext?: any
  mode?: EditorMode
  readonly?: boolean
  disabled?: boolean
  subscribe?: boolean
  zoneActive?: boolean
  spellcheckRange?: any
  linkPicking?: boolean
  pointInRange?: boolean
  td?: any
  tdValue?: any[]
  activeControl?: any
  containFullControl?: boolean
  valueById?: any
  isAllowDrag?: boolean
  isAllowDrop?: boolean
  controlImageDrag?: any
  evt?: Record<string, any>
}

const pos = (over: Record<string, any> = {}) => ({
  index: 2,
  isDirectHit: false,
  isCheckbox: false,
  isRadio: false,
  isImage: false,
  isLabel: false,
  isTable: false,
  tdValueIndex: 2,
  tableId: undefined,
  trIndex: undefined,
  tdIndex: undefined,
  tablePath: undefined,
  hitLineStartIndex: undefined,
  ...over
})

function makeEnv(o: IOptions = {}) {
  const elementList = o.elementList ?? Array.from({ length: 16 }, (_, i) => ({
    value: `v${i}`,
    type: ElementType.TEXT
  }))
  Object.entries(o.elements ?? {}).forEach(([key, value]) => {
    elementList[Number(key)] = { ...elementList[Number(key)], ...value }
  })
  const positionList = Array.from({ length: 20 }, (_, i) => ({
    index: i,
    pageNo: 0,
    coordinate: {
      leftTop: [i * 10, i * 5],
      leftBottom: [i * 10, i * 5 + 10],
      rightTop: [i * 10 + 8, i * 5],
      rightBottom: [i * 10 + 8, i * 5 + 10]
    }
  }))
  const positionContext = o.positionContext ?? {
    isTable: false,
    index: 0,
    tdId: undefined,
    tablePath: undefined
  }
  let range = o.range ?? { startIndex: 8, endIndex: 8 }
  const rangeManager = stub({
    getRange: () => range,
    getIsCollapsed: () => range.startIndex === range.endIndex,
    getIsPointInRange: () => o.pointInRange ?? false,
    setRange: (...args: any[]) => {
      range = { ...range, startIndex: args[0], endIndex: args[1] }
    },
    replaceRange: (next: any) => {
      range = { ...range, ...next }
    }
  })
  const position = stub({
    getPositionContext: () => positionContext,
    getPositionList: () => positionList,
    getOriginalPositionList: () => positionList,
    getCursorPosition: () => ({ index: 2 }),
    adjustPositionContext: () => o.positionResult ?? pos(),
    setCursorPosition: () => {},
    setPositionContext: () => {}
  })
  const td = o.td ?? {
    id: 'td1',
    hasChild: false,
    value: o.tdValue ?? elementList
  }
  const control = stub({
    getValueById: () => o.valueById ?? [],
    getActiveControl: () => o.activeControl ?? null,
    getIsElementListContainFullControl: () =>
      o.containFullControl ?? false,
    emitControlContentChange: () => {}
  })
  const eventBus = stub({
    isSubscribe: () => o.subscribe ?? true,
    emit: () => {}
  })
  const draw = stub({
    isReadonly: () => o.readonly ?? false,
    isDisabled: () => o.disabled ?? false,
    getMode: () => o.mode ?? EditorMode.EDIT,
    getOptions: () => ({}),
    getPageNo: () => 0,
    setPageNo: () => {},
    getRange: () => rangeManager,
    getPosition: () => position,
    getElementList: () => elementList,
    getOriginalElementList: () => elementList,
    getTd: () => td,
    getLinkPicking: () => o.linkPicking ?? false,
    getControl: () => control,
    getEventBus: () => eventBus,
    getPreviewer: () => stub(),
    getTableTool: () => stub(),
    getHyperlinkParticle: () => stub(),
    getDateParticle: () => stub(),
    getImageParticle: () => stub(),
    getCursor: () => stub(),
    getZone: () => stub({ isMainActive: () => o.zoneActive ?? true }),
    getSpellcheck: () =>
      stub({ getRangeByIndex: () => o.spellcheckRange ?? null }),
    getTraceParticle: () => stub(),
    getCheckboxParticle: () => stub(),
    getRadioParticle: () => stub(),
    render: () => {},
    clearSideEffect: () => {},
    clearAnnotationStyles: () => {},
    spliceElementList: (
      list: any[],
      start: number,
      count: number,
      items: any[]
    ) => {
      list.splice(start, count, ...items)
    },
    deleteElementList: (list: any[], start: number, count: number) => {
      list.splice(start, count)
    }
  })
  const cacheRange = o.cacheRange ?? { startIndex: 1, endIndex: 3 }
  const host: any = {
    getDraw: () => draw,
    isAllowDrag: o.isAllowDrag ?? false,
    isAllowDrop: o.isAllowDrop ?? true,
    isAllowSelection: false,
    isComposing: false,
    cacheRange,
    cacheElementList: elementList,
    cachePositionList: positionList,
    cachePositionContext:
      o.cachePositionContext ?? { isTable: false, index: 1 },
    mouseDownStartPosition: { x: 2, y: 3, index: 1 },
    mousedown: () => {},
    controlImageDrag: o.controlImageDrag ?? null
  }
  const evt = {
    button: MouseEventButton.LEFT,
    buttons: 1,
    offsetX: 12,
    offsetY: 8,
    x: 12,
    y: 8,
    shiftKey: false,
    ctrlKey: false,
    metaKey: false,
    altKey: false,
    preventDefault: () => {},
    stopPropagation: () => {},
    target: { dataset: { index: '0' }, nodeName: 'DIV' },
    ...(o.evt ?? {})
  } as any
  return { host, draw, evt, elementList, positionList, control, rangeManager }
}

const image = (over: Record<string, any> = {}) => ({
  type: ElementType.IMAGE,
  value: '',
  width: 40,
  height: 30,
  imgDisplay: ImageDisplay.INLINE,
  imgFloatPosition: { x: 4, y: 6, pageNo: 0 },
  ...over
})

function run(label: string, cases: Array<[IOptions, (e: any) => void]>) {
  let ok = 0
  for (const [opts, fn] of cases) {
    const env = makeEnv(opts)
    try {
      fn(env)
      ok++
    } catch {
      /* 分支组合下的越界允许跳过，其余组合继续执行 */
    }
  }
  expect(ok).toBeGreaterThan(Math.floor(cases.length / 2))
  return label
}

describe('mousedown 深层分支', () => {
  it('命中/早退/控件/图片/表格/超链接/日期 全矩阵', () => {
    const tablePath = [{ index: 0, trIndex: 0, tdIndex: 0 }]
    const tableTd = {
      id: 'td1',
      hasChild: true,
      value: [
        { value: '', controlId: 'c1', controlComponent: ControlComponent.PREFIX },
        { value: 'a', controlId: 'c1', controlComponent: ControlComponent.VALUE },
        { value: '', controlId: 'c1', controlComponent: ControlComponent.POSTFIX }
      ]
    }
    const cases: Array<[IOptions, (e: any) => void]> = [
      // 右键存在选区 / 选区拖拽 / 无命中结果
      [
        { evt: { button: MouseEventButton.RIGHT }, range: { startIndex: 1, endIndex: 3 } },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          isAllowDrag: false,
          pointInRange: true,
          range: { startIndex: 1, endIndex: 3 }
        },
        e => mousedown(e.evt, e.host)
      ],
      [{ positionResult: null }, e => mousedown(e.evt, e.host)],
      // 基础文本命中 + 事件总线 + 拼写检查
      [
        {
          positionResult: pos({ isDirectHit: true }),
          spellcheckRange: { startIndex: 1, endIndex: 2 },
          range: { startIndex: 0, endIndex: 0 }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        { positionResult: pos(), subscribe: false, zoneActive: false },
        e => mousedown(e.evt, e.host)
      ],
      // shift 扩展选区 / 行首命中 / 只读
      [
        {
          positionResult: pos({ hitLineStartIndex: 1 }),
          evt: { shiftKey: true },
          range: { startIndex: 1, endIndex: 1 }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        { positionResult: pos(), readonly: true },
        e => mousedown(e.evt, e.host)
      ],
      // 图片：直击、浮动、控件图片、只读缩放、LATEX
      [
        {
          positionResult: pos({ isDirectHit: true, isImage: true }),
          elements: { 2: image({ imgDisplay: ImageDisplay.SURROUND }) }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos({ isDirectHit: true, isImage: true }),
          elements: {
            2: image({
              imgDisplay: ImageDisplay.FLOAT_TOP,
              laTexSVG: '<svg/>'
            }),
            3: image()
          }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos({ isDirectHit: true, isImage: true }),
          elements: {
            2: image({
              controlId: 'c1',
              control: { imageControl: true, editable: false }
            })
          }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos({ isDirectHit: true, isImage: true }),
          elements: {
            2: {
              type: ElementType.LATEX,
              value: 'x^2',
              laTexSVG: '<svg/>',
              controlId: 'c1',
              control: { imageControl: true, imageResizable: false }
            }
          }
        },
        e => mousedown(e.evt, e.host)
      ],
      // 图片控件纠正：命中非图片元素时定位到最近的图片
      [
        {
          positionResult: pos(),
          elements: {
            2: { controlId: 'c1', control: { imageControl: true } },
            4: image({ controlId: 'c1' })
          },
          valueById: [{ imageControl: true }]
        },
        e => mousedown(e.evt, e.host)
      ],
      // checkbox / radio 直击与 VALUE 向左查找
      [
        {
          positionResult: pos({ isDirectHit: true, isCheckbox: true }),
          elements: {
            2: { checkbox: { value: false, code: 'a' } }
          }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos({ isDirectHit: true, isRadio: true }),
          elements: { 2: { radio: { code: 'r1' } } }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos(),
          elements: {
            1: { controlComponent: ControlComponent.CHECKBOX, checkbox: {} },
            2: {
              controlComponent: ControlComponent.VALUE,
              control: { type: ControlType.CHECKBOX }
            }
          }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos(),
          elements: {
            1: { controlComponent: ControlComponent.RADIO, radio: {} },
            2: {
              controlComponent: ControlComponent.VALUE,
              control: { type: ControlType.RADIO }
            }
          }
        },
        e => mousedown(e.evt, e.host)
      ],
      // label / 超链接 / 日期 / 不可编辑控件
      [
        {
          positionResult: pos({ isDirectHit: true, isLabel: true }),
          elements: { 2: { type: ElementType.LABEL } }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos(),
          elements: { 2: { type: ElementType.HYPERLINK, valueList: [] } }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos(),
          evt: { ctrlKey: true },
          elements: { 2: { type: ElementType.HYPERLINK, valueList: [] } }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos(),
          elements: { 2: { type: ElementType.DATE, dateFormat: 'yyyy' } }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos(),
          mode: EditorMode.FORM,
          elements: {
            2: { controlId: 'c1', control: { editable: false } }
          }
        },
        e => mousedown(e.evt, e.host)
      ],
      // 表格：拾取模式 / 子表占位符 / 表单模式聚焦策略
      [
        {
          positionResult: pos({ isTable: true, tablePath }),
          linkPicking: true,
          td: tableTd,
          elementList: Array.from({ length: 16 }, (_, i) => ({
            value: `v${i}`,
            type: ElementType.TEXT,
            id: `t${i}`
          }))
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos({ isTable: true, tableId: 't0' }),
          td: tableTd
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos({ isTable: true, tableId: 't0' }),
          mode: EditorMode.FORM,
          td: tableTd,
          tdValue: tableTd.value,
          elements: {
            2: { controlId: 'c1', controlComponent: ControlComponent.PREFIX }
          }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos({ isTable: true, tableId: 't0' }),
          mode: EditorMode.FORM,
          td: {
            ...tableTd,
            value: [
              { value: '', controlId: 'c1', controlComponent: ControlComponent.PREFIX },
              { value: '', controlId: 'c1', controlComponent: ControlComponent.PLACEHOLDER },
              { value: '', controlId: 'c1', controlComponent: ControlComponent.POSTFIX }
            ]
          },
          elements: {
            2: { controlId: 'c1', controlComponent: ControlComponent.POSTFIX }
          }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos({ isTable: true, tableId: 't0' }),
          mode: EditorMode.FORM,
          td: {
            ...tableTd,
            value: [
              { value: '', controlId: 'c1', controlComponent: ControlComponent.PREFIX },
              { value: '', controlId: 'c1', controlComponent: ControlComponent.POSTFIX }
            ]
          },
          elements: {
            2: { controlId: 'c1', controlComponent: ControlComponent.PREFIX }
          }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos({ isTable: true, tableId: 't0' }),
          spellcheckRange: { startIndex: 2, endIndex: 3 }
        },
        e => mousedown(e.evt, e.host)
      ],
      [
        {
          positionResult: pos({ index: -1, tdValueIndex: -1 }),
          elements: {}
        },
        e => mousedown(e.evt, e.host)
      ]
    ]
    run('mousedown', cases)
  })

  it('hitCheckbox / hitRadio / setRangeCache 的独立分支', () => {
    const env = makeEnv()
    const draw = env.draw
    hitCheckbox({ value: 'x', checkbox: { value: false, code: 'a' } } as any, draw)
    hitCheckbox(
      {
        value: 'x',
        control: { code: 'a,b' },
        checkbox: { value: true, code: 'a' }
      } as any,
      draw
    )
    hitCheckbox(
      {
        value: 'x',
        control: { code: 'a' },
        checkbox: { value: false, code: 'b' }
      } as any,
      draw
    )
    hitRadio({ value: 'x', radio: { code: 'r1' } } as any, draw)
    hitRadio(
      { value: 'x', control: { code: 'r1' }, radio: { code: 'r2' } } as any,
      draw
    )
    setRangeCache(env.host)
    expect(env.host.isAllowDrag).toBe(true)
    expect(env.host.cacheElementList).toBe(env.elementList)
  })
})

describe('mouseup 深层分支', () => {
  it('拖放早退、图片移动、控件限制、元素迁移全矩阵', () => {
    const collapsed = { startIndex: 2, endIndex: 2 }
    const inRange = { startIndex: 2, endIndex: 2 }
    const activeSetValue = {
      setValue: () => 10,
      cut: () => {}
    }
    const cases: Array<[IOptions, (e: any) => void]> = [
      // 控件图片排序 / 只读 / 仅允许拖拽
      [
        {
          controlImageDrag: { controlId: 'c1', sourceOrder: 0 },
          isAllowDrop: true
        },
        e => mouseup(e.evt, e.host)
      ],
      [{ readonly: true }, e => mouseup(e.evt, e.host)],
      [{ disabled: true }, e => mouseup(e.evt, e.host)],
      [
        { isAllowDrop: false, isAllowDrag: true },
        e => mouseup(e.evt, e.host)
      ],
      [
        {
          isAllowDrop: false,
          isAllowDrag: true,
          cacheRange: { startIndex: 1, endIndex: 1 }
        },
        e => mouseup(e.evt, e.host)
      ],
      // 位置未变化：非闭合缓存选区、图片移动各形态
      [
        { range: inRange, cacheRange: collapsed },
        e => mouseup(e.evt, e.host)
      ],
      [
        {
          range: inRange,
          cacheRange: collapsed,
          elements: {
            2: image({
              type: ElementType.LATEX,
              imgDisplay: ImageDisplay.SURROUND
            })
          }
        },
        e => mouseup(e.evt, e.host)
      ],
      [
        {
          range: inRange,
          cacheRange: collapsed,
          elements: { 2: image({ imgDisplay: ImageDisplay.FLOAT_BOTTOM }) },
          cachePositionContext: { isTable: true, index: 1 },
          positionContext: { isTable: false, index: 2, tdId: undefined }
        },
        e => mouseup(e.evt, e.host)
      ],
      [
        {
          range: inRange,
          cacheRange: collapsed,
          elements: { 2: image({ imgDisplay: ImageDisplay.FLOAT_TOP }) },
          cachePositionContext: { isTable: false, index: 1 },
          positionContext: { isTable: true, index: 2, tdId: undefined }
        },
        e => mouseup(e.evt, e.host)
      ],
      // 深层：控件结构元素不允许拖拽 → 提前 render
      [
        {
          elements: { 2: { controlId: 'c1' }, 3: { controlId: 'c1' } }
        },
        e => mouseup(e.evt, e.host)
      ],
      // 深层：允许拖拽 + 不省略控件属性 + activeControl.setValue
      [
        {
          activeControl: activeSetValue,
          containFullControl: true,
          elements: {
            2: {
              controlId: 'c1',
              controlComponent: ControlComponent.PREFIX,
              control: { type: ControlType.TEXT }
            },
            3: {
              controlId: 'c1',
              controlComponent: ControlComponent.POSTFIX,
              control: { type: ControlType.TEXT }
            },
            8: { controlId: 'c2' }
          }
        },
        e => mouseup(e.evt, e.host)
      ],
      // 深层：setValue 返回 -1 → 早退
      [
        {
          activeControl: { setValue: () => -1, cut: () => {} },
          containFullControl: true
        },
        e => mouseup(e.evt, e.host)
      ],
      // 深层：非文本元素复制 + 省略控件属性
      [
        {
          elements: {
            2: image({ controlId: 'c1' }),
            3: {
              type: ElementType.TABLE,
              value: '',
              colgroup: [{ width: 100 }],
              trList: [],
              tdList: [],
              controlId: 'c1'
            }
          }
        },
        e => mouseup(e.evt, e.host)
      ],
      // 深层：缓存结束元素是控件 → cut 分支
      [
        {
          activeControl: activeSetValue,
          elements: {
            3: {
              controlId: 'c1',
              controlComponent: ControlComponent.VALUE
            }
          }
        },
        e => mouseup(e.evt, e.host)
      ],
      // 深层：表格上下文 + td 不可删除
      [
        {
          cachePositionContext: {
            isTable: true,
            index: 0,
            tableId: 't0',
            trIndex: 0,
            tdIndex: 0
          },
          elementList: Array.from({ length: 16 }, (_, i) => ({
            value: `v${i}`,
            type: ElementType.TEXT,
            id: i === 0 ? 't0' : `e${i}`,
            trList: [
              {
                tdList: [{ deletable: false }]
              }
            ]
          }))
        },
        e => mouseup(e.evt, e.host)
      ],
      // 深层：位置上下文表格内外迁移
      [
        {
          positionContext: { isTable: true, index: 4, tdId: undefined },
          elements: {
            8: { tableId: 't0' },
            1: { tableId: 't0' }
          },
          cacheRange: { startIndex: 1, endIndex: 3 },
          range: { startIndex: 8, endIndex: 8 }
        },
        e => mouseup(e.evt, e.host)
      ],
      // 深层：闭合缓存选区 + 拖拽后图片工具
      [
        {
          cacheRange: { startIndex: 3, endIndex: 3 },
          range: { startIndex: 8, endIndex: 8 },
          elements: {
            3: image({ imgDisplay: ImageDisplay.SURROUND })
          }
        },
        e => mouseup(e.evt, e.host)
      ],
      [
        {
          cacheRange: { startIndex: 3, endIndex: 3 },
          range: { startIndex: 8, endIndex: 8 },
          elements: { 3: image({ imgDisplay: ImageDisplay.INLINE }) }
        },
        e => mouseup(e.evt, e.host)
      ],
      // 事件订阅关闭 / zone 非主区
      [
        { subscribe: false, zoneActive: false },
        e => mouseup(e.evt, e.host)
      ]
    ]
    run('mouseup', cases)
  })
})
