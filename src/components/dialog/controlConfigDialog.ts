import { Command, ControlType, ElementType } from '../../editor'
import type { IControl } from '../../editor/interface/Control'
import type { IImageCaption } from '../../editor/interface/Element'
import type { IImageCountConfig } from '../../editor/interface/Control'
import { Dialog, type IDialogData } from './Dialog'

const CAPTION_FIELDS = [
  'color',
  'fontSize',
  'fontFamily',
  'textAlign',
  'backgroundColor',
  'marginTop',
  'marginBottom',
  'paddingLeft',
  'paddingRight',
  'lineHeight',
  'maxLines',
  'fontWeight',
  'fontStyle',
  'textDecoration',
  'textShadow',
  'transform'
]

/** 题注样式中的数值字段（弹窗提交时转 Number） */
const CAPTION_NUMBER_FIELDS = new Set([
  'fontSize',
  'marginTop',
  'marginBottom',
  'paddingLeft',
  'paddingRight',
  'lineHeight',
  'maxLines'
])

/**
 * 构建控件配置弹窗的表单数据。
 * - 插入（existing 为空）：含「默认值」字段。
 * - 编辑（existing 为已有控件）：回填 placeholder/prefix/postfix/图像控件能力/
 *   imageCountConfigs/captionStyle，并隐藏「默认值」（避免误改控件内容）。
 */
export function buildControlDialogData(existing?: IControl): IDialogData[] {
  const isEdit = !!existing
  const data: IDialogData[] = [
    {
      type: 'text',
      label: '占位符',
      name: 'placeholder',
      required: true,
      placeholder: '请输入占位符',
      value: existing?.placeholder ?? ''
    },
    // 编辑模式不暴露「默认值」（改值走 setValue，不在本弹窗职责内）
    ...(isEdit
      ? []
      : [
          {
            type: 'text',
            label: '默认值',
            name: 'value',
            placeholder: '请输入默认值',
            value: ''
          }
        ]),
    {
      type: 'text',
      label: '前缀',
      name: 'prefix',
      value: existing?.prefix ?? '​',
      placeholder: '默认零宽空白符'
    },
    {
      type: 'text',
      label: '后缀',
      name: 'postfix',
      value: existing?.postfix ?? '​',
      placeholder: '默认零宽空白符'
    },
    {
      type: 'switch',
      label: '是否为图像控件',
      name: 'imageControl',
      value: existing?.imageControl ? 'true' : 'false'
    },
    {
      type: 'section',
      label: '图像控件配置',
      showIf: { field: 'imageControl', equals: true },
      children: [
        {
          // 左右布局：左侧开关组（双列），右侧 count 预设（默认 4 条，可展开至 10）
          type: 'hgroup',
          children: [
            {
              type: 'switch',
              label: '可拖拽排序',
              name: 'imageDraggable',
              value: existing?.imageDraggable ? 'true' : 'false'
            },
            {
              type: 'switch',
              label: '可右键删除',
              name: 'imageCanDelete',
              value: existing?.imageCanDelete ? 'true' : 'false'
            },
            {
              type: 'switch',
              label: '可缩放',
              name: 'imageResizable',
              value: existing?.imageResizable ? 'true' : 'false'
            },
            {
              type: 'switch',
              label: '可拖拽交换',
              name: 'imageSwappable',
              value: existing?.imageSwappable ? 'true' : 'false'
            },
            {
              type: 'countConfig',
              label: '预设图片配置',
              name: 'imageCountConfigs',
              maxCount: 10,
              defaultCount: 4,
              initial: existing?.imageCountConfigs ?? []
            }
          ]
        },
        {
          type: 'defaultImageConfig',
          label: '默认图片配置',
          name: 'imageDefaultConfig',
          initial: existing?.imageDefaultConfig ?? {}
        },
        {
          type: 'captionStyle',
          label: '图片描述默认样式',
          name: 'imageCaptionStyle',
          initial: existing?.imageCaptionStyle ?? {}
        }
      ]
    }
  ]
  return data
}

export interface IOpenControlConfigOptions {
  mode: 'insert' | 'edit'
  /** 编辑模式下目标控件 id（由右键上下文提供） */
  controlId?: string
}

/**
 * 打开控件配置弹窗（插入 / 编辑共用）。
 * - 插入：onConfirm 调用 executeInsertControl。
 * - 编辑：读取已有控件配置回填；onConfirm 仅更新属性（executeSetControlProperties），不动控件内容。
 */
