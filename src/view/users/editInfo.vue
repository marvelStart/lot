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
