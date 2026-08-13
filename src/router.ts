import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 96, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  },
  routes: [
    {
      path: '/',
      redirect: '/install',
    },
    {
      path: '/install',
      name: 'install',
      component: () => import('./pages/InstallPage.vue'),
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
    {
      path: '/code',
      name: 'code',
      component: () => import('./pages/CodePage.vue'),
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('./pages/DonatePage.vue'),
    },
  ],
});

export default router;
