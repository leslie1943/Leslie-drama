<template>
  <d2-container v-loading="loading">
    <template slot="header"></template>
    <div>
      <el-row>
        <el-col :span="6">
          <el-input v-model="user.name"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input v-model="user.password"></el-input>
        </el-col>
        <el-col :span="6">
          <el-button @click="handleCreate">Create</el-button>
        </el-col>
      </el-row>
      <br>
      <br>
      <el-row>
        <el-button type="primary" @click="handleGetUser">Get user</el-button>
        <br>
        <br>
        <el-table :data="userList">
          <el-table-column prop="_id" label="_id"></el-table-column>
          <el-table-column prop="name" label="name"></el-table-column>
          <el-table-column prop="password" label="password"></el-table-column>
        </el-table>
      </el-row>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>

export default {
  name: 'egg-api-user',
  data () {
    return {
      loading: false,
      userList: [],
      user: {
        name: 'DORA_NAME',
        password: 'DORA_PWD'
      }
    }
  },
  methods: {
    handleGetUser () {
      this.loading = true
      this.$store.dispatch('egg/user/load').then(res => {
        console.info('res')
        // console.info(res)
        this.userList = res
        this.loading = false
      })
    },
    handleCreate () {
      this.loading = true
      this.$store.dispatch('egg/user/createUser', this.user).then(res => {
        console.info('res in vue')
        console.info(res)
        if (res.success) {
          this.$message.success('创建成功!')
        } else {
          this.$message.error(res.result.errmsg)
        }
        this.loading = false
      })
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
</style>
