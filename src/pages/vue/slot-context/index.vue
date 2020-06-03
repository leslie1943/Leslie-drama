<template>
  <div style="max-height:800px;overflow:scroll">
    <h1>作用域插槽: 绑定在&lt;slot&gt;元素上的attribute被称为插槽Prop</h1>

    <div>
      <div>
        <p>
          <!-- <el-button  @click="showDetails(1)">NO1</el-button> -->
          <a href="#" v-scroll-to="'#listshow7'">Scroll to #element</a>
        </p>
        <div id="element">Hi. I'm #element.</div>
        <!-- <el-button @click="showDetails(2)">NO2</el-button>
          <el-button @click="showDetails(3)">NO3</el-button>
          <el-button @click="showDetails(4)">NO4</el-button>
          <el-button @click="showDetails(5)">NO5</el-button>
          <el-button @click="showDetails(6)">NO6</el-button>
          <el-button @click="showDetails(7)">NO7</el-button>
        </p>-->
        <div style="width: 50%;height:300px;background:#3FB883" id="listshow1">1111111</div>
        <div style="width: 50%;height:300px;background:#B26031" id="listshow2">2222222</div>
        <div style="width: 50%;height:300px;background:#F0686E" id="listshow3">3333333</div>
        <div style="width: 50%;height:300px;background:#369BEE" id="listshow4">4444444</div>
        <div style="width: 50%;height:300px;background:#FFE793" id="listshow5">5555555</div>
        <div style="width: 50%;height:300px;background:#AC885B" id="listshow6">6666666</div>
        <div style="width: 50%;height:300px;background:#B4177B" id="listshow7">7777777</div>
      </div>
    </div>
  </div>
</template>

<script>
import slotContext from './slot-context.vue'
export default {
  components: { slotContext },
  data() {
    return {
      parentData: { name: 'leslie' },
      showIndex: null
    }
  },
  methods: {
    handleTest() {
    },
    showDetails(num) {
      document.getElementById(`listshow${num}`).scrollIntoView({ "behavior": "smooth" })
    }
  }
}
</script>

<style>
</style>