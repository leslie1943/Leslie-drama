<template>
  <div>
    <slot v-if="slots.header" name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots, '$slots')
  },
  computed: {
    slots() {
      return this.$slots
    }
  }
}
</script>