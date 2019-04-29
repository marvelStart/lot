<template>
  <article class="chat-body">
    <!-- 聊天记录 -->
    <article class="chat-list">
      <section class="chat-item">
        <van-row>
          <van-col :span="4" class="chat-item-icon"><img src="assets/pexels-photo-1362479.jpg" alt=""></van-col>
          <van-col :span="14" :offset="2" class="chat-item-content">背井离乡</van-col>
          <van-col :span="4" class="chat-item-operation">
            <van-icon name="chat-o"></van-icon>
          </van-col>
        </van-row>
      </section>
      <section class="chat-item">
        <van-row>
          <van-col :span="4" class="chat-item-icon"><img src="assets/pexels-photo-1362479.jpg" alt=""></van-col>
          <van-col :span="14" :offset="2" class="chat-item-content">背井离乡</van-col>
          <van-col :span="4" class="chat-item-operation">
            <van-icon name="chat-o"></van-icon>
          </van-col>
        </van-row>
      </section>
      <section class="chat-item">
        <van-row>
          <van-col :span="4" class="chat-item-icon"><img src="assets/pexels-photo-1362479.jpg" alt=""></van-col>
          <van-col :span="14" :offset="2" class="chat-item-content">背井离乡</van-col>
          <van-col :span="4" class="chat-item-operation">
            <van-icon name="chat-o"></van-icon>
          </van-col>
        </van-row>
      </section>
      <section class="chat-item">
        <van-row>
          <van-col :span="4" class="chat-item-icon"><img src="assets/pexels-photo-1362479.jpg" alt=""></van-col>
          <van-col :span="14" :offset="2" class="chat-item-content">背井离乡</van-col>
          <van-col :span="4" class="chat-item-operation">
            <van-icon name="chat-o"></van-icon>
          </van-col>
        </van-row>
      </section>
      <section class="chat-item">
        <van-row>
          <van-col :span="4" class="chat-item-icon"><img src="assets/pexels-photo-1362479.jpg" alt=""></van-col>
          <van-col :span="14" :offset="2" class="chat-item-content">背井离乡</van-col>
          <van-col :span="4" class="chat-item-operation">
            <van-icon name="chat-o"></van-icon>
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
  name: 'lot-chat',
  components: { lotFooter },
  created () {
    this.$store.commit('LOT_COMMON_SET_FOOTER_ACTIVE', 1)
  }
}
</script>

<style lang="scss" scoped>
.chat-body{
  background-color: white;
  padding-bottom: 100px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  .chat-list{
    margin: 0 30px;
    .chat-item{
      border-bottom: 2px solid #dbdbdb;
      height: 140px;
      line-height: 140px;
      &:last-child{
        border-bottom: none;
      }
      &-icon{
        img{
          width: 100px;
          height: 100px;
          vertical-align: middle;
        }
      }
      &-content{

      }
      &-operation{
        text-align: center;
        i{
          line-height: 100px;
          font-size: 48px;
        }
      }
    }
  }
}
</style>
