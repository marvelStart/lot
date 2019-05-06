<template>
  <article class="user-login">
    <section class="login-logo">
      <van-icon name="user-circle-o"></van-icon>
    </section>
    <van-cell-group>
      <van-field
        v-model="username"
        clearable
        left-icon="manager"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
      <van-field
        v-model="password"
        clearable
        left-icon="lock"
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
export default {
  name: 'lot-login',
  date () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
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
  margin-top: 10px;
  a{
    color: dodgerblue !important;
  }
}
</style>
