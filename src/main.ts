import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Popup from './popup/Popup.vue'

const app = createApp(Popup)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
