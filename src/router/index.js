import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/layout/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: 'home'
        }
      }
    ]
  },
  {
    path: '/profile',
    component: Main,
    redirect: '/profile/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/index.vue'),
        name: 'Profile',
        meta: {
          title: 'Profile'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
