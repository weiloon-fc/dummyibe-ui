import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import SelectedSeatView from "@/views/SelectedSeatView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/selected-seat',
            name: 'selected-seat',
            component: SelectedSeatView
        }
    ]
})

export default router