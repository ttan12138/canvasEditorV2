import { ImageDisplay } from '../../../dataset/enum/Common'
import { EditorMode } from '../../../dataset/enum/Editor'
import { ElementType } from '../../../dataset/enum/Element'
import { MouseEventButton } from '../../../dataset/enum/Event'
import { ControlComponent } from '../../../dataset/enum/Control'
import { ControlType } from '../../../dataset/enum/Control'
import { IPreviewerDrawOption } from '../../../interface/Previewer'
import { deepClone } from '../../../utils'
import { isMod } from '../../../utils/hotkey'
import { CheckboxControl } from '../../draw/control/checkbox/CheckboxControl'
import { RadioControl } from '../../draw/control/radio/RadioControl'
import { CanvasEvent } from '../CanvasEvent'
import { setupControlImageSortDrag } from './controlImageDrag'
import { IElement } from '../../../interface/Element'
import type { ITd } from '../../../interface/table/Td'
import { Draw } from '../../draw/Draw'

export function setRangeCache(host: CanvasEvent) {
  const draw = host.getDraw()
  const position = draw.getPosition()
  const rangeManager = draw.getRange()
  // 缓存选区上下文信息
  host.isAllowDrag = true
  host.cacheRange = deepClone(rangeManager.getRange())
  host.cacheElementList = draw.getElementList()
  host.cachePositionList = position.getPositionList()
  host.cachePositionContext = position.getPositionContext()
}

export function hitCheckbox(element: IElement, draw: Draw) {
  const { checkbox, control } = element
  // 复选框不在控件内独立控制
  if (!control) {
    draw.getCheckboxParticle().setSelect(element)
  } else {
    const codes = control?.code ? control.code.split(',') : []
    if (checkbox?.value) {
      const codeIndex = codes.findIndex(c => c === checkbox.code)
      if (~codeIndex) {
        codes.splice(codeIndex, 1)
      }
    } else {
      if (checkbox?.code) {
        codes.push(checkbox.code)
      }
    }
    const activeControl = draw.getControl().getActiveControl()
    if (activeControl instanceof CheckboxControl) {
      activeControl.setSelect(codes)
    }
  }
}

export function hitRadio(element: IElement, draw: Draw) {
  const { radio, control } = element
  // 单选框不在控件内独立控制
  if (!control) {
    draw.getRadioParticle().setSelect(element)
  } else {
    const codes = radio?.code ? [radio.code] : []
    const activeControl = draw.getControl().getActiveControl()
    if (activeControl instanceof RadioControl) {
      activeControl.setSelect(codes)
    }
  }
}

