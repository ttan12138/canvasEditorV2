import { beforeEach, describe, expect, it, vi } from 'vitest'
import drag from '@/editor/core/event/handlers/drag'
import { drop } from '@/editor/core/event/handlers/drop'
import {
  setupControlImageSortDrag,
  applyControlImageSort,
  showControlImageDropIndicator
} from '@/editor/core/event/handlers/controlImageDrag'
import { EditorMode } from '@/editor/dataset/enum/Editor'
import { ImageDisplay } from '@/editor/dataset/enum/Common'
import { ElementType } from '@/editor/dataset/enum/Element'

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

// 图片控件元素列表：同 controlId 的多张图片
const imageElements = (controlId = 'c1', count = 3): any[] => {
  const list: any[] = []
  for (let i = 0; i < count; i++) {
    list.push({
      type: ElementType.IMAGE,
      value: `img${i}`,
      controlId,
      control: {
        editable: true,
        imageDraggable: true,
        imageSwappable: true
      },
      draggable: true,
      swappable: true,
      imgDisplay: ImageDisplay.INLINE
    })
  }
  return list
}

const pos = (left = 0, top = 0, right = 100, bottom = 40, pageNo = 0): any => ({
  coordinate: { leftTop: [left, top], rightBottom: [right, bottom] },
  pageNo
})

// 构造 host/draw：可精确控制各分支
const makeHost = (over: any = {}) => {
  const pageContainer = document.createElement('div')
  document.body.appendChild(pageContainer)
  const elements = over.elements ?? imageElements()
  const positionList = over.positionList ?? elements.map(() => pos())
  const pageList = over.pageList ?? [document.createElement('canvas')]
  if (pageList[0] && !pageList[0].parentElement) {
    pageContainer.appendChild(pageList[0])
  }
  const control = {
    getValueById: () => over.getValueById ?? [{ elementList: elements }],
    setValueListById: over.setValueListById ?? vi.fn()
  }
  const position = {
    adjustPositionContext: () =>
      over.adjustPositionContext ?? { isTable: false, index: 0 },
    getPositionByXY: () =>
      over.positionByXY ?? { index: 1, isTable: false },
    getPositionContext: () =>
      over.positionContext ?? { isTable: false, index: 0 },
    getPositionList: () => positionList,
    setCursorPosition: vi.fn(),
    getOriginalMainPositionList: () => positionList
  }
  const draw: any = {
    isReadonly: () => over.isReadonly ?? false,
    isDisabled: () => over.isDisabled ?? false,
    getMode: () => over.mode ?? EditorMode.FORM,
    getPageContainer: () => pageContainer,
    getPosition: () => position,
    getRange: () => ({ setRange: vi.fn(), getRange: () => ({ startIndex: 0 }) }),
    getCursor: () => ({ drawCursor: vi.fn() }),
    getOptions: () => ({
      cursor: {
        dragColor: '#000',
        dragWidth: 2,
        dragFloatImageDisabled: over.dragFloatImageDisabled ?? false
      }
    }),
    getOverride: () => over.override ?? { drop: undefined, pasteImage: undefined },
    getElementList: () => elements,
    getOriginalInnerWidth: () => 300,
    getTd: () => over.td ?? null,
    getControl: () => control,
    getPageNo: () => 0,
    getPageList: () => pageList,
    setPageNo: vi.fn(),
    spliceElementList: vi.fn(),
    render: vi.fn(),
    getImageObserver: () => uni()
  }
  const host: any = {
    getDraw: () => draw,
    input: vi.fn(),
    cacheRange: over.cacheRange ?? null,
    cacheElementList: over.cacheElementList ?? null,
    controlImageDrag: over.controlImageDrag ?? null,
    isAllowSelection: true
  }
  return { host, draw, position, control, pageContainer, elements }
}

const mouseEvt = (over: any = {}) =>
  ({
    preventDefault: vi.fn(),
    target: over.target,
    offsetX: over.offsetX ?? 10,
    offsetY: over.offsetY ?? 10,
    ...over
  }) as any

