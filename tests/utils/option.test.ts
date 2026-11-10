import { describe, expect, it } from 'vitest'
import { mergeOption } from '@/editor/utils/option'
import { EditorMode, PageMode } from '@/editor/dataset/enum/Editor'

describe('utils/option mergeOption', () => {
  it('无参时返回完整默认值', () => {
    const option = mergeOption()
    expect(option.mode).toBe(EditorMode.EDIT)
    expect(option.width).toBe(794)
    expect(option.height).toBe(1123)
    expect(option.defaultFont).toBe('Microsoft YaHei')
    expect(option.pageMode).toBe(PageMode.PAGING)
    // 嵌套默认值已补全
    expect(option.table).toBeDefined()
    expect(option.control).toBeDefined()
    expect(option.placeholder).toBeDefined()
    expect(option.scale).toBe(1)
  })

  it('覆盖顶层字段', () => {
    const option = mergeOption({ width: 1000, scale: 2 })
    expect(option.width).toBe(1000)
    expect(option.scale).toBe(2)
    // 其余默认值保留
    expect(option.height).toBe(1123)
    expect(option.defaultFont).toBe('Microsoft YaHei')
  })

  it('覆盖嵌套字段且不影响顶层默认', () => {
    const option = mergeOption({
      control: { placeholder: { color: '#FF0000' } as any }
    })
    expect(option.control.placeholder.color).toBe('#FF0000')
    // 顶层默认仍生效
    expect(option.scale).toBe(1)
    expect(option.height).toBe(1123)
  })

  it('顶层传入的字段优先级最高', () => {
    const option = mergeOption({ width: 500 } as any)
    expect(option.width).toBe(500)
  })
})
