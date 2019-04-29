<template>
  <article class="edit-body">
    <lotHeader></lotHeader>
    <article class="edit-form">
      <!-- 头像 -->
      <section>
        <label>设置头像</label>
        <img :src="form.icon" alt="">
      </section>
      <!-- 名称 -->
      <section>
        <label>名称</label>
        <input type="text" v-model="form.name">
      </section>
      <!-- 性别 -->
      <section>
        <label>性别</label>
        <span>{{form.sex}}</span>
      </section>
      <!-- 手机号 -->
      <section>
        <label>手机号</label>
        <input type="text" v-model="form.phone">
      </section>
      <!-- 年龄 -->
      <section>
        <label>出生日期</label>
        <van-datetime-picker
          v-model="form.date"
          type="date"
          :max-date="maxDate"
        />
      </section>
      <!-- 身份证 -->
      <section>
        <label>身份证</label>
        <input type="text" v-model="form.idCard">
      </section>
      <!-- 介绍 -->
      <section>
        <label>自我介绍</label>
        <input type="text" v-model="form.describe">
      </section>
      <section>
        <van-button>提交</van-button>
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
        icon: 'assets/pexels-photo-1362479.jpg',
        name: '',
        sex: '男',
        phone: '',
        date: '',
        idCard: '',
        describe: ''
      },
      maxDate: new Date('2012/01/01')
    }
  },
  created () {
    this.$store.commit('LOT_COMMON_SET_HEADER_TITLE', '修改信息')
  }
}
</script>

<style lang="scss" scoped>
.edit-body{
  height: 100%;
  background-color: white;
}
</style>
