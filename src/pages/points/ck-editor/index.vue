<template>
  <div style="padding:30px;">
    <el-button
      v-clipboard:copy="message"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError"
      type="primary"
    >Copy!</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: `Copy These Text\r\nCopy These Text\r\nCopy These Text\r\nCopy These Text\r\nCopy These Text\r\nCopy These Text\r\nCopy These Text\r\nCopy These Text\r\nCopy These Text`

    };
  },
  methods: {
    onCopy: function (e) {
      alert(e.text)
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  }
}
</script>

<style lang="scss">
</style>