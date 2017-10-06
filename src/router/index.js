import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/pages/Hello';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Auth from '@/pages/Auth';
import AuthSuccess from '@/pages/AuthSuccess';
import Dashboard from '@/pages/Dashboard';
// import Callback from '@/pages/Callback';
import { requireAuth } from '@/utils/auth';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth,
    },
    {
      path: '/success',
      name: 'AuthSuccess ',
      component: AuthSuccess,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Auth',
      name: 'Auth',
      component: Auth,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      beforeEnter: requireAuth,
      component: Dashboard,
    },
    // {
    //   path: '/callback',
    //   component: Callback,
    // },
  ],
});
