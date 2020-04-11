<template>
  <div>
    <slot v-if="slots.header" name="header"></slot>
    <slot></slot>
    <slot v-if="slots.footer" name="footer"></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots)
    /**
     * default: Array[2] (分别是div和bizComponent)
     * footer: Array[1]
     * header: Array[2]
     */
  },
  computed: {
    slots() {
      return this.$slots
    }
  }
}
</script>