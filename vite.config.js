import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {PrimeVueResolver} from '@primevue/auto-import-resolver'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 1004
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `[name].[hash].js`,
        chunkFileNames: `[name].[hash].js`,
        assetFileNames: `[name].[hash].[ext]`,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 글로벌 SCSS 변수, 믹스인, 함수 등을 자동으로 불러오려면 여기 추가
        // additionalData: `@import "./src/assets/styles/variables.scss";`  // 예시: 글로벌 변수 파일을 자동으로 포함
      },
    },
  },
})
