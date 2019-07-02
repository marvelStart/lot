import { queryUser } from '@/api/user'
import { Toast } from 'vant'

const state = {
  /* 用户数据 */
  user: {
    userId: '',
    accountNum: '',
    address: '',
    birthDate: '',
    headImg: '',
    imglist: '',
    memo: '',
    password: '',
    phone: '',
    realName: '',
    signature: '',
    tid: null
  },
  /* 照片墙 */
  photoWall: [],
  Authorization: null,
  AuthorizationId: null
}

const actions = {
  // 刷新用户信息
  LOT_REFRESH_USER ({ commit }, params) {
    queryUser(params).then(result => {
      if (result.status === 200 && result.data && result.data.returnCode === '10000') {
        commit('LOT_AUTH_SET_USER', result.data.result.userInfo)
      } else {
        Toast.fail('用户信息刷新失败')
      }
    }).catch(error => {
      Toast.fail(`用户信息刷新失败: ${JSON.stringify(error)}`)
    })
  }
}

const mutations = {
  // 设置user对象
  LOT_AUTH_SET_USER (state, user) {
    state.user = user
  },
  // 设置照片墙
  LOT_USER_PHOTO_WALL (state, photo) {
    state.photoWall = photo
  },
  // 设置 token、Id
  LOT_SET_TOKEN_ID (state, user) {
    state.Authorization = user.Authorization
    state.AuthorizationId = user.AuthorizationId
  }
}

const getters = {}

export default {
  state,
  actions,
  getters,
  mutations
}
