import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import websocket from './modules/websocket'
import messages from './modules/messages'
import auth from './modules/auth'

Vue.use(Vuex)

const state = {
}

const getters = {
  token: state => state.auth.Authorization,
  userId: state => state.auth.AuthorizationId
}

const actions = {
}

const mutations = {
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    common,
    websocket,
    messages,
    auth
  }
})
