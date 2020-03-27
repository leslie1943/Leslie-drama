<template>
  <div class="test">
    <slots>
      <div slot="header">slot: header 1</div>
      <div slot="header">slot: header 2</div>
      <div>slot default content</div>
      <biz></biz>
      <div slot="footer">slot: footer</div>
    </slots>
  </div>
</template>

<script>
import Slots from './slots'
import Biz from './biz'

export default {
  components: { Slots, Biz },
  data: function () {
    return {
    }
  },
  methods: {

  },
  mounted() {
  },
}
</script>
<style lang="scss">
.test {
  font-size: 20px;
  padding: 50px;
  height: 1000px;
  background-color: #ffff;
  text-align: center;
}
</style>
