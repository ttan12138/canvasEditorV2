import { readdir, rm, cp, stat, mkdir } from 'node:fs/promises'
import path from 'node:path'

const libDir = path.resolve('lib')
const dest = [
  'D:\\dataup\\gitsvn\\cvnet\\src\\crealife\\canvasEditor',
  'D:\\dataup\\gitsvn\\CrealifeReport\\src\\crealifecomp\\canvasEditor'
]

// cvnet 目录中需保留的非构建产物文件
const keep = new Set(['canvas-editor.js', 'index.vue', 'mock.js'])

// 复制 lib 下所有顶层文件（entry、chunk、sourcemap），不复制 types 子目录
const files = await readdir(libDir)
const libFiles = []
for (const f of files) {
  const src = path.join(libDir, f)
  if ((await stat(src)).isFile()) libFiles.push(f)
}

let count = 0
for (const d of dest) {
  // 复制前清理旧的带 hash 的 chunk（如 rolldown-runtime-*.js / html2canvas-*.js 等）
  const existing = await readdir(d).catch(() => [])
  for (const f of existing) {
    if (keep.has(f)) continue
    if (/\.js(\.map)?$/.test(f)) {
      await rm(path.join(d, f), { force: true })
    }
  }
  // 确保目标目录存在（按目录处理；若不存在则创建，避免 cp 抛 ENOENT）
  await mkdir(d, { recursive: true })
  for (const f of libFiles) {
    await cp(path.join(libDir, f), path.join(d, f))
    count++
  }
}
console.log(`copy-lib: ${count} file(s) copied to ${dest.length} dest(s)`)
