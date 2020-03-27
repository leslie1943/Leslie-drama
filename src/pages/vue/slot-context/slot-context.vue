<template>
  <div class="new-slot">
    <slot :slotProps="defaultObj" />
    <slot name="title" :slotProps="titleObj" />
    <slot name="item" :slotProps="itemObj" />
    <slot name="other" :slotProps="otherObj" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultObj: { team: 'Liverpool', member: 'Steve Gerrard' },
      itemObj: { height: 110, width: 220 },
      titleObj: { name: 'leslie', love: 'javascript' },
      otherObj: { company: 'vh', id: 'VH001667' },
    }
  }
}
</script>
<style lang="scss">
.new-slot {
  border: 1px solid gray;
  padding: 20px;
}
</style>
