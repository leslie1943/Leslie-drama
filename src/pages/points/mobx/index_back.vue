<template>
  <div style="padding:20px;">
    <div>use delete change a: {{a}}</div>
    <div>use this.$delete change b: {{b}}</div>
    <el-button @click="handleChange">Do</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: [1, 2, 3, 4],
      b: [1, 2, 3, 4],
    }
  },
  methods: {
    handleChange() {
      delete (this.a)[1]
      this.$delete(this.b, 1)
    }
  }
}
</script>