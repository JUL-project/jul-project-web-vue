import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)

app.config.globalProperties.$axios = axios
app.mount('#app')