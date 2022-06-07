import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login'
import HomeView from '../views/HomeView.vue'
import menu from '../views/menu'
import popular from '../views/popular'
import sobre_nos from '../views/sobre_nos'
import contactos from '../views/contactos'
import carrinho from '../views/carrinho'


const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
    
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
    
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu
  },
  {
    path: '/popular',
    name: 'popular',
    component: popular
  },
  {
    path: '/sobre_nos',
    name: 'sobre_nos',
    component: sobre_nos
  },
  {
    path: '/contactos',
    name: 'contactos',
    component: contactos
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: carrinho
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
