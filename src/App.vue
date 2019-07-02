<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState({
      websocket: state => state.websocket.websocket,
      servicePath: state => state.websocket.servicePath,
      Id: state => state.auth.AuthorizationId
    }),
    uId () {
      if (this.Id) {
        return this.Id
      } else {
        return null
      }
    }
  },
  watch: {
    uId (newV, oldV) {
      if (newV !== '' && newV !== null) {
        this.newSocket()
      }
    }
  },
  mounted () {
    this.newSocket()
  },
  methods: {
    newSocket () {
      if ('WebSocket' in window && this.Id) {
        const tempWebsocket = new WebSocket(`${this.servicePath}${this.Id}`)
        this.$store.commit('WEBSOCKET_INIT', tempWebsocket)
        this.initWebSocket()
      }
    },
    initWebSocket () {
      // 连接错误
      this.websocket.onerror = this.setErrorMessage

      // 连接成功
      this.websocket.onopen = this.setOnopenMessage

      // 收到消息的回调
      this.websocket.onmessage = this.setOnmessageMessage

      // 连接关闭的回调
      this.websocket.onclose = this.setOncloseMessage

      // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = this.onbeforeunload
    },
    setErrorMessage () {
      console.log(`WebSocket连接发生错误 状态码：${this.websocket.readyState}`)
    },
    setOnopenMessage (data) {
      console.log(`WebSocket连接成功 状态码：${this.websocket.readyState}`, data)
    },
    setOnmessageMessage (event) {
      console.log(`服务端返回:`, event.data)
      if (event && event.data && event.data !== '连接加入') {
        let tempMsg = JSON.parse(event.data)
        tempMsg.type = 'receive'
        let reg = /[\u5417]/g
        tempMsg.msg = tempMsg.msg.replace(reg, '')
        this.$store.commit('MSG_HISTORY_PUSH', tempMsg)
      }
    },
    setOncloseMessage () {
      console.log(`WebSocket连接关闭 状态码：${this.websocket.readyState}`)
    },
    onbeforeunload () {
      this.closeWebSocket()
    },
    closeWebSocket () {
      this.websocket.close()
    }
  },
  beforeDestroy () {
    this.onbeforeunload()
  }
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  font-size: 14px;
}
</style>
