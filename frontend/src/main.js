import {createApp} from "vue";
import App from './App.vue';
import Admin from './Admin.vue';
import Main from './Main.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './index.css';
import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: Main },
    { path: '/about', component: Admin },
]

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})



// 5. Create and mount the root instance.
const app = createApp(App).use(router).use(ElementPlus).mount('#app')


