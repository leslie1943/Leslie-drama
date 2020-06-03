<template>
  <div style="margin:20px">
    <buttons type="success" text="OK"></buttons>
    <buttons type="danger" text="Fail"></buttons>
    <buttons type="warning" text="Alert"></buttons>
    <buttons type="nomarl" text="default"></buttons>
  </div>
</template>
<script>
import Buttons from './buttons'
export default {
  components: { Buttons },
  data() {
    return {
      msg: 'Main'
    }
  },
  methods: {
    handleTest() {
      this.$message.success('Clicked')
    }
  },
  render(h) {
    // 注释
    return (
      <div>
        <el-row>{this.msg}</el-row>
        <el-row>
          <el-button onClick={this.handleTest}>Click</el-button>
        </el-row>
      </div>
    );
  }
}
</script>