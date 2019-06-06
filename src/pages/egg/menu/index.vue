<template>
  <d2-container v-loading="loading">
    <template slot="header"></template>
    <!-- Buttons -->
    <el-row>
      <el-col :span="4">
        <el-button size="small" @click="listMenus" type="primary">Show menu</el-button>
      </el-col>
    </el-row>

    <div style="height:30px;"></div>

    <el-row>
      <el-table :data="menuList">
        <el-table-column prop="_id" label="_id"></el-table-column>
        <el-table-column prop="name" label="name"></el-table-column>
      </el-table>
    </el-row>

    <template slot="footer"></template>
  </d2-container>
</template>

<script>

export default {
  name: 'egg-api-menu',
  data () {
    return {
      loading: false,
      menuList: []
    }
  },
  methods: {
    listMenus () {
      this.loading = true
      this.$store.dispatch('egg/menu/list').then(res => {
        console.info(res)
        this.menuList = res
        this.loading = false
      })
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
.egg-menu-container {
  .split-section {
    height: 30px;
  }
}
</style>
