import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/config/router.js'
import pinia from '@/config/pinia.js'
import 'animate.css';

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')

