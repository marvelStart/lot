<template>
  <!-- 聊天窗口 -->
  <article class="lot-window">
    <article class="window-title">
    <section><img src="/assets/pexels-photo-1362479.jpg" alt=""></section>
      <section>背井离乡</section>
      <section><van-icon name="cross" @click="closeWindow"></van-icon></section>
    </article>
    <article class="window-body" v-if="msgHistory[key]">
      <van-row v-for="(item, index) in msgHistory[key].historys" :key="index" :class="{'other-row': item.type === 'receive', 'self-row': item.type === 'send'}">
        <van-col :span="15" :offset="1" v-if="item.type === 'receive'">
          <section class="message">{{item.msg}}</section>
        </van-col>
        <van-col :span="15" :offset="8" v-if="item.type === 'send'">
          <section class="message">{{item.msg}}</section>
        </van-col>
      </van-row>
    </article>
    <article class="window-operation">
      <input type="text" v-model="msg" @keyup.13="send">
      <van-button round type="info" @click="send">发送</van-button>
      <van-icon name="add-o" @click="callGift"></van-icon>
    </article>
    <lotGift :show="giftShow" :uid="receiveUid" @callback="callback"></lotGift>
  </article>
</template>

<script>
import lotGift from '@/components/lot-gift'
import { mapState } from 'vuex'
export default {
  name: 'lot-window',
  components: { lotGift },
  computed: {
    ...mapState({
      websocket: state => state.websocket.websocket,
      msgHistory: state => state.messages.msgHistory
    })
  },
  data () {
    return {
      giftShow: false,
      key: '',
      msg: '',
      receiveUid: ''
    }
  },
  created () {
    this.receiveUid = this.$route.params.uid // 接收人id
    this.key = `${window.sessionStorage.getItem('sendUid')}${this.receiveUid}`
    console.log(this.key)
    console.log(this.msgHistory[this.key])
  },
  methods: {
    closeWindow () {
      window.history.back()
    },
    callback (event) {
      if (event) {
        // 调用接口送出礼物
      }
      this.giftShow = false
    },
    callGift () {
      this.giftShow = true
    },
    send () {
      let sendMessage = {
        type: 'send',
        msg: this.msg,
        sendUid: window.sessionStorage.getItem('sendUid'),
        receiveUid: this.receiveUid // 接收人id
      }
      this.$store.commit('MSG_HISTORY_PUSH', sendMessage)
      this.websocket.send(JSON.stringify(sendMessage))
      window.setTimeout(() => {
        this.msg = ''
      }, 50)
    }
  }
}
</script>

<style lang="scss" scoped>
.lot-window{
  height: 100%;
  .window-title{
    background-color: white;
    border-bottom: 1px solid #dcdcdc;
    font-size: 0px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    img{
      width: 45px;
      height: 45px;
      vertical-align: middle;
      border-radius: 50%;
    }
    section{
      height: 55px;
      line-height: 55px;
      display: inline-block;
      font-size: 16px;
      &:nth-child(1){
        width: 20%;
        box-sizing: border-box;
        padding-left: 10px;
      }
      &:nth-child(2){
        width: 60%;
        text-align: center;
      }
      &:nth-child(3){
        margin-left: 10%;
        width: 10%;
        text-align: center;
      }
    }
  }
  .window-body{
    background-color: #f5f5f5;
    box-sizing: border-box;
    padding: 55px 0 50px;
    .self-row{
      clear: left;
      section.message{
        text-align: right;
        margin: 10px 0;
        background-color: white;
        border-radius: 10%;
        box-sizing: border-box;
        padding: 5px;
        img{
          width: 100px;
          height: 100px;
          vertical-align: bottom;
        }
      }
    }
    .other-row{
      clear: right;
      section.message{
        margin: 10px 0;
        background-color: white;
        border-radius: 10%;
        box-sizing: border-box;
        padding: 5px;
        img{
          width: 100px;
          height: 100px;
          vertical-align: bottom;
        }
      }
    }
  }
  .window-operation{
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #dcdcdc;
    padding: 0 10px;
    input{
      width: 70%;
      height: 30px;
      border-radius: 4px;
      border: 1px solid #dcdcdc;
      box-sizing: border-box;
      padding: 0 10px;
    }
    button{
      height: 30px;
      line-height: 30px;
      margin: 0 5px;
      vertical-align: middle;
    }
    i{
      font-size: 28px;
      vertical-align: middle;
    }
  }
}
</style>
