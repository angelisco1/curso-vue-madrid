import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CrearVendehumos from '../views/CrearVendehumos.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crear-vendehumos',
    name: 'crear-vendehumos',
    component: CrearVendehumos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
