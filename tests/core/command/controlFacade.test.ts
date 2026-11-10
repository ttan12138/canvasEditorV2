import { describe, it, expect, afterEach, vi } from 'vitest'
import { Draw } from '@/editor/core/draw/Draw'

vi.mock('@/editor/core/worker/WorkerManager', () => ({
  WorkerManager: class {
    getGroupIds() {
      return Promise.resolve([])
    }
    getWordCount() {
      return Promise.resolve(0)
    }
    getCatalog() {
      return Promise.resolve(null)
    }
    getValue() {
      return Promise.resolve({ data: { main: [] } })
    }
    destroy() {}
  }
}))
import { EventBus } from '@/editor/core/event/eventbus/EventBus'
import { Listener } from '@/editor/core/listener/Listener'
import { Override } from '@/editor/core/override/Override'
import { mergeOption } from '@/editor/utils/option'
import { formatElementList } from '@/editor/utils/element'
import { ControlType, ControlComponent } from '@/editor/dataset/enum/Control'
import { ElementType } from '@/editor/dataset/enum/Element'
import { EditorZone } from '@/editor/dataset/enum/Editor'
import type { IElement } from '@/editor/interface/Element'
import { createTestEditor } from '../../factories/editor'

// ============ Control 类直接测试（需自建 Draw 获取 Control 实例） ============
function buildDraw(main: IElement[], options: Record<string, any> = {}): Draw {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const opts = mergeOption({ width: 794, height: 1123, ...options })
  // formatElementList 为原地修改，返回 undefined，需调用后使用原数组
  formatElementList(main, {
    editorOptions: opts,
    isForceCompensation: true
  })
  const data = {
    header: [{ value: '\n' }] as IElement[],
    main,
    footer: [{ value: '\n' }] as IElement[]
  }
  const draw = new Draw(
    container,
    opts,
    data,
    new Listener(),
    new EventBus(),
    new Override()
  )
  draw.render()
  return draw
}

function textControl(
  conceptId: string,
  value: string | null,
  placeholder?: string
): IElement {
  return {
    type: ElementType.CONTROL,
    value: '',
    control: {
      conceptId,
      type: ControlType.TEXT,
      value: value === null ? null : [{ value }],
      ...(placeholder ? { placeholder } : {})
    }
  }
}

