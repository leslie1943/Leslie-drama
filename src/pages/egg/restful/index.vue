<template>
  <d2-container>
    <template slot="header"></template>
    <div>
      <el-button @click="handleIndex">call /posts ---【get】 🚀 index() 🚀</el-button>
    </div>

    <el-divider></el-divider>
    <div>
      <el-button @click="handleCreate">call /posts ---【post】 🚀 create() 🚀</el-button>
    </div>

    <el-divider></el-divider>
    <div>
      <el-button @click="handleShow">call /posts/:id ---【get】 🚀 show() 🚀</el-button>
    </div>

    <el-divider></el-divider>
    <div>
      <el-button @click="handleEdit">call /posts/:id/edit ---【get】 🚀 edit() 🚀</el-button>
    </div>

    <el-divider></el-divider>
    <div>
      <el-button @click="handleUpdate">call /posts/:id ---【put】 🚀 update() 🚀</el-button>
    </div>

    <el-divider></el-divider>
    <div>
      <el-button @click="handleDestroy">call /posts/:id ---【delete】 🚀 destroy() 🚀</el-button>
    </div>

    <el-divider></el-divider>
    <div>
      <el-button @click="handleNew">call /posts/new ---【get】 🚀 new() 🚀</el-button>
    </div>

    <template slot="footer"></template>
  </d2-container>
</template>

<script>

export default {
  name: 'egg-api-restful',
  data () {
    return {
    }
  },
  methods: {
    handleIndex () {
      this.$store.dispatch('egg/restful/index').then(res => {
        this.$message.success('【url: /posts  - get】 : ' + res)
      })
    },
    handleCreate () {
      this.$store.dispatch('egg/restful/create').then(res => {
        this.$message.success('【url: /posts  - post】 : ' + res)
      })
    },

    handleShow () {
      this.$store.dispatch('egg/restful/show').then(res => {
        this.$message.success('【url: /posts/:id/edit  - get】 : ' + res)
      })
    },

    handleEdit () {
      this.$store.dispatch('egg/restful/edit').then(res => {
        this.$message.success('【url: /posts/:id  - get】 : ' + res)
      })
    },

    handleUpdate () {
      this.$store.dispatch('egg/restful/update').then(res => {
        this.$message.success('【url: /posts/:id  - put】 : ' + res)
      })
    },

    handleDestroy () {
      this.$store.dispatch('egg/restful/destroy').then(res => {
        this.$message.success('【url: /posts/:id  - delete】 : ' + res)
      })
    },
    handleNew () {
      this.$store.dispatch('egg/restful/new').then(res => {
        this.$message.success('【url: /posts/new  - get】 : ' + res)
      })
    }
  }
}
</script>
<style lang="scss">
.egg-user-container {
  .split-section {
    height: 30px;
  }
}
</style>
