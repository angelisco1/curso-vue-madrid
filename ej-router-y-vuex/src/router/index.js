import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NuevoUsuario from '../views/NuevoUsuario.vue'
import InfoUsuario from '../views/InfoUsuario.vue'

const routes = [
  {
    path: '/usuarios',
    name: 'Home',
    component: Home
  },
  {
    path: '/nuevo-usuario',
    component: NuevoUsuario
  },
  {
    path: '/usuarios/:id',
    component: InfoUsuario
  },
  {
    path: '/',
    redirect: '/usuarios'
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
