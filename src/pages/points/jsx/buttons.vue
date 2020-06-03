<script>
export default {
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    text: {
      type: String,
      default: 'button'
    }
  },
  render(h) {
    return h('el-button', {
      class: {
        btn: true,
        'el-button--success': this.type == 'success',
        'el-button--danger': this.type == 'danger',
        'el-button--warning': this.type == 'warning',
        'el-button--primary': this.type == 'nomarl',
      },
      domProps: {
        type: this.type,
        innerText: this.text,

      },
      on: {
        click: this.handleClick
      }
    })
  },
  methods: {
    handleClick() {
      this.$message.success(this.type)
    }
  }
}
</script>
<style scoped>
.btn {
  width: 100px;
  height: 40px;
}
</style>