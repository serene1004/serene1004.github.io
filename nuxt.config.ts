import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { loadEnvFile } from 'node:process'

const envFileName = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local'
const envFilePath = resolve(process.cwd(), envFileName)

if (existsSync(envFilePath)) {
  loadEnvFile(envFilePath)
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/color-mode'],
  ssr: false,
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/'
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:4000/api'
    }
  }
})
