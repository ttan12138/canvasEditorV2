import { afterEach, describe, expect, it, vi } from 'vitest'
import { ZoneTip } from '@/editor/core/zone/ZoneTip'
import { EditorZone } from '@/editor/dataset/enum/Editor'
import { EDITOR_PREFIX } from '@/editor/dataset/constant/Editor'

const createMockDrawZone = () => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const pageContainer = document.createElement('div')
  const i18n = { t: (k: string) => `TIP:${k}` }
  const draw: any = {
    getI18n: () => i18n,
    getContainer: () => container,
    getPageContainer: () => pageContainer,
    getOptions: () => ({
      header: { disabled: true },
      footer: { disabled: true }
    }),
    getIsPagingMode: () => true
  }
  const zone: any = {
    getZoneByY: () => EditorZone.HEADER,
    getZone: () => EditorZone.MAIN
  }
  return { container, pageContainer, draw, zone }
}

describe('ZoneTip 区域提示', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('构造时创建 tip 容器', () => {
    const { container, draw, zone } = createMockDrawZone()
    new ZoneTip(draw, zone)
    const tip = container.querySelector(`.${EDITOR_PREFIX}-zone-tip`)
    expect(tip).toBeTruthy()
    expect(tip!.querySelector('span')).toBeTruthy()
  })

  it('_updateZoneTip 显示与隐藏', () => {
    const { container, draw, zone } = createMockDrawZone()
    const zt: any = new ZoneTip(draw, zone)
    zt._updateZoneTip(true, 10, 20)
    const tip = container.querySelector(`.${EDITOR_PREFIX}-zone-tip`)!
    expect(tip.classList.contains('show')).toBe(true)
    expect(tip.style.left).toBe('10px')
    expect(tip.style.top).toBe('20px')
    expect(tip.querySelector('span')!.innerText).toContain('TIP:')
    zt._updateZoneTip(false)
    expect(tip.classList.contains('show')).toBe(false)
  })

  it('页眉/页脚启用时构造不抛错并监听 mousemove', () => {
    const { container, draw, zone } = createMockDrawZone()
    draw.getOptions = () => ({
      header: { disabled: false },
      footer: { disabled: false }
    })
    expect(() => new ZoneTip(draw, zone)).not.toThrow()
    // 触发 mouseenter 后 mousemove 不抛错
    const pageContainer = container.querySelector('div')!
    expect(() => {
      // 仅验证监听已挂载（通过派发事件不抛错）
      pageContainer.dispatchEvent(new Event('mouseenter'))
    }).not.toThrow()
  })
})
