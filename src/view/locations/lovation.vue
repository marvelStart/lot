<template>
  <!-- 附近 -->
  <article class="location-body">
    <article class="location-content">
      <section class="location-item">
        <van-row gutter="20">
          <van-col :span="12">
            <router-link :to="`/location/3215648ASD.html`">
              <p><img src="/assets/pexels-photo-1362479.jpg" alt=""></p>
              <p>说明信息</p>
            </router-link>
          </van-col>
          <van-col :span="12">
            <router-link :to="`/location/3215648ASD.html`">
              <p><img src="/assets/pexels-photo-1362479.jpg" alt=""></p>
              <p>说明信息</p>
            </router-link>
          </van-col>
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
    .location-item{
      margin-bottom: 20px;
      box-sizing: border-box;
      border-radius: 8px;
      padding: 10px;
      background-color: white;
      img{
        width: 167px;
        height: 167px;
        vertical-align: middle;
        border-radius: 10px;
      }
    }
  }
}
</style>
