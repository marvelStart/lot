<template>
  <article class="edit-body">
    <lotHeader></lotHeader>
    <article class="edit-form">
      <!-- 头像 -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">设置头像</van-col>
        <van-col :span="18" class="right-content">
          <van-uploader :after-read="onRead">
            <img :src="form.headImg" alt="">
          </van-uploader>
        </van-col>
      </van-row>
      <!-- 名称 -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">昵称</van-col>
        <van-col :span="18" class="right-content">
          <input type="text" v-model="form.nickName" placeholder="请输入昵称">
        </van-col>
      </van-row>
      <!-- 出生日期 -->
      <van-cell title="出生日期" is-link :value="form.birthDate" @click="showDate = true"/>
      <!-- 省市区 -->
      <van-cell title="省市区" is-link :value="areaName" @click="showArea = true"/>
      <!-- QQ -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">QQ</van-col>
        <van-col :span="18" class="right-content">
          <input type="number" v-model="form.QQ" placeholder="请输入QQ号">
        </van-col>
      </van-row>
      <!-- 手机号 -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">微信</van-col>
        <van-col :span="18" class="right-content">
          <input type="text" v-model="form.weChat" placeholder="请输入微信号">
        </van-col>
      </van-row>
      <!-- 自我介绍 -->
      <van-row class="row-item">
        <van-col :span="24" class="left-label">自我介绍</van-col>
        <van-col :span="24" class="left-content">
          <input type="textarea" v-model="form.describe" placeholder="介绍一下自己">
        </van-col>
      </van-row>
      <section>
        <van-button type="info">提交</van-button>
      </section>
    </article>
    <lotDate :showMask="showDate" :date="form.birthDate" @callback="dateBack($event)"></lotDate>
    <lotAreas :showMask="showArea" :code="areaCode" @callback="areaBack($event)"></lotAreas>
  </article>
</template>

<script>
import lotDate from '@/components/lot-date'
import lotHeader from '@/components/lot-header'
import lotAreas from '@/components/lot-areas'
export default {
  name: 'edit-user-info',
  components: { lotHeader, lotDate, lotAreas },
  data () {
    return {
      form: {
        headImg: '/assets/pexels-photo-1362479.jpg',
        nickName: '',
        birthDate: '',
        QQ: '',
        weChat: '',
        idCard: '',
        describe: '',
        address: ''
      },
      areaName: '',
      areaCode: '',
      showDate: false,
      showArea: false,
      file: null
    }
  },
  created () {
    this.$store.commit('LOT_COMMON_SET_HEADER_TITLE', '编辑信息')
  },
  methods: {
    // 时间选择器
    dateBack (event) {
      this.form.birthDate = event
      this.showDate = false
    },
    // 设置省市区
    areaBack (event) {
      if (event && event.length === 3) {
        this.areaName = `${event[0].name}/${event[1].name}/${event[2].name}`
        this.areaCode = event[2].code
        this.form.address = JSON.stringify({name: this.areaName, code: this.areaCode})
      }
      this.showArea = false
    },
    // 上传回调
    onRead (event) {
      this.file = event.file
      this.form.headImg = event.content
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
