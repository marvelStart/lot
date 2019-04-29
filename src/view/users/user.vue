<template>
  <article class="lot-user">
    <article class="user-body">
      <!-- 头像用户信息 -->
      <section class="user-content">
        <van-row>
          <van-col :span="8" class="user-icon">
            <img src="assets/pexels-photo-1362479.jpg" alt="">
          </van-col>
          <van-col :span="14" :offset="2" class="user-info">
            <!-- 名称 -->
            <p>背井离乡</p>
            <!-- 等级 -->
            <p>游客</p>
            <p><router-link to="/edit.html"><van-icon name="setting-o"></van-icon><span>个人信息</span></router-link></p>
          </van-col>
        </van-row>
      </section>
      <!-- 照片墙 -->
      <section class="user-imgs">
        <van-row gutter="5">
          <van-col :span="6"><img src="assets/pexels-photo-1362479.jpg" @click="reView('assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="assets/pexels-photo-1362479.jpg" @click="reView('assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="assets/pexels-photo-1362479.jpg" @click="reView('assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="assets/pexels-photo-1362479.jpg" @click="reView('assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="assets/pexels-photo-1362479.jpg" @click="reView('assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="assets/pexels-photo-1362479.jpg" @click="reView('assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="assets/pexels-photo-1362479.jpg" @click="reView('assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6">
            <van-uploader :after-read="callUpImg" class="up-user-photograph">
              <van-icon name="photograph" />
            </van-uploader>
          </van-col>
        </van-row>
      </section>
      <!-- 充值中心 -->
      <article class="user-top-up">
        <h4>充值服务</h4>
        <section>购买会员</section>
        <section>购买金豆</section>
      </article>
    </article>
    <lotFooter></lotFooter>
  </article>
</template>

<script>
import lotFooter from '@/components/lot-footer'
import { ImagePreview } from 'vant'
export default {
  name: 'lot-user',
  components: { lotFooter },
  created () {
    this.$store.commit('LOT_COMMON_SET_FOOTER_ACTIVE', 2)
  },
  methods: {
    callUpImg (file) {
      console.log(file)
    },
    reView (url) {
      ImagePreview([url])
    }
  }
}
</script>

<style lang="scss" scoped>
.lot-user{
  padding-bottom: 100px;
  box-sizing: border-box;
  height: 100%;
  .user-content{
    background-color: white;
    height: 260px;
    padding: 20px;
    box-sizing: border-box;
    img{
      border-radius: 50%;
      width: 200px;
      height: 200px;
      vertical-align: middle;
    }
    .user-icon{
      text-align: center;
      line-height: 220px;
    }
    .user-info{
      i{
        vertical-align: middle;
      }
      span{
        margin-left: 20px;
        vertical-align: middle;
      }
      p{
        height: 40px;
        line-height: 40px;
        margin-bottom: 10px;
        color: #222222;
        a{
          color: #222222;
        }
      }
    }
  }
  .user-imgs{
    background-color: white;
    margin: 20px;
    padding: 20px;
    border-radius: 8px;
    img{
      width: 100%;
      height: 100%;
      vertical-align: middle;
      margin-bottom: 10px;
    }
    .up-user-photograph{
      width: 160px;
      height: 160px;
      line-height: 160px;
      border: 2px dashed #d8d8d8;
      text-align: center;
      i{
        font-size: 36px;
      }
    }
  }
  .user-top-up{
    background-color: white;
    margin: 20px;
    border-radius: 8px;
    section{
      height: 100px;
      line-height: 100px;
      padding-left: 30px;
      box-sizing: border-box;
      border-bottom: 2px solid #DCDCDC;
      &:last-child{
        border-bottom: none;
      }
    }
    h4{
      margin: 0px;
      height: 80px;
      line-height: 80px;
      padding-left: 20px;
    }
  }
}
</style>
