<template>
  <div class="mask" v-show="showMask">
    <div class="date-content">
      <van-datetime-picker
        type="date"
        v-model="tempDate"
        :max-date="maxDate"
        :min-date="minDate"
        @confirm="confirm"
        @cancel="cancel"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'lot-date',
  props: ['showMask', 'date'],
  data () {
    return {
      tempDate: this.date || new Date(),
      maxDate: new Date(),
      minDate: new Date('1900-01-01')
    }
  },
  methods: {
    confirm () {
      this.$emit('callback', this.moment(this.tempDate).format('YYYY-MM-DD'))
    },
    cancel () {
      this.$emit('callback', this.date)
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
