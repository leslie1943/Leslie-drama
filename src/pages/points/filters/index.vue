<template>
  <d2-container>
    <template slot="header"></template>
    <div>
      <el-row>
        <el-col :offset="6">
          <h1>经过Filter处理的创建时间: {{createTime|dateSimple}}</h1>
        </el-col>
      </el-row>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>

export default {
  name: 'filters',
  data () {
    return {
      createTime: '2019-12-12 12:12:12',
      endTime: '2019-12-13 01:02:03',
      filters: {}
    }
  },
  mounted () {
    this.filters = this.$root.$options.filters
    this.$message.warning('原始长度:' + this.endTime)

    setTimeout(() => {
      this.$message.success('处理之后:' + this.filters.dateSimple(this.endTime))
    }, 2000)
  }
}
</script>
<style lang="scss">
</style>
