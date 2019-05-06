<template>
  <!-- 个人主页 -->
  <article>
    <lotHeader></lotHeader>
    <!-- 照片墙 轮播 -->
    <article>
      <van-swipe :autoplay="2500" style="height: 200px">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </article>
    <!-- 照片墙可预览 -->
    <article class="photo-wall">
      <h4>照片墙</h4>
      <van-row gutter="10">
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
      </van-row>
    </article>
    <!-- 信息 -->
    <article class="user-content">
      <h4>个人信息</h4>
      <van-row>
        <van-col :span="8">手机号</van-col>
        <van-col :span="16">135888888888</van-col>
      </van-row>
      <van-row>
        <van-col :span="8">QQ</van-col>
        <van-col :span="16">185469752</van-col>
      </van-row>
    </article>
    <!-- 礼物墙 -->
    <article class="gift-content">
      <h4>魅力值</h4>
      <van-row gutter="5">
        <van-col :span="4">
          <p><img src="/assets/pexels-photo-1362479.jpg" alt=""></p>
        </van-col>
        <van-col :span="4">
          <p><img src="/assets/pexels-photo-1362479.jpg" alt=""></p>
        </van-col>
        <van-col :span="4">
          <p><img src="/assets/pexels-photo-1362479.jpg" alt=""></p>
        </van-col>
        <van-col :span="4">
          <p><img src="/assets/pexels-photo-1362479.jpg" alt=""></p>
        </van-col>
        <van-col :span="4">
          <p><img src="/assets/pexels-photo-1362479.jpg" alt=""></p>
        </van-col>
        <van-col :span="4">
          <p><img src="/assets/pexels-photo-1362479.jpg" alt=""></p>
        </van-col>
        <van-col :span="4">
          <p><img src="/assets/pexels-photo-1362479.jpg" alt=""></p>
        </van-col>
      </van-row>
    </article>
    <!-- 操作区域 -->
    <article class="operation-content">
      <van-row>
        <van-col :span="12"><button class="laft-button">送礼</button></van-col>
        <van-col :span="12"><button>私聊</button></van-col>
      </van-row>
    </article>
    <lotGift></lotGift>
  </article>
</template>

<script>
import lotHeader from '@/components/lot-header'
import lotGift from '@/components/lot-gift'
import { ImagePreview } from 'vant'
export default {
  name: 'lot-homepage',
  components: { lotHeader, lotGift },
  data () {
    return {
      images: ['/assets/pexels-photo-1362479.jpg', '/assets/pexels-photo-1362479.jpg', '/assets/pexels-photo-1362479.jpg', '/assets/pexels-photo-1362479.jpg', '/assets/pexels-photo-1362479.jpg']
    }
  },
  created () {
    this.uId = this.$route.params.uid
    this.$store.commit('LOT_COMMON_SET_HEADER_TITLE', '个人主页')
  },
  methods: {
    reView (url) {
      ImagePreview([url])
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-wall{
  margin-top: 10px;
  padding: 0 10px;
  img{
    width: 100%;
    height: 100%;
    vertical-align: middle;
    margin-bottom: 10px;
  }
}
.gift-content{
  margin: 0 10px 50px;
  background-color: white;
  img{
    width: 100%;
    margin-bottom: 5px;
    vertical-align: middle;
  }
  p{
    margin: 0;
    padding: 0;
    text-align: center;
  }
}
.user-content{
  margin: 0 10px;
  background-color: white;
  border-radius: 8px;
}
.operation-content{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 1;
  line-height: 50px;
  text-align: center;
  button{
    border: none;
    background-color: red;
    width: 100%;
    color: white;
    &.laft-button{
      border-right: 1px solid white;
    }
  }
}
</style>
