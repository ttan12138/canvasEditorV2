import { describe, it, expect, afterEach } from 'vitest'
import { createTestEditor, waitMacroTask } from '../../factories/editor'
import { ElementType } from '@/editor/dataset/enum/Element'
import { EditorMode } from '@/editor/dataset/enum/Editor'
import { ZERO } from '@/editor/dataset/constant/Common'
import type { IElement } from '@/editor/interface/Element'

// 需求 8.5：setChildTable 仅表单/只读模式写入；编辑模式始终不写入。
// 隐藏（空数据）单元格在写入数据后应重新显示。
function buildSubTableDoc(): IElement[] {
  const td: any = {
    colspan: 1,
    rowspan: 1,
    hasChild: true,
    name: 'subA',
    childTables: {
      header: [
        { key: 'name', name: '姓名', width: 100 },
        { key: 'age', name: '年龄', width: 60 }
      ],
      rowHeight: 30
    },
    childData: [],
    value: [{ value: ZERO }]
  }
  return [
    {
      type: ElementType.TABLE,
      value: '',
      colgroup: [{ width: 300 }],
      trList: [{ height: 40, tdList: [td] }]
    } as IElement
  ]
}

describe('setChildTable (需求 8.5)', () => {
  let ctx: ReturnType<typeof createTestEditor>
  afterEach(() => ctx?.destroy())

  it('表单模式：写入子表数据后单元格可见且数据进入文档', () => {
    ctx = createTestEditor({
      data: { header: [], main: buildSubTableDoc(), footer: [] },
      options: { mode: EditorMode.FORM }
    })
    ctx.editor.command.setChildTable({
      name: 'subA',
      data: [
        ['张三', 20],
        ['李四', 25]
      ]
    })
    const text = ctx.editor.command.getText().main
    expect(text).toContain('张三')
    expect(text).toContain('李四')
  })

  it('只读模式：写入子表数据后数据进入文档', () => {
    ctx = createTestEditor({
      data: { header: [], main: buildSubTableDoc(), footer: [] },
      options: { mode: EditorMode.READONLY }
    })
    ctx.editor.command.setChildTable({ name: 'subA', data: [['张三', 20]] })
    expect(ctx.editor.command.getText().main).toContain('张三')
  })

  it('编辑模式：始终不写入子表数据', () => {
    ctx = createTestEditor({
      data: { header: [], main: buildSubTableDoc(), footer: [] },
      options: { mode: EditorMode.EDIT }
    })
    ctx.editor.command.setChildTable({ name: 'subA', data: [['张三', 20]] })
    expect(ctx.editor.command.getText().main).not.toContain('张三')
  })

  it('表单模式：清空数据后单元格隐藏（数据不再渲染）', () => {
    ctx = createTestEditor({
      data: { header: [], main: buildSubTableDoc(), footer: [] },
      options: { mode: EditorMode.FORM }
    })
    ctx.editor.command.setChildTable({ name: 'subA', data: [['张三', 20]] })
    expect(ctx.editor.command.getText().main).toContain('张三')
    ctx.editor.command.setChildTable({ name: 'subA', data: [] })
    expect(ctx.editor.command.getText().main).not.toContain('张三')
  })

  it('表单模式写入后切回编辑模式：编辑模式仅显示占位符（不含实际数据），切回表单数据恢复', async () => {
    ctx = createTestEditor({
      data: { header: [], main: buildSubTableDoc(), footer: [] },
      options: { mode: EditorMode.FORM }
    })
    ctx.editor.command.setChildTable({ name: 'subA', data: [['张三', 20]] })
    expect(ctx.editor.command.getText().main).toContain('张三')
    // 切回编辑模式：不应再显示实际数据（仅占位符/表头预览）
    ctx.editor.command.executeMode(EditorMode.EDIT)
    await waitMacroTask()
    expect(ctx.editor.command.getText().main).not.toContain('张三')
    // 再切回表单模式：数据应恢复显示
    ctx.editor.command.executeMode(EditorMode.FORM)
    await waitMacroTask()
    expect(ctx.editor.command.getText().main).toContain('张三')
  })
})
