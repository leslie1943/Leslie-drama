<template>
  <d2-container v-loading="loading">
    <template slot="header"></template>
    <!-- Buttons -->
    <el-row>
      <el-col :span="4">
        <el-button size="small" @click="handleShowLogin" type="primary">Show login</el-button>
      </el-col>
      <el-col :span="4">
        <el-button size="small" @click="handleShowCreate" type="primary">Show create</el-button>
      </el-col>

      <el-col :span="4">
        <el-button size="small" @click="listMenus" type="primary">Show menu</el-button>
      </el-col>
    </el-row>
    <div class="egg-user-container">
      <!-- Create -->
      <el-dialog
        title="创建测试"
        width="40%"
        :visible.sync="createVisible"
        :modal-append-to-body="true"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        @open="handleOpenCreate"
      >
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
      </el-dialog>
      <!--  -->
      <div class="split-section"></div>
      <el-row>
        <el-button type="primary" size="small" @click="handleSearch">Get user</el-button>
        <div class="split-section"></div>
        <el-table :data="userList">
          <el-table-column prop="_id" label="_id"></el-table-column>
          <el-table-column prop="name" label="name"></el-table-column>
          <el-table-column prop="password" label="password"></el-table-column>
          <el-table-column label="action">
            <template slot-scope="scope">
              <span>
                <el-button size="mini" type="primary" plain @click="handleUpdate(scope.row)">Modify</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
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
    <!-- Login -->
    <el-dialog
      title="登录测试"
      width="40%"
      :visible.sync="loginVisible"
      :modal-append-to-body="true"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      @open="handleOpenLogin"
    >
      <el-row>
        <el-form
          :model="login"
          ref="loginRef"
          label-width="90px"
          :rules="loginRules"
          label-position="left"
        >
          <el-row>
            <el-form-item label="Name" prop="name">
              <el-input v-model="login.name"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="Password" prop="password">
              <el-input v-model="login.password"></el-input>
            </el-form-item>
          </el-row>
          <el-row style="text-align:center;">
            <el-button @click="handleLogin" type="primary">Login</el-button>
          </el-row>
        </el-form>
      </el-row>
    </el-dialog>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>

export default {
  name: 'egg-api-user',
  data () {
    return {
      loading: false,
      loginVisible: false,
      createVisible: false,
      userList: [],
      login: {
        name: '',
        password: ''
      },
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
      },
      loginRules: {
        name: [{ required: true, message: 'name is required.', trigger: 'blur' }],
        password: [{ required: true, message: 'password is required.', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleShowLogin () {
      this.loginVisible = true
    },
    handleOpenLogin () {
      this.login.name = ''
      this.login.password = ''
    },
    handleShowCreate () {
      this.createVisible = true
    },
    handleOpenCreate () {
      this.login.name = ''
      this.login.password = ''
    },
    handleLogin () {
      this.$refs.loginRef.validate((valid) => {
        if (valid) {
          this.$store.dispatch('egg/user/loginUser', this.login).then(res => {
            if (res.success) {
              this.$message.success('登录成功!')
              this.loginVisible = false
              this.handleSearch()
            } else {
              this.$message.error('登录失败,请检查账号和密码!')
            }
          })
        }
      })
    },
    handleSearch () {
      this.loading = true
      this.$store.dispatch('egg/user/load').then(res => {
        this.userList = res
        this.loading = false
      })
    },
    handleCreate () {
      this.loading = true
      this.$store.dispatch('egg/user/createUser', this.user).then(res => {
        if (res.success) {
          this.$message.success('创建成功!')
          this.createVisible = false
          this.handleSearch()
        } else {
          this.$message.error(res.msg)
        }
        this.loading = false
      })
    },
    handleDelete (data) {
      this.loading = true
      this.$store.dispatch('egg/user/deleteUser', data).then(res => {
        if (res.success) {
          this.$message.success('删除成功!')
          this.handleSearch()
        } else {
          this.$message.error(res.result.msg)
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
          this.$message.error(res.result.msg)
        }
      })
    },
    listMenus () {
      this.$store.dispatch('egg/menu/list').then(res => {
        console.info(res)
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
