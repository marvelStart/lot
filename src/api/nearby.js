import request from '@/utils/request'

export const queryNearby = (x, y) => {
  return request({
    url: '/lot/webPosition/queryNearbyUser.do',
    method: 'post',
    data: {
      longitude: x,
      latitude: y
    }
  })
}
