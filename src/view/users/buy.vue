<template>
  <!-- 购买/重置 -->
  <article class="buy-body">
    <article class="vip-content" v-if="type === 'vip'">
      <!-- 充值会员 -->
      <lotHeader></lotHeader>
      <section class="user-content">
        <van-row>
          <van-col :span="12" class="user-content-left">
            <img src="/assets/pexels-photo-1362479.jpg" alt="">
          </van-col>
          <van-col :span="12" class="user-content-right">
            <p>王独秀</p>
            <p>v1</p>
            <p>会员到期时间：2019-12-12</p>
          </van-col>
        </van-row>
      </section>
      <article class="top-up-item">
        <label>优享会员</label>
        <van-row class="row-item selected">
          <van-col :span="20">
            <section>包月</section>
            <section>即刻畅聊</section>
          </van-col>
          <van-col :span="4">￥<span>30</span></van-col>
        </van-row>
        <van-row class="row-item">
          <van-col :span="20">
            <section>季度</section>
            <section>即刻畅聊</section>
          </van-col>
          <van-col :span="4">￥<span>60</span></van-col>
        </van-row>
        <van-row class="row-item">
          <van-col :span="20">
            <section>包年</section>
            <section>即刻畅聊</section>
          </van-col>
          <van-col :span="4">￥<span>180</span></van-col>
        </van-row>
      </article>
      <article class="buy-type">
        <label>充值方式</label>
        <section class="buy-types">
          <img src="/assets/pay-icon.png" alt="">
          <img src="/assets/pay-wechat-icon.png" alt="">
        </section>
      </article>
    </article>
    <article class="gold-content" v-if="type === 'gold'">
      <!-- 购买金币 -->
      <lotHeader></lotHeader>
      <section class="user-content">
        <van-row>
          <van-col :span="12" class="user-content-left">
            <img src="/assets/pexels-photo-1362479.jpg" alt="">
          </van-col>
          <van-col :span="12" class="user-content-right">
            <p>王独秀</p>
            <p>富1</p>
            <p>金币：9999</p>
          </van-col>
        </van-row>
      </section>
      <article class="top-up-item">
        <label>购买金币</label>
        <van-row class="row-item">
          <van-col :span="20">
            <section>30送5</section>
            <section>即刻畅聊</section>
          </van-col>
          <van-col :span="4">￥<span>30</span></van-col>
        </van-row>
        <van-row class="row-item">
          <van-col :span="20">
            <section>60送15</section>
            <section>即刻畅聊</section>
          </van-col>
          <van-col :span="4">￥<span>60</span></van-col>
        </van-row>
        <van-row class="row-item selected">
          <van-col :span="20">
            <section>120送40</section>
            <section>即刻畅聊</section>
          </van-col>
          <van-col :span="4">￥<span>120</span></van-col>
        </van-row>
      </article>
      <article class="buy-type">
        <label>充值方式</label>
        <section class="buy-types">
          <img src="/assets/pay-icon.png" alt="">
          <img src="/assets/pay-wechat-icon.png" alt="">
        </section>
      </article>
    </article>
    <article class="other-content" v-if="type === 'other'">
      <!-- 购买礼物 -->
      <lotHeader></lotHeader>
    </article>
  </article>
</template>

<script>
import lotHeader from '@/components/lot-header'
export default {
  name: 'lot-buy',
  components: { lotHeader },
  data () {
    return {
      type: ''
    }
  },
  created () {
    this.type = this.$route.params.type
    this.init()
  },
  methods: {
    init () {
      switch (this.type) {
        case 'vip':
          this.$store.commit('LOT_COMMON_SET_HEADER_TITLE', '会员充值')
          break
        case 'gold':
          this.$store.commit('LOT_COMMON_SET_HEADER_TITLE', '金币充值')
          break
        case 'other':
          this.$store.commit('LOT_COMMON_SET_HEADER_TITLE', '其他充值')
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.buy-body{
  height: 100%;
  .vip-content, .gold-content, .other-content{
    height: 100%;
    background-color: white;
    .user-content{
      background: linear-gradient(to right, rgba(252, 147, 30, 1), rgba(254, 191, 88, 0.5));
      &-left{
        box-sizing: border-box;
        padding-left: 40px;
        height: 300px;
        line-height: 300px;
        img{
          width: 200px;
          height: 200px;
          vertical-align: middle;
          border-radius: 50%;
        }
        p{
          line-height: 1;
          margin: 0;
          padding: 0;
        }
      }
      &-right{
        box-sizing: border-box;
        padding-top: 90px;
        height: 300px;
        color: white;
        p{
          text-align: right;
          padding-right: 20px;
        }
      }
    }
    .top-up-item{
      margin-top: 40px;
      padding: 0px 40px;
      label{
        color: #222222;
        font-size: 28px;
        font-weight: bold;
      }
      .row-item{
        border: 2px solid #dcdcdc;
        border-radius: 8px;
        height: 120px;
        margin-top: 40px;
        &>div:nth-child(1){
          font-size: 28px;
          box-sizing: border-box;
          padding: 20px 40px;
          &>section:nth-child(2){
            color: #666666;
          }
        }
        &>div:nth-child(2){
          line-height: 120px;
          text-align: center;
        }
        &.selected{
          border-color: rgba(252, 147, 30, 1);
         }
      }
    }
    .buy-type{
      margin-top: 40px;
      padding: 0px 40px;
      label{
        color: #222222;
        font-size: 28px;
        font-weight: bold;
      }
      .buy-types{
        margin-top: 20px;
        img{
          width: 100px;
          height: 100px;
          vertical-align: middle;
          border-radius: 16px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
