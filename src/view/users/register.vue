<template>
  <article class="register-content">
    <section class="register-logo">
      <van-icon name="user-circle-o"></van-icon>
    </section>
    <van-cell-group>
      <van-field
        required
        clearable
        label="手机号"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
      <van-field
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button size="large" type="primary" @click="register">注册</van-button>
  </article>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'lot-register',
  computed: {
    ...mapState({
      websocket: state => state.websocket.websocket
    })
  },
  date () {
    return {
      username: '',
      sms: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.websocket.send(JSON.stringify({uid: 10046, msg: '测试数据'}))
      this.$router.push('/locations.html')
    }
  }
}
</script>

<style lang="scss" scoped>
.register-logo{
  padding-top: 50px;
  text-align: center;
  font-size: 200px;
  color: #666;
}
.register-content{
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0px 15px;
  box-sizing: border-box;
}
</style>
