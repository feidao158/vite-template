import 'virtual:windi-devtools'
import 'virtual:windi.css'

import { createHead } from '@vueuse/head'
import { createApp } from 'vue'

import App from './App'
import router from './router'

createApp(App)
  .use(router)
  // 使用useHook控制title
  .use(createHead())
  .mount('#app')
