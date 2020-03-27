<template>
  <div>
    <div>
      <el-tag>我是一个子组件</el-tag>
    </div>
    <div>
      <el-tag type="warning">我在父组件被引用</el-tag>
    </div>
    <div>
      <el-tag type="info">我会被插入另外一个子组件的default slot中</el-tag>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>