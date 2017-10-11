import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/Home';
import Hello from '@/components/pages/Hello';
import About from '@/components/pages/About';
import Todos from '@/components/pages/Todos';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos,
    },
  ],
});
