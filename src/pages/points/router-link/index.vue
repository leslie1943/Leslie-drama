<template>
  <d2-container class="router-link-container">
    <template slot="header"></template>
    <div>
      <span class="label">this.$route.fullPath:</span>
      <span class="value">{{this.$route.fullPath}}</span>
    </div>
    <div>
      <span class="label">this.$route.name:</span>
      <span class="value">{{this.$route.name}}</span>
    </div>
    <div>
      <span class="label">this.$route.params:</span>
      <span class="value">{{this.$route.params}}</span>
    </div>
    <div>
      <span class="label">this.$route.path:</span>
      <span class="value">{{this.$route.path}}</span>
    </div>
    <div>
      <span class="label">this.$route.query:</span>
      <span class="value">{{this.$route.query}}</span>
    </div>
    <div>
      <span class="label">this.$route.meta:</span>
      <span class="value">{{this.$route.meta}}</span>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>
<script>
export default {
  name: 'filters',
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
    console.info(this.$route)
  }
}
</script>
<style lang="scss">
.router-link-container {
  .label {
    font-size: 20px;
    color: #707d89;
  }
  .value {
    font-size: 22px;
    color: #409eff;
  }
}
</style>
