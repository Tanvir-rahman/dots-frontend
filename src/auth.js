import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth'
import getPageTitle from '@/utils/get-page-title'
import { isNetworkIssue } from './utils/request'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = [/login/, /thank-you/, /register/] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  if (whiteList.some(rx => rx.test(to.path))) {
    // in the free login whitelist, go directly
    next()
  } else {
    // determine whether the user has logged in
    const hasToken = getToken()

    if (hasToken) {
      if (to.path === '/login') {
        // if is logged in, redirect to the home page
        next({ path: '/' })
        NProgress.done()
      } else {
        const nameLoaded = !!store.getters.name

        if (nameLoaded) {
          next()
        } else {
          try {
            await store.dispatch('user/getInfo')
            next({ ...to, replace: true })
          } catch (e) {
            if (!isNetworkIssue(e)) {
              await store.dispatch('user/resetToken')
              next(`/login?redirect=${to.path}`)
            }
            NProgress.done()
          }
        }
      }
    } else {
      /* has no token*/
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
