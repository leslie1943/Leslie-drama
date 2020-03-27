<script>
export default {
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