const routes = [{
  path: '/',
  component: () => import('~/layouts/MainLayout.vue'),
  children: [
    {
      name: 'Home',
      path: '',
      component: () => import('~/views/SampleView.vue'),
    },
  ],
}];

export default routes;
