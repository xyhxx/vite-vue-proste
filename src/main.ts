import { createApp } from 'vue';
import App from './App.vue';
import { router } from '@routes';
import { VueQueryPlugin, QueryClient } from 'vue-query';
import { createPinia } from 'pinia';

import '@styles/global.css';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: 'tracked',
    },
  },
});

const app = createApp(App);

app.use(router).use(createPinia()).use(VueQueryPlugin, client);

app.mount('#app');
