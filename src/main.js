import { createApp } from 'vue'
import router from './router'

import { createPinia } from 'pinia'

import 'bootstrap'

// import CKEditor from '@ckeditor/ckeditor5-vue'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

// app.use(CKEditor)
app.use(router)
app.use(pinia)

app.mount('#app')
