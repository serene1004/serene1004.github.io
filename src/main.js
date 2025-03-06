import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import './assets/reset.css'

import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import { preset } from '@/common/preset'

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

app.use(router)
app.mount('#app')