describe('Control 类核心方法', () => {
  let draw: Draw | null = null
  afterEach(() => {
    draw?.destroy()
    draw = null
  })

  it('getControlIdByPlaceholder 命中占位符 / 未命中返回 null', () => {
    draw = buildDraw([textControl('name', null, '姓名')])
    const control = draw.getControl()
    const id = control.getControlIdByPlaceholder('姓名')
    expect(typeof id).toBe('string')
    expect(id!.length).toBeGreaterThan(0)
    expect(control.getControlIdByPlaceholder('不存在')).toBeNull()
  })

  it('getDistinctPlaceholders 去重并收集全部占位符', () => {
    draw = buildDraw([
      textControl('a', null, '姓名'),
      textControl('b', null, '姓名'),
      textControl('c', null, '年龄')
    ])
    const placeholders = draw.getControl().getDistinctPlaceholders()
    expect(placeholders).toContain('姓名')
    expect(placeholders).toContain('年龄')
    expect(placeholders.length).toBe(2)
  })

  it('getControlsValue 返回带 placeholder 的文本控件值', () => {
    draw = buildDraw([textControl('name', '张三', '姓名')])
    const result = draw.getControl().getControlsValue()
    expect(result.length).toBe(1)
    expect(result[0].name).toBe('姓名')
    expect(result[0].value).toBe('张三')
    expect(result[0].type).toBe(ControlType.TEXT)
    expect(result[0].zone).toBe(EditorZone.MAIN)
  })

  it('getValueById 按 conceptId 取 SELECT 控件 code 与 innerText', () => {
    const main: IElement[] = [
      {
        type: ElementType.CONTROL,
        value: '',
        control: {
          conceptId: 'sex',
          type: ControlType.SELECT,
          code: 'a',
          valueSets: [
            { code: 'a', value: '男' },
            { code: 'b', value: '女' }
          ]
        }
      }
    ]
    draw = buildDraw(main)
    const result = draw.getControl().getValueById({ conceptId: 'sex' })
    expect(result.length).toBe(1)
    expect(result[0].value).toBe('a')
    expect(result[0].innerText).toBe('男')
  })

  it('getValueById 按 id 取控件值', () => {
    draw = buildDraw([textControl('name', '张三', '姓名')])
    const control = draw.getControl()
    const id = control.getControlIdByPlaceholder('姓名')!
    const result = control.getValueById({ id })
    expect(result.length).toBe(1)
    expect(result[0].value).toBe('张三')
  })

  it('getValueById 无匹配条件时返回空数组', () => {
    draw = buildDraw([textControl('name', '张三', '姓名')])
    const result = draw.getControl().getValueById({})
    expect(result).toEqual([])
  })

  it('filterAssistElement 过滤前后缀辅助元素并保留正文', () => {
    const main: IElement[] = [
      {
        value: '',
        controlId: 'c1',
        controlComponent: ControlComponent.PREFIX,
        control: { type: ControlType.TEXT }
      },
      {
        value: 'A',
        controlId: 'c1',
        controlComponent: ControlComponent.VALUE,
        control: { type: ControlType.TEXT }
      },
      {
        value: '',
        controlId: 'c1',
        controlComponent: ControlComponent.POSTFIX,
        control: { type: ControlType.TEXT }
      },
      { value: '普通文本' }
    ]
    draw = buildDraw([])
    const filtered = draw.getControl().filterAssistElement(main)
    expect(
      filtered.some(e => e.controlComponent === ControlComponent.PREFIX)
    ).toBe(false)
    expect(
      filtered.some(e => e.controlComponent === ControlComponent.POSTFIX)
    ).toBe(false)
    expect(filtered.some(e => e.value === '普通文本')).toBe(true)
  })

  it('getList 返回文档内控件元素', () => {
    draw = buildDraw([textControl('name', '张三', '姓名')])
    const list = draw.getControl().getList()
    expect(list.length).toBeGreaterThanOrEqual(1)
    expect(list[0].controlId).toBeTruthy()
  })

  it('getActiveControl 无活动控件时返回 null', () => {
    draw = buildDraw([])
    expect(draw.getControl().getActiveControl()).toBeNull()
  })

  it('getValueRange 在控件选区内返回范围', () => {
    draw = buildDraw([textControl('name', '张三')])
    const control = draw.getControl()
    const el = draw.getOriginalMainElementList()
    const idx = el.findIndex(e => e.controlId)
    expect(idx).toBeGreaterThanOrEqual(0)
    const result = control.getValueRange({
      elementList: el,
      range: { startIndex: idx, endIndex: idx }
    })
    expect(result).not.toBeNull()
    expect(typeof result!.startIndex).toBe('number')
    expect(typeof result!.endIndex).toBe('number')
  })

  it('getIsRangeWithinControl 返回布尔', () => {
    draw = buildDraw([])
    expect(typeof draw.getControl().getIsRangeWithinControl()).toBe('boolean')
  })
})

