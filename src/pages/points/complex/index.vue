<template>
  <div>
    <div style="text-align:center;margin:20px;">
      <el-tag>此页面演示了delete和$this.delete的区别</el-tag>
      <el-tag type="success">此页面演示了异步组件</el-tag>
      <el-tag type="info">此页面演示了组件绑定v-model</el-tag>
      <el-tag type="warning">此页面演示了组件属性.sync修饰符</el-tag>
    </div>
    <div style="padding:20px;">
      <div>use delete change a: {{a}}</div>
      <div>use this.$delete change b: {{b}}</div>
      <el-button @click="handleChange">Do</el-button>
    </div>
    <el-divider></el-divider>
    <div style="margin:20px;display:flex;align-items:center;">
      <div class="box">异步组件测试,点击按钮后第一个延迟300毫秒,从服务器加载第二个不延迟从服务器加载</div>
      <template v-if="show">
        <later1 v-bind:msg.sync="testMsg"></later1>
        <later2 v-model="title"></later2>
      </template>
    </div>
    <el-divider></el-divider>
    <div style="text-align:center">
      <el-button type="primary" @click="toggle">加载</el-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
// 局部注册
const later1 = Vue.component('later1', (resolve) => {
  setTimeout(() => {
    require(['./later1.vue'], resolve)
  }, 1000);
});
// 局部注册
const later2 = Vue.component('later2', (resolve) => {
  require(['./later2.vue'], resolve)
});
export default {
  data: function () {
    return {
      count: 0,
      title: 'later2 title',
      show: false,
      testMsg: 'Hello origin testMsg',
      a: [1, 2, 3, 4],
      b: [1, 2, 3, 4],
    };
  },
  components: {
    // later1,
    // later2,
  },
  created: function () {
  },
  mounted: function () {
  },
  computed: {},
  methods: {
    toggle: function () {
      this.count++
      this.show = !this.show;
      this.title = 'later2 title be changed after toggle' + this.count
    },
    handleChange() {
      delete (this.a)[1]
      this.$delete(this.b, 1)
    }
  },
}
</script>
<style>
.box {
  width: calc(20vw - 0px);
  height: calc(20vh - 0px);
  background: rgb(70, 117, 102);
  padding: 20px;
  color: white;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>