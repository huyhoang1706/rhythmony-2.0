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
  RiEditBoxLine,
  MdDeleteRound,
} from 'oh-vue-icons/icons'

import App from './App.vue'
import router from './router'
import { definePreset } from '@primevue/themes'

addIcons(
  FaSpotify,
  CoHome,
  MdDashboardSharp,
  BiList,
  MdUploadfile,
  BiPersonFill,
  MdAlbum,
  HiMenu,
  RiEditBoxLine,
  MdDeleteRound,
)

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{rose.50}',
      100: '{rose.100}',
      200: '{rose.200}',
      300: '{rose.300}',
      400: '{rose.400}',
      500: '{rose.500}',
      600: '{rose.600}',
      700: '{rose.700}',
      800: '{rose.800}',
      900: '{rose.900}',
      950: '{rose.950}',
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
