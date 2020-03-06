<template>
  <div class="test">
    <test>
      <div slot="header">slot: header</div>
      <div slot="header">slot: header</div>
      <div>slot default</div>
      <div slot="footer">slot: footer</div>
    </test>
    <div>fullName:{{fullName}}</div>
    <div>firstName:{{firstName}}</div>
    <div>lastName:{{lastName}}</div>
    <el-row>
      <el-button @click="handleClick">set full name</el-button>
    </el-row>
  </div>
</template>

<script>
import Test from './test'
export default {
  components: { Test },
  data: function () {
    return {
      firstName: 'zhang',
      lastName: 'kun'
    }
  },
  methods: {
    handleClick() {
      this.fullName = 'su zhen'
    }
  },
  mounted() {
    // this.$confirm('正在前往百度页面', '提示', {
    //   confirmButtonText: 'Go',
    //   closeOnClickModal: false,
    //   closeOnPressEscape: false,
    //   showClose: false,
    //   showCancelButton: false,
    //   type: 'warning'
    // }).then(() => {
    //   window.location.href = 'http://www.baidu.com'
    // }).catch((e) => {
    //   console.info(e)
    // })
  },
  computed: {
    fullName: {
      get: function () {
        return this.firstName + '-' + this.lastName
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}
</script>
<style lang="scss">
.test {
  font-size: 20px;
  padding: 50px;
  height: 1000px;
  background-color: #ffff;
  text-align: center;
}
</style>
