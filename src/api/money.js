import request from '@/utils/request'

export const queryVipPrice = () => {
  return request({
    url: '/lot/webMember/queryMemberMoney.do',
    method: 'get'
  })
}
