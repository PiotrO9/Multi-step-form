import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { defineRule } from 'vee-validate'
import { required, email } from '@vee-validate/rules'

import App from './App.vue'
import router from './router'

defineRule('required', required)
defineRule('email', email)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
