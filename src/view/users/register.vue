<template>
  <article class="register-content">
    <van-field
      type="text"
      label="昵称"
      placeholder="请输入昵称"
      v-model="tempForm.nickname"
      input-align="right"
      required
    />
    <van-field
      type="text"
      label="手机号"
      placeholder="请输入手机号"
      v-model="tempForm.phone"
      input-align="right"
      required
    />
    <van-cell title="出生日期" is-link :value="tempForm.birthDate" required @click="showDate = true" />
    <van-row class="sex-content">
      <van-col :span="12">性别</van-col>
      <van-col :span="12" style="text-align: right">
        <van-radio-group v-model="tempForm.sex">
          <van-radio name="男">男</van-radio>
          <van-radio name="女">女</van-radio>
        </van-radio-group>
      </van-col>
    </van-row>
    <van-field
      type="password"
      label="密码"
      v-model="tempForm.pwd"
      placeholder="请输入密码"
      input-align="right"
      required
    />
    <van-button size="large" type="primary" @click="register">注册</van-button>
    <lotDate :showMask="showDate" :date="tempForm.birthDate" @callback="dateBack($event)"></lotDate>
  </article>
</template>

<script>
import lotDate from '@/components/lot-date'
import { register } from '@/api/user'
export default {
  name: 'lot-register',
  components: { lotDate },
  data () {
    return {
      showDate: false,
      fileList: [],
      tempForm: {
        nickname: '',
        phone: '',
        birthDate: '1999-01-01',
        sex: '男',
        headImg: 'https://wuyou-resource.oss-cn-shanghai.aliyuncs.com/Solution/ef139b19-1349-4e7d-8a0b-45ef5126ed69_u42201155441671061495fm27gp0.jpg',
        pwd: '',
        reaffirmPwd: ''
      }
    }
  },
  methods: {
    register () {
      this.tempForm.reaffirmPwd = this.tempForm.pwd
      console.log(this.tempForm)
      register(this.tempForm).then(result => {
        console.log(result)
      }).catch(error => {
        console.log(error)
      })
      // this.$router.push('/locations.html')
    },
    dateBack (event) {
      this.tempForm.birthDate = event
      this.showDate = false
    },
    onRead (event) {
      console.log(event)
    }
  }
}
</script>

<style lang="scss" scoped>
.register-content{
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0px 15px;
  box-sizing: border-box;
}
.sex-content{
  height: 40px;
  line-height: 40px;
  padding-left: 0.4rem;
  box-sizing: border-box;
  .van-radio{
    display: inline-block;
    width: 60px;
  }
  &:after{
     content: '*';
     position: absolute;
     left: 0.55rem;
     font-size: 0.373333rem;
     color: #f44;
  }
}
</style>
