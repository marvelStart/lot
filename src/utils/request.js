import axios from 'axios'
import store from '@/store'
import { getToken, getUserId } from '@/utils/cookie'

// create an axios instance
const service = axios.create({
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  if (store.getters.token && store.getters.userId) {
    config.headers['Authorization'] = getToken()
    config.headers['AuthorizationId'] = getUserId()
  }
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
  return config
}, error => {
  Promise.reject(error)
})

/* 请求统一处理：404、500、token失效等 */
service.interceptors.response.use(response => {
  return response
}, error => {
  // TODO 异常
  Promise.reject(error)
})

export default service
