<template>
  <div>
    <div class="ann-detail">
      <my-component></my-component>
      <div>
        <el-button style="margin-top:20px;" @click="refresh" type="primary">Refresh</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// import hxDetail from './components/left'
// import gyDetail from './components/right'

export default {
  components: {
    'my-component': () => import('./components/left')
  },
  data: function () {
    return {
      templates: ['hx', 'gy'],
      randomNum: 0,
      showDialog: false,
      expandKeys: []
    }
  },
  methods: {
    refresh () {
      this.randomNum = Math.floor(Math.random() * this.templates.length)
    }
  },
  computed: {
    // currentAnnComponent: function () {
    //   return this.templates[this.randomNum] + 'Detail'
    // },
  }
}
</script>
<style lang="scss">
.ann-detail {
  font-size: 20px;
  padding: 50px;
  height: 1000px;
  background-color: #ffff;
  text-align: center;
}
.el-table__expand-icon {
  height: 0px;
}
</style>
