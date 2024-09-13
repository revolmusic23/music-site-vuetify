import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import store from './store';

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(store);

app.mount('#app');
