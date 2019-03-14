import Vue from 'vue';
import Router from 'vue-router';
import { isDevEnv } from './utils';

Vue.use(Router);

// Code-Splitting
const List = () => import('./components/List');
const Detail = () => import('./components/Detail');
const Form = () => import('./components/Form');

const routes = [
  {
    path: '/',
    name: 'root',
    component: List,
  },
  {
    path: '/pokedex/:region',
    name: 'pokedex',
    component: List,
  },
  {
    path: '/pokemon/:nationalId',
    name: 'pokemon',
    component: Detail,
  },
];

export default new Router({
  mode: 'history',
  routes: isDevEnv() ? [
    ...routes,
    {
      path: '/new',
      name: 'new',
      component: Form,
    },
  ] : routes,
});
