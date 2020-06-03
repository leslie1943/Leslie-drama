<template>
  <div>
    <div>
      <form-create :rule="formRule" :option="option" v-model="fApi" ref="formData"></form-create>
    </div>
  </div>
</template>

<script>
import formCreate, { maker } from '@form-create/element-ui'
import Biz from './comps/biz'
formCreate.component(Biz.name, Biz);
import myself from './js'
import { person } from './js'
console.info('myself', myself)
console.info('person', person)
export default {
  components: { formCreate: formCreate.$form() },
  // components: { Biz },
  data() {
    return {
      //组件参数配置
      option: {
        //表单提交事件
        onSubmit: function (formData) {
          alert(JSON.stringify(formData));
        },
      },
      fApi: {},
      model: {},
      formRule: []
    }
  },
  mounted: function () {
    this.model = this.fApi.model();
    this.initFormRule()
  },
  methods: {
    initFormRule() {
      this.formRule = [
        {
          type: 'input', title: '商品名称1', field: 'goods_name1', value: '',
          props: {
            "placeholder": "please input 商品名称1",
          },
          validate: [{
            required: true,
            message: '请输入商品名称1',
            trigger: 'blur'
          }]
        },
        // 2nd
        {
          type: "input", title: "商品名称2", field: "goods_name2", value: "iphone 7",
          props: {
            "type": "textarea",
            "placeholder": "请输入商品名称",
            "rows": 5
          },
          validate: [{
            required: true,
            message: '请输入goods_name',
            trigger: 'blur'
          }]
        },
        // 3rd
        {
          type: 'biz',
          name: 'biz',
          title: '自定义的',
        }
      ]
    }
  }
}
</script>

<style>
</style>