// ============ CommandAdapt 门面（经 Editor.command 委托） ============
describe('CommandAdapt 控件门面', () => {
  let ctx: ReturnType<typeof createTestEditor>
  afterEach(() => ctx?.destroy())

  it('getControlValue 按 conceptId 取文本控件值', () => {
    ctx = createTestEditor({ data: [textControl('name', '张三', '姓名')] })
    const result = ctx.editor.command.getControlValue({ conceptId: 'name' })
    expect(result.length).toBe(1)
    expect(result[0].value).toBe('张三')
  })

  it('executeSetControlValue 更新文本控件值', () => {
    ctx = createTestEditor({ data: [textControl('name', null, '姓名')] })
    ctx.editor.command.executeSetControlValue({ conceptId: 'name', value: '李四' })
    const result = ctx.editor.command.getControlValue({ conceptId: 'name' })
    expect(result[0].value).toBe('李四')
  })

  it('executeSetControlValueList 批量更新多个控件', () => {
    ctx = createTestEditor({
      data: [
        textControl('a', null),
        textControl('b', null)
      ]
    })
    ctx.editor.command.executeSetControlValueList([
      { conceptId: 'a', value: '1' },
      { conceptId: 'b', value: '2' }
    ])
    expect(
      ctx.editor.command.getControlValue({ conceptId: 'a' })[0].value
    ).toBe('1')
    expect(
      ctx.editor.command.getControlValue({ conceptId: 'b' })[0].value
    ).toBe('2')
  })

  it('executeSetControlValue isOverwrite=false 不覆盖已有值', () => {
    ctx = createTestEditor({ data: [textControl('a', '旧值')] })
    ctx.editor.command.executeSetControlValue({
      conceptId: 'a',
      value: '新值',
      isOverwrite: false
    })
    expect(
      ctx.editor.command.getControlValue({ conceptId: 'a' })[0].value
    ).toBe('旧值')
  })

  it('getControlsValue 返回带 placeholder 的文本控件值', () => {
    ctx = createTestEditor({ data: [textControl('name', '张三', '姓名')] })
    const result = ctx.editor.command.getControlsValue()
    expect(result.length).toBe(1)
    expect(result[0].name).toBe('姓名')
    expect(result[0].value).toBe('张三')
  })

  it('getControlList 返回控件元素', () => {
    ctx = createTestEditor({ data: [textControl('name', '张三')] })
    const list = ctx.editor.command.getControlList()
    expect(list.length).toBeGreaterThanOrEqual(1)
    expect(list[0].controlId).toBeTruthy()
  })

  it('executeSetControlExtension 写入扩展属性', () => {
    ctx = createTestEditor({ data: [textControl('name', '张三')] })
    ctx.editor.command.executeSetControlExtension({
      conceptId: 'name',
      extension: { tag: 'x' }
    })
    const result = ctx.editor.command.getControlValue({ conceptId: 'name' })
    expect((result[0] as any).extension).toEqual({ tag: 'x' })
  })

  it('executeSetControlExtensionList 批量写入扩展属性', () => {
    ctx = createTestEditor({
      data: [textControl('a', '1'), textControl('b', '2')]
    })
    ctx.editor.command.executeSetControlExtensionList([
      { conceptId: 'a', extension: { tag: 'A' } },
      { conceptId: 'b', extension: { tag: 'B' } }
    ])
    const ra = ctx.editor.command.getControlValue({ conceptId: 'a' })
    const rb = ctx.editor.command.getControlValue({ conceptId: 'b' })
    expect((ra[0] as any).extension).toEqual({ tag: 'A' })
    expect((rb[0] as any).extension).toEqual({ tag: 'B' })
  })

  it('executeSetControlProperties 修改控件属性', () => {
    ctx = createTestEditor({ data: [textControl('name', '张三')] })
    expect(() => {
      ctx.editor.command.executeSetControlProperties({
        conceptId: 'name',
        properties: { required: true }
      })
    }).not.toThrow()
    const result = ctx.editor.command.getControlValue({ conceptId: 'name' })
    expect((result[0] as any).required).toBe(true)
  })

  it('executeSetControlPropertiesList 批量修改控件属性', () => {
    ctx = createTestEditor({
      data: [textControl('a', '1'), textControl('b', '2')]
    })
    expect(() => {
      ctx.editor.command.executeSetControlPropertiesList([
        { conceptId: 'a', properties: { required: true } },
        { conceptId: 'b', properties: { disabled: true } }
      ])
    }).not.toThrow()
    const ra = ctx.editor.command.getControlValue({ conceptId: 'a' })
    const rb = ctx.editor.command.getControlValue({ conceptId: 'b' })
    expect((ra[0] as any).required).toBe(true)
    expect((rb[0] as any).disabled).toBe(true)
  })

  it('executeSetControlHighlight 不抛错', () => {
    ctx = createTestEditor({ data: [textControl('name', '张三')] })
    expect(() => {
      ctx.editor.command.executeSetControlHighlight([
        { ruleList: [{ keyword: '张三' }] }
      ])
    }).not.toThrow()
  })

  it('executeClearAnnotation 不抛错', () => {
    ctx = createTestEditor()
    expect(() => ctx.editor.command.executeClearAnnotation()).not.toThrow()
  })

  it('executeSetZone 切换编辑区不抛错', () => {
    ctx = createTestEditor()
    expect(() =>
      ctx.editor.command.executeSetZone(EditorZone.HEADER)
    ).not.toThrow()
    expect(() =>
      ctx.editor.command.executeSetZone(EditorZone.MAIN)
    ).not.toThrow()
  })

  it('executeLocationGroup 未命中分组不抛错', () => {
    ctx = createTestEditor()
    expect(() =>
      ctx.editor.command.executeLocationGroup('no-such-group')
    ).not.toThrow()
  })

  it('getValue 返回完整文档数据结构', () => {
    ctx = createTestEditor({ data: [textControl('name', '张三')] })
    const value = ctx.editor.command.getValue()
    expect(Array.isArray(value.data.main)).toBe(true)
    expect(value.data.main.length).toBeGreaterThan(0)
  })

  it('setValue 替换文档数据并重渲染', () => {
    ctx = createTestEditor()
    ctx.editor.command.executeSetValue({ main: [{ value: 'hello' }, { value: '\n' }] })
    const value = ctx.editor.command.getValue()
    const joined = value.data.main.map((e: IElement) => e.value).join('')
    expect(joined).toContain('hello')
  })

  it('getGroupIds 返回数组', async () => {
    ctx = createTestEditor()
    const ids = await ctx.editor.command.getGroupIds()
    expect(Array.isArray(ids)).toBe(true)
  })
})
