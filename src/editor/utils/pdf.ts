import { jsPDF } from 'jspdf'
import { PaperDirection } from '../dataset/enum/Editor'

// 1px = 0.75pt（96dpi 下 1in = 72pt = 96px）
const PX_TO_PT = 0.75

export interface IPdfBuildOption {
  width: number
  height: number
  direction?: PaperDirection
  pageDirections?: PaperDirection[]
  // 页面图片格式，默认 JPEG（体积小、合成快）；如需无损可传 'PNG'
  imageType?: 'JPEG' | 'PNG'
  imageQuality?: number
}

// 将逐页图片 base64 列表合成为单个 PDF 文档实例
export function buildPdfDocument(
  base64List: string[],
  options: IPdfBuildOption
): jsPDF {
  const {
    width,
    height,
    direction = PaperDirection.VERTICAL,
    pageDirections = [],
    imageType = 'JPEG'
  } = options
  const ptW = width * PX_TO_PT
  const ptH = height * PX_TO_PT
  const getPageSize = (dir: PaperDirection): [number, number] => {
    const landscape = dir === PaperDirection.HORIZONTAL
    return landscape ? [ptH, ptW] : [ptW, ptH]
  }
  const getDirection = (index: number) => pageDirections[index] || direction
  const [firstW, firstH] = getPageSize(getDirection(0))
  const doc = new jsPDF({
    unit: 'pt',
    format: [firstW, firstH],
    compress: true
  })
  base64List.forEach((base64, index) => {
    if (index > 0) {
      const [w, h] = getPageSize(getDirection(index))
      doc.addPage([w, h])
    }
    const img = base64.includes(',') ? base64.split(',')[1] : base64
    const [w, h] = getPageSize(getDirection(index))
    // 'FAST' 加速 PNG 的 zlib 压缩；JPEG 本身已压缩，此参数被忽略但不影响
    doc.addImage(img, imageType, 0, 0, w, h, undefined, 'FAST')
  })
  return doc
}

// 返回 data URI（含 base64 编码的 PDF）：data:application/pdf;base64,xxxx
export function pdfToBase64(doc: jsPDF): string {
  return doc.output('datauristring')
}

// 返回 PDF 的 Blob，配合 URL.createObjectURL 可实现极速下载/预览，避免大段 base64 占用内存
export function pdfToBlob(doc: jsPDF): Blob {
  return doc.output('blob')
}
