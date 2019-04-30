import Vue from 'vue'
import Router from 'vue-router'

import userRoute from './modules/user'
import chatRoute from './modules/chat'
import locationRoute from './modules/locations'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...userRoute,
    ...chatRoute,
    ...locationRoute,
    {
      path: '/',
      redirect: '/locations.html'
    }
  ]
})
