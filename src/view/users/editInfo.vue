<template>
  <article class="edit-body">
    <lotLoading :showLoading="loading"></lotLoading>
    <lotHeader></lotHeader>
    <article class="edit-form">
      <!-- 头像 -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">头像</van-col>
        <van-col :span="18" class="right-content">
          <van-uploader :after-read="onRead">
            <img :src="tempForm.headImg" alt="">
          </van-uploader>
        </van-col>
      </van-row>
      <!-- 名称 -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">昵称</van-col>
        <van-col :span="18" class="right-content">
          <input type="text" v-model="tempForm.realName" placeholder="请输入昵称">
        </van-col>
      </van-row>
      <!-- 出生日期 -->
      <van-cell title="生日" is-link :value="tempForm.birthDate" @click="showDate = true"/>
      <!-- 省市区 -->
      <van-cell title="地址" is-link :value="areaName" @click="showArea = true"/>
      <!-- 自我介绍 -->
      <van-row class="row-item">
        <van-col :span="24" class="left-label">签名</van-col>
        <van-col :span="24" class="left-content">
          <input type="textarea" v-model="tempForm.signature" placeholder="个性签名">
        </van-col>
      </van-row>
      <section>
        <van-button type="info" @click="editUserInfo">提交</van-button>
      </section>
    </article>
    <lotDate :showMask="showDate" :date="tempForm.birthDate" @callback="dateBack($event)"></lotDate>
    <lotAreas :showMask="showArea" :code="areaCode" @callback="areaBack($event)"></lotAreas>
  </article>
</template>

<script>
import lotDate from '@/components/lot-date'
import lotHeader from '@/components/lot-header'
import lotAreas from '@/components/lot-areas'
import lotLoading from '@/components/lot-loading'
import { editUserInfo } from '@/api/user'
import { mapState } from 'vuex'
import { Toast } from 'vant'
export default {
  name: 'edit-user-info',
  components: { lotHeader, lotDate, lotAreas, lotLoading },
  computed: {
    ...mapState({
      user: state => state.auth.user
    })
  },
  data () {
    return {
      tempForm: {
        updateType: 1, // 头像
        headImg: '', // 头像
        realName: '', // 昵称
        birthDate: '', // 出生日期
        signature: '', // 签名
        address: '' // 地址
      },
      areaName: '',
      areaCode: '',
      showDate: false,
      showArea: false,
      file: null,
      loading: false
    }
  },
  created () {
    this.$store.commit('LOT_COMMON_SET_HEADER_TITLE', '编辑信息')
    this.tempForm.headImg = this.user.headImg
    this.tempForm.realName = this.user.realName
    this.tempForm.birthDate = this.user.birthDate
    this.tempForm.signature = this.user.signature
    this.tempForm.address = this.user.address
  },
  methods: {
    // 时间选择器
    dateBack (event) {
      this.tempForm.birthDate = event
      this.showDate = false
    },
    // 设置省市区
    areaBack (event) {
      if (event && event.length === 3) {
        this.areaName = `${event[0].name}/${event[1].name}/${event[2].name}`
        this.areaCode = event[2].code
        this.tempForm.address = JSON.stringify({name: this.areaName, code: this.areaCode})
      }
      this.showArea = false
    },
    // 上传回调
    onRead (event) {
      this.file = event.file
      this.tempForm.headImg = event.content
    },
    editUserInfo () {
      if (!this.verifyParams()) {
        return false
      }
      editUserInfo(this.tempForm).then(result => {
        if (result.status === 200 && result.data && result.data.returnCode === '10000') {
          Toast.success('修改成功')
          this.$router.push('/user.html')
        }
      })
    },
    verifyParams () {
      if (this.tempForm.headImg === '/assets/index/head-icon-man.png' || this.tempForm.headImg === '/assets/index/head-icon-woman.png' || this.tempForm.headImg === '/assets/index/head-icon-default.png') {
        Toast('请上传头像')
        return false
      }
      if (this.tempForm.realName.trim() === '') {
        Toast('请填写昵称')
        return false
      }
      if (this.tempForm.birthDate.trim() === '') {
        Toast('请设置生日')
        return false
      }
      if (this.tempForm.address.trim() === '') {
        Toast('请填写地址')
        return false
      }
      if (this.tempForm.signature.trim() === '') {
        Toast('请填写签名')
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-body{
  height: 100%;
  .edit-form{
    border-radius: 4px;
    margin: 10px;
    padding: 20px 0;
    background-color: white;
    .row-item{
      margin: 0 15px;
      height: 55px;
      line-height: 55px;
      /*border-bottom: 2px solid #DCDCDC;*/
      img{
        width: 50px;
        height: 50px;
        vertical-align: middle;
      }
      .left-label{
        color: #222222;
      }
      .right-content{
        text-align: right;
        input{
          text-align: right;
          border: none;
          height: 50px;
          line-height: 50px;
        }
      }
      .left-content{
        input{
          border: none;
        }
      }
    }
    button{
      width: 325px;
      margin: 30px 15px;
      height: 40px;
      line-height: 40px;
      border-radius: 4px;
    }
  }
}
</style>
