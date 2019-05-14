<template>
  <!-- 聊天窗口 -->
  <article class="lot-window">
    <article class="window-title">
    <section><van-icon name="arrow-left" @click="closeWindow"></van-icon></section>
      <section>背井离乡</section>
    </article>
    <article class="window-body" v-if="msgHistory[key]">
      <section v-for="(item, index) in msgHistory[key].historys" :key="index">
        <van-row class="other-row" v-if="item.type === 'receive'">
          <van-col :span="4" class="user-icon">
            <img src="/assets/pexels-photo-1362479.jpg" alt="">
          </van-col>
          <van-col :span="12" class="message">
            <section>{{item.msg}}</section>
          </van-col>
        </van-row>
        <van-row v-if="item.type === 'send'" class="self-row">
          <van-col :span="12" :offset="8" class="message">
            <section>{{item.msg}}</section>
          </van-col>
          <van-col :span="4" class="user-icon">
            <img src="/assets/pexels-photo-1362479.jpg" alt="">
          </van-col>
        </van-row>
      </section>
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
      msgHistory: state => state.messages.msgHistory,
      user: state => state.auth.user
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
    this.key = `${this.user.uId}${this.receiveUid}`
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
        sendUid: this.user.uId,
        receiveUid: this.receiveUid // 接收人id
      }
      this.$store.commit('MSG_HISTORY_PUSH', sendMessage)
      this.websocket.send(JSON.stringify(sendMessage))
      console.log(this.msgHistory)
      window.setTimeout(() => {
        this.msg = ''
        this.$forceUpdate()
      }, 100)
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
      vertical-align: middle;
      height: 55px;
      line-height: 55px;
      display: inline-block;
      font-size: 16px;
      &:nth-child(1){
        width: 20%;
        font-size: 24px;
        box-sizing: border-box;
        padding-left: 10px;
        i{
          vertical-align: middle;
        }
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
      margin-bottom: 20px;
      .message{
        margin-top: 15px;
        text-align: right;
        section{
          display: inline-block;
          padding: 5px 10px;
          background-color: white;
          border-radius: 8px;
        }
      }
    }
    .other-row{
      margin-bottom: 20px;
      .message{
        margin-top: 15px;
        text-align: left;
        section{
          display: inline-block;
          padding: 5px 10px;
          background-color: white;
          border-radius: 8px;
        }
      }
    }
    .user-icon{
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
        padding: 10px;
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