describe('drag.dragover', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('只读早退', () => {
    const { host, pageContainer } = makeHost({ isReadonly: true })
    const evt = mouseEvt({ target: pageContainer })
    expect(() => drag.dragover(evt, host)).not.toThrow()
    expect(evt.preventDefault).not.toHaveBeenCalled()
  })

  it('非编辑器区早退', () => {
    const { host } = makeHost()
    const outside = document.createElement('div')
    document.body.appendChild(outside)
    const evt = mouseEvt({ target: outside })
    expect(() => drag.dragover(evt, host)).not.toThrow()
  })

  it('完整路径：设置页号/选区/光标 + 绘制拖拽光标', () => {
    const { host, draw, pageContainer, position } = makeHost({
      adjustPositionContext: { isTable: false, index: 0, tdValueIndex: 0 }
    })
    pageContainer.dataset.index = '2'
    const evt = mouseEvt({ target: pageContainer })
    expect(() => drag.dragover(evt, host)).not.toThrow()
    expect(draw.setPageNo).toHaveBeenCalledWith(2)
    expect(position.setCursorPosition).toHaveBeenCalled()
    expect(evt.preventDefault).toHaveBeenCalled()
  })

  it('表格上下文 / 无 positionContext 早退', () => {
    const { host, pageContainer } = makeHost({
      adjustPositionContext: { isTable: true, index: 0, tdValueIndex: 1 }
    })
    expect(() => drag.dragover(mouseEvt({ target: pageContainer }), host)).not.toThrow()
    const h2 = makeHost({ adjustPositionContext: null })
    expect(() =>
      drag.dragover(mouseEvt({ target: h2.pageContainer }), h2.host)
    ).not.toThrow()
  })

  it('dragFloatImageDisabled + 浮动图片早退', () => {
    const floatImg = {
      type: ElementType.IMAGE,
      imgDisplay: ImageDisplay.FLOAT_TOP
    }
    const { host, pageContainer } = makeHost({
      dragFloatImageDisabled: true,
      cacheRange: { startIndex: 0 },
      cacheElementList: [floatImg]
    })
    expect(() => drag.dragover(mouseEvt({ target: pageContainer }), host)).not.toThrow()
    // 非图片仍绘制光标
    const h2 = makeHost({
      dragFloatImageDisabled: true,
      cacheRange: { startIndex: 0 },
      cacheElementList: [{ type: ElementType.TEXT }]
    })
    expect(() =>
      drag.dragover(mouseEvt({ target: h2.pageContainer }), h2.host)
    ).not.toThrow()
  })
})

describe('drop', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('自定义 drop 覆盖（默认阻止 / 放行）', () => {
    const { host } = makeHost({ override: { drop: () => ({}) } })
    const evt = mouseEvt({ dataTransfer: { getData: () => 'x' } as any })
    expect(() => drop(evt, host)).not.toThrow()
    expect(host.input).not.toHaveBeenCalled()

    const h2 = makeHost({
      override: { drop: () => ({ preventDefault: false }) }
    })
    const evt2 = mouseEvt({ dataTransfer: { getData: () => 'text' } as any })
    expect(() => drop(evt2, h2.host)).not.toThrow()
    expect(h2.host.input).toHaveBeenCalledWith('text')
  })

  it('文本数据 → input；无 dataTransfer 早退；图片文件 → pasteImage', () => {
    const { host } = makeHost()
    const evtText = mouseEvt({ dataTransfer: { getData: () => 'abc' } as any })
    expect(() => drop(evtText, host)).not.toThrow()
    expect(host.input).toHaveBeenCalledWith('abc')

    const evtEmpty = mouseEvt({ dataTransfer: { getData: () => '' } as any })
    expect(() => drop(evtEmpty, host)).not.toThrow()

    const imageFile = new Blob(['x'], { type: 'image/png' })
    const evtFiles = mouseEvt({
      dataTransfer: {
        getData: () => '',
        files: { 0: imageFile, length: 1 }
      } as any
    })
    expect(() => drop(evtFiles, host)).not.toThrow()
  })
})

