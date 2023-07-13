import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';


const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.provide('pinia', pinia);

app.mount('#app');