export function mousedown(evt: MouseEvent, host: CanvasEvent) {
  const draw = host.getDraw()
  let isReadonly = draw.isReadonly()
  const rangeManager = draw.getRange()
  const position = draw.getPosition()
  // 存在选区时忽略右键点击
  const range = rangeManager.getRange()
  if (
    evt.button === MouseEventButton.RIGHT &&
    (range.isCrossRowCol || !rangeManager.getIsCollapsed())
  ) {
    return
  }
  // 是否是选区拖拽
  if (!host.isAllowDrag) {
    if (!isReadonly && range.startIndex !== range.endIndex) {
      const isPointInRange = rangeManager.getIsPointInRange(
        evt.offsetX,
        evt.offsetY
      )
      if (isPointInRange) {
        setRangeCache(host)
        return
      }
    }
  }
  const target = evt.target as HTMLDivElement
  const pageIndex = target.dataset.index
  // 设置pageNo
  if (pageIndex) {
    draw.setPageNo(Number(pageIndex))
  }
  host.isAllowSelection = true
  // 缓存旧上下文信息
  const oldPositionContext = deepClone(position.getPositionContext())
  const positionResult = position.adjustPositionContext({
    x: evt.offsetX,
    y: evt.offsetY
  })
  if (!positionResult) return
  const {
    index,
    isDirectHit,
    isCheckbox,
    isRadio,
    isImage,
    isLabel,
    isTable,
    tableId,
    trIndex,
    tdIndex,
    tablePath,
    tdValueIndex,
    hitLineStartIndex
  } = positionResult
  // 记录选区开始位置
  host.mouseDownStartPosition = {
    ...positionResult,
    index: isTable ? tdValueIndex! : index,
    x: evt.offsetX,
    y: evt.offsetY
  }
  const elementList = draw.getElementList()
  const positionList = position.getPositionList()
  let curIndex = isTable ? tdValueIndex! : index
  let curElement = elementList[curIndex]
  // 需求 8.4 / 8.4.2：解析「最外层」表格单元格。
  // 点击子表占位符网格时，getTd() 会落在内层子表 td（无 hasChild），
  // 需回溯到外层 hasChild 单元格（tablePath[0]）才能正确触发对话框 / 拾取。
  let targetTd: ITd | null = null
  if (isTable) {
    const ctx = position.getPositionContext()
    const path = ctx.tablePath
    if (path && path.length) {
      const first = path[0]
      const el = draw.getOriginalElementList()[first.index as number]
      targetTd = el?.trList?.[first.trIndex]?.tdList?.[first.tdIndex] ?? null
    } else {
      targetTd = draw.getTd()
    }
  }
  // 需求 8.4：联动「拾取模式」开启时，点击表格单元格仅上报 cellPick，用于可视化设置联动
  if (draw.getLinkPicking() && isTable && targetTd?.id) {
    const eventBus = draw.getEventBus()
    if (eventBus.isSubscribe('cellPick')) {
      eventBus.emit('cellPick', { tdId: targetTd.id })
    }
    return
  }
  // 需求 8.4.2：编辑模式下点击「子表占位符」单元格，仅打开配置对话框，不进入编辑
  if (
    evt.button === MouseEventButton.LEFT &&
    isTable &&
    draw.getMode() === EditorMode.EDIT &&
    targetTd?.hasChild
  ) {
    const eventBus = draw.getEventBus()
    if (eventBus.isSubscribe('cellPlaceholderClick')) {
      eventBus.emit('cellPlaceholderClick', { tdId: targetTd.id! })
    }
    return
  }
  // 需求7.3：表单模式下，点击单元格内控件区域时光标定位策略：
  // - 直接命中内容文字（VALUE/PLACEHOLDER）：不劫持，光标停在点击处
  //   （点击第一个字以前光标即在第一个字以前，点击中间即在中间）
  // - 命中控件前缀（PREFIX/PRE_TEXT）：聚焦到该控件内容起始处
  // - 其余空白/边界（前导空元素、POSTFIX、单元格留白等）：
  //   · 空控件（无 VALUE，仅占位符）→ 聚焦内容起始处（光标显示在占位符开头）
  //   · 有内容控件 → 点击位置在内容以前则聚焦内容起始，否则聚焦内容末尾
  // 注意：不能定位到 POSTFIX——FORM 模式下光标落在 POSTFIX 时
  // getIsRangeWithinControl 判定为「不在控件内」→ isReadonly()=true →
  // initControl 拒绝激活控件，表现为点击空白不聚焦。光标停在内容元素上
  // 保持「控件内」语义，空控件与有内容控件均适用。
  if (
    isTable &&
    draw.getMode() === EditorMode.FORM &&
    curElement?.controlComponent !== ControlComponent.VALUE &&
    curElement?.controlComponent !== ControlComponent.PLACEHOLDER
  ) {
    const td = draw.getTd()
    if (td) {
      // 是否命中控件前缀：此时聚焦到该控件内容起始处
      const isHitPrefix =
        curElement?.controlComponent === ControlComponent.PREFIX ||
        curElement?.controlComponent === ControlComponent.PRE_TEXT
      // 目标控件：命中前缀时为该控件，否则为单元格内最后一个控件
      let cid: string | undefined
      if (isHitPrefix) {
        cid = curElement?.controlId
      } else {
        for (let k = td.value.length - 1; k >= 0; k--) {
          if (td.value[k].controlId) {
            cid = td.value[k].controlId
            break
          }
        }
      }
      if (cid) {
        // 收集该控件内容元素（VALUE/PLACEHOLDER）的首/末索引，并判断是否为空控件
        let firstContentIdx = -1
        let lastContentIdx = -1
        let firstValueIdx = -1
        for (let k = 0; k < td.value.length; k++) {
          const e = td.value[k]
          if (e.controlId !== cid) continue
          if (
            e.controlComponent === ControlComponent.VALUE &&
            firstValueIdx < 0
          ) {
            firstValueIdx = k
          }
          if (
            e.controlComponent === ControlComponent.VALUE ||
            e.controlComponent === ControlComponent.PLACEHOLDER
          ) {
            if (firstContentIdx < 0) firstContentIdx = k
            lastContentIdx = k
          }
        }
        const isEmptyControl = firstValueIdx < 0
        if (firstContentIdx >= 0) {
          if (isHitPrefix || isEmptyControl || curIndex < firstContentIdx) {
            // 前缀命中 / 空控件 / 点击位置在内容以前 → 聚焦内容起始处。
            // 注意光标绘制在 curIndex 元素的右侧，故需定位到第一个内容
            // 元素的前一个元素（PREFIX/PRE_TEXT，零宽），视觉上光标才
            // 显示在第一个字以前
            curIndex = Math.max(firstContentIdx - 1, 0)
          } else {
            curIndex = lastContentIdx
          }
          curElement = elementList[curIndex]
        } else if (!isHitPrefix) {
          // 兜底：控件无内容元素（仅 PREFIX/POSTFIX）时取最后一个任意元素
          for (let k = td.value.length - 1; k >= 0; k--) {
            if (td.value[k].controlId === cid) {
              curIndex = k
              break
            }
          }
          curElement = elementList[curIndex]
        }
      }
    }
  }
  // 需求 4.1/4.2：图片控件（imageControl）在表单/只读模式会渲染前导标记，
  // 点击第一张图片时可能命中前导标记而非图片本身，导致选不中。
  // 将非图片的命中纠正为控件内最近的图片元素，并同步 isDirectHitImage。
  if (
    curElement &&
    curElement.controlId &&
    curElement.type !== ElementType.IMAGE
  ) {
    const ctrl = draw
      .getControl()
      .getValueById({ id: curElement.controlId })?.[0]
    if (ctrl?.imageControl) {
      const list = isTable ? (draw.getTd()?.value ?? []) : elementList
      let nearest = -1
      let nearestDist = Infinity
      for (let k = 0; k < list.length; k++) {
        const el = list[k]
        if (
          el.controlId === curElement.controlId &&
          el.type === ElementType.IMAGE
        ) {
          const dist = Math.abs(k - curIndex)
          if (dist < nearestDist) {
            nearestDist = dist
            nearest = k
          }
        }
      }
      if (~nearest) {
        curIndex = nearest
        curElement = list[nearest]
      }
    }
  }
  // 绘制
  const isDirectHitImage = !!(
    (isDirectHit && isImage) ||
    (curElement.type === ElementType.IMAGE && curElement.controlId)
  )
  const isDirectHitCheckbox = !!(isDirectHit && isCheckbox)
  const isDirectHitRadio = !!(isDirectHit && isRadio)
  const isDirectHitLabel = !!(isDirectHit && isLabel)
  if (~index) {
    let startIndex = curIndex
    let endIndex = curIndex
    // 选区锚点（固定端）：光标位置作为锚点，点击位置作为活动端
    let anchorIndex = curIndex
    // 需求 11：表单模式下 editable === false 的控件不可聚焦（点击不进入光标/激活）
    const isControlDisabled =
      draw.getMode() === EditorMode.FORM &&
      curElement.control?.editable === false
    // 需求19：点击聚焦到任意占位符（控件）时，清除所有临时批注样式，
    // 将 setControlContentByPlaceholder 追加的临时高亮恢复为正常文本显示
    if (!isControlDisabled && curElement?.controlId) {
      draw.clearAnnotationStyles()
    }
    // shift激活时进行选区处理
    if (evt.shiftKey) {
      const { startIndex: oldStartIndex, endIndex: oldEndIndex } =
        rangeManager.getRange()
      if (~oldStartIndex) {
        const newPositionContext = position.getPositionContext()
        if (newPositionContext.tdId === oldPositionContext.tdId) {
          // 沿用原选区锚点：光标在选区结束位置时锚点为结束位置
          const oldCursorIndex = position.getCursorPosition()?.index
          const oldAnchorIndex =
            oldStartIndex !== oldEndIndex && oldCursorIndex === oldEndIndex
              ? oldEndIndex
              : oldStartIndex
          anchorIndex = oldAnchorIndex
          if (curIndex > oldAnchorIndex) {
            startIndex = oldAnchorIndex
          } else {
            endIndex = oldAnchorIndex
          }
          // 按住shift拖拽时从锚点开始扩展选区
          host.mouseDownStartPosition.index = oldAnchorIndex
        }
      }
    }
    if (!isControlDisabled) {
      rangeManager.setRange(startIndex, endIndex)
      const isShiftSelection = startIndex !== endIndex
      position.setCursorPosition(positionList[anchorIndex])
      // 更新只读状态
      isReadonly = draw.isReadonly()
      // 复选框
      if (isDirectHitCheckbox && !isReadonly) {
        hitCheckbox(curElement, draw)
      } else if (isDirectHitRadio && !isReadonly) {
        hitRadio(curElement, draw)
      } else if (
        curElement.controlComponent === ControlComponent.VALUE &&
        (curElement.control?.type === ControlType.CHECKBOX ||
          curElement.control?.type === ControlType.RADIO)
      ) {
        // 向左查找
        let preIndex = curIndex
        while (preIndex > 0) {
          const preElement = elementList[preIndex]
          if (preElement.controlComponent === ControlComponent.CHECKBOX) {
            hitCheckbox(preElement, draw)
            break
          } else if (preElement.controlComponent === ControlComponent.RADIO) {
            hitRadio(preElement, draw)
            break
          }
          preIndex--
        }
      } else {
        draw.render({
          curIndex,
          isCompute: false,
          isSubmitHistory: false,
          // shift选区时保持光标在锚点（与键盘扩展选区一致）
          isSetCursor:
            !isShiftSelection &&
            !isDirectHitImage &&
            !isDirectHitCheckbox &&
            !isDirectHitRadio
        })
      }
      // shift选区未设置光标：重新定位光标代理并聚焦，避免键盘事件丢失
      if (isShiftSelection) {
        draw.getCursor().drawCursor({
          isShow: false
        })
      }
      // 首字需定位到行首，非上一行最后一个字后
      if (hitLineStartIndex && !isShiftSelection) {
        host.getDraw().getCursor().drawCursor({
          hitLineStartIndex
        })
      }
    }
  }
  // 标签点击事件
  const eventBus = draw.getEventBus()
  if (isDirectHitLabel && eventBus.isSubscribe('labelMousedown')) {
    eventBus.emit('labelMousedown', {
      evt,
      element: curElement
    })
  }
  // 预览工具组件
  const previewer = draw.getPreviewer()
  previewer.clearResizer()
  if (isDirectHitImage) {
    // 注意：getValueById 对图片控件返回空，须直接读元素上的 control 对象
    const ctrl = curElement.control
    const isImageControlElement = !!(curElement.controlId && ctrl?.imageControl)
    let resizeDisable = false
    if (isImageControlElement) {
      // 需求 4.3：imageResizable 缺省视为 true（显示缩放句柄），仅显式为 false 时隐藏
      // 需求 11：控件不可编辑时禁用缩放句柄
      resizeDisable = ctrl?.editable === false || ctrl?.imageResizable === false
      console.log(
        '[resizeGate] controlId=%s controlEditable=%s imageResizable=%s resizeDisable=%s',
        curElement.controlId,
        ctrl?.editable,
        ctrl?.imageResizable,
        resizeDisable
      )
    }
    const previewerDrawOption: IPreviewerDrawOption = {
      // 控件图片：拖拽缩放仅受 control.editable / imageResizable 控制（与 resizeDisable
      // 一致），不受只读模式限制；非控件图片维持原只读/控件外表单模式禁用拖拽
      dragDisable: isImageControlElement
        ? resizeDisable
        : isReadonly ||
          (!curElement.controlId && draw.getMode() === EditorMode.FORM),
      // 控件内图片配置 imageResizable=false 时不显示 resize 句柄
      resizeDisable
    }
    if (curElement.type === ElementType.LATEX) {
      previewerDrawOption.mime = 'svg'
      previewerDrawOption.srcKey = 'laTexSVG'
    }
    previewer.drawResizer(
      curElement,
      positionList[curIndex],
      previewerDrawOption
    )
    // 光标事件代理丢失，重新定位
    draw.getCursor().drawCursor({
      isShow: false
    })
    // 点击图片允许拖拽调整位置
    // 需求 4.1：控件内图片（imageControl）禁止原生拖拽移动，
    // 避免把图片移出/移除控件导致控件值损坏、后续命中错位
    if (!isImageControlElement) {
      setRangeCache(host)
    }
    // 浮动元素创建镜像图片
    if (
      curElement.imgDisplay === ImageDisplay.SURROUND ||
      curElement.imgDisplay === ImageDisplay.FLOAT_TOP ||
      curElement.imgDisplay === ImageDisplay.FLOAT_BOTTOM
    ) {
      draw.getImageParticle().createFloatImage(curElement)
    }
    // 图片点击事件
    if (eventBus.isSubscribe('imageMousedown')) {
      eventBus.emit('imageMousedown', {
        evt,
        element: curElement
      })
    }
    // 需求 4.1：控件内图片拖拽排序（只读/表单模式）
    setupControlImageSortDrag(host, curElement)
  }
  // 表格工具组件
  const tableTool = draw.getTableTool()
  tableTool.dispose()
  if (isTable && !isReadonly && draw.getMode() !== EditorMode.FORM) {
    tableTool.render()
  }
  // 超链接
  const hyperlinkParticle = draw.getHyperlinkParticle()
  hyperlinkParticle.clearHyperlinkPopup()
  if (curElement.type === ElementType.HYPERLINK) {
    if (isMod(evt)) {
      hyperlinkParticle.openHyperlink(curElement)
    } else {
      hyperlinkParticle.drawHyperlinkPopup(curElement, positionList[curIndex])
    }
  }
  // 拼写检查错词点击事件
  if (
    draw.getZone().isMainActive() &&
    isDirectHit &&
    eventBus.isSubscribe('spellcheckClick')
  ) {
    const spellcheckContext = isTable
      ? { tableId, tableIndex: index, trIndex, tdIndex, tablePath }
      : undefined
    const spellcheckRange = draw
      .getSpellcheck()
      .getRangeByIndex(curIndex, spellcheckContext)
    if (spellcheckRange) {
      eventBus.emit('spellcheckClick', {
        evt,
        range: spellcheckRange
      })
    }
  }
  // 日期控件
  const dateParticle = draw.getDateParticle()
  dateParticle.clearDatePicker()
  if (curElement.type === ElementType.DATE && !isReadonly) {
    dateParticle.renderDatePicker(curElement, positionList[curIndex])
  }
}