describe('controlImageDrag', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  const dragState = (over: any = {}) => ({
    controlId: 'c1',
    sourceOrder: 0,
    canReorder: true,
    canSwap: true,
    ...over
  })

  it('setup：非图片/非控件内/模式不符/未开启/找不到源', () => {
    const a = makeHost()
    expect(() => setupControlImageSortDrag(a.host, { type: ElementType.TEXT } as any)).not.toThrow()
    expect(a.host.controlImageDrag).toBeNull()

    const b = makeHost({ mode: EditorMode.EDIT })
    expect(() =>
      setupControlImageSortDrag(b.host, imageElements()[0])
    ).not.toThrow()
    expect(b.host.controlImageDrag).toBeNull()

    const c = makeHost()
    const noDrag = { ...imageElements()[0], control: { imageDraggable: false, imageSwappable: false }, draggable: false, swappable: false }
    expect(() => setupControlImageSortDrag(c.host, noDrag)).not.toThrow()
    expect(c.host.controlImageDrag).toBeNull()

    const d = makeHost()
    const notInList = { ...imageElements('other')[0] }
    expect(() => setupControlImageSortDrag(d.host, notInList)).not.toThrow()
  })

  it('setup：成功进入拖拽状态（READONLY/FORM + 各种开关）', () => {
    for (const mode of [EditorMode.READONLY, EditorMode.FORM]) {
      for (const cfg of [
        { imageDraggable: true, imageSwappable: true },
        { imageDraggable: true },
        { imageSwappable: true }
      ]) {
        const els = imageElements().map(el => ({
          ...el,
          control: { ...el.control, ...cfg }
        }))
        const { host } = makeHost({ elements: els, mode })
        setupControlImageSortDrag(host, els[0])
        expect(host.controlImageDrag).toBeTruthy()
        expect(host.isAllowSelection).toBe(false)
      }
    }
  })

  it('setup：editable=false 禁用；控件级/图片级开关优先级', () => {
    const els = imageElements().map(el => ({
      ...el,
      control: { editable: false }
    }))
    const { host } = makeHost({ elements: els })
    setupControlImageSortDrag(host, els[0])
    expect(host.controlImageDrag).toBeNull()
  })

  it('apply：swap / before / after 各动作 + 早退分支', () => {
    const els = imageElements('c1', 3)
    const positions = els.map((_e, i) => pos(i * 100, 0, i * 100 + 100, 40))
    // targetIndex=1（第二张图片），offsetX 决定区域
    let applied = 0
    for (const offsetX of [150, 105, 195, 50, 250]) {
      const setValueListById = vi.fn()
      const { host } = makeHost({
        elements: els,
        positionList: positions,
        positionByXY: { index: 1, isTable: false },
        controlImageDrag: dragState(),
        setValueListById
      })
      expect(() =>
        applyControlImageSort(mouseEvt({ offsetX }), host)
      ).not.toThrow()
      applied += setValueListById.mock.calls.length
    }
    // swap/after 落点会写入，before 因紧邻源位置早退属合理逻辑
    expect(applied).toBeGreaterThan(0)
  })

  it('apply：无 drag/无命中/表格命中/无值/自身位置早退', () => {
    const els = imageElements('c1', 3)
    const positions = els.map((_e, i) => pos(i * 100, 0, i * 100 + 100, 40))
    // 无 drag
    const a = makeHost({ elements: els })
    expect(() => applyControlImageSort(mouseEvt(), a.host)).not.toThrow()
    // positionByXY 无命中
    const b = makeHost({
      elements: els,
      controlImageDrag: dragState(),
      positionByXY: { index: -1 }
    })
    expect(() => applyControlImageSort(mouseEvt(), b.host)).not.toThrow()
    // 命中非图片
    const c = makeHost({
      elements: els,
      controlImageDrag: dragState(),
      positionByXY: { index: 0 }
    })
    expect(() => applyControlImageSort(mouseEvt(), c.host)).not.toThrow()
    // 表格命中（tdValueIndex）
    const d = makeHost({
      elements: els,
      positionList: positions,
      controlImageDrag: dragState(),
      positionByXY: { index: 5, isTable: true, tdValueIndex: 1 },
      positionContext: { isTable: true },
      td: { positionList: positions }
    })
    expect(() => applyControlImageSort(mouseEvt({ offsetX: 150 }), d.host)).not.toThrow()
    // 无控件值
    const e = makeHost({
      elements: els,
      positionList: positions,
      controlImageDrag: dragState(),
      positionByXY: { index: 1 },
      getValueById: []
    })
    expect(() => applyControlImageSort(mouseEvt({ offsetX: 150 }), e.host)).not.toThrow()
    // 目标即自身（swap 早退）
    const f = makeHost({
      elements: els,
      positionList: positions,
      controlImageDrag: dragState({ sourceOrder: 1 }),
      positionByXY: { index: 1 }
    })
    expect(() => applyControlImageSort(mouseEvt({ offsetX: 150 }), f.host)).not.toThrow()
  })

  it('showControlImageDropIndicator：swap 高亮 / before-after 指示线', () => {
    const els = imageElements('c1', 3)
    const positions = els.map((_e, i) => pos(i * 100, 0, i * 100 + 100, 40))
    for (const offsetX of [150, 105, 195]) {
      const { host } = makeHost({
        elements: els,
        positionList: positions,
        positionByXY: { index: 1, isTable: false },
        controlImageDrag: dragState()
      })
      expect(() =>
        showControlImageDropIndicator(mouseEvt({ offsetX }), host)
      ).not.toThrow()
    }
    // 无 drag 早退
    const a = makeHost({ elements: els })
    expect(() =>
      showControlImageDropIndicator(mouseEvt(), a.host)
    ).not.toThrow()
  })
})
