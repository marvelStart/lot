import axios from 'axios'

// create an axios instance
const service = axios.create({
  timeout: 60000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
  // if (store.getters.token) {
  //   config.headers['X-Ticket'] = getToken()
  // }
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
