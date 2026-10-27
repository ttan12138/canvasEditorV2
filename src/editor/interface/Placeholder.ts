export interface IPlaceholder {
  data: string
  color?: string
  opacity?: number
  size?: number
  font?: string
  /** 占位符显示长度上限（按字符数）；0 或不设为不限制，超出则仅渲染前 N 个字符、隐藏其余 */
  maxLength?: number
}
