import { describe, expect, it } from 'vitest'
import { compareElementList, diffText } from '@/editor/utils/diff'
import { TraceType } from '@/editor/dataset/enum/Trace'
import type { IElement } from '@/editor/interface/Element'

const hasTrace = (el: IElement, type: TraceType) =>
  !!el.trace?.some(t => t.type === type)

describe('utils/diff diffText（Myers 字符级差分）', () => {
  it('相同文本输出 single equal', () => {
    const ops = diffText('hello', 'hello')
    expect(ops).toEqual([{ type: 'equal', value: 'hello' }])
  })

  it('尾部替换输出 equal+delete+insert', () => {
    const ops = diffText('abc', 'abd')
    expect(ops[0]).toEqual({ type: 'equal', value: 'ab' })
    expect(ops.some(o => o.type === 'delete' && o.value === 'c')).toBe(true)
    expect(ops.some(o => o.type === 'insert' && o.value === 'd')).toBe(true)
  })

  it('新增后缀', () => {
    const ops = diffText('abc', 'abcd')
    expect(ops[0]).toEqual({ type: 'equal', value: 'abc' })
    expect(ops[ops.length - 1]).toEqual({ type: 'insert', value: 'd' })
  })
})

describe('utils/diff compareElementList（文档对比留痕）', () => {
  it('相同内容无留痕', () => {
    const list: IElement[] = [{ value: 'hello' }, { value: '\n' }]
    const result = compareElementList(list, list)
    expect(result.length).toBe(list.length)
    expect(result.some(el => el.trace?.length)).toBe(false)
  })

  it('新版本新增文本标记 INSERTED', () => {
    const oldList: IElement[] = [{ value: 'a' }, { value: '\n' }]
    const newList: IElement[] = [{ value: 'ab' }, { value: '\n' }]
    const result = compareElementList(oldList, newList)
    const inserted = result.filter(el => hasTrace(el, TraceType.INSERTED))
    expect(inserted.length).toBeGreaterThan(0)
    expect(inserted.some(el => el.value === 'b')).toBe(true)
  })

  it('新版本删除文本标记 DELETED', () => {
    const oldList: IElement[] = [{ value: 'ab' }, { value: '\n' }]
    const newList: IElement[] = [{ value: 'a' }, { value: '\n' }]
    const result = compareElementList(oldList, newList)
    const deleted = result.filter(el => hasTrace(el, TraceType.DELETED))
    expect(deleted.some(el => el.value === 'b')).toBe(true)
  })

  it('控件锚点按 contentId/controlId 配对并递归合并子内容', () => {
    const oldList: IElement[] = [
      {
        controlId: 'c1',
        type: 'control' as any,
        control: { conceptId: 'cc1', value: [{ value: 'old' }] }
      } as any,
      { value: '\n' }
    ]
    const newList: IElement[] = [
      {
        controlId: 'c1',
        type: 'control' as any,
        control: { conceptId: 'cc1', value: [{ value: 'new' }] }
      } as any,
      { value: '\n' }
    ]
    const result = compareElementList(oldList, newList)
    // 控件被保留（配对成功），其内 old->new 产生留痕
    const controlEl = result.find(el => el.controlId === 'c1')
    expect(controlEl).toBeDefined()
    const inner = controlEl!.control!.value!
    expect(inner.some(el => hasTrace(el, TraceType.INSERTED))).toBe(true)
  })
})
