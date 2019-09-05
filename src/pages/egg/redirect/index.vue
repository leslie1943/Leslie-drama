<template>
  <d2-container>
    <template slot="header"></template>
    <el-divider>测试重定向</el-divider>
    <el-row>
      <el-col :span="4">
        <el-button type="primary" @click="handleSearchBing">Redirect bing search</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="handleSearchBaidu">Redirect Baidu search</el-button>
      </el-col>
    </el-row>
    <el-divider>测试自定义校验规则</el-divider>
    <el-row>
      <el-col :span="4">
        <el-button type="primary" @click="handleSearchJsonRule">Check define JSON rules</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="handleSearchStringRule">Check define String rules</el-button>
      </el-col>
    </el-row>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>

export default {
  name: 'egg-api-redirect',
  data () {
    return {
    }
  },
  methods: {
    handleSearchBing () {
      this.$store.dispatch('egg/redirect/search', { type: 'bing', q: 'node' }).then((res) => {
        console.info('res:', res)
      })
    },
    handleSearchBaidu () {
      this.$store.dispatch('egg/redirect/search', { type: 'baidu', q: 'node' }).then((res) => {
        console.info('res:', res)
      })
    },
    handleSearchJsonRule () {
      let params = { userName: { name: 'suzhen' } }
      this.$store.dispatch('egg/redirect/checkRuleJson', params).then((res) => {
        if (res.status === 1) {
          this.$message.success('JSON Rule 校验成功! ' + res.msg)
        }
      })
    },
    handleSearchStringRule () {
      let params = { company: 'viewhigh' }
      this.$store.dispatch('egg/redirect/checkRuleString', params).then((res) => {
        if (res.status === 1) {
          this.$message.success('String Rule 校验成功! ' + res.msg)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.egg-user-container {
  .split-section {
    height: 30px;
  }
}
</style>
