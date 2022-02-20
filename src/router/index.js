import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestView from '../views/TestView.vue';
import ProductView from '../views/ProductView.vue';
import CommentView from '../views/CommentView.vue';
import UserView from '../views/UserView.vue';
import TodoView from '../views/TodoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/test',
    name: 'test',
    component: TestView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/products/:productId',
    component: ProductView,
  },
  {
    path: '/products/:productId/comments',
    component: CommentView,
  },
  {
    path: '/users/:userId',
    name: 'users',
    component: UserView,
    children: [
      {
        path: 'todos',
        component: TodoView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
