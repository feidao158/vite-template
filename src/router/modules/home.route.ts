import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { name: 'home', component: () => import('~/views/Home'), path: '/' },
]

export default routes
