export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nuxtjs/color-mode'],
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
      apiBase: 'http://localhost:4000/api'
    }
  }
})
