import '@styles/global.css';
import {createApp} from 'vue';
import App from './App.vue';
import {router} from '@routes';
import {
  VueQueryPlugin,
  QueryClient,
  VueQueryPluginOptions,
} from '@tanstack/vue-query';
import {createPinia} from 'pinia';

const client = new QueryClient();

const app = createApp(App);

const vueQueryOptions: VueQueryPluginOptions = {
  queryClient: client,
};

app.use(router).use(createPinia()).use(VueQueryPlugin, vueQueryOptions);

app.mount('#app');
