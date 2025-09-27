import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './routers'
import '@/styles/common.scss'
import {lazyPugin} from '@/directives'

const app=createApp(App)
app.use(createPinia())
app.use(router)
app.use(lazyPugin)
app.mount('#app')
