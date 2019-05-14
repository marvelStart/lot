<template>
  <article class="user-login">
    <section class="login-logo">
      <van-icon name="user-circle-o"></van-icon>
    </section>
    <van-cell-group>
      <van-field
        clearable
        v-model="username"
        left-icon="manager"
        placeholder="请输入用户名"
      />
      <van-field
        clearable
        left-icon="lock"
        v-model="password"
        type="password"
        placeholder="请输入密码"
      />
    </van-cell-group>
    <van-button type="primary" size="large" @click="login">登录</van-button>
    <section class="go-register">
      <router-link to="/register.html">
        立即注册
      </router-link>
    </section>
  </article>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'lot-login',
  computed: {
    ...mapState({
      websocket: state => state.websocket.websocket
    })
  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.commit('LOT_AUTH_SET_USER', {uId: this.username})
      // this.websocket.send(JSON.stringify({uid: window.sessionStorage.getItem('sendUid'), msg: '测试数据'}))
      this.$router.push('/locations.html')
    }
  }
}
</script>

<style lang="scss" scoped>
.login-logo{
  padding-top: 50px;
  text-align: center;
  font-size: 200px;
  margin-bottom: 20px;
  color: #666;
}
.user-login{
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0 20px;
  box-sizing: border-box;
}
button{
  margin-top: 20px;
}
.go-register{
  width: 100%;
  text-align: right;
  margin-top: 20px;
  a{
    color: dodgerblue !important;
  }
}
</style>
