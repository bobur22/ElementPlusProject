import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Products from "../pages/Products.vue";

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router