import { describe, expect, it } from 'vitest'
import {
  formatElementContext,
  refreshPlaceholderElements,
  convertElementToDom,
  createDomFromElementList,
  getElementListByHTML,
  getTextFromElementList,
  zipElementList
} from '@/editor/utils/element'
import { ElementType } from '@/editor/dataset/enum/Element'
import { ControlComponent } from '@/editor/dataset/enum/Control'
import { EditorMode } from '@/editor/dataset/enum/Editor'
import { ZERO } from '@/editor/dataset/constant/Common'
import { createOptions } from '../factories/options'
import type { IElement } from '@/editor/interface/Element'

const opts = () => createOptions() as any

describe('element 深层补测', () => {
  describe('convertElementToDom', () => {
    it('默认 span / sup / sub 与全部样式属性', () => {
      const o = opts()
      expect(convertElementToDom({ value: 'x' } as IElement, o).tagName).toBe(
        'SPAN'
      )
      expect(
        convertElementToDom(
          { value: 'x', type: ElementType.SUPERSCRIPT } as IElement,
          o
        ).tagName
      ).toBe('SUP')
      expect(
        convertElementToDom(
          { value: 'x', type: ElementType.SUBSCRIPT } as IElement,
          o
        ).tagName
      ).toBe('SUB')
      const dom = convertElementToDom(
        {
          value: `a${ZERO}b`,
          font: 'Arial',
          rowFlex: 'center',
          color: '#f00',
          bold: true,
          italic: true,
          size: 20,
          highlight: '#ff0',
          underline: true,
          strikeout: true,
          textDecoration: { style: 'dashed' },
          rowMargin: 1.5,
          type: ElementType.TEXT
        } as any,
        o
      ) as HTMLElement
      expect(dom.style.fontFamily).toBe('Arial')
      expect(dom.style.color).toBe('rgb(255, 0, 0)')
      expect(dom.style.fontWeight).toBe('600')
      expect(dom.style.fontStyle).toBe('italic')
      expect(dom.style.fontSize).toBe('20px')
      expect(dom.style.backgroundColor).toBe('rgb(255, 255, 0)')
      expect(dom.style.textDecoration).toContain('underline')
      expect(dom.style.textDecoration).toContain('line-through')
      expect(dom.getAttribute('data-type')).toBe(ElementType.TEXT)
      expect(dom.style.lineHeight).toBe('1.5')
      expect(dom.innerText).toContain('a')
      // 无 textDecoration.style → 默认 solid
      const dom2 = convertElementToDom(
        { value: 'x', underline: true } as IElement,
        o
      ) as HTMLElement
      expect(dom2.style.textDecorationStyle).toBe('solid')
    })
  })

  describe('formatElementContext', () => {
    const source = (): IElement[] => [
      {
        value: 'anchor',
        type: ElementType.TEXT,
        font: 'Arial',
        color: '#f00',
        bold: true,
        title: { disabled: false },
        titleId: 'ti1',
        listId: 'l1',
        tableId: 't1',
        trId: 'tr1',
        tdId: 'td1',
        areaId: 'a1'
      } as any,
      { value: 'next' } as IElement
    ]

    it('基本复制上下文属性', () => {
      const target = [{ value: 'x' }, { value: 'y' }] as IElement[]
      formatElementContext(source(), target, 0, { editorOptions: opts() })
      expect(target[0].tableId).toBe('t1')
      expect(target[0].trId).toBe('tr1')
      expect(target[0].tdId).toBe('td1')
    })

    it('anchorIndex 无锚点早退', () => {
      const target = [{ value: 'x' }] as IElement[]
      expect(() =>
        formatElementContext(source(), target, 99, { editorOptions: opts() })
      ).not.toThrow()
    })

    it('title.disabled 非 DESIGN 时忽略标题属性', () => {
      const src = source()
      ;(src[0] as any).title = { disabled: true, titleId: 'ti1' }
      const target = [{ value: 'x' }] as IElement[]
      formatElementContext(src, target, 0, { editorOptions: opts() })
      expect(target[0].titleId).toBeUndefined()
    })

    it('DESIGN 模式保留标题属性', () => {
      const src = source()
      ;(src[0] as any).title = { disabled: true, titleId: 'ti1' }
      const o = opts()
      o.mode = EditorMode.DESIGN
      const target = [{ value: 'x' }] as IElement[]
      formatElementContext(src, target, 0, { editorOptions: o })
      expect(target[0].titleId).toBe('ti1')
    })

    it('isBreakWhenWrap + 换行 / 列表 / valueList 递归 / 块元素', () => {
      const src = [
        { value: 'anchor', tableId: 't1', trId: 'tr1', tdId: 'td1' }
      ] as IElement[]
      const target = [
        { value: `${ZERO}x`, type: ElementType.LIST },
        { value: 'a', valueList: [{ value: 'b' }] },
        { value: '', type: ElementType.TABLE }
      ] as any
      expect(() =>
        formatElementContext(src, target, 0, {
          editorOptions: opts(),
          isBreakWhenWrap: true,
          ignoreContextKeys: ['tableId']
        })
      ).not.toThrow()
      expect(target[0].tableId).toBeUndefined()
    })
  })

  describe('refreshPlaceholderElements', () => {
    const editorOptions = (maxLength?: number): any => ({
      placeholder: { size: 14, font: 'Arial', maxLength },
      control: { placeholderColor: '#999' },
      background: { color: '#fff' }
    })

    const placeholder = (id: string): IElement =>
      ({
        value: 'p',
        controlComponent: ControlComponent.PLACEHOLDER,
        controlId: id,
        control: { placeholder: '请输入内容' }
      }) as any

    it('普通占位符重建；maxLength 截断', () => {
      const list = [placeholder('c1'), { value: 'x' } as IElement]
      refreshPlaceholderElements(list, editorOptions(3))
      expect(list.length).toBe(4)
      expect(list[0].size).toBe(14)
      expect(list[0].color).toBe('#999')
    })

    it('maxLength=0 强制 1 字符 + 背景色', () => {
      const list = [placeholder('c1')]
      refreshPlaceholderElements(list, editorOptions(0))
      expect(list.length).toBe(1)
      expect(list[0].color).toBe('#fff')
    })

    it('maxLength=-1 不限制；含换行字符用 ZERO', () => {
      const list = [
        {
          ...placeholder('c1'),
          control: { placeholder: 'ab\ncd' }
        } as any
      ]
      refreshPlaceholderElements(list, editorOptions(-1))
      expect(list.length).toBe(5)
      expect(list.map(el => el.value)).toContain(ZERO)
    })

    it('表格内占位符递归重建', () => {
      const list = [
        {
          value: '',
          type: ElementType.TABLE,
          trList: [
            {
              tdList: [
                { value: [placeholder('c1')] },
                { value: [{ value: 'x' } as IElement] }
              ]
            }
          ]
        } as any,
        { value: 'tail' } as IElement
      ]
      expect(() =>
        refreshPlaceholderElements(list, editorOptions(2))
      ).not.toThrow()
      expect(list[0].trList[0].tdList[0].value.length).toBe(2)
    })

    it('连续同 controlId 占位符合并重建', () => {
      const list = [
        placeholder('c1'),
        placeholder('c1'),
        placeholder('c1'),
        { value: 'x' } as IElement
      ]
      refreshPlaceholderElements(list, editorOptions(2))
      expect(list.length).toBe(3)
    })
  })

  describe('DOM 转换分支矩阵', () => {
    const htmlCases = [
      '<p>hello</p>',
      '<div><span>a</span><b>bold</b><i>italic</i></div>',
      '<table><tr><td>A</td><td>B</td></tr><tr><td>C</td></tr></table>',
      '<ul><li>one</li><li>two</li></ul>',
      '<ol><li>one</li></ol>',
      '<h1>title</h1><h2>sub</h2><h3>h3</h3>',
      '<img src="x.png" width="10" height="20"/>',
      '<a href="https://a.com">link</a>',
      '<br/><hr/>',
      '<span style="color:red;text-align:center;font-size:20px">styled</span>',
      '<sup>up</sup><sub>down</sub>',
      '<p>line1</p><p>line2</p>',
      '<input type="checkbox" checked/>',
      '<div style="display:flex;justify-content:space-between">flex</div>',
      '',
      '<p></p>',
      '<span>&#x200b;zero&#x200b;</span>'
    ]

    it('getElementListByHTML 各类 HTML 输入', () => {
      for (const html of htmlCases) {
        expect(() =>
          getElementListByHTML(html, { innerWidth: 500 })
        ).not.toThrow()
      }
    })

    it('createDomFromElementList 各类元素', () => {
      const elements: IElement[] = [
        { value: 'text', bold: true, color: '#f00' } as IElement,
        {
          value: '',
          type: ElementType.TABLE,
          width: 200,
          colgroup: [{ width: 100 }, { width: 100 }],
          trList: [
            {
              height: 40,
              tdList: [
                {
                  value: [{ value: 'A' }],
                  colspan: 1,
                  rowspan: 1,
                  backgroundColor: '#eee',
                  borderTypes: ['top', 'right', 'bottom', 'left']
                }
              ]
            }
          ]
        } as any,
        { value: '', type: ElementType.IMAGE, width: 10, height: 10 } as any,
        { value: '\n' } as IElement,
        { value: ZERO } as IElement,
        { value: 'x', type: ElementType.SUPERSCRIPT } as any,
        {
          value: '',
          type: ElementType.HYPERLINK,
          url: 'https://a.com',
          valueList: [{ value: 'link' }]
        } as any,
        { value: 'x', valueList: [{ value: 'a' }, { value: 'b' }] } as any
      ]
      expect(() => createDomFromElementList(elements, opts())).not.toThrow()
      // EXTERNAL 边框分支
      elements[1].borderType = 'external' as any
      expect(() => createDomFromElementList(elements, opts())).not.toThrow()
    })

    it('getTextFromElementList / zipElementList 混合输入', () => {
      const list = [
        { value: 'a' },
        { value: '', type: ElementType.TABLE, trList: [] },
        { value: 'b', valueList: [{ value: 'c' }] },
        { value: ZERO }
      ] as any
      expect(() => getTextFromElementList(list)).not.toThrow()
      expect(() => zipElementList(list)).not.toThrow()
    })
  })
})
