import { ElementType } from '@/editor/dataset/enum/Element'

// 通用 Canvas 2D 上下文 mock：任意方法均为 no-op，measureText 返回确定尺寸，
// 属性读写可持久化。足以驱动粒子/框架类的 render 方法覆盖大量分支。
export function makeMockCtx(): CanvasRenderingContext2D {
  const store: Record<string, any> = {}
  return new Proxy(
    {},
    {
      get(_t, prop: string) {
        if (prop === 'measureText') {
          return (text: string) => ({
            width: (text ?? '').length * 10,
            actualBoundingBoxAscent: 8,
            actualBoundingBoxDescent: 2
          })
        }
        if (prop === 'canvas') return { width: 0, height: 0 }
        if (prop in store) return store[prop]
        return () => {}
      },
      set(_t, prop: string, value) {
        store[prop] = value
        return true
      }
    }
  ) as unknown as CanvasRenderingContext2D
}

// 轻量 Draw mock，仅提供粒子/框架类构造与 render 所需的最小接口。
export function makeMockDraw(options: any = {}): any {
  const opts = {
    scale: 1,
    watermark: {
      type: 'text',
      data: '',
      opacity: 1,
      font: 'Arial',
      size: 12,
      color: '#000000',
      repeat: false,
      gap: [0, 0],
      numberType: 0
    },
    imgCaption: {
      font: 'Microsoft YaHei',
      size: 12,
      color: '#666666'
    },
    ...options
  }
  return {
    getOptions: () => opts,
    getPageSize: () => ({ width: 800, height: 1000 }),
    getPagePixelRatio: () => 1,
    getPageCount: () => 5,
    getContainer: () => document.createElement('div'),
    getOriginalMainElementList: () => [],
    getRenderCount: () => 1,
    getPageOffset: () => ({ x: 0, y: 0 }),
    getPageNo: () => 0,
    getPosition: () => ({
      getFloatPositionByElement: () => null,
      getFloatPositionCoordinate: () => ({ x: 0, y: 0 })
    }),
    getImageObserver: () => ({ add: () => {} }),
    getRange: () => ({
      getRange: () => ({ startIndex: 0, endIndex: 0 }),
      getRangeParagraphElementList: () => []
    }),
    render: () => {}
  }
}

export function imgElement(value: string, extra: any = {}): any {
  return {
    type: ElementType.IMAGE,
    value,
    width: 100,
    height: 80,
    ...extra
  }
}
