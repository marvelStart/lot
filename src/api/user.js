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
    method: 'post',
    data: data
  })
}

/**
 * 登录接口
 * @param data
 */
export const login = (data) => {
  return request({
    url: '/lot/webUser/login.do',
    method: 'post',
    data: data
  })
}

/**
 * 获取用户信息
 * @param data
 */
export const queryUser = (data) => {
  return request({
    url: '/lot/webUser/queryUserInfo.do',
    method: 'post',
    data: data
  })
}

/**
 * 修改用户进本信息
 * @param data
 */
export const editUserInfo = (data) => {
  return request({
    url: '/lot/webUser/updateUserInfo.do',
    method: 'post',
    data: data
  })
}

/**
 * 查询是否是会员
 * @param uid
 */
export const isVip = (uid) => {
  return request({
    url: '/lot/webMember/queryMemberByUser.do',
    method: 'post',
    params: {
      uid: uid
    }
  })
}
