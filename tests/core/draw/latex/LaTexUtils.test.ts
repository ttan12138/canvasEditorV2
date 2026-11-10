import { describe, expect, it } from 'vitest'
import { LaTexUtils } from '@/editor/core/draw/particle/latex/utils/LaTexUtils'
import { _impl } from '@/editor/core/draw/particle/latex/utils/LaTexUtils'

const LATEXES = [
  'E = mc^2',
  'x_1 + x_2',
  "f'(x) = 0",
  '\\frac{1}{2}',
  '\\frac{a+b}{c-d}',
  '\\sqrt{x}',
  '\\sqrt[3]{x+y}',
  '\\binom{n}{k}',
  '\\text{Hello World}',
  'a \\cdot b \\times c \\div d',
  '\\sum_{i=1}^{n} i',
  '\\prod_{k=1}^{m} k',
  '\\int_a^b f(x)\\,dx',
  '\\lim_{x \\to 0} \\frac{\\sin x}{x}',
  '\\left( \\frac{a}{b} \\right)',
  '\\left[ a \\middle| b \\right]',
  'A \\quad B \\, C \\; D \\! E',
  '\\hat{x}',
  '\\vec{v}',
  '\\alpha + \\beta = \\gamma',
  '\\begin{matrix} a & b \\\\ c & d \\end{matrix}',
  '\\begin{pmatrix} a \\\\ b \\end{pmatrix}',
  '\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}',
  '\\begin{cases} x & y \\\\ z & w \\end{cases}',
  '\\begin{aligned} x &= 1 \\\\ y &= 2 \\end{aligned}',
  '\\mathbb{R} \\subset \\mathbb{C}',
  '\\nabla \\times \\vec{B}'
]

describe('LaTexUtils', () => {
  it('构造不抛错（覆盖 tokenize/parse/plan/flatten/render 流水线）', () => {
    for (const latex of LATEXES) {
      expect(() => new LaTexUtils(latex)).not.toThrow()
    }
  })

  it('polylines 默认与带缩放', () => {
    const p = new LaTexUtils('x^2 + \\frac{1}{2}')
    const base = p.polylines()
    expect(Array.isArray(base)).toBe(true)
    const scaled = p.polylines({
      SCALE_X: 20,
      SCALE_Y: 20,
      MARGIN_X: 5,
      MARGIN_Y: 5
    })
    expect(scaled.length).toBe(base.length)
  })

  it('pathd 生成路径', () => {
    const p = new LaTexUtils('a + b')
    expect(p.pathd()).toContain('M')
    expect(p.pathd({ SCALE_X: 10 }).length).toBeGreaterThan(0)
  })

  it('svg 默认与带背景/前景/线宽', () => {
    const p = new LaTexUtils('\\sqrt{x}')
    const r = p.svg({})
    expect(r.svg.startsWith('data:image/svg+xml;base64,')).toBe(true)
    expect(r.width).toBeGreaterThan(0)
    expect(r.height).toBeGreaterThan(0)
    const r2 = p.svg({
      FG_COLOR: 'red',
      BG_COLOR: 'yellow',
      STROKE_W: 2
    })
    expect(r2.svg.startsWith('data:image/svg+xml;base64,')).toBe(true)
  })

  it('pdf 生成 PDF 文本', () => {
    const p = new LaTexUtils('\\frac{a}{b}')
    const out = p.pdf({ STROKE_W: 3 })
    expect(out).toContain('%PDF-1.1')
    expect(out).toContain('%%EOF')
  })

  it('boxes 与 box', () => {
    const p = new LaTexUtils('a\\quad b\\quad c')
    const boxes = p.boxes()
    expect(Array.isArray(boxes)).toBe(true)
    const box = p.box()
    expect(box.w).toBeGreaterThan(0)
    expect(box.h).toBeGreaterThan(0)
  })

  it('resolveScale 各约束分支', () => {
    const p = new LaTexUtils('x_1^{2}')
    // MIN_CHAR_H
    expect(p.box({ MIN_CHAR_H: 4 }).h).toBeGreaterThan(0)
    // MAX_W
    expect(p.box({ MAX_W: 50 }).w).toBeLessThanOrEqual(50)
    // MAX_H
    expect(p.box({ MAX_H: 50 }).h).toBeLessThanOrEqual(50)
    // 默认
    expect(p.box().w).toBeGreaterThan(0)
  })

  it('_impl 暴露内部函数', () => {
    expect(typeof _impl.tokenize).toBe('function')
    expect(typeof _impl.parse).toBe('function')
    expect(typeof _impl.plan).toBe('function')
    expect(typeof _impl.render).toBe('function')
    expect(_impl.tokenize('a b c')).toEqual(['a', 'b', 'c'])
  })
})
