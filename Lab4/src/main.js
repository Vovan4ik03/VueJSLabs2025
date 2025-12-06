import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { i18n } from './i18n'
import { router } from './router'
import App from './App.vue'
import './styles/main.css'

import { configure } from 'vee-validate'
import { useSettingsStore } from './stores/settings'


configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: true,
  validateOnModelUpdate: true
})

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)

const settingsStore = useSettingsStore(pinia)
i18n.global.locale.value = settingsStore.locale

app.use(i18n)
app.use(router)

app.mount('#app')
