<template>
  <van-tabbar v-model="tempActive" class="lot-tabber" active-color="red">
    <van-tabbar-item to="/index.html">
      <van-icon  name="location-o"  size="24px"></van-icon>
    </van-tabbar-item>
    <van-tabbar-item :dot="chatCount" to="/chat.html">
      <van-icon  name="chat-o"  size="24px"></van-icon>
    </van-tabbar-item>
    <van-tabbar-item to="/user.html">
      <van-icon  name="user-o"  size="24px"></van-icon>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'lot-footer',
  computed: {
    ...mapState({
      active: state => state.common.active,
      chatCount: state => state.common.chatCount
    })
  },
  data () {
    return {
      tempActive: 0
    }
  },
  created () {
    this.tempActive = this.active
  }
}
</script>

<style lang="scss" scoped>
.lot-tabber{
  height: 50px;
  font-size: 18px !important;
}
</style>
