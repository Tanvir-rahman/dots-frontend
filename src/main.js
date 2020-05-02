import Vue from 'vue'
import ElementUI from 'element-ui'
import moment from 'moment'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import store from './store'
import router from './router'
import VueUiComponents from '@hikaya/vue-ui-components'
import '@hikaya/vue-ui-components/dist/hikaya-ui-components.css'

import i18n from './lang' // internalization
import './icons' // icon
import './auth' // auth control

Vue.config.productionTip = false
Vue.prototype.$moment = moment

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.use(VueUiComponents)

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
