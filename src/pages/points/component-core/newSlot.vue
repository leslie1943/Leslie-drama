<template>
  <div class="new-slot">
    <slot/>
    <slot name="title" :slotProps="titleObj"/>
    <slot name="item" :slotProps="itemObj"/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      itemObj: {
        height: '110',
        width: '220'
      },
      titleObj: {
        name: 'leslie',
        love: 'love'
      }
    }
  }
}
</script>
<style lang="scss">
.new-slot {
  border: 1px solid gray;
}
</style>
