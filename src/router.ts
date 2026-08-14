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
      path: '/badges',
      name: 'badges',
      component: () => import('./pages/BadgesPage.vue'),
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: () => import('./pages/AccordionPage.vue'),
    },
    {
      path: '/file-upload',
      name: 'file-upload',
      component: () => import('./pages/FileUploadPage.vue'),
    },
    {
      path: '/stepper',
      name: 'stepper',
      component: () => import('./pages/StepperPage.vue'),
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('./pages/ModalPage.vue'),
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: () => import('./pages/TabsPage.vue'),
    },
    {
      path: '/loader',
      name: 'loader',
      component: () => import('./pages/LoaderPage.vue'),
    },
    {
      path: '/breadcrumbs',
      name: 'breadcrumbs',
      component: () => import('./pages/BreadcrumbsPage.vue'),
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('./pages/LayoutPage.vue'),
    },
    {
      path: '/input-text',
      name: 'input-text',
      component: () => import('./pages/InputTextPage.vue'),
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import('./pages/CheckboxPage.vue'),
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import('./pages/RadioPage.vue'),
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('./pages/DonatePage.vue'),
    },
  ],
});

export default router;
