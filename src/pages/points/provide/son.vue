<template>
  <div class="viser-main-container">
    <div>title:{{title}} in son</div>
    <div>forSon:{{forSon.sonMsg}}</div>
    <grand-son></grand-son>
  </div>
</template>

<script>
import grandSon from "./grandSon"

export default {
  components: { grandSon },
  inject: ['forSon'],
  data() {
    return {
      title: 'Son'
    }
  }
}
</script>

<style lang="scss">
.viser-main-container {
  text-align: center;
}
</style>
