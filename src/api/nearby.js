import request from '@/utils/request'

export const queryNearby = (x, y) => {
  return request({
    url: '/lot/webPosition/queryNearbyUser.do',
    method: 'get',
    params: {
      longitude: x,
      latitude: y
    }
  })
}
