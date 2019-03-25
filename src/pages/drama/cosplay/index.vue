<template>
  <d2-container>
    <template slot="header"></template>
    <div class="drama-person-container">
      <!-- Data List -->
      <el-table :data="persons" style="width: 100%">
        <!-- 头像 -->
        <el-table-column
          label="Avatar"
          align="center"
          width="80"
          header-align="center"
          fixed="left"
        >
          <template slot-scope="scope">
            <img style="width:40px;height:40px" :src="scope.row.avatar">
          </template>
        </el-table-column>

        <!-- 参与 -->
        <el-table-column label="参与比" align="center" width="80" header-align="center" fixed="left">
          <template slot-scope="scope">
            <span :class="getParticipant(scope.row.participant)">{{scope.row.participant}}</span>
          </template>
        </el-table-column>

        <!-- 人物数据 -->
        <el-table-column
          v-for="(item,index) in dramas"
          :key="index"
          :label="item"
          align="center"
          width="130"
          header-align="center"
        >
          <template slot-scope="scope">
            <span v-if="results[scope.$index + '-' + index].cosName">
              <el-tag :style="results[scope.$index + '-' + index].style">
                <span v-if="results[scope.$index + '-' + index].type=='host'">
                  <Icon type="md-mic"/>
                </span>
                {{results[scope.$index + '-' + index].cosName}}
              </el-tag>
            </span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import all from './roles.js'
export default {
  name: 'roles-cosplay',
  data () {
    return {
      persons: all.persons,
      dramas: all.dramas.reverse(),
      results: all.results
    }
  },
  methods: {
    getParticipant (r) {
      let t = r.split('/')
      return t[0] / t[1] === 1 ? 'class-all' : (t[0] / t[1] >= 0.5 ? 'more-than-half' : 'low-than-ave')
    }
  }
}
</script>
<style lang="scss">
.class-all {
  font-weight: bold;
  color: #69c44e;
}
.more-than-half {
  font-weight: bold;
  color: #409eff;
}
.low-than-ave {
  font-weight: bold;
  color: pink;
}
</style>
