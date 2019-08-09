<template>
  <d2-container>
    <template slot="header">动态表单demo</template>
    <!-- <div>
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
    </div>-->
    <div>
      <el-popover placement="top-start" title="采购单进度" width="200" trigger="click">
        <slot name="content">
          <el-timeline>
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp"
            >
              <div>{{activity.content}}</div>
              <div v-if="activity.reason">
                <span style="font-size:12px;color:#939393;">{{activity.reason}}</span>
              </div>
            </el-timeline-item>
          </el-timeline>
        </slot>
        <el-button slot="reference">{{activities[0].content}}</el-button>
      </el-popover>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
export default {
  name: 'dynamic-form',
  data () {
    return {
      activities: [{
        content: '发布成交公告',
        timestamp: '2018-04-12 20:46',
        type: 'primary',
        icon: 'el-icon-s-check'
      }, {
        content: '报价截止',
        timestamp: '2018-04-03 20:46',
        color: 'red'
      }, {
        content: '开标',
        timestamp: '2018-04-03 20:46',
        reason: '同意开标',
        reasonLabel: '批准理由'
      }, {
        content: '提交参数评审',
        timestamp: '2018-04-03 20:46',
        reason: '同意开标',
        reasonLabel: '拒绝理由',
        color: 'black'
      }, {
        content: '启动谈判',
        timestamp: '2018-04-03 20:46',
        color: 'pink'
      }, {
        content: '提交谈判记录',
        timestamp: '2018-04-03 20:46',
        color: 'purple'
      }, {
        content: '选标',
        timestamp: '2018-04-03 20:46',
        color: 'red'
      },
      {
        content: '工作组长审批',
        timestamp: '2018-04-03 20:46',
        icon: 'el-icon-view',
        type: 'primary'
      }, {
        content: '领导组长审批',
        timestamp: '2018-04-03 20:46',
        icon: 'el-icon-view',
        type: 'primary'
      }, {
        content: '监察批准',
        timestamp: '2018-04-03 20:46',
        icon: 'el-icon-circle-check',
        color: '#67C23A'
      }, {
        content: '发布采购公告',
        icon: 'el-icon-s-promotion',
        operator: '苏震',
        dept: '广电总局',
        type: 'primary',
        timestamp: '2018-04-03 20:46'
      }],
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
.el-timeline {
  padding: 10px;
  overflow-y: scroll;
  max-height: 356px;
}
</style>
