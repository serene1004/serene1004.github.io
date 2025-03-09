import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import './assets/reset.css'
import 'pretendard/dist/web/static/pretendard.css'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import { preset } from '@/shared/config/preset'

const app = createApp(App)

const MyPreset = definePreset(Aura, preset)

app.use(PrimeVue, {
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

app.use(createPinia())
app.use(router)
app.mount('#app')