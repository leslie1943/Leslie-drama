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
      <el-row>
        <pdf :src="pdfSrc" :page="1"></pdf>
      </el-row>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
// import pdf from 'vue-pdf'
import pdf from 'pdfvuer'

import { format } from 'mathjs'

export default {
  name: 'filters',
  components: { pdf },
  data () {
    return {
      createTime: '2019-12-12 12:12:12',
      endTime: '2019-12-13 01:02:03',
      filters: {},
      pdfSrc: 'http://file.dakawengu.com/file/2018-05-29/20180527-tianfeng.pdf'
    }
  },
  mounted () {
    console.info(0.1 + 0.2)
    console.info(format((0.1 + 0.2), 3))
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
