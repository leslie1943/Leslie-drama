<template>
  <div>
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
      testMsg: 'Hello origin testMsg'
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