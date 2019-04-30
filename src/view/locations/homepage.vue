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
      <van-row gutter="10">
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" alt=""></van-col>
        <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" alt=""></van-col>
      </van-row>
    </article>
    <!-- 礼物墙 -->
    <article></article>
    <!-- 信息 -->
    <article>
      <van-row>
        <van-col :span="8">手机号</van-col>
        <van-col :span="16"></van-col>
      </van-row>
      <van-row>
        <van-col :span="8">微信</van-col>
        <van-col :span="16"></van-col>
      </van-row>
    </article>
    <!-- 操作区域 -->
    <article></article>
  </article>
</template>

<script>
import lotHeader from '@/components/lot-header'
import { ImagePreview } from 'vant'
export default {
  name: 'lot-homepage',
  components: { lotHeader },
  data () {
    return {
      images: ['/assets/pexels-photo-1362479.jpg', '/assets/pexels-photo-1362479.jpg', '/assets/pexels-photo-1362479.jpg', '/assets/pexels-photo-1362479.jpg', '/assets/pexels-photo-1362479.jpg']
    }
  },
  created () {
    this.$store.commit('LOT_COMMON_SET_HEADER_TITLE', '个人主页')
  },
  methods: {
    reView (url) {
      ImagePreview([url]);
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
  }
}
</style>
