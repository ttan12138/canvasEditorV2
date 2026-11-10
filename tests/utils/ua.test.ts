import { describe, expect, it, vi } from 'vitest'

const importWithUA = (ua: string) => {
  Object.defineProperty(globalThis, 'navigator', {
    value: { userAgent: ua },
    configurable: true
  })
  vi.resetModules()
  return import('@/editor/utils/ua')
}

describe('utils/ua 浏览器环境探测', () => {
  it('Mac OS X：isApple 为真', async () => {
    const m = await importWithUA('Mozilla/5.0 (Mac OS X 10_15_7)')
    expect(m.isApple).toBe(true)
    expect(m.isIOS).toBe(false)
    expect(m.isMobile).toBe(false)
    expect(m.isFirefox).toBe(false)
  })

  it('Windows：全部为假', async () => {
    const m = await importWithUA('Mozilla/5.0 (Windows NT 10.0)')
    expect(m.isApple).toBe(false)
    expect(m.isIOS).toBe(false)
    expect(m.isMobile).toBe(false)
    expect(m.isFirefox).toBe(false)
  })

  it('iPhone：isIOS/isMobile/isApple 为真', async () => {
    const m = await importWithUA(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'
    )
    expect(m.isApple).toBe(true)
    expect(m.isIOS).toBe(true)
    expect(m.isMobile).toBe(true)
    expect(m.isFirefox).toBe(false)
  })

  it('Android Mobile：isMobile 为真', async () => {
    const m = await importWithUA('Mozilla/5.0 (Linux; Android 11) Mobile')
    expect(m.isApple).toBe(false)
    expect(m.isIOS).toBe(false)
    expect(m.isMobile).toBe(true)
    expect(m.isFirefox).toBe(false)
  })

  it('Firefox：isFirefox 为真', async () => {
    const m = await importWithUA(
      'Mozilla/5.0 (Windows NT 10.0; rv:120.0) Gecko/20100101 Firefox/120.0'
    )
    expect(m.isApple).toBe(false)
    expect(m.isIOS).toBe(false)
    expect(m.isMobile).toBe(false)
    expect(m.isFirefox).toBe(true)
  })
})
