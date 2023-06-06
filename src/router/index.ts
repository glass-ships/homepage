import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    }
  ]
});

export default router
