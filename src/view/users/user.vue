<template>
  <article class="lot-user">
    <article class="user-body">
      <!-- 头像用户信息 -->
      <section class="user-content">
        <van-row>
          <van-col :span="8" class="user-icon">
            <img :src="user.headImg" alt="">
          </van-col>
          <van-col :span="14" :offset="2" class="user-info">
            <!-- 名称 -->
            <p>{{user.nickName}}</p>
            <!-- 等级 -->
            <p>游客</p>
            <p><router-link to="/edit.html"><van-icon name="setting-o"></van-icon><span>个人信息</span></router-link></p>
          </van-col>
        </van-row>
      </section>
      <!-- 照片墙 -->
      <section class="user-imgs">
        <van-row gutter="5">
          <van-col :span="6" v-for="(item, index) of photoWall" :key="index"><img :src="item" @click="reView(item)" alt=""></van-col>
          <van-col :span="6">
            <van-uploader :after-read="callUpImg" class="up-user-photograph">
              <van-icon name="photograph" />
            </van-uploader>
          </van-col>
        </van-row>
      </section>
      <!-- 钱包 -->
      <section class="wallet-content">
        <!--<h4>钱包</h4>-->
        <van-row class="wallet-item">
          <van-col :span="16">
            <label>金币：<span>9999</span></label>
          </van-col>
          <van-col :span="8" class="right-item">
            <router-link to="/buy/gold.html"><span>购买礼包</span><van-icon name="arrow"></van-icon></router-link>
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
        <!--<h4>充值服务</h4>-->
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
      <!-- 中奖记录 -->
      <article class="user-top-up">
        <!--<h4>抽奖活动</h4>-->
        <section>
          <router-link to="">
            <van-row>
              <van-col :span="23">中奖记录查询</van-col>
              <van-col :span="1"><van-icon name="arrow"></van-icon></van-col>
            </van-row>
          </router-link>
        </section>
      </article>
      <!-- 设置 -->
      <article class="user-top-up">
        <!--<h4>设置</h4>-->
        <!--<section>-->
          <!--<router-link to="">-->
            <!--<van-row>-->
              <!--<van-col :span="23">关于随缘</van-col>-->
              <!--<van-col :span="1"><van-icon name="arrow"></van-icon></van-col>-->
            <!--</van-row>-->
          <!--</router-link>-->
        <!--</section>-->
        <section>
          <router-link to="">
            <van-row>
              <van-col :span="23">意见反馈</van-col>
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
import { mapState } from 'vuex'
export default {
  name: 'lot-user',
  components: { lotFooter },
  computed: {
    ...mapState({
      user: state => state.auth.user,
      AuthorizationId: state => state.auth.AuthorizationId,
      photoWall: state => state.auth.photoWall
    })
  },
  created () {
    this.$store.commit('LOT_COMMON_SET_FOOTER_ACTIVE', 2)
    this.$store.dispatch('LOT_REFRESH_USER', {userId: this.AuthorizationId})
  },
  methods: {
    callUpImg (event) {
      console.log(event)
    },
    reView (url) {
      ImagePreview([url])
    }
  }
}
</script>

<style lang="scss" scoped>
.lot-user{
  padding-bottom: 50px;
  box-sizing: border-box;
  padding-bottom: 50px;
  box-sizing: border-box;
  .user-content{
    background-color: white;
    height: 130px;
    padding: 10px;
    box-sizing: border-box;
    img{
      border-radius: 50%;
      width: 100px;
      height: 100px;
      vertical-align: middle;
    }
    .user-icon{
      text-align: center;
      line-height: 110px;
    }
    .user-info{
      i{
        vertical-align: middle;
      }
      span{
        margin-left: 10px;
        vertical-align: middle;
      }
      p{
        height: 20px;
        line-height: 20px;
        margin-bottom: 5px;
        color: #222222;
        a{
          color: #222222;
        }
      }
    }
  }
  .user-imgs{
    background-color: white;
    margin: 10px;
    padding: 10px;
    border-radius: 4px;
    img{
      width: 100%;
      height: 100%;
      vertical-align: middle;
      margin-bottom: 5px;
    }
    .up-user-photograph{
      width: 80px;
      height: 80px;
      line-height: 80px;
      border: 1px dashed #d8d8d8;
      text-align: center;
      i{
        font-size: 18px;
      }
    }
  }
  .wallet-content{
    margin: 0 15px;
    background-color: white;
    border-radius: 4px;
    .wallet-item{
      padding-left: 10px;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #DCDCDC;
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
          margin-right: 5px;
        }
      }
    }
    h4{
      margin: 0px;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
    }
  }
  .user-top-up{
    background-color: white;
    margin: 10px;
    border-radius: 4px;
    section{
      height: 50px;
      line-height: 50px;
      padding-left: 15px;
      box-sizing: border-box;
      border-bottom: 1px solid #DCDCDC;
      &:last-child{
        border-bottom: none;
      }
      a{
        color: #222222;
      }
    }
    h4{
      margin: 0px;
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
    }
  }
}
</style>
