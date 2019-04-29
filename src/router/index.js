import Vue from 'vue'
import Router from 'vue-router'
import lotIndex from '@/view/index'

import userRoute from './modules/user'
import chatRoute from './modules/chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...userRoute,
    ...chatRoute,
    {
      path: '/',
      redirect: '/index.html'
    },
    {
      path: '/index.html',
      name: 'lot-index',
      component: lotIndex
    }
  ]
})
