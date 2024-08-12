import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'vue-toastification/dist/index.css'

import router from './router'

createApp(App).use(router).mount('#app')
//createApp(App).mount('#app')
