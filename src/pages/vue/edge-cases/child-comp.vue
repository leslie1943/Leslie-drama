<template>
  <div>
    <div class="child-container">
      <div class="child">
        this.$parent.parentData: {{this.$parent.parentData}}
        <el-button type="primary" size="mini" @click="handle">Child submit</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childData: { name: 'child' }
    }
  },
  methods: {
    handle() {
      this.$parent.handleTest()
    }
  }
}
</script>

<style lang="scss">
.child-container {
  margin: 0 auto;
  width: calc(50vw - 220px);
  height: calc(50vh - 100px);
  background: rgb(154, 184, 169);
  display: flex;
  align-items: center;
  justify-content: center;
  .child {
    position: relative;
  }
}
</style>
