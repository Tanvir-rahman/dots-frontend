import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store'
import router from './router'

import i18n from './lang' // internalization
import './icons' // icon

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
