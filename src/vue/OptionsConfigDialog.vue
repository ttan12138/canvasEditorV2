<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useEditorContext } from './context'

const ctx = useEditorContext()
const getCommand = () => ctx.getCommand()

const optDialog = reactive({ open: false })
const optModel = reactive<Record<string, any>>({})
const optApplyMsg = ref('')

interface OptField {
  path: string
  label: string
  type: 'number' | 'text' | 'color' | 'select' | 'padding'
  options?: { label: string; value: string }[]
  step?: number
  min?: number
  max?: number
}
// 覆盖常用且可运行时更新的参数（IUpdateOption 已排除 mode/width/height/scale/pageGap）
const optionGroups: { group: string; fields: OptField[] }[] = [
  {
    group: '文本默认', fields: [
      { path: 'defaultFont', label: '字体', type: 'text' },
      { path: 'defaultSize', label: '字号', type: 'number', min: 1 },
      { path: 'minSize', label: '最小字号', type: 'number', min: 1 },
      { path: 'maxSize', label: '最大字号', type: 'number', min: 1 },
      { path: 'defaultColor', label: '默认颜色', type: 'color' },
      { path: 'defaultRowMargin', label: '行上下边距', type: 'number', min: 0 },
      { path: 'defaultTabWidth', label: 'Tab 宽度', type: 'number', min: 0 }
    ]
  },
  {
    group: '页面', fields: [
      { path: 'margins', label: '页边距[上,右,下,左]', type: 'padding' },
      { path: 'pageMode', label: '分页模式', type: 'select', options: [{ label: '分页', value: 'paging' }, { label: '连续', value: 'continuity' }] },
      { path: 'paperDirection', label: '纸张方向', type: 'select', options: [{ label: '纵向', value: 'vertical' }, { label: '横向', value: 'horizontal' }] },
      { path: 'wordBreak', label: '换行', type: 'select', options: [{ label: '按字符', value: 'break-all' }, { label: '按词', value: 'break-word' }] }
    ]
  },
  {
    group: '子表/表格', fields: [
      { path: 'table.tdPadding', label: '单元格内边距[上,右,下,左]', type: 'padding' },
      { path: 'table.childTableTdPadding', label: '子表容器内边距[上,右,下,左]', type: 'padding' },
      { path: 'table.defaultBorderColor', label: '默认边框色', type: 'color' },
      { path: 'table.defaultTrMinHeight', label: '行最小高度', type: 'number', min: 1 },
      { path: 'table.defaultColMinWidth', label: '列最小宽度', type: 'number', min: 1 },
      { path: 'table.overflow', label: '超出滚动', type: 'select', options: [{ label: '否', value: 'false' }, { label: '是', value: 'true' }] }
    ]
  },
  {
    group: '显示', fields: [
      { path: 'searchMatchColor', label: '搜索高亮色', type: 'color' },
      { path: 'rangeColor', label: '选区颜色', type: 'color' },
      { path: 'resizerColor', label: '缩放手柄色', type: 'color' },
      { path: 'highlightAlpha', label: '高亮透明度', type: 'number', min: 0, max: 1, step: 0.1 },
      { path: 'inactiveAlpha', label: '非活跃透明度', type: 'number', min: 0, max: 1, step: 0.1 }
    ]
  },
  {
    group: '其他', fields: [
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

const loadOptionsModel = () => {
  const cur = getCommand()?.getOptions()
  if (!cur) return
  optionGroups.forEach(g => g.fields.forEach(f => {
    const val = getOptByPath(cur, f.path)
    if (f.type === 'padding') {
      optModel[f.path] = Array.isArray(val) ? [...val] : [0, 0, 0, 0]
    } else if (f.path === 'table.overflow') {
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
    } else if (f.path === 'table.overflow') {
      v = v === 'true'
    }
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
        <div v-for="g in optionGroups" :key="g.group" class="cc-opt-group">
          <div class="cc-opt-group__title">{{ g.group }}</div>
          <div v-for="f in g.fields" :key="f.path" class="cc-opt-field">
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
              <template v-else>
                <input type="text" v-model="optModel[f.path]" class="cc-opt-input" />
              </template>
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
  width: 560px;
}

.cc-opt-body {
  max-height: 56vh;
  overflow: auto;
  padding-right: 4px;
}

.cc-opt-group {
  margin-bottom: 12px;
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
