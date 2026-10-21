<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useEditorContext } from './context'

const ctx = useEditorContext()
const getCommand = () => ctx.getCommand()

const optDialog = reactive({ open: false })
const optModel = reactive<Record<string, any>>({})
const optApplyMsg = ref('')
// 左侧分组列表的当前选中项
const selectedGroup = ref(0)
const selectGroup = (i: number) => {
  selectedGroup.value = i
}

interface OptField {
  path: string
  label: string
  type: 'number' | 'text' | 'color' | 'select' | 'padding' | 'list' | 'json'
  options?: { label: string; value: string }[]
  step?: number
  min?: number
  max?: number
  // list 类型：元素类型，number 表示数字数组，string 表示字符串数组（逗号分隔）
  itemType?: 'number' | 'string'
}
// 覆盖常用且可运行时更新的参数（IUpdateOption 已排除 mode/width/height/scale/pageGap/pageMode/paperDirection/historyMaxRecordCount/scrollContainerSelector）
const optionGroups: { group: string; fields: OptField[] }[] = [
  {
    group: '文本默认', fields: [
      { path: 'defaultType', label: '默认元素类型', type: 'text' },
      { path: 'defaultFont', label: '字体', type: 'text' },
      { path: 'defaultSize', label: '字号', type: 'number', min: 1 },
      { path: 'minSize', label: '最小字号', type: 'number', min: 1 },
      { path: 'maxSize', label: '最大字号', type: 'number', min: 1 },
      { path: 'defaultColor', label: '默认颜色', type: 'color' },
      { path: 'defaultBasicRowMarginHeight', label: '基础行高', type: 'number', min: 0 },
      { path: 'defaultRowMargin', label: '行上下边距', type: 'number', min: 0 },
      { path: 'defaultTabWidth', label: 'Tab 宽度', type: 'number', min: 0 },
      { path: 'defaultHyperlinkColor', label: '默认超链接色', type: 'color' },
      { path: 'letterClass', label: '字母类', type: 'list', itemType: 'string' }
    ]
  },
  {
    group: '页面', fields: [
      { path: 'margins', label: '页边距[上,右,下,左]', type: 'padding' },
      { path: 'pageMode', label: '分页模式', type: 'select', options: [{ label: '分页', value: 'paging' }, { label: '连续', value: 'continuity' }] },
      { path: 'paperDirection', label: '纸张方向', type: 'select', options: [{ label: '纵向', value: 'vertical' }, { label: '横向', value: 'horizontal' }] },
      { path: 'wordBreak', label: '换行', type: 'select', options: [{ label: '按字符', value: 'break-all' }, { label: '按词', value: 'break-word' }] },
      { path: 'renderMode', label: '渲染模式', type: 'select', options: [{ label: '速度', value: 'speed' }, { label: '兼容', value: 'compatibility' }] },
      { path: 'maskMargin', label: '遮罩边距[上,右,下,左]', type: 'padding' },
      { path: 'pageOuterSelectionDisable', label: '页外禁选', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'locale', label: '语言', type: 'text' }
    ]
  },
  {
    group: '子表/表格', fields: [
      { path: 'table.tdPadding', label: '单元格内边距[上,右,下,左]', type: 'padding' },
      { path: 'table.childTableTdPadding', label: '子表容器内边距[上,右,下,左]', type: 'padding' },
      { path: 'table.defaultBorderColor', label: '默认边框色', type: 'color' },
      { path: 'table.defaultTrMinHeight', label: '行最小高度', type: 'number', min: 1 },
      { path: 'table.defaultColMinWidth', label: '列最小宽度', type: 'number', min: 1 },
      { path: 'table.blockMargin', label: '块底部间距(px,未缩放)', type: 'number', min: 0 },
      { path: 'table.overflow', label: '超出滚动', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] }
    ]
  },
  {
    group: '显示', fields: [
      { path: 'searchMatchColor', label: '搜索高亮色', type: 'color' },
      { path: 'searchMatchAlpha', label: '搜索高亮透明度', type: 'number', min: 0, max: 1, step: 0.1 },
      { path: 'searchNavigateMatchColor', label: '搜索导航高亮色', type: 'color' },
      { path: 'rangeColor', label: '选区颜色', type: 'color' },
      { path: 'rangeAlpha', label: '选区透明度', type: 'number', min: 0, max: 1, step: 0.1 },
      { path: 'rangeMinWidth', label: '选区最小宽度', type: 'number', min: 1 },
      { path: 'highlightAlpha', label: '高亮透明度', type: 'number', min: 0, max: 1, step: 0.1 },
      { path: 'highlightMarginHeight', label: '高亮上下边距', type: 'number', min: 0 },
      { path: 'inactiveAlpha', label: '非活跃透明度', type: 'number', min: 0, max: 1, step: 0.1 }
    ]
  },
  {
    group: '边框/指示器', fields: [
      { path: 'underlineColor', label: '下划线颜色', type: 'color' },
      { path: 'strikeoutColor', label: '删除线颜色', type: 'color' },
      { path: 'resizerColor', label: '缩放手柄色', type: 'color' },
      { path: 'resizerSize', label: '缩放手柄大小', type: 'number', min: 1 },
      { path: 'marginIndicatorColor', label: '边距指示色', type: 'color' },
      { path: 'marginIndicatorSize', label: '边距指示长度', type: 'number', min: 0 }
    ]
  },
  {
    group: '页眉/页脚', fields: [
      { path: 'header.top', label: '页眉上偏移', type: 'number', min: 0 },
      { path: 'header.inactiveAlpha', label: '页眉非活跃透明度', type: 'number', min: 0, max: 1, step: 0.1 },
      { path: 'header.maxHeightRadio', label: '页眉最大高度比', type: 'select', options: [{ label: '半页', value: 'half' }, { label: '三分之一', value: 'one-third' }, { label: '四分之一', value: 'quarter' }] },
      { path: 'header.disabled', label: '页眉禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'header.editable', label: '页眉可编辑', type: 'select', options: [{ label: '是', value: 'true' }, { label: '否', value: 'false' }] },
      { path: 'header.disabledPages', label: '页眉禁用页', type: 'list', itemType: 'number' },
      { path: 'footer.bottom', label: '页脚下偏移', type: 'number', min: 0 },
      { path: 'footer.inactiveAlpha', label: '页脚非活跃透明度', type: 'number', min: 0, max: 1, step: 0.1 },
      { path: 'footer.maxHeightRadio', label: '页脚最大高度比', type: 'select', options: [{ label: '半页', value: 'half' }, { label: '三分之一', value: 'one-third' }, { label: '四分之一', value: 'quarter' }] },
      { path: 'footer.disabled', label: '页脚禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'footer.editable', label: '页脚可编辑', type: 'select', options: [{ label: '是', value: 'true' }, { label: '否', value: 'false' }] },
      { path: 'footer.disabledPages', label: '页脚禁用页', type: 'list', itemType: 'number' }
    ]
  },
  {
    group: '页码', fields: [
      { path: 'pageNumber.bottom', label: '距底', type: 'number', min: 0 },
      { path: 'pageNumber.size', label: '字号', type: 'number', min: 1 },
      { path: 'pageNumber.font', label: '字体', type: 'text' },
      { path: 'pageNumber.color', label: '颜色', type: 'color' },
      { path: 'pageNumber.format', label: '格式', type: 'text' },
      { path: 'pageNumber.startPageNo', label: '起始页码', type: 'number', min: 1 },
      { path: 'pageNumber.fromPageNo', label: '起始页', type: 'number', min: 1 },
      { path: 'pageNumber.disabled', label: '禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] }
    ]
  },
  {
    group: '水印', fields: [
      { path: 'watermark.data', label: '文本', type: 'text' },
      { path: 'watermark.type', label: '类型', type: 'select', options: [{ label: '文字', value: 'text' }, { label: '图片', value: 'image' }] },
      { path: 'watermark.color', label: '颜色', type: 'color' },
      { path: 'watermark.opacity', label: '透明度', type: 'number', min: 0, max: 1, step: 0.1 },
      { path: 'watermark.size', label: '字号', type: 'number', min: 1 },
      { path: 'watermark.font', label: '字体', type: 'text' },
      { path: 'watermark.width', label: '宽度', type: 'number', min: 1 },
      { path: 'watermark.height', label: '高度', type: 'number', min: 1 },
      { path: 'watermark.repeat', label: '重复', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'watermark.numberType', label: '编号类型', type: 'select', options: [{ label: '阿拉伯', value: 'arabic' }, { label: '中文', value: 'chinese' }] },
      { path: 'watermark.gap', label: '间距[水平,垂直]', type: 'list', itemType: 'number' },
      { path: 'watermark.layer', label: '层级', type: 'select', options: [{ label: '底部', value: 'bottom' }, { label: '顶部', value: 'top' }] }
    ]
  },
  {
    group: '背景', fields: [
      { path: 'background.color', label: '颜色', type: 'color' },
      { path: 'background.image', label: '图片URL', type: 'text' },
      { path: 'background.size', label: '尺寸', type: 'select', options: [{ label: '包含', value: 'contain' }, { label: '覆盖', value: 'cover' }] },
      { path: 'background.repeat', label: '重复', type: 'select', options: [{ label: '重复', value: 'repeat' }, { label: '不重复', value: 'no-repeat' }, { label: '横向', value: 'repeat-x' }, { label: '纵向', value: 'repeat-y' }] }
    ]
  },
  {
    group: '页边框', fields: [
      { path: 'pageBorder.color', label: '颜色', type: 'color' },
      { path: 'pageBorder.lineWidth', label: '线宽', type: 'number', min: 0 },
      { path: 'pageBorder.padding', label: '内边距[上,右,下,左]', type: 'padding' },
      { path: 'pageBorder.disabled', label: '禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] }
    ]
  },
  {
    group: '占位符', fields: [
      { path: 'placeholder.data', label: '文本', type: 'text' },
      { path: 'placeholder.color', label: '颜色', type: 'color' },
      { path: 'placeholder.opacity', label: '透明度', type: 'number', min: 0, max: 1, step: 0.1 },
      { path: 'placeholder.size', label: '字号', type: 'number', min: 1 },
      { path: 'placeholder.font', label: '字体', type: 'text' }
    ]
  },
  {
    group: '标题', fields: [
      { path: 'title.defaultFirstSize', label: '一级', type: 'number', min: 1 },
      { path: 'title.defaultSecondSize', label: '二级', type: 'number', min: 1 },
      { path: 'title.defaultThirdSize', label: '三级', type: 'number', min: 1 },
      { path: 'title.defaultFourthSize', label: '四级', type: 'number', min: 1 },
      { path: 'title.defaultFifthSize', label: '五级', type: 'number', min: 1 },
      { path: 'title.defaultSixthSize', label: '六级', type: 'number', min: 1 }
    ]
  },
  {
    group: '分组', fields: [
      { path: 'group.opacity', label: '透明度', type: 'number', min: 0, max: 1, step: 0.1 },
      { path: 'group.backgroundColor', label: '背景色', type: 'color' },
      { path: 'group.activeOpacity', label: '激活透明度', type: 'number', min: 0, max: 1, step: 0.1 },
      { path: 'group.activeBackgroundColor', label: '激活背景色', type: 'color' },
      { path: 'group.disabled', label: '禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'group.deletable', label: '可删除', type: 'select', options: [{ label: '是', value: 'true' }, { label: '否', value: 'false' }] }
    ]
  },
  {
    group: '光标', fields: [
      { path: 'cursor.width', label: '宽度', type: 'number', min: 1 },
      { path: 'cursor.color', label: '颜色', type: 'color' },
      { path: 'cursor.dragWidth', label: '拖拽宽度', type: 'number', min: 1 },
      { path: 'cursor.dragColor', label: '拖拽颜色', type: 'color' },
      { path: 'cursor.dragFloatImageDisabled', label: '禁拖浮图', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] }
    ]
  },
  {
    group: '分隔符', fields: [
      { path: 'separator.strokeStyle', label: '颜色', type: 'color' },
      { path: 'separator.lineWidth', label: '线宽', type: 'number', min: 0 }
    ]
  },
  {
    group: '行号', fields: [
      { path: 'lineNumber.size', label: '字号', type: 'number', min: 1 },
      { path: 'lineNumber.font', label: '字体', type: 'text' },
      { path: 'lineNumber.color', label: '颜色', type: 'color' },
      { path: 'lineNumber.right', label: '右侧距', type: 'number', min: 0 },
      { path: 'lineNumber.type', label: '类型', type: 'select', options: [{ label: '每页', value: 'page' }, { label: '连续', value: 'continuity' }] },
      { path: 'lineNumber.disabled', label: '禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] }
    ]
  },
  {
    group: '徽标', fields: [
      { path: 'badge.top', label: '上偏移', type: 'number', min: 0 },
      { path: 'badge.left', label: '左偏移', type: 'number', min: 0 }
    ]
  },
  {
    group: '控件', fields: [
      { path: 'control.placeholderColor', label: '占位符色', type: 'color' },
      { path: 'control.bracketColor', label: '括号色', type: 'color' },
      { path: 'control.prefix', label: '前缀', type: 'text' },
      { path: 'control.postfix', label: '后缀', type: 'text' },
      { path: 'control.borderWidth', label: '边框宽', type: 'number', min: 0 },
      { path: 'control.borderColor', label: '边框色', type: 'color' },
      { path: 'control.activeBackgroundColor', label: '激活背景', type: 'color' },
      { path: 'control.disabledBackgroundColor', label: '禁用背景', type: 'color' },
      { path: 'control.existValueBackgroundColor', label: '有值背景', type: 'color' },
      { path: 'control.noValueBackgroundColor', label: '无值背景', type: 'color' },
      { path: 'control.errorBackgroundColor', label: '错误背景', type: 'color' }
    ]
  },
  {
    group: '复选框', fields: [
      { path: 'checkbox.width', label: '宽', type: 'number', min: 1 },
      { path: 'checkbox.height', label: '高', type: 'number', min: 1 },
      { path: 'checkbox.gap', label: '间距', type: 'number', min: 0 },
      { path: 'checkbox.lineWidth', label: '线宽', type: 'number', min: 0 },
      { path: 'checkbox.fillStyle', label: '填充色', type: 'color' },
      { path: 'checkbox.strokeStyle', label: '描边色', type: 'color' },
      { path: 'checkbox.checkFillStyle', label: '勾填充', type: 'color' },
      { path: 'checkbox.checkStrokeStyle', label: '勾描边', type: 'color' },
      { path: 'checkbox.checkMarkColor', label: '勾颜色', type: 'color' },
      { path: 'checkbox.verticalAlign', label: '垂直对齐', type: 'select', options: [{ label: '上', value: 'top' }, { label: '中', value: 'middle' }, { label: '下', value: 'bottom' }] }
    ]
  },
  {
    group: '单选', fields: [
      { path: 'radio.width', label: '宽', type: 'number', min: 1 },
      { path: 'radio.height', label: '高', type: 'number', min: 1 },
      { path: 'radio.gap', label: '间距', type: 'number', min: 0 },
      { path: 'radio.lineWidth', label: '线宽', type: 'number', min: 0 },
      { path: 'radio.fillStyle', label: '填充色', type: 'color' },
      { path: 'radio.strokeStyle', label: '描边色', type: 'color' },
      { path: 'radio.verticalAlign', label: '垂直对齐', type: 'select', options: [{ label: '上', value: 'top' }, { label: '中', value: 'middle' }, { label: '下', value: 'bottom' }] }
    ]
  },
  {
    group: '图片标题', fields: [
      { path: 'imgCaption.color', label: '颜色', type: 'color' },
      { path: 'imgCaption.font', label: '字体', type: 'text' },
      { path: 'imgCaption.size', label: '字号', type: 'number', min: 1 },
      { path: 'imgCaption.top', label: '上偏移', type: 'number', min: 0 }
    ]
  },
  {
    group: '列表', fields: [
      { path: 'list.inheritStyle', label: '继承样式', type: 'select', options: [{ label: '是', value: 'true' }, { label: '否', value: 'false' }] }
    ]
  },
  {
    group: '换行/空白', fields: [
      { path: 'lineBreak.disabled', label: '换行符禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'lineBreak.color', label: '换行符色', type: 'color' },
      { path: 'lineBreak.lineWidth', label: '换行符线宽', type: 'number', min: 0 },
      { path: 'whiteSpace.disabled', label: '空白符禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'whiteSpace.color', label: '空白符色', type: 'color' },
      { path: 'whiteSpace.radius', label: '空白符圆角', type: 'number', min: 0 }
    ]
  },
  {
    group: '分页符', fields: [
      { path: 'pageBreak.font', label: '字体', type: 'text' },
      { path: 'pageBreak.fontSize', label: '字号', type: 'number', min: 1 },
      { path: 'pageBreak.lineDash', label: '虚线[段长,间隔]', type: 'list', itemType: 'number' }
    ]
  },
  {
    group: '拼写检查', fields: [
      { path: 'spellcheck.disabled', label: '禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'spellcheck.color', label: '错词颜色', type: 'color' }
    ]
  },
  {
    group: '区域', fields: [
      { path: 'zone.tipDisabled', label: '提示禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] }
    ]
  },
  {
    group: '模式规则', fields: [
      { path: 'modeRule', label: '模式规则(JSON)', type: 'json' }
    ]
  },
  {
    group: '提示', fields: [
      { path: 'hint.disabled', label: '禁用', type: 'select', options: [{ label: '是', value: 'true' }, { label: '否', value: 'false' }] },
      { path: 'hint.backgroundColor', label: '背景色', type: 'color' },
      { path: 'hint.color', label: '文字色', type: 'color' },
      { path: 'hint.fontSize', label: '字号', type: 'number', min: 1 },
      { path: 'hint.maxWidth', label: '最大宽', type: 'number', min: 1 }
    ]
  },
  {
    group: '标尺', fields: [
      { path: 'ruler.disabled', label: '禁用', type: 'select', options: [{ label: '是', value: 'true' }, { label: '否', value: 'false' }] },
      { path: 'ruler.height', label: '高度', type: 'number', min: 1 }
    ]
  },
  {
    group: '留痕', fields: [
      { path: 'trace.disabled', label: '禁用', type: 'select', options: [{ label: '是', value: 'true' }, { label: '否', value: 'false' }] },
      { path: 'trace.insertColor', label: '新增色', type: 'color' },
      { path: 'trace.deleteColor', label: '删除色', type: 'color' },
      { path: 'trace.lineWidth', label: '线宽', type: 'number', min: 0 },
      { path: 'trace.author', label: '作者', type: 'text' }
    ]
  },
  {
    group: '分栏', fields: [
      { path: 'column.count', label: '栏数', type: 'number', min: 1 },
      { path: 'column.gap', label: '栏间距', type: 'number', min: 0 },
      { path: 'column.separator', label: '分隔线', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'column.separatorColor', label: '分隔色', type: 'color' },
      { path: 'column.separatorWidth', label: '分隔宽', type: 'number', min: 0 }
    ]
  },
  {
    group: '涂鸦', fields: [
      { path: 'graffiti.defaultLineWidth', label: '默认线宽', type: 'number', min: 1 },
      { path: 'graffiti.defaultLineColor', label: '默认线色', type: 'color' }
    ]
  },
  {
    group: '标签', fields: [
      { path: 'label.defaultColor', label: '默认色', type: 'color' },
      { path: 'label.defaultBackgroundColor', label: '默认背景', type: 'color' },
      { path: 'label.defaultBorderRadius', label: '默认圆角', type: 'number', min: 0 },
      { path: 'label.defaultPadding', label: '默认内边距[上,右,下,左]', type: 'padding' }
    ]
  },
  {
    group: '放大镜', fields: [
      { path: 'magnifier.disabled', label: '禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'magnifier.size', label: '尺寸', type: 'number', min: 1 },
      { path: 'magnifier.zoom', label: '放大倍数', type: 'number', min: 1 },
      { path: 'magnifier.borderColor', label: '边框色', type: 'color' }
    ]
  },
  {
    group: '无障碍', fields: [
      { path: 'accessibility.disabled', label: '禁用', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] }
    ]
  },
  {
    group: '实验/其他', fields: [
      { path: 'lab.incrementalCompute', label: '增量计算', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] },
      { path: 'contextMenuDisableKeys', label: '禁用右键菜单键', type: 'list', itemType: 'string' },
      { path: 'shortcutDisableKeys', label: '禁用快捷键', type: 'list', itemType: 'string' },
      { path: 'historyMaxRecordCount', label: '历史最大记录数', type: 'number', min: 0 },
      { path: 'printPixelRatio', label: '打印像素比', type: 'number', min: 1 }
    ]
  }
]

const getOptByPath = (obj: any, path: string): any =>
  path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj)
const setOptByPath = (obj: any, path: string, value: any): void => {
  const keys = path.split('.')
  let o = obj
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i]
    if (o[k] == null || typeof o[k] !== 'object') o[k] = {}
    o = o[k]
  }
  o[keys[keys.length - 1]] = value
}

// 布尔型下拉（选项仅 true/false）在模型里用字符串表达，应用/加载时与布尔互转
const isBoolSelect = (f: OptField): boolean =>
  f.type === 'select' &&
  !!f.options &&
  f.options.length > 0 &&
  f.options.every(o => o.value === 'true' || o.value === 'false')

const loadOptionsModel = () => {
  const cur = getCommand()?.getOptions()
  if (!cur) return
  optionGroups.forEach(g => g.fields.forEach(f => {
    const val = getOptByPath(cur, f.path)
    if (f.type === 'padding') {
      optModel[f.path] = Array.isArray(val) ? [...val] : [0, 0, 0, 0]
    } else if (f.type === 'list') {
      // 数组 -> 逗号分隔字符串
      optModel[f.path] = Array.isArray(val) ? val.join(', ') : ''
    } else if (f.type === 'json') {
      // 对象 -> JSON 字符串
      optModel[f.path] = val == null ? '' : JSON.stringify(val)
    } else if (isBoolSelect(f)) {
      optModel[f.path] = val ? 'true' : 'false'
    } else {
      optModel[f.path] = val
    }
  }))
}

const open = () => {
  loadOptionsModel()
  optApplyMsg.value = ''
  optDialog.open = true
}

const applyOptions = () => {
  const payload: Record<string, any> = {}
  optionGroups.forEach(g => g.fields.forEach(f => {
    let v = optModel[f.path]
    if (f.type === 'padding') {
      v = (Array.isArray(v) ? v : [0, 0, 0, 0]).map(n => Number(n) || 0)
    } else if (f.type === 'number') {
      v = Number(v)
      if (Number.isNaN(v)) return
      if (f.min != null) v = Math.max(f.min, v)
      if (f.max != null) v = Math.min(f.max, v)
    } else if (f.type === 'list') {
      // 逗号分隔 -> 数组；按 itemType 决定元素为数字或字符串
      const itemType = f.itemType === 'number' ? 'number' : 'string'
      v = String(optModel[f.path] ?? '')
        .split(',')
        .map(s => s.trim())
        .filter(s => s !== '')
        .map(s => (itemType === 'number' ? Number(s) : s))
      if (itemType === 'number') v = (v as number[]).filter(n => !Number.isNaN(n))
    } else if (f.type === 'json') {
      // JSON 字符串 -> 对象；非法 JSON 跳过并提示
      const raw = String(optModel[f.path] ?? '').trim()
      if (!raw) return
      try {
        v = JSON.parse(raw)
      } catch (e) {
        optApplyMsg.value = `${f.label}：JSON 解析失败 - ${(e as Error).message}`
        return
      }
    } else if (f.type === 'select' && isBoolSelect(f)) {
      v = v === 'true'
    }
    // 跳过未设置/清空的值，避免把 undefined / '' 写回 options
    if (v === undefined || v === '') return
    setOptByPath(payload, f.path, v)
  }))
  try {
    getCommand()?.executeUpdateOptions(payload as any)
    optApplyMsg.value = '已应用到当前页面'
  } catch (e) {
    optApplyMsg.value = '应用失败：' + (e as Error).message
  }
}

defineExpose({ open, loadOptionsModel })
</script>

<template>
  <div v-if="optDialog.open" class="cc-mask" @click.self="optDialog.open = false">
    <div class="cc-dialog cc-dialog--opt">
      <div class="cc-dialog__title">选项配置（应用到当前页面）</div>
      <div class="cc-opt-body">
        <div class="cc-opt-nav">
          <div v-for="(g, gi) in optionGroups" :key="g.group" class="cc-opt-nav__item"
            :class="{ 'is-active': gi === selectedGroup }" @click="selectGroup(gi)">{{ g.group }}</div>
        </div>
        <div class="cc-opt-content">
          <div class="cc-opt-group">
            <div class="cc-opt-group__title">{{ optionGroups[selectedGroup].group }}</div>
            <div v-for="f in optionGroups[selectedGroup].fields" :key="f.path" class="cc-opt-field">
              <label class="cc-opt-field__label">{{ f.label }}</label>
              <div class="cc-opt-field__ctl">
                <template v-if="f.type === 'padding'">
                  <input type="number" v-model.number="optModel[f.path][0]" class="cc-opt-num" />
                  <input type="number" v-model.number="optModel[f.path][1]" class="cc-opt-num" />
                  <input type="number" v-model.number="optModel[f.path][2]" class="cc-opt-num" />
                  <input type="number" v-model.number="optModel[f.path][3]" class="cc-opt-num" />
                </template>
                <template v-else-if="f.type === 'select'">
                  <select v-model="optModel[f.path]" class="cc-opt-input">
                    <option v-for="o in (f.options || [])" :key="o.value" :value="o.value">{{ o.label }}</option>
                  </select>
                </template>
                <template v-else-if="f.type === 'color'">
                  <input type="color" v-model="optModel[f.path]" class="cc-opt-color" />
                  <span class="cc-opt-color-val">{{ optModel[f.path] }}</span>
                </template>
                <template v-else-if="f.type === 'number'">
                  <input type="number" v-model.number="optModel[f.path]" :min="f.min" :max="f.max" :step="f.step"
                    class="cc-opt-input" />
                </template>
                <template v-else-if="f.type === 'list'">
                  <input type="text" v-model="optModel[f.path]" class="cc-opt-input"
                    :placeholder="(f.itemType === 'number' ? '数字' : '字符串') + '，逗号分隔'" />
                </template>
                <template v-else-if="f.type === 'json'">
                  <textarea v-model="optModel[f.path]" class="cc-opt-json" rows="3"
                    placeholder='JSON 字符串，例如 {"print":{"backgroundDisabled":true}}'></textarea>
                </template>
                <template v-else>
                  <input type="text" v-model="optModel[f.path]" class="cc-opt-input" />
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cc-opt-msg" v-if="optApplyMsg">{{ optApplyMsg }}</div>
      <div class="cc-actions">
        <button type="button" @click="applyOptions">应用</button>
        <button type="button" @click="loadOptionsModel">从当前加载</button>
        <button type="button" @click="optDialog.open = false">关闭</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cc-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.cc-dialog {
  width: 460px;
  max-height: 86vh;
  overflow: auto;
  background: #fff;
  border-radius: 8px;
  padding: 16px 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  font-size: 13px;
  color: #3d4757;
}

.cc-dialog__title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
}

.cc-dialog--opt {
  width: 720px;
}

.cc-opt-body {
  display: flex;
  gap: 12px;
  max-height: 60vh;
}

.cc-opt-nav {
  flex: none;
  width: 160px;
  max-height: 60vh;
  overflow: auto;
  border: 1px solid #eef1f5;
  border-radius: 6px;
  padding: 6px 0;
  background: #fafbfc;
}

.cc-opt-nav__item {
  padding: 8px 12px;
  cursor: pointer;
  color: #767c85;
  border-left: 3px solid transparent;
  font-size: 13px;
}

.cc-opt-nav__item:hover {
  background: #f0f3f7;
}

.cc-opt-nav__item.is-active {
  color: #193758;
  font-weight: 600;
  background: #eef3f9;
  border-left-color: #193758;
}

.cc-opt-content {
  flex: 1;
  max-height: 60vh;
  overflow: auto;
  padding-right: 4px;
}

.cc-opt-group {
  border: 1px solid #eef1f5;
  border-radius: 6px;
  padding: 8px 10px;
}

.cc-opt-group__title {
  font-weight: 600;
  margin-bottom: 6px;
  color: #193758;
}

.cc-opt-field {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.cc-opt-field__label {
  flex: none;
  width: 150px;
  color: #767c85;
}

.cc-opt-field__ctl {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.cc-opt-input {
  flex: 1;
  height: 28px;
  padding: 0 8px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
}

.cc-opt-json {
  flex: 1;
  width: 100%;
  min-height: 60px;
  padding: 6px 8px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  resize: vertical;
  box-sizing: border-box;
}

.cc-opt-num {
  width: 56px;
  height: 28px;
  padding: 0 6px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
}

.cc-opt-color {
  width: 32px;
  height: 28px;
  padding: 0;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: none;
}

.cc-opt-color-val {
  font-size: 12px;
  color: #9097a1;
}

.cc-opt-msg {
  margin: 8px 0;
  color: #2e7d32;
  font-size: 13px;
}

.cc-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 12px;
}

.cc-actions button {
  height: 30px;
  padding: 0 16px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}

.cc-actions button:first-child {
  border-color: #193758;
  background: #193758;
  color: #fff;
}
</style>
