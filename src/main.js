// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
import 'lib-flexible/flexible'
import moment from 'moment'

Vue.use(vant)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.moment = moment

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
