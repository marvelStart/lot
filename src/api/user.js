import request from '@/utils/request'
// import axios from 'axios'
/**
 * 注册
 * @param data
 * @returns {AxiosPromise}
 */
export const register = (data) => {
  return request({
    url: '/lot/webUser/register.do',
    method: 'get',
    params: data
  })
}

/**
 * 登录接口
 * @param data
 */
export const login = (data) => {
  return request({
    url: '/lot/webUser/login.do',
    method: 'get',
    params: data
  })
}

/**
 * 获取用户信息
 * @param data
 */
export const queryUser = (data) => {
  return request({
    url: '/lot/webUser/queryUserInfo.do',
    method: 'get',
    params: data
  })
}
