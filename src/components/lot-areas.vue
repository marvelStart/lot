<template>
  <div class="mask" v-show="showMask">
    <div class="date-content">
      <van-area :area-list="areas" @confirm="confirm" @cancel="cancel" :value="code" />
    </div>
  </div>
</template>

<script>
import { area } from '@/utils/utils'
export default {
  name: 'lotAreas',
  props: ['code', 'showMask'],
  data () {
    return {
      areas: area()
    }
  },
  methods: {
    confirm (event) {
      this.$emit('callback', event)
    },
    cancel () {
      this.$emit('callback')
    }
  }
}
</script>

<style lang="scss" scoped>
.mask{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0, 0.4);
  .date-content{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
}
</style>
