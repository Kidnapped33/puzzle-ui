import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';
import Ashine from './components/Ashine.vue';
import Ashine2 from './components/Ashine2.vue';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Ashine },
        { path: '/xxx', component: Ashine2 }
    ]
});


const app = createApp(App);
app.use(router);
app.mount('#app');
