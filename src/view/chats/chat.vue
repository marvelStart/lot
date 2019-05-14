<template>
  <article class="chat-body">
    <!-- 聊天记录 -->
    <article class="chat-list">
      <section class="chat-item">
        <van-row>
          <van-col :span="4" class="chat-item-icon"><img src="/assets/pexels-photo-1362479.jpg" alt=""></van-col>
          <van-col :span="14" :offset="2" class="chat-item-content">
            <p>背井离乡</p>
            <p>最后一条聊天记录</p>
          </van-col>
          <van-col :span="4" class="chat-item-operation">
            <van-icon name="chat-o" @click="newWindow('10046')"></van-icon>
          </van-col>
        </van-row>
      </section>
      <section class="chat-item">
        <van-row>
          <van-col :span="4" class="chat-item-icon"><img src="/assets/pexels-photo-1362479.jpg" alt=""></van-col>
          <van-col :span="14" :offset="2" class="chat-item-content">
            <p>背井离乡2</p>
            <p>最后一条聊天记录</p>
          </van-col>
          <van-col :span="4" class="chat-item-operation">
            <van-icon name="chat-o" @click="newWindow('10047')"></van-icon>
          </van-col>
        </van-row>
      </section>
      <section class="chat-item">
        <van-row>
          <van-col :span="4" class="chat-item-icon"><img src="/assets/pexels-photo-1362479.jpg" alt=""></van-col>
          <van-col :span="14" :offset="2" class="chat-item-content">
            <p>背井离乡2</p>
            <p>最后一条聊天记录</p>
          </van-col>
          <van-col :span="4" class="chat-item-operation">
            <van-icon name="chat-o" @click="newWindow('123321')"></van-icon>
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
  },
  methods: {
    newWindow (uid) {
      this.$router.push({path: `/window/${uid}.html`})
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-body{
  background-color: white;
  margin-bottom: 50px;
  box-sizing: border-box;
  .chat-list{
    box-sizing: border-box;
    margin: 0 15px;
    .chat-item{
      border-bottom: 1px solid #dbdbdb;
      height: 70px;
      line-height: 70px;
      &:last-child{
        border-bottom: none;
      }
      &-icon{
        img{
          width: 50px;
          height: 50px;
          vertical-align: middle;
        }
      }
      &-content{
        p{
          line-height: 1;
          &:nth-child(2){
             color: #999999;
           }
        }
      }
      &-operation{
        text-align: center;
        i{
          line-height: 50px;
          font-size: 24px;
        }
      }
    }
  }
}
</style>
