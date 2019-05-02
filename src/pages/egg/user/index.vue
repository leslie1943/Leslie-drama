<template>
  <d2-container v-loading="loading">
    <template slot="header"></template>
    <div class="egg-user-container">
      <el-row>
        <el-col :span="6">
          <el-input v-model="user.name"></el-input>
        </el-col>
        <el-col :offset="1" :span="6">
          <el-input v-model="user.password"></el-input>
        </el-col>
        <el-col :offset="1" :span="6">
          <el-button type="primary" @click="handleCreate">Create</el-button>
        </el-col>
      </el-row>
      <div class="split-section"></div>
      <el-row>
        <el-button type="primary" @click="handleSearch">Get user</el-button>
        <div class="split-section"></div>
        {{userList.length}}
        <el-table :data="userList">
          <el-table-column prop="_id" label="_id"></el-table-column>
          <el-table-column prop="name" label="name"></el-table-column>
          <el-table-column prop="password" label="password"></el-table-column>
          <el-table-column label="action">
            <template slot-scope="scope">
              <span>
                <el-button type="danger" @click="handleDelete(scope.row)">Delete</el-button>
                <el-button type="primary" plain @click="handleUpdate(scope.row)">Update</el-button>
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <div>
        <el-dialog :visible.sync="dialogVisible" title="修改用户信息">
          <el-row>
            <el-col :span="6">
              <el-input v-model="update.name"></el-input>
            </el-col>

            <el-col :offset="1" :span="6">
              <el-input v-model="update.password"></el-input>
            </el-col>
          </el-row>
          <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取 消</el-button>
            <el-button type="primary" @click="handleConfirm">确 定</el-button>
          </span>
        </el-dialog>
      </div>
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
        name: 'user',
        password: 'password'
      },
      // dialog
      dialogVisible: false,
      update: {
        _id: '',
        name: '',
        password: ''
      }
    }
  },
  methods: {
    handleSearch () {
      this.loading = true
      this.$store.dispatch('egg/user/load').then(res => {
        // console.info('res')
        // console.info(res)
        this.userList = res
        this.loading = false
      })
    },
    handleCreate () {
      this.loading = true
      this.$store.dispatch('egg/user/createUser', this.user).then(res => {
        // console.info('res in vue')
        // console.info(res)
        if (res.success) {
          this.$message.success('创建成功!')
          this.handleSearch()
        } else {
          this.$message.error(res.result.errmsg)
        }
        this.loading = false
      })
    },
    handleDelete (data) {
      // console.info(data)
      this.loading = true
      this.$store.dispatch('egg/user/deleteUser', data).then(res => {
        if (res.success) {
          this.$message.success('删除成功!')
          this.handleSearch()
        } else {
          this.$message.error(res.result.errmsg)
        }
      })
    },
    handleUpdate (data) {
      this.dialogVisible = true
      this.update._id = data._id
      this.update.name = data.name
      this.update.password = data.password
    },
    handleClose () {
      this.dialogVisible = false
    },
    handleConfirm () {
      this.loading = true
      this.$store.dispatch('egg/user/updateUser', this.update).then(res => {
        if (res.success) {
          this.$message.success('更新成功!')
          this.dialogVisible = false
          this.handleSearch()
        } else {
          this.dialogVisible = false
          this.$message.error(res.result.errmsg)
        }
      })
    }
  },
  mounted () {
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
