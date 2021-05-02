import { createRouter, createWebHistory } from 'vue-router';

const routes = Object.values(
  import.meta.globEager('./modules/*.route.ts')
).flatMap((module) => module.default);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
