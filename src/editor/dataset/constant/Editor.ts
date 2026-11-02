import { DeepRequired } from '../../interface/Common'
import { IAnnotationStyle, IFocusPlaceholderOption, IModeRule } from '../../interface/Editor'

export const EDITOR_COMPONENT = 'editor-component'
export const EDITOR_PREFIX = 'ce'
export const EDITOR_CLIPBOARD = `${EDITOR_PREFIX}-clipboard`

export const defaultModeRuleOption: Readonly<DeepRequired<IModeRule>> = {
  print: {
    imagePreviewerDisabled: false,
    backgroundDisabled: false,
    filterEmptyControl: true,
    areaHideDisabled: false
  },
  readonly: {
    imagePreviewerDisabled: false
  },
  form: {
    controlDeletableDisabled: true
  }
}

// 需求19：setControlContentByPlaceholder 追加内容的默认样式（缺省回退到文档默认色/背景色）
export const defaultAnnotationOption: Readonly<Required<IAnnotationStyle>> = {
  color: '',
  backgroundColor: '',
  font: '',
  size: 0
}

// 需求 21：聚焦占位符配置默认值（占位符为空 = 不聚焦；modes 为空 = 全部模式启用）
export const defaultFocusPlaceholderOption: Readonly<
  Required<IFocusPlaceholderOption>
> = {
  placeholder: '',
  modes: [],
  isFocus: true
}
