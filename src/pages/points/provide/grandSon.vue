<template>
  <div class="viser-main-container">
    <div>title:{{title}} in grand son</div>
    <div>message:{{message}}</div>
    <div>person:{{person.name + person.love}}</div>
  </div>
</template>

<script>

export default {
  inject: ['message', 'person'],
  data() {
    return {
      title: 'grand Son'
    }
  }
}
</script>

<style lang="scss">
.viser-main-container {
  text-align: center;
}
</style>
