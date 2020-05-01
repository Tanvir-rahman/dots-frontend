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
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () =>
          import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        name: 'Home',
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
        component: () =>
          import(/* webpackChunkName: "profile" */ '@/views/profile/index.vue'),
        name: 'Profile',
        meta: {
          title: 'Profile'
        }
      }
    ]
  },
  {
    path: '/tables',
    component: Main,
    redirect: '/tables/index',
    meta: { hidden: true },
    children: [
      {
        path: 'index',
        component: () =>
          import(/* webpackChunkName: "tables" */ '@/views/tables/index.vue'),
        name: 'Tables',
        meta: {
          title: 'Table List'
        }
      },
      {
        path: 'details/:tableUuid',
        component: () =>
          import(
            /* webpackChunkName: "tables-details" */ '@/views/tables/TableDetails.vue'
          ),
        name: 'TableDetails',
        meta: {
          title: 'Table Data'
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
