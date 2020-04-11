<template>
  <div>
    <h1>作用域插槽: 绑定在&lt;slot&gt;元素上的attribute被称为插槽Prop</h1>
    <slot-context>
      <h3>默认插槽: defalut slot content</h3>
      <!-- ❌❌❌ 插槽写法 #title ❌❌❌ -->
      <template #default="props">
        <h3 style="color:#FFAF40">default 默认作用域插槽</h3>
        <h3 style="color:#409EFF">#default="props" {{props.slotProps}}</h3>
        <el-divider></el-divider>
      </template>
      <!-- ❌❌❌ 插槽写法 #title ❌❌❌ -->
      <template #title="props">
        <h3 style="color:#FFAF40">title 具名的作用域插槽====使用#</h3>
        <h3 style="color:#409EFF">#title="props" {{props.slotProps}}</h3>
        <el-divider></el-divider>
      </template>
      <!-- 🌐🌐🌐 插槽写法 v-slot: 🌐🌐🌐 -->
      <template v-slot:item="props">
        <h3 style="color:#FFAF40">item 具名的作用域插槽====使用v-slot:</h3>
        <h3 style="color:#409EFF">v-slot:item="props" => {{props.slotProps}}</h3>
        <el-divider></el-divider>
      </template>
      <!-- ⏹⏹⏹ 插槽写法 slot="slotName" slot-scope="slotProps" ⏹⏹⏹ -->
      <template slot="other" slot-scope="props">
        <h3 style="color:#FFAF40">other 具名的作用域插槽</h3>
        <h3 style="color:#409EFF">slot="other" slot-scope="props" => {{props.slotProps}}</h3>
      </template>
    </slot-context>
  </div>
</template>

<script>
import slotContext from './slot-context.vue'
export default {
  components: { slotContext },
  data() {
    return {
      parentData: { name: 'leslie' }
    }
  },
  methods: {
    handleTest() {
    }
  }
}
</script>

<style>
</style>