<template>
  <div class="viser-main-container">
    <div>title:{{title}} in parent</div>
    <son></son>
  </div>
</template>

<script>
import Son from "./son"
export default {
  provide: {
    message: 'provide by father',
    person: {
      name: 'suzhen',
      love: 'liverpool'
    },
    forSon: {
      sonMsg: 'from index'
    }
  },
  components: { Son },
  data() {
    return {
      title: '父组件'
    }
  }
}
</script>

<style lang="scss">
.viser-main-container {
  text-align: center;
  font-size: 22px;
}
</style>
