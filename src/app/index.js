import { createApp } from 'vue'
import App from './App.vue'
import { router, store } from "./providers"
import 'pretendard/dist/web/static/pretendard.css'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import { preset } from '@/app/config/preset'

const MyPreset = definePreset(Aura, preset)

const initializeApp = createApp(App).use(router).use(store)

initializeApp.use(PrimeVue, {
  theme: {
      preset: MyPreset,
      options: {
        prefix: 'p',
        darkModeSelector: '.dark',
        cssLayer: false
      }  
  },
  ripple: true
})

export const app = initializeApp