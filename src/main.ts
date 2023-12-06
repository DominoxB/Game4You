import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"
import router from "@/router/index"
import i18n from './locales/index'

createApp(App).use(i18n).use(router).mount('#app')
 