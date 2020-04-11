<template>
  <div>
    <div class="box-later-1">load me later 1</div>
    <div class="box-later-1">prop msg is: {{msg}}</div>
    <el-button size="mini" type="danger" v-on:click="handleClick">change</el-button>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String
    }
  },
  data: function () {
    return {};
  },
  components: {},
  created: function () {
  },
  mounted: function () {
  },
  computed: {},
  methods: {
    handleClick() {
      // 第一个参数形式 [update:propName]. 这是Vue的机制
      // 第二个参数内容: 修改后内容传回父组件
      // 这种形式不需要在父组件中实现赋值方法
      this.$emit('update:msg', 'Hello Changed message')
    }
  },
}
</script>
<style>
.box-later-1 {
  /* 居中 */
  width: calc(20vw - 0px);
  height: calc(20vh - 0px);
  margin: 5px;
  background: #409eff;
  color: white;
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
}
</style>