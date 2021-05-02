import 'ant-design-vue/dist/antd.less'
import 'virtual:windi-devtools'
import 'virtual:windi.css'

import { createHead } from '@vueuse/head'
import { createApp } from 'vue'

import App from './App'
import router from './router'

createApp(App).use(router).use(createHead()).mount('#app')
