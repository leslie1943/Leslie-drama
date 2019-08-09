<template>
  <d2-container>
    <template slot="header"></template>
    <el-row class="router-link">
      <el-col :span="6">
        <router-link :to="{name:'router-link',params:{id:1943,title:'Leslie.'}}">
          <el-button type="primary">name and params</el-button>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link :to="{path:'/pure-link',query:{id:1943,title:'Leslie.'}}">
          <el-button type="primary">path and query</el-button>
        </router-link>
      </el-col>

      <el-col :span="6">
        <router-link :to="{path:'/pure-link',params:{id:1943,title:'Leslie.'}}">
          <el-button plain type="danger">path and Params(wrong demo)</el-button>
        </router-link>
      </el-col>
    </el-row>

    <div class="first">
      <el-form>
        <el-form-item label="父组件msg:">{{msg}}</el-form-item>
        <el-form-item label="父组件数组:">{{arr}}</el-form-item>

        <el-form-item>
          <el-button @click="show=true">打开model框</el-button>
          <el-button @click="changeArray">父组件更改Array</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--
      1) :prop.sync="propValue"
      在子组件中可使用下面的语句更新
      this.$emit('update:show', false)

      2) @click.native 调用父组件自己的方法

      3) :on-change="parentChangeHandle" 可以在子组件里声明和调用:
        props: {
          onChange: {
            type: Function
          }
        }
        然后可以直接 this.onChange()
    -->
    <demo
      @click.native="parentNativeEvent"
      :parentEventHandle="parentChangeHandle"
      :show.sync="show"
      :msg.sync="msg"
      :arr="arr"
    ></demo>
    <!-- 🚀🚀🚀🚀🚀🚀  SLOT 🚀🚀🚀🚀🚀🚀 -->
    <el-divider></el-divider>
    <span>slot 具名插槽</span>
    <el-divider></el-divider>
    <div class="toList">
      <el-row>
        <el-col :span="4">
          <el-input v-model="info"></el-input>
        </el-col>
        <el-col :span="4">
          <el-button @click="addItem">添加</el-button>
        </el-col>
      </el-row>
      <el-row>
        <ul>
          <TodoItem v-for="(item,index) in listData" :key="index">
            <!--
              (v-slot:item是具名插槽) ,其中 itemProps的值就是从子组件传递过来的值
              子组件格式如下: <slot name="item" v-bind:checked="checked"></slot>
            -->
            <template v-slot:item="itemProps">
              <span :style="{fontSize:'20px',color: itemProps.checked?'#409EFF':'#707D89'}">{{item}}</span>
            </template>
          </TodoItem>
        </ul>
      </el-row>

      <el-divider></el-divider>
      <span>v-slot新用法 :</span>
      <i>在 2.6.0 中，我们为具名插槽和作用域插槽引入了一个新的统一的语法 (即 v-slot 指令)。它取代了 slot 和 slot-scope 。</i>
      <el-divider></el-divider>
      <el-row>
        <h2>2.6新语法</h2>
        <newSlot>
          <p>默认插槽: defalut slot content</p>
          <template v-slot:title="titleProps">
            <p style="color:#409EFF">具名插槽: title slot1</p>
            <p style="color:#409EFF">具名插槽: title slot2</p>
            <p style="color:#409EFF">{{titleProps}}</p>
          </template>
          <template v-slot:item="itemProps">
            <p style="color:#FFAF40">作用域插槽默认值</p>
            <p style="color:#FFAF40">作用域插槽: item slot-scope {{itemProps}}</p>
          </template>
        </newSlot>
      </el-row>
    </div>
    <el-divider>DEMO Vuex get</el-divider>
    <el-divider>DEMO Vuex get</el-divider>
    <el-divider>DEMO Vuex get</el-divider>
    <div style="background:#000000;color:#67C23A">
      <pre>
      /* eslint-disable */

      export default {
        namespaced: true,
        state: {
          permissions: [],
          // readOnly state, the value according to permissions' value
          get permittedPath() {
            return this.permissions
          },
        },
        mutations: {
          SET_PERMISSIONS: (state, permissions) => {
            state.permissions = permissions
          }
        },
        actions: {
          change({ state, dispatch, commit }, data) {
            commit('SET_PERMISSIONS', data)
          }
        }
      }
      </pre>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import Demo from './child.vue'
import TodoItem from './TodoItem.vue'
import newSlot from './newSlot.vue'
export default {
  name: 'component-core',
  components: { Demo, TodoItem, newSlot },
  data () {
    return {
      show: false,
      msg: '模拟一个model框',
      arr: [1, 2, 3],
      // slot data
      info: '',
      listData: []
    }
  },
  methods: {
    parentNativeEvent () {
      this.$message.success('parent method parentNativeEvent')
    },
    parentChangeHandle () {
      this.$message.success('parent method parentChangeHandle')
    },
    changeArray () {
      this.arr.push('parent value')
    },
    // SLOT METHOD
    addItem () {
      this.listData.push(this.info)
      this.info = ''
    }
  },
  mounted () {
    console.info('---- INIT: this.$store.state.epro ---', this.$store.state.epro.path)
    this.$store.dispatch('epro/path/change', ['/pathA', '/pathB'])
    console.info('---- CHANGE: this.$store.state.epro ---', this.$store.state.epro.path)
  }
}
</script>
<style lang="scss">
.first {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid gray;
  text-align: left;
}
.router-link {
  padding: 20px;
  border: 1px solid gray;
}
</style>
