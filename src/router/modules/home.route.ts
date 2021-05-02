import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { name: 'home', component: () => import('~/pages/Home'), path: '/' },
];

export default routes;
