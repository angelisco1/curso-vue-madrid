import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NuevoUsuario from '../views/NuevoUsuario.vue'
import InfoUsuario from '../views/InfoUsuario.vue'
// import EditarUsuario from '../views/EditarUsuario.vue'
import Error from '../views/Error.vue'
import Contador from '../views/Contador.vue'

const rutasUsuarios = [
  {
    path: ':id/info',
    component: InfoUsuario,
    name: 'info-usuario'
  },
  {
    path: 'editar/:id',
    component: () => import('../views/EditarUsuario'),
    name: 'editar-usuario'
  }
]

const routes = [
  {
    path: '/usuarios',
    name: 'Home',
    component: Home,
    children: rutasUsuarios
  },
  {
    path: '/nuevo-usuario',
    component: NuevoUsuario
  },
  {
    path: '/ejemplo-vuex',
    component: Contador
  },
  // {
  //   path: '/usuarios/:id',
  //   component: InfoUsuario
  // },
  {
    path: '/',
    redirect: '/usuarios'
  },
  {
    path: '/:path(.*)*',
    component: Error
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
