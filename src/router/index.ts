import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import DashBoard from '../views/dashboard/index.vue'
import ContactUs from '../views/contact/index.vue'
import AboutUs from '../views/about/index.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/about'
  },
  {
    path: '/home',
    name: 'home',
    component: DashBoard
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUs
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
