import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  FaSpotify,
  CoHome,
  MdDashboardSharp,
  BiList,
  MdUploadfile,
  BiPersonFill,
  MdAlbum,
  HiMenu,
} from 'oh-vue-icons/icons'

import App from './App.vue'
import router from './router'
import { definePreset } from '@primevue/themes'

addIcons(FaSpotify, CoHome, MdDashboardSharp, BiList, MdUploadfile, BiPersonFill, MdAlbum, HiMenu)

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
  },
})

const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
  },
})

app.mount('#app')