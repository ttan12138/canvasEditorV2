import { IElement } from './Element'

export interface IPreviewerCreateResult {
  resizerSelection: HTMLDivElement
  resizerHandleList: HTMLDivElement[]
  resizerImageContainer: HTMLDivElement
  resizerImage: HTMLImageElement
  resizerSize: HTMLSpanElement
}

export interface IPreviewerDrawOption {
  mime?: 'png' | 'jpg' | 'jpeg' | 'svg'
  srcKey?: keyof Pick<IElement, 'value' | 'laTexSVG'>
  dragDisable?: boolean
  /** 需求 4.3/12：禁用 resize 句柄（如图片控件配置 imageResizable=false 时） */
  resizeDisable?: boolean
}
