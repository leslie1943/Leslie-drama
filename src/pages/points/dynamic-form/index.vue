<template>
  <d2-container>
    <template slot="header">动态表单demo</template>
    <div>
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
    </div>
    <el-divider></el-divider>
    <el-button type="primary" @click="handleClick" plain>Change</el-button>
    <div style="margin-top:10px;">
      <person :data="person"></person>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import acts from './mock/index'
import person from './elements/index'
import aaa, { person2 } from '../../../utils/demo'

// console.info('person1', person1)
console.info('导出   default的属性,可使用任意名称', aaa)
console.info('导出非 default的属性,使用匹配名称', person2)

export default {
  name: 'dynamic-form',
  components: { person },
  data () {
    return {
      activities: acts,
      person: {
        name: '',
        type: '',
        age: 0
      }
    }
  },
  methods: {
    handleClick () {
      this.person = {
        name: 'Moon',
        age: 7,
        type: 'child'
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.person = {
        name: 'Leslie',
        type: 'Dora',
        age: 19
      }
    }, 3000)
  }
}
</script>
<style lang="scss">
.el-timeline {
  padding: 10px;
  overflow-y: scroll;
  max-height: 256px;
}
</style>