export function openControlConfigDialog(
  command: Command,
  opts: IOpenControlConfigOptions
): void {
  const { mode, controlId } = opts
  const isEdit = mode === 'edit'
  let existing: IControl | undefined
  if (isEdit && controlId) {
    const result = command.getControlValue({ id: controlId })
    if (result?.length) {
      existing = result[0] as unknown as IControl
    }
  }
  const data = buildControlDialogData(existing)
  new Dialog({
    title: isEdit ? '编辑控件' : '插入控件',
    data,
    // 需求：定宽避免左右分组/多输入行把弹窗撑得过宽
    width: 860,
    onConfirm: (payload: { name: string; value: string }[]) => {
      const getVal = (n: string) => payload.find(p => p.name === n)?.value
      const toBool = (n: string) => getVal(n) === 'true'
      const placeholder = getVal('placeholder')
      if (!placeholder) return
      const prefix = getVal('prefix') || '​'
      const postfix = getVal('postfix') || '​'
      const imageControl = toBool('imageControl')
      const imageDraggable = toBool('imageDraggable')
      const imageCanDelete = toBool('imageCanDelete')
      const imageResizable = toBool('imageResizable')
      const imageSwappable = toBool('imageSwappable')

      // 按 count 的图片预设（四向 padding/width/height）
      const countConfigs: IImageCountConfig[] = []
      const toNumOrZero = (v?: string) => {
        const n = Number(v)
        return v != null && v !== '' && !Number.isNaN(n) ? n : 0
      }
      for (let c = 1; c <= 10; c++) {
        const pt = getVal(`cc_padding_t_${c}`)
        const pr = getVal(`cc_padding_r_${c}`)
        const pb = getVal(`cc_padding_b_${c}`)
        const pl = getVal(`cc_padding_l_${c}`)
        const w = getVal(`cc_width_${c}`)
        const h = getVal(`cc_height_${c}`)
        const hasPad = [pt, pr, pb, pl].some(v => v != null && v !== '')
        if (!hasPad && w == null && h == null) continue
        const entry: IImageCountConfig = { count: c }
        // 需求：四向独立输入 → 四元组 [上,右,下,左]（未填按 0）
        if (hasPad) {
          entry.padding = [
            toNumOrZero(pt),
            toNumOrZero(pr),
            toNumOrZero(pb),
            toNumOrZero(pl)
          ]
        }
        if (w != null && w !== '') entry.width = Number(w)
        if (h != null && h !== '') entry.height = Number(h)
        countConfigs.push(entry)
      }

      // 默认图片配置（宽/高/四向内边距）：明细未传入时兜底
      const defaultImageConfig: NonNullable<IControl['imageDefaultConfig']> = {}
      const dicWidth = getVal('dic_width')
      const dicHeight = getVal('dic_height')
      const dicPad = {
        t: getVal('dic_padding_t'),
        r: getVal('dic_padding_r'),
        b: getVal('dic_padding_b'),
        l: getVal('dic_padding_l')
      }
      const hasDicPad = Object.values(dicPad).some(v => v != null && v !== '')
      if (dicWidth != null && dicWidth !== '') {
        defaultImageConfig.width = Number(dicWidth)
      }
      if (dicHeight != null && dicHeight !== '') {
        defaultImageConfig.height = Number(dicHeight)
      }
      if (hasDicPad) {
        defaultImageConfig.padding = [
          toNumOrZero(dicPad.t),
          toNumOrZero(dicPad.r),
          toNumOrZero(dicPad.b),
          toNumOrZero(dicPad.l)
        ]
      }

      // 题注默认样式（value 以外的可视化配置）
      const captionStyle: Record<string, unknown> = {}
      for (const f of CAPTION_FIELDS) {
        const v = getVal(`cap_${f}`)
        if (v == null || v === '') continue
        if (CAPTION_NUMBER_FIELDS.has(f)) {
          const n = Number(v)
          if (!Number.isNaN(n)) captionStyle[f] = n
        } else {
          captionStyle[f] = v
        }
      }

      if (isEdit && controlId) {
        const properties: Partial<IControl> = {
          placeholder,
          prefix,
          postfix,
          imageControl,
          imageDraggable,
          imageCanDelete,
          imageResizable,
          imageSwappable
        }
        if (countConfigs.length) properties.imageCountConfigs = countConfigs
        if (Object.keys(defaultImageConfig).length) {
          properties.imageDefaultConfig = defaultImageConfig
        }
        if (Object.keys(captionStyle).length) {
          properties.imageCaptionStyle = captionStyle as Partial<IImageCaption>
        }
        command.executeSetControlProperties({ id: controlId, properties })
      } else {
        const control: IControl = {
          type: ControlType.TEXT,
          value: getVal('value') ? [{ value: getVal('value')! }] : null,
          placeholder,
          prefix,
          postfix,
          imageControl,
          imageDraggable,
          imageCanDelete,
          imageResizable,
          imageSwappable
        }
        if (countConfigs.length) control.imageCountConfigs = countConfigs
        if (Object.keys(defaultImageConfig).length) {
          control.imageDefaultConfig = defaultImageConfig
        }
        if (Object.keys(captionStyle).length) {
          control.imageCaptionStyle = captionStyle as Partial<IImageCaption>
        }
        command.executeInsertControl({
          type: ElementType.CONTROL,
          value: '',
          control
        })
      }
    }
  })
}
