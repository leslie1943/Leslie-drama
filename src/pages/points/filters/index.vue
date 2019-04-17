<template>
  <d2-container>
    <template slot="header"></template>
    <div>
      <el-row>
        <el-col :offset="6">
          <h1>未处理的时间: {{createTime}}</h1>
          <h1>已处理的时间: {{createTime|yyyyMMDDHHmm}}</h1>
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
    console.info(this.filters)
    // 获取全局filters
    this.filters = this.$root.$options.filters
    this.$message.warning('原始长度:' + this.endTime)

    setTimeout(() => {
      this.$message.success('处理之后:' + this.filters.yyyyMMDDHHmm(this.endTime))
    }, 5000)
  }
}
</script>
<style lang="scss">
</style>
