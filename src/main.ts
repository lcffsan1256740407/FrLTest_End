import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/config/router.js'
import pinia from '@/config/pinia.js'
import 'animate.css';

import locale from "element-plus/lib/locale/lang/zh-cn";//Element-plus 中文化  
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(ElementPlus, { locale })
app.use(router)
app.use(pinia)
app.mount('#app')

