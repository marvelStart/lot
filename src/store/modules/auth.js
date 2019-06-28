const state = {
  user: {
    userId: ''
  }
}

const activitys = {}

const mutations = {
  // 设置user对象
  LOT_AUTH_SET_USER (state, user) {
    state.user = user
    console.log(state.user)
  }
}

const getters = {}

export default {
  state,
  activitys,
  getters,
  mutations
}
