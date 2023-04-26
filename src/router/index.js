import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Favoritos from '@/views/Favoritos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: Favoritos
    },

  ]
})

export default router
