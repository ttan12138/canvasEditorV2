export interface IPlaceholder {
  data: string
  color?: string
  opacity?: number
  size?: number
  font?: string
  /** 占位符显示长度上限（按字符数）；-1 或不设为不限制，0 为强制显示 1 个字符但用背景色渲染（视觉隐藏、保留可聚焦/定位锚点），正值则仅渲染前 N 个字符 */
  maxLength?: number
}
