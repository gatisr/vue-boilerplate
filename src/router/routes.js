const routes = [{
  path: '/',
  component: () => import('~/layouts/MainLayout.vue'),
  children: [
    {
      name: 'Home',
      path: '',
      component: () => import('~/views/Home.vue'),
    },
    {
      name: 'About',
      path: 'about',
      component: () => import('~/views/About.vue'),
    },
  ],
}];

export default routes;
