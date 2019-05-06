import Vue from 'vue'
import Router from 'vue-router'

import userRoute from './modules/user'
import chatRoute from './modules/chat'
import locationRoute from './modules/locations'
import lotLogin from '@/view/users/login'
import lotRegister from '@/view/users/register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...userRoute,
    ...chatRoute,
    ...locationRoute,
    {
      path: '/',
      redirect: '/login.html'
    },
    {
      path: '/login.html',
      component: lotLogin,
      name: '登录'
    },
    {
      path: '/register.html',
      component: lotRegister,
      name: '注册'
    }
  ]
})
