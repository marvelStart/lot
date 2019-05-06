const state = {
  websocket: null,
  servicePath: process.env.WEBSOCKET_PATH
}

const mutations = {
  /* 初始化websocket对象 */
  WEBSOCKET_INIT (state, websocket) {
    state.websocket = websocket
  }
}

const actions = {

}

const getters = {

}

export default {
  state,
  actions,
  getters,
  mutations
}
