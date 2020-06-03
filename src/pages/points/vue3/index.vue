<template>
  <div>
    <is-loading :showLoading="showLoading"></is-loading>
  </div>
</template>

<script>
import IsLoading from './is-loading'
export default {
  components: {
    IsLoading
  },
  data() {
    return {
      showLoading: true
    }
  }
}
</script>

<style>
</style>