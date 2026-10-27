// docx 导入/导出插件：编译产物 docx.js 未附带类型声明。
// 该插件通过 `editor.use(docxPlugin)` 挂载，默认导出是一个 (editor, options?) => void 的插件函数。
declare const docxPlugin: (editor: unknown, options?: unknown) => void
export default docxPlugin
