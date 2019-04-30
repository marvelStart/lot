<template>
  <!-- 附近 -->
  <article class="location-body">
    <article class="location-content">
      <section class="location-item">
        <van-row>
          <van-col :span="12"><router-link :to="`/location/3215648ASD.html`"><img src="/assets/pexels-photo-1362479.jpg" alt=""></router-link></van-col>
          <van-col :span="12" class="location-item-info">
            <router-link :to="`/location/3215648ASD.html`">
            <p>背井离乡</p>
            <p>简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介</p>
            <p><span>V6</span><span>富七</span></p>
            </router-link>
          </van-col>
        </van-row>
        <van-row class="location-operation">
          <van-col :span="12">送礼</van-col>
          <van-col :span="12">聊天</van-col>
        </van-row>
      </section>
    </article>
    <lotFooter></lotFooter>
  </article>
</template>

<script>
import lotFooter from '@/components/lot-footer'
export default {
  name: 'lot-location',
  components: { lotFooter },
  created () {
    this.$store.commit('LOT_COMMON_SET_FOOTER_ACTIVE', 0)
  }
}
</script>

<style lang="scss" scoped>
.location-body{
  height: 100%;
  .location-content{
    margin-bottom: 50px;
    padding: 0 15px;
    .location-item{
      margin-bottom: 20px;
      box-sizing: border-box;
      border-radius: 8px;
      padding: 10px;
      background-color: white;
      img{
        width: 140px;
        height: 140px;
        vertical-align: middle;
        border-radius: 20px;
      }
      &-info{
        p{
          margin: 0;
          margin-bottom: 10px;
          font-size: 14px;
          &:nth-child(1){
            font-size: 16px;
            font-weight: bold;
            color: #222222;
          }
          &:nth-child(2){
            font-size: 12px;
            color: #666666;
          }
          &:nth-child(3){
            font-size: 14px;
            span{
              margin-right: 10px;
            }
          }
        }
      }
      .location-operation{
        text-align: center;
        height: 40px;
        line-height: 40px;
        margin-top: 20px;
        border-top: 1px solid #dcdcdc;
      }
    }
  }
}
</style>
