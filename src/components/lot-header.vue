<template>
  <van-nav-bar
    class="lot-header"
    :title="tempTitle"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'lot-header',
  computed: {
    ...mapState({
      title: state => state.common.header.title
    })
  },
  data () {
    return {
      tempTitle: ''
    }
  },
  created () {
    this.tempTitle = this.title
  },
  methods: {
    onClickLeft () {
      // 返回上一页
      window.history.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.lot-header{
  height: 80px;
  line-height: 80px;
  font-size: 36px;
  div {
    font-size: 36px;
    i{
      font-size: 36px;
    }
  }
}
</style>
