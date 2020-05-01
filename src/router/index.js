import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/layout/Main'
import Auth from '@/layout/Auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/redirect',
    component: Main,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: Auth,
    children: [
      {
        path: '',
        component: () => import('@/views/login/index.vue'),
        name: 'Login',
        hidden: true
      }
    ]
  },
  {
    path: '/register',
    component: Auth,
    children: [
      {
        path: '',
        component: () => import('@/views/register/index.vue'),
        name: 'Register',
        hidden: true
      }
    ]
  },
  {
    path: '/thank-you',
    component: Auth,
    children: [
      {
        path: '',
        component: () => import('@/views/register/ThankYou.vue'),
        name: 'ThankYou',
        hidden: true
      }
    ]
  },
  {
    path: '/',
    component: Main,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard'
        }
      }
    ]
  },
  {
    path: '/maps',
    component: Main,
    meta: { hidden: true },
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "maps" */ '@/views/maps/index.vue'),
        name: 'Maps',
        meta: {
          title: 'Maps'
        }
      }
    ]
  },
  {
    path: '/tables',
    component: Main,
    meta: { hidden: true },
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "tables" */ '@/views/tables/index.vue'),
        name: 'Tables',
        meta: {
          title: 'Tables'
        }
      }
    ]
  },
  {
    path: '/reports',
    component: Main,
    meta: { hidden: true },
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "reports" */ '@/views/reports/index.vue'),
        name: 'Reports',
        meta: {
          title: 'Reports'
        }
      }
    ]
  },
  {
    path: '/profile',
    component: Main,
    meta: { hidden: true },
    children: [
      {
        path: '',
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
  mode: 'history',
  routes
})

export default router
