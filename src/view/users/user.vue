<template>
  <article class="lot-user">
    <article class="user-body">
      <!-- 头像用户信息 -->
      <section class="user-content">
        <van-row>
          <van-col :span="8" class="user-icon">
            <img src="/assets/pexels-photo-1362479.jpg" alt="">
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
          <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6"><img src="/assets/pexels-photo-1362479.jpg" @click="reView('/assets/pexels-photo-1362479.jpg')" alt=""></van-col>
          <van-col :span="6">
            <van-uploader :after-read="callUpImg" class="up-user-photograph">
              <van-icon name="photograph" />
            </van-uploader>
          </van-col>
        </van-row>
      </section>
      <!-- 钱包 -->
      <section class="wallet-content">
        <h4>钱包</h4>
        <van-row class="wallet-item">
          <van-col :span="16">
            <label>金币：<span>9999</span></label>
          </van-col>
          <van-col :span="8" class="right-item">
            <router-link to="/buy/gold.html"><span>购买金币</span><van-icon name="arrow"></van-icon></router-link>
          </van-col>
        </van-row>
        <van-row class="wallet-item">
          <van-col :span="16">
            <label>会员截止日期：<span>2019-12-12</span></label>
          </van-col>
          <van-col :span="8" class="right-item">
            <router-link to="/buy/vip.html"><span>会员续费</span><van-icon name="arrow"></van-icon></router-link>
          </van-col>
        </van-row>
        <van-row class="wallet-item">
          <router-link to="/buy/other.html">
          <van-col :span="23">礼物</van-col>
          <van-col :span="1"><van-icon name="arrow"></van-icon></van-col>
          </router-link>
        </van-row>
      </section>
      <!-- 充值中心 -->
      <article class="user-top-up">
        <h4>充值服务</h4>
        <section>
          <router-link to="/buy/vip.html">
          <van-row>
            <van-col :span="23">升级会员</van-col>
            <van-col :span="1"><van-icon name="arrow"></van-icon></van-col>
          </van-row>
          </router-link>
        </section>
        <section>
          <router-link to="/buy/gold.html">
          <van-row>
            <van-col :span="23">购买金币</van-col>
            <van-col :span="1"><van-icon name="arrow"></van-icon></van-col>
          </van-row>
          </router-link>
        </section>
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
  padding-bottom: 100px;
  box-sizing: border-box;
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
  .wallet-content{
    margin: 0 30px;
    background-color: white;
    border-radius: 8px;
    .wallet-item{
      padding-left: 20px;
      height: 100px;
      line-height: 100px;
      border-bottom: 2px solid #DCDCDC;
      &:last-child{
         border-bottom: none;
      }
      span{
        color: crimson;
      }
      a{
        color: #222222;
        i{
          vertical-align: middle;
        }
      }
      .right-item{
        text-align: right;
        span{
          color: #222222;
          margin-right: 10px;
        }
      }
    }
    h4{
      margin: 0px;
      height: 80px;
      line-height: 80px;
      padding-left: 20px;
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
      a{
        color: #222222;
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
