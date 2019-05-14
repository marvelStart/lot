const state = {
  // 聊天记录 map对象
  msgHistory: {}
}

const actions = {
}

const getters = {
}

const mutations = {
  /**
   * 追加聊天记录
   * @param state
   * @param msg { uid: 100046, msg: '', sendUid: 100047, type: 'send/receive' }
   * @constructor
   */
  MSG_HISTORY_PUSH (state, msg) {
    let key = `${msg.sendUid}${msg.receiveUid}`
    let dispose = true // 记录是否完成处理
    for (let temp in state.msgHistory) {
      if (temp !== key) {
        continue
      }
      let tempHistory = {
        type: msg.type,
        msg: msg.msg
      }
      state.msgHistory[key].historys.push(tempHistory)
      dispose = false
    }
    // 判断是否完成处理
    if (dispose) {
      // 未完成处理
      let tempMsg = {}
      tempMsg[key] = {
        sendUid: msg.sendUid,
        receiveUid: msg.receiveUid,
        historys: []
      }
      tempMsg[key].historys.push({
        type: msg.type,
        msg: msg.msg
      })
      state.msgHistory = Object.assign(state.msgHistory, tempMsg)
    }
    console.log(state)
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
