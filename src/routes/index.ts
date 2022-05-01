import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { HOME_NAME, HOME_PAGE } from './name';
import Home from '@pages/home/index.vue';

const routes: RouteRecordRaw[] = [{ path: HOME_PAGE, component: Home, name: HOME_NAME }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
