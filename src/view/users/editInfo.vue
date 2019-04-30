<template>
  <article class="edit-body">
    <lotHeader></lotHeader>
    <article class="edit-form">
      <!-- 头像 -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">设置头像</van-col>
        <van-col :span="18" class="right-content"><img :src="form.icon" alt=""></van-col>
      </van-row>
      <!-- 名称 -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">昵称</van-col>
        <van-col :span="18" class="right-content">
          <input type="text" v-model="form.name" placeholder="请输入昵称">
        </van-col>
      </van-row>
      <!-- 性别 -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">性别</van-col>
        <van-col :span="18" class="right-content">{{form.sex}}</van-col>
      </van-row>
      <!-- 手机号 -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">手机号</van-col>
        <van-col :span="18" class="right-content">
          <input type="number" v-model="form.phone" placeholder="请输入手机号">
        </van-col>
      </van-row>
      <!-- 身份证 -->
      <van-row class="row-item">
        <van-col :span="6" class="left-label">身份证</van-col>
        <van-col :span="18" class="right-content">
          <input type="number" v-model="form.idCard" placeholder="请输入身份证">
        </van-col>
      </van-row>
      <section>
        <van-button type="info">提交</van-button>
      </section>
    </article>
  </article>
</template>

<script>
import lotHeader from '@/components/lot-header'
export default {
  name: 'edit-user-info',
  components: { lotHeader },
  data () {
    return {
      form: {
        icon: '/assets/pexels-photo-1362479.jpg',
        name: '',
        sex: '男',
        phone: '',
        idCard: '',
        describe: ''
      },
      maxDate: new Date('2012/01/01')
    }
  },
  created () {
    this.$store.commit('LOT_COMMON_SET_HEADER_TITLE', '编辑信息')
  }
}
</script>

<style lang="scss" scoped>
.edit-body{
  height: 100%;
  .edit-form{
    border-radius: 8px;
    margin: 20px;
    padding: 40px 0;
    background-color: white;
    .row-item{
      margin: 0 30px;
      height: 110px;
      line-height: 110px;
      /*border-bottom: 2px solid #DCDCDC;*/
      img{
        width: 100px;
        height: 100px;
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
          height: 100px;
          line-height: 100px;
        }
      }
    }
    button{
      width: 650px;
      margin: 60px 30px;
      height: 80px;
      line-height: 80px;
      border-radius: 8px;
    }
  }
}
</style>
