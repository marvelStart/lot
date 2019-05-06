<template>
  <article class="register-content">
    <section class="register-logo">
      <van-icon name="user-circle-o"></van-icon>
    </section>
    <van-cell-group>
      <van-field
        v-model="username"
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
        v-model="password"
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
export default {
  name: 'lot-register',
  methods: {
    register () {
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
