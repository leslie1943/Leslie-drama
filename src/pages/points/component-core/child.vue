<template>
  <div v-if="show" class="border">
    <el-form>
      <el-form-item label="子组件msg:">{{msg}}</el-form-item>
      <el-form-item label="子组件arr:">{{arr}}</el-form-item>

      <!-- @click.stop 阻止冒泡事件 -->
      <el-form-item>
        <el-button @click.stop @click="closeModel">关闭model框</el-button>
        <el-button @click.stop @click="changeMsg">change message</el-button>
        <el-button @click.stop @click="changeArray">change array</el-button>
        <el-button @click.stop @click="callPropEvent">call prop event</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'Child',
  // 组件向子组件 props 里传递了 msg 和 show 两个值，都用了.sync 修饰符，进行双向绑定
  props: {
    msg: { type: String },
    show: { type: Boolean },
    // 在子组件中改变传递过来数组将会影响到父组件的状态
    arr: { type: Array },
    parentEventHandle: {
      type: Function
    }
  },
  data () {
    return {
    }
  },
  methods: {
    closeModel () {
      this.$emit('update:show', false)
    },
    changeMsg () {
      this.$emit('update:msg', 'updated msg.')
    },
    changeArray () {
      this.arr.push('new value')
    },
    callPropEvent () {
      this.parentEventHandle()
    }
  }
}
</script>
<style lang="scss">
.border {
  padding: 20px;
  margin-top: 10px;
  border: 1px solid gray;
}
</style>
