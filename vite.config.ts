import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import typescript from '@rollup/plugin-typescript'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import * as path from 'path'
import { fileURLToPath } from 'node:url'

export default defineConfig(({ mode }) => {
  const name = 'canvas-editor'
  const resolve = {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@tests': fileURLToPath(new URL('./tests', import.meta.url)),
      '@cspell-en-us-dictionary': `${fileURLToPath(
        new URL(
          './node_modules/@cspell/dict-en_us/en_US.trie.gz',
          import.meta.url
        )
      )}?url`
    }
  }
  const test = {
    environment: 'jsdom',
    globals: false,
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.ts'],
    css: false,
    pool: 'threads',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      include: ['src/editor/**'],
      exclude: [
        'src/editor/interface/**',
        'src/editor/dataset/constant/**',
        'src/editor/dataset/enum/**',
        'src/editor/core/draw/particle/latex/utils/symbols.ts',
        'src/editor/core/draw/particle/latex/utils/hershey.ts'
      ]
    }
  }
  const plugins = [vue()]
  if (mode === 'lib') {
    return {
      resolve,
      test,
      plugins: [
        ...plugins,
        cssInjectedByJsPlugin({
          styleId: `${name}-style`,
          topExecutionPriority: true
        }),
        {
          ...typescript({
            tsconfig: './tsconfig.json',
            include: ['./src/editor/**', './src/vue/**'],
            // 覆盖 tsconfig 的 outDir("dist")，使其落在 lib 目录内（rolldown 路径校验）
            outDir: 'lib',
            declaration: true,
            declarationDir: 'lib/types',
            rootDir: '/'
          }),
          apply: 'build'
        }
      ],
      build: {
        outDir: 'lib',
        emptyOutDir: true,
        lib: {
          name,
          fileName: name,
          entry: path.resolve(__dirname, 'src/index.ts')
        },
        rollupOptions: {
          // Vue 组件层外置 vue，由宿主项目（cvnet 自带 vue 3.3.6）提供
          external: ['vue']
        },
        sourcemap: true
      }
    }
  }
  if (mode === 'vue') {
    return {
      resolve,
      test,
      plugins: [
        ...plugins,
        cssInjectedByJsPlugin({
          styleId: `${name}-vue-style`,
          topExecutionPriority: true
        }),
        {
          ...typescript({
            tsconfig: './tsconfig.json',
            include: ['./src/vue/**']
          }),
          apply: 'build',
          declaration: true,
          declarationDir: 'dist/vue/',
          rootDir: '/'
        }
      ],
      build: {
        lib: {
          name: `${name}-vue`,
          fileName: `${name}-vue`,
          entry: path.resolve(__dirname, 'src/vue/index.ts')
        },
        rollupOptions: {
          external: ['vue']
        },
        sourcemap: true
      }
    }
  }
  return {
    resolve,
    test,
    plugins,
    base: `/${name}/`,
    server: {
      host: '0.0.0.0',
      port: 3000
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          vue: path.resolve(__dirname, 'vue.html')
        }
      }
    }
  }
})
