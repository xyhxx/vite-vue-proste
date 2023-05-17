import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import {HOME_NAME, HOME_PATH} from './name';
import Home from '@pages/home/index.vue';

const routes: RouteRecordRaw[]
= [{path: HOME_PATH, component: Home, name: HOME_NAME}];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export * from './name';
