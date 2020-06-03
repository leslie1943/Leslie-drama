<template>
  <div
    style="height:200px;"
    v-if="showLoading"
    v-loading.lock="showLoading"
    element-loading-text="加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rbga(0,0,0,0.8)"
  ></div>
</template>

<script>
export default {
  props: {
    showLoading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
</style>