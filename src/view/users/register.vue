<template>
  <article>
    <lotLoading :showLoading="loading"></lotLoading>
    <lotHeader></lotHeader>
    <article class="register-content">
      <section class="uploading-icon">
        <!--<van-uploader :after-read="onRead" class="uploading-icon">
          <img :src="tempForm.headImg" alt="">
        </van-uploader>-->
        <img :src="tempForm.headImg" alt="">
      </section>
      <van-field
        type="text"
        label="昵称"
        placeholder="请输入昵称"
        v-model="tempForm.realName"
        input-align="right"
        required
        maxlength="6"
      />
      <van-field
        type="text"
        label="手机号"
        placeholder="请输入手机号"
        v-model="tempForm.phone"
        input-align="right"
        required
        maxlength="11"
      />
      <van-cell title="出生日期" is-link :value="tempForm.birthDate" required @click="showDate = true"/>
      <van-row>
        <van-col :span="12" class="sex-content">性别</van-col>
        <van-col :span="12" style="text-align: right"  class="sex-content">
          <van-radio-group v-model="tempForm.sex" @change="sexChange">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
          </van-radio-group>
        </van-col>
      </van-row>
      <van-field
        type="password"
        label="密码"
        v-model="tempForm.password"
        placeholder="请输入密码"
        input-align="right"
        required
        maxlength="18"
      />
      <van-button size="large" type="primary" @click="register">注册</van-button>
      <lotDate :showMask="showDate" :date="tempForm.birthDate" @callback="dateBack($event)"></lotDate>
    </article>
  </article>
</template>

<script>
import lotDate from '@/components/lot-date'
import { register } from '@/api/user'
import {iphone} from '@/utils/validator'
import { uploadFile } from '@/api/common'
import { Toast } from 'vant'
import lotHeader from '@/components/lot-header'
import lotLoading from '@/components/lot-loading'
export default {
  name: 'lot-register',
  components: {lotDate, lotHeader, lotLoading},
  data () {
    return {
      showDate: false,
      file: null,
      loading: null,
      tempForm: {
        realName: '',
        phone: '',
        birthDate: '',
        sex: '',
        headImg: '/assets/index/head-icon-default.png',
        password: '',
        reaffirmPwd: ''
      }
    }
  },
  mounted () {
    this.$store.commit('LOT_COMMON_SET_HEADER_TITLE', '用户注册')
  },
  methods: {
    // 立即注册
    register () {
      this.tempForm.reaffirmPwd = this.tempForm.password
      if (!this.validator()) {
        return false
      }
      this.loading = true
      register(this.tempForm).then(result => {
        this.loading = false
        if (result.status === 200 && result.data && result.data.returnCode === '10000') {
          Toast.success('注册成功')
          this.$router.push('/login.html')
        } else {
          Toast.fail(result.data.msg)
        }
      }).catch(error => {
        this.loading = false
        Toast.fail(`erro: ${JSON.stringify(error)}`)
      })
    },
    // 时间选择器
    dateBack (event) {
      this.tempForm.birthDate = event
      this.showDate = false
    },
    // 上传回调
    onRead (event) {
      this.file = event.file
      this.tempForm.headImg = event.content
    },
    // 校验数据
    validator () {
      if (this.tempForm.realName.trim().length === 0) {
        Toast.fail('请输入昵称')
        return false
      }
      if (!iphone(this.tempForm.phone)) {
        return false
      }
      if (this.tempForm.sex.trim().length === 0) {
        Toast.fail('请选择性别')
        return false
      }
      if (this.tempForm.password.trim().length === 0) {
        Toast.fail('请设置密码')
        return false
      }
      return true
    },
    // 上传图片
    uploadHeadIcon (resolve, reject) {
      if (this.file != null) {
        let temp = new FormData()
        temp.append('file', this.file)
        uploadFile(temp).then(result => {
          resolve(result)
        }).catch(error => {
          reject(error)
        })
      } else {
        Toast.fail('请上传头像')
        reject()
      }
    },
    onClickLeft () {
      this.$router.replace('/login.html')
    },
    sexChange () {
      if (this.tempForm.sex === '男') {
        this.tempForm.headImg = '/assets/index/head-icon-man.png'
      } else if (this.tempForm.sex === '女') {
        this.tempForm.headImg = '/assets/index/head-icon-woman.png'
      } else {
        this.tempForm.headImg = '/assets/index/head-icon-default.png'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .uploading-icon {
    margin-bottom: 20px;
    text-align: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  }
  .register-content {
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 40px 15px 0;
    box-sizing: border-box;
  }

.sex-content {
  height: 40px;
  line-height: 40px;
  padding-left: 0.4rem;
  box-sizing: border-box;
  .van-radio {
    display: inline-block;
    width: 60px;
  }
  &:after {
    content: '*';
    position: absolute;
    left: 0.55rem;
    font-size: 0.373333rem;
    color: #f44;
  }
}
</style>
