import { readdir, rm, cp, stat } from 'node:fs/promises'
import path from 'node:path'

const libDir = path.resolve('lib')
const dest = 'D:\\dataup\\gitsvn\\cvnet\\src\\crealife\\canvasEditor'

// cvnet 目录中需保留的非构建产物文件
const keep = new Set(['canvas-editor.js', 'canvas-editor.umd.cjs', 'index.vue', 'mock.js'])

// 复制前清理旧的带 hash 的 chunk（如 rolldown-runtime-*.js / html2canvas-*.js 等）
const existing = await readdir(dest).catch(() => [])
for (const f of existing) {
  if (keep.has(f)) continue
  if (/\.js(\.map)?$/.test(f)) {
    await rm(path.join(dest, f), { force: true })
  }
}

// 复制 lib 下所有顶层文件（entry、chunk、sourcemap），不复制 types 子目录
const files = await readdir(libDir)
let count = 0
for (const f of files) {
  const src = path.join(libDir, f)
  if (!(await stat(src)).isFile()) continue
  await cp(src, path.join(dest, f))
  count++
}
console.log(`copy-lib: ${count} file(s) copied to cvnet`)
