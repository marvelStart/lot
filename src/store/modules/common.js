const state = {
  footer: {
    active: 0,
    chatCount: false
  },
  header: {
    title: ''
  }
}

const actions = {
}

const getters = {
}

const mutations = {
  // 设置active
  LOT_COMMON_SET_FOOTER_ACTIVE (state, active) {
    state.active = active
  },
  // 设置title
  LOT_COMMON_SET_HEADER_TITLE (state, title) {
    state.header.title = title
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
