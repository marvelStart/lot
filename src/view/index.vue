<template>
  <article>
    <article>附近</article>
    <lotFooter></lotFooter>
  </article>
</template>

<script>
import lotFooter from '@/components/lot-footer'
export default {
  name: 'lot-index',
  components: { lotFooter },
  created () {
    this.$store.commit('LOT_COMMON_SET_FOOTER_ACTIVE', 0)
  }
}
</script>

<style scoped>

</style>
