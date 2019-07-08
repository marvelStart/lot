<template>
    <article class="mask" v-show="showLoading">
      <section>
        <van-loading color="white" size="60px" />
      </section>
    </article>
</template>

<script>
export default {
  name: 'lot-loading',
  props: {
    showLoading: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
.mask{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  section{
    width: 100px;
    height: 100px;
    border-radius: 16px;
    background: rgba(000,000,000,0.5);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
  }
}
</style>
