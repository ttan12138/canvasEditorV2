import { describe, expect, it } from 'vitest'
import {
  getColgroupWidth,
  shrinkColgroupToWidth,
  scaleColgroupToWidth
} from '@/editor/utils/table'
import type { IColgroup } from '@/editor/interface/table/Colgroup'

const makeColgroup = (widths: number[]): IColgroup[] =>
  widths.map(width => ({ width }))

describe('utils/table 列宽计算', () => {
  describe('getColgroupWidth', () => {
    it('汇总列宽', () => {
      expect(getColgroupWidth(makeColgroup([100, 200, 300]))).toBe(600)
    })
    it('空列组返回 0', () => {
      expect(getColgroupWidth([])).toBe(0)
    })
  })

  describe('scaleColgroupToWidth', () => {
    it('等比例放大', () => {
      const colgroup = makeColgroup([100, 100])
      scaleColgroupToWidth(colgroup, 400)
      expect(colgroup.map(c => c.width)).toEqual([200, 200])
    })

    it('等比例缩小', () => {
      const colgroup = makeColgroup([100, 100])
      scaleColgroupToWidth(colgroup, 100)
      expect(colgroup.map(c => c.width)).toEqual([50, 50])
    })

    it('目标宽度与当前相同则不处理', () => {
      const colgroup = makeColgroup([100, 100])
      scaleColgroupToWidth(colgroup, 200)
      expect(colgroup.map(c => c.width)).toEqual([100, 100])
    })

    it('总宽为 0 时不处理', () => {
      const colgroup = makeColgroup([0, 0])
      scaleColgroupToWidth(colgroup, 100)
      expect(colgroup.map(c => c.width)).toEqual([0, 0])
    })
  })

  describe('shrinkColgroupToWidth', () => {
    it('超宽时按比例压缩到目标宽度', () => {
      const colgroup = makeColgroup([200, 200, 200]) // 600
      shrinkColgroupToWidth(colgroup, 300, 50)
      expect(getColgroupWidth(colgroup)).toBeCloseTo(300, 5)
      // 各列等比压缩
      expect(colgroup.every(c => c.width >= 50)).toBe(true)
    })

    it('已在目标宽度内则不压缩', () => {
      const colgroup = makeColgroup([100, 100])
      shrinkColgroupToWidth(colgroup, 300, 50)
      expect(colgroup.map(c => c.width)).toEqual([100, 100])
    })

    it('全部列触及最小宽度仍超宽时保持原样', () => {
      const colgroup = makeColgroup([100, 100]) // 200，均>50
      // 目标远小于可压缩下限总和(100)，应直接置为下限或保持
      shrinkColgroupToWidth(colgroup, 10, 50)
      expect(getColgroupWidth(colgroup)).toBeGreaterThanOrEqual(100)
    })

    it('幂等：重复调用结果一致', () => {
      const colgroup = makeColgroup([200, 200, 200])
      shrinkColgroupToWidth(colgroup, 300, 50)
      const first = colgroup.map(c => c.width)
      shrinkColgroupToWidth(colgroup, 300, 50)
      expect(colgroup.map(c => c.width)).toEqual(first)
    })
  })
})
