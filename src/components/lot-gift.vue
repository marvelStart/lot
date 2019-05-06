<template>
  <!-- 礼物 -->
  <article class="gift-body" v-show="show">
    <section class="mask" @click="close"></section>
    <article class="gift-content">
      <section class="gift-content-title">
        <van-row>
          <van-col :span="22">金币：0</van-col>
          <van-col :span="2"><van-icon name="cross" @click="close"></van-icon></van-col>
        </van-row>
      </section>
      <section class="gifts">
        <van-row gutter="10">
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
          <van-col :span="4" class="gift-item">
            <img src="/assets/pexels-photo-1362479.jpg" @click="send({uid: uid})" alt="">
          </van-col>
        </van-row>
      </section>
    </article>
  </article>
</template>

<script>
export default {
  name: 'lot-gift',
  props: ['show', 'uid'],
  methods: {
    send (item) {
      this.$emit('callback', item)
    },
    close () {
      this.$emit('callback', null)
    }
  }
}
</script>

<style lang="scss" scoped>
.mask{
  z-index: 1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(000, 000, 000, 0.6);
}
.gift-content{
  z-index: 2;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
  overflow-y: auto;
  background-color: white;
  &-title{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #dcdcdc;
    padding: 0 15px;
    .van-row{
      div:nth-child(2){
        text-align: right;
      }
    }
  }
  .gifts{
    box-sizing: border-box;
    padding: 0 15px;
    width: 100%;
    .gift-item{
      margin-top: 10px;
      text-align: center;
      img{
        width: 50px;
        height: 50px;
        vertical-align: middle;
      }
    }
  }
}
</style>
