import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';

import CopyToClipboardPlugin from './plugins/copyToClipboard';

import 'primeicons/primeicons.css';
import './style.css';

const app = createApp(App);

app.use(PrimeVue, { theme: { preset: Aura } });
app.use(ToastService);
app.use(CopyToClipboardPlugin);

app.mount('#app');
