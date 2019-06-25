import axios from 'axios'

/**
 * 注册
 * @param data
 * @returns {AxiosPromise}
 */
export const register = (data) => {
  return axios({
    url: '/lot/webUser/register.do',
    method: 'post',
    data: data
  })
}
