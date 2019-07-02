<template>
  <article class="user-login">
    <section class="login-logo">
      <img src="/assets/index/temp-logo.png">
    </section>
    <van-cell-group>
      <van-field
        clearable
        maxlength="11"
        v-model="formData.accountNum"
        left-icon="manager"
        placeholder="请输入用户名"
      />
      <van-field
        clearable
        left-icon="lock"
        v-model="formData.password"
        type="password"
        placeholder="请输入密码"
        maxlength="18"
        @keyup.enter="toLogin"
      />
    </van-cell-group>
    <van-button type="primary" size="large" @click="toLogin">登录</van-button>
    <section class="go-register" @click="gotoRegister">立即注册</section>
  </article>
</template>

<script>
import { mapState } from 'vuex'
import { login } from '@/api/user'
import { Toast } from 'vant'
export default {
  name: 'lot-login',
  computed: {
    ...mapState({
      websocket: state => state.websocket.websocket
    })
  },
  data () {
    return {
      formData: {
        accountNum: '',
        password: ''
      }
    }
  },
  methods: {
    toLogin () {
      login(this.formData).then(result => {
        if (result.status === 200 && result.data && result.data.returnCode === '10000' && result.data.result) {
          // 登录成功
          Toast.success(result.data.msg)
          if (result.data.result.userInfo) {
            // this.$store.commit('LOT_AUTH_SET_USER', result.data.result.userInfo)
            this.$store.commit('LOT_SET_TOKEN_ID', {AuthorizationId: 'AuthorizationId', Authorization: 'Authorization'})
          }
          this.$router.push('/locations.html')
        } else {
          Toast.fail(result.data.msg)
        }
      })
    },
    gotoRegister () {
      this.$router.push('/register.html')
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
  img{
    width: 50%;
  }
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
  color: dodgerblue !important;
}
</style>
