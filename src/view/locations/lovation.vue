<template>
  <!-- 附近 -->
  <article class="location-body">
    <van-notice-bar
      :text="notice"
      left-icon="volume-o"
    />
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
import { queryNearby } from '@/api/nearby'
import Cookies from 'js-cookie'
export default {
  name: 'lot-location',
  components: { lotFooter },
  created () {
    this.$store.commit('LOT_COMMON_SET_FOOTER_ACTIVE', 0)
    this.getDate()
  },
  data () {
    return {
      notice: '恭喜“xxxx”用户中奖，请在个人中心-中奖记录中查看详细信息',
      center: {lng: 0, lat: 0}, // 经纬度
      zoom: 3 // 地图展示级别
    }
  },
  methods: {
    locationSuccess ({point}) {
      console.log(point)
    },
    locationError ({StatusCode}) {
      console.log(StatusCode)
    },
    getDate () {
      let x = Cookies.get('pointX') || ''
      let y = Cookies.get('pointY') || ''
      queryNearby(x, y).then(result => {
        console.log(result)
      })
    }
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
.map {
  width: 100%;
  height: 300px;
}
</style>
