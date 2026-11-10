import { IGetValueOption } from '../../../interface/Draw'
import { IEditorData } from '../../../interface/Editor'
import { zipElementList } from '../../../utils/element'

interface IGetValueWorkerOption {
  data: Required<IEditorData>
  options: IGetValueOption
}

export function getValueData(data: Required<IEditorData>, options: IGetValueOption): IEditorData {
  const { extraPickAttrs = [] } = options || {}

  const editorData: IEditorData = {
    header: zipElementList(data.header, {
      extraPickAttrs,
      isClone: false
    }),
    main: zipElementList(data.main, {
      extraPickAttrs,
      isClassifyArea: true,
      isClone: false
    }),
    footer: zipElementList(data.footer, {
      extraPickAttrs,
      isClone: false
    })
  }

  return editorData
}

onmessage = evt => {
  const payload = <IGetValueWorkerOption>evt.data
  const { options, data } = payload
  postMessage(getValueData(data, options))
}
