import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isRelease = mode === 'production'
  const entryFile = 'src/index.ts'
  let config = {
    plugins: [vue(), VueSetupExtend()],
  }
  if (isRelease) {
    const build = {
      build: {
        outDir: 'dist',
        chunkSizeWarningLimit: 1000,
        lib: {
          formats: ['es', 'cjs', 'iife'], // "umd"
          entry: path.resolve(__dirname, entryFile),
          name: 'vue3dLoader',
          fileName: (format) => {
            const fileName = 'vue-threejs-display'
            if (format === 'es') {
              return `${fileName}.esm.js`
            }
            if (format === 'iife') {
              return `${fileName}.global.js`
            }
            return `${fileName}.${format}.js`
          },
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            dir: '../../vue3/',
            globals: {
              vue: 'Vue',
            },
          },
        },
      },
    }
    config = { ...config, ...build }
  }

  return config
})
