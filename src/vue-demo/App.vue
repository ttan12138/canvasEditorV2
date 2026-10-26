<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import {
  CanvasEditor,
  CellConfigDialog
} from '../vue'
import type Editor from '../editor'
import type { IEditorData, IEditorResult, IElement } from '../editor'
import { ControlType, EditorMode, ElementType, RowFlex } from '../editor'
import { data, options } from '../mock'

type DemoMode = 'edit' | 'form' | 'readonly'

const editorRef = ref<InstanceType<typeof CanvasEditor> | null>(null)
// 需求 8 / 全局 options：单元格配置、联动、选项配置已抽为可复用组件 CellConfigDialog /
// OptionsConfigDialog，放在 <CanvasEditor> 默认插槽内，通过 useEditorContext 自动
// 拿到编辑器实例。这里仅保留宿主侧入口（右键菜单与事件注册由 CellConfigDialog 完成）。
const cellConfigRef = ref<InstanceType<typeof CellConfigDialog> | null>(null)

// 需求 8：示例表格（含一个子表单元格 subA 与一个可联动单元格 C）
const subTableDemo: IElement = {
  type: ElementType.TABLE,
  colgroup: [{ width: 220 }, { width: 220 }],
  trList: [
    {
      height: 48,
      tdList: [
        {
          colspan: 1,
          rowspan: 1,
          name: 'subA',
          hasChild: true,
          childTables: {
            header: [
              { key: 'name', name: '姓名', width: 110 },
              { key: 'age', name: '年龄', width: 110 }
            ],
            rowHeight: 26
          },
          value: [{ value: '' }]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [{ value: '普通单元格 B' }]
        }
      ]
    },
    {
      height: 48,
      tdList: [
        {
          colspan: 1,
          rowspan: 1,
          enableLink: true,
          linkChildIds: [],
          value: [{ value: '联动单元格 C（右击配置 → 关联 subA）' }]
        },
        {
          colspan: 1,
          rowspan: 1,
          value: [{ value: '普通单元格 D' }]
        }
      ]
    }
  ]
}

const editorData: IEditorData = {
  header: [
    {
      value: '第一人民医院',
      size: 32,
      rowFlex: RowFlex.CENTER
    },
    {
      value: '\n门诊病历',
      size: 18,
      rowFlex: RowFlex.CENTER
    },
    {
      value: '\n',
      type: ElementType.SEPARATOR
    },
    {
      value: '',
      type: ElementType.CONTROL,
      control: {
        conceptId: 'hdr-ph',
        type: ControlType.TEXT,
        value: null,
        placeholder: '区域占位符'
      }
    }
  ],
  main: [
    ...data,
    subTableDemo,
    {
      value: '',
      type: ElementType.CONTROL,
      control: {
        conceptId: 'main-ph',
        type: ControlType.TEXT,
        value: null,
        placeholder: '区域占位符'
      }
    }
  ],
  footer: [
    {
      value: 'canvas-editor',
      size: 12
    },
    {
      value: '',
      type: ElementType.CONTROL,
      control: {
        conceptId: 'ftr-ph',
        type: ControlType.TEXT,
        value: null,
        placeholder: '区域占位符'
      }
    }
  ]
}

// 当前模式：编辑模式显示工具栏，表单/只读模式隐藏工具栏
const mode = ref<DemoMode>('edit')
// 是否显示内置调试面板（<CanvasEditor debug>）
const debug = ref(true)

const MODE_MAP: Record<DemoMode, EditorMode> = {
  edit: EditorMode.EDIT,
  form: EditorMode.FORM,
  readonly: EditorMode.READONLY
}

const switchMode = (next: DemoMode) => {
  if (next === mode.value) return
  mode.value = next
  // 模式切换由 <CanvasEditor :mode> 内部同步引擎模式
}

const onReady = (editor: Editor) => {
  console.log('[vue-demo] ready', editor.version)
}

const onContentChange = () => {
  console.log('[vue-demo] contentChange')
}

const onSaved = (payload: IEditorResult) => {
  console.log('[vue-demo] saved', payload)
}

const save = () => {
  const result = editorRef.value?.getValue()
  console.log('[vue-demo] getValue', result)
}

// ============ 需求 3/4/5/8/10 验证面板已内置为 <CanvasEditor debug> 调试面板 ============

</script>

<template>
  <div class="demo">
    <div class="demo__main">
      <div class="demo__modes">
        <span class="demo__modes-label">模式：</span>
        <button type="button" :class="{ 'is-active': mode === 'edit' }" @click="switchMode('edit')">
          编辑模式
        </button>
        <button type="button" :class="{ 'is-active': mode === 'form' }" @click="switchMode('form')">
          表单模式
        </button>
        <button type="button" :class="{ 'is-active': mode === 'readonly' }" @click="switchMode('readonly')">
          只读模式
        </button>
      </div>

      <div class="demo__ops">
        <button type="button" @click="save">获取数据</button>
        <label class="demo__ops-check">
          <input type="checkbox" v-model="debug" /> 调试面板
        </label>
        <span class="demo__ops-tip">提示：在表格单元格上「右键」可打开「配置单元格(子表/联动)」</span>
      </div>

      <CanvasEditor ref="editorRef" :data="editorData" :options="options" :mode="MODE_MAP[mode]" :debug="debug"
        auto-focus @ready="onReady" @content-change="onContentChange" @saved="onSaved">
        <template #footer="{ pageInfo }">
          <div class="demo__footer">
            <span>页面 {{ pageInfo.pageNo }}/{{ pageInfo.pageCount }}</span>
          </div>
        </template>
        <!-- 默认插槽：可复用对话框组件（通过 useEditorContext 注入编辑器实例） -->
        <CellConfigDialog ref="cellConfigRef" />
      </CanvasEditor>
    </div><!-- /.demo__main -->
  </div>
</template>

<style scoped>
.demo {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.demo__main {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.demo .canvas-editor {
  flex: 1 1 auto;
  min-height: 0;
  height: auto;
}

.demo__modes {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: #fff;
  border-bottom: 1px solid #e2e6ed;
  font-size: 13px;
}

.demo__modes-label {
  color: #767c85;
}

.demo__modes button {
  height: 26px;
  padding: 0 12px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: #fff;
  color: #3d4757;
  cursor: pointer;
}

.demo__modes button.is-active {
  border-color: #193758;
  background: rgba(25, 55, 88, 0.12);
  color: #193758;
}

.demo__ops {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background: #fff;
  border-bottom: 1px solid #e2e6ed;
  font-size: 13px;
}

.demo__ops button {
  height: 26px;
  padding: 0 10px;
  border: 1px solid #d0d3d9;
  border-radius: 4px;
  background: #fff;
  color: #3d4757;
  cursor: pointer;
}

.demo__ops button:hover {
  border-color: #193758;
}

.demo__ops-tip {
  color: #9097a1;
  margin-left: 8px;
}

.demo__ops-check {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #3d4757;
}

.demo__footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 12px;
  background: #fff;
  border-top: 1px solid #e2e6ed;
  font-size: 12px;
  color: #3d4757;
}

.demo__footer button {
  height: 24px;
  padding: 0 10px;
  border: 1px solid #e2e6ed;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
}
</style>
