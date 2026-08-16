export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxtjs/color-mode', '@nuxt/eslint'],
  ssr: false,
  app: {
    head: {
      title: 'Serene1004 | Frontend Portfolio',
    },
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
});
