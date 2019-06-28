import { Toast } from 'vant'

/**
 * 验证手机号
 * @param val
 */
export const iphone = (val) => {
  let reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  if (!reg.test(val)) {
    Toast.fail('手机号输入有误')
    return false
  }
  return true
}
