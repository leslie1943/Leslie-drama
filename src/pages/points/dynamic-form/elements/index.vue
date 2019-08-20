<template>
  <div class="person">
    <div>Name:{{data.name}}</div>
    <div>Type:{{data.type}}</div>
    <div>Age:{{data.age}}</div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.person {
  font-size: 16px;
  background-color: black;
  color: pink;
}
</style>
