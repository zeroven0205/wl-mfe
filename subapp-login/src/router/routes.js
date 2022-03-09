import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Login.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Home
  },
  {
    path: '/',
    name: 'About',
    component: About
  },
]
export default routes
