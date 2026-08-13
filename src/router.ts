import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/theme',
    },
    {
      path: '/theme',
      name: 'theme',
      component: () => import('./pages/ThemePage.vue'),
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('./pages/ButtonsPage.vue'),
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('./pages/CardsPage.vue'),
    },
  ],
});

export default router;
