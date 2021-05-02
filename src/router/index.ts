import { createRouter, createWebHistory } from 'vue-router'

// 自动注册modules下以.route.ts结尾的文件名的路由
const routes = Object.values(
  import.meta.globEager('./modules/*.route.ts')
).flatMap((module) => module.default)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
