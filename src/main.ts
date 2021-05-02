import 'ant-design-vue/dist/antd.css';
import 'virtual:windi-devtools';
import 'virtual:windi.css';

import { createHead } from '@vueuse/head';
import antdv from 'ant-design-vue';
import { createApp } from 'vue';

import App from './App';
import router from './router';

createApp(App).use(router).use(createHead()).use(antdv).mount('#app');
