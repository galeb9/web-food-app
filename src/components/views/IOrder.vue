<template>
  <div class="i-order">
    <TheChoice />
  </div>
</template>

<script>
import TheChoice from '@/components/tabs/TheChoice.vue'

export default {
  name: "IOrder",
  components: {
    TheChoice
  },
}
</script>

<style lang="scss">
  .i-order__router {
    border: 1px solid black;
    min-height: calc(100vh - 60px);
  }
</style>