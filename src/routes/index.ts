import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { HOME_PAGE } from './name';
import Home from '@pages/home/index.vue';

const routes: RouteRecordRaw[] = [{ path: HOME_PAGE, component: Home }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
