<template>
  <d2-container>
    <template slot="header">动态表单demo</template>
    <div>
      <!-- {{formData}} -->
      <el-form
        :model="formData"
        :rules="rules"
        :label-position="formData.labelPosition"
        ref="formElementsRef"
      >
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label-width="50px" label="名称" prop="name">
              <el-input v-model="formData.name" size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label-width="50px" label="布局">
              <el-radio-group v-model="formData.labelPosition" size="small">
                <el-radio-button label="left">左对齐</el-radio-button>
                <el-radio-button label="right">右对齐</el-radio-button>
                <el-radio-button label="top">顶部对齐</el-radio-button>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-for="(item,index) in formData.items" :key="index">
          <el-row :gutter="5">
            <el-col :span="3">
              <el-form-item label-width="50px" label="label" prop="title">
                <el-input size="small" v-model="(formData.items)[index].title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item label-width="50px" label="类型" prop="type">
                <el-select size="small" v-model="(formData.items)[index].type">
                  <el-option v-for="(t,index) in tags" :key="index" :value="t" :label="t"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="3">
              <el-form-item label-width="50px" label="底字" prop="placehoder">
                <el-input size="small" v-model="(formData.items)[index].placehoder"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item label-width="50px" label="校验" prop="msg">
                <el-input size="small" v-model="(formData.items)[index].msg"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="3">
              <el-form-item label-width="50px" label="prop" prop="prop">
                <el-input size="small" v-model="(formData.items)[index].prop"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <el-form-item label-width="50px" label="必填" prop="mandatory">
                <el-switch
                  size="small"
                  v-model="(formData.items)[index].mandatory"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                ></el-switch>
              </el-form-item>
            </el-col>
            <el-col :span="2">
              <el-form-item label-width="50px" label="只读" prop="readonly">
                <el-switch
                  size="small"
                  v-model="(formData.items)[index].readonly"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                ></el-switch>
              </el-form-item>
            </el-col>

            <el-col :span="3">
              <el-button type="text" @click="add">
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
              </el-button>
              <el-button type="text" @click="remove(item)">
                <i class="fa fa-minus-circle" aria-hidden="true"></i>
              </el-button>
            </el-col>
          </el-row>
        </el-row>
        <el-divider></el-divider>
        <el-row style="text-align:center;">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="submit">确定</el-button>
        </el-row>
      </el-form>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
export default {
  name: 'dynamic-form',
  data () {
    return {
      tags: ['el-input', 'el-textarea', 'el-radio', 'el-select'],
      positions: [],
      formData: {
        name: '',
        labelPosition: '',
        items: [{
          title: '', type: '', mandatory: false, placehoder: '', msg: '', readonly: false, prop: ''
        }]
      },
      rules: {
        name: [
          { required: true, message: '请输入表单名称', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    add () {
      this.formData.items.push({
        title: '', type: '', mandatory: false, placehoder: '', msg: '', readonly: false, prop: ''
      })
    },
    remove (item) {
      let index = this.formData.items.indexOf(item)
      if (index !== -1) {
        this.formData.items.splice(index, 1)
      }
    },
    reset () {
      this.$confirm('重置页面', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$refs['formElementsRef'].resetFields()
        this.$refs['formElementsRef'].clearValidate()
        this.formData = {
          name: '',
          labelPosition: '',
          items: [{
            title: '', type: '', mandatory: false, placehoder: '', msg: '', readonly: false, prop: ''
          }]
        }
      }).catch(() => {
        console.info('取消重置.')
      })
    },
    submit () {
      this.$message.success(JSON.stringify(this.formData))
    }
  }
}
</script>
<style lang="scss">
</style>
