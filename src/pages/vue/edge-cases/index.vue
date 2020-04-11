<template>
  <div>
    <h1>边界测试</h1>
    <el-button type="primary" size="mini" @click="handleDemo">Parent submit</el-button>
    <child-comp ref="childDemo"></child-comp>
    <template-inline inline-template>
      <!-- 🚀只能有一个根元素 -->
      <!-- 我在王岩的分支上写了注释 -->
      <div>
        <div>{{msg}}</div>
        <!-- ❌❌ 无法使用父组件data ❌❌ -->
        <div>{{name}}</div>
      </div>
    </template-inline>
  </div>
</template>

<script>
import childComp from './child-comp.vue'
import TemplateInline from './inline-template'
export default {
  components: { childComp, TemplateInline },
  data() {
    return {
      name: 'suzhen',
      parentData: { name: 'leslie' }
    }
  },
  methods: {
    handleTest() {
      this.$notify({ title: '成功', message: '子组件使用this.$parent调用父组件的方法', type: 'success' });
    },
    handleDemo() {
      this.$message.success('调用父组件方法,使用refs再调用子组件方法,子组件再使用this.$parent调用父组件的方法')
      this.$refs.childDemo.handle()
    }
  }
}
</script>

<style>
</style>