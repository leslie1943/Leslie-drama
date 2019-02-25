<template>
  <d2-container>
    <template slot="header">
      <div>
        <el-tooltip placement="bottom">
          <div slot="content">
            <el-row class="drama-murder-header">
              <el-col>
                <p>
                  <i class="el-icon-warning">因年代久远,蛊魂铃,良辰吉日不在统计范围之内</i>
                </p>
              </el-col>
            </el-row>
            <el-row class="drama-murder-header">
              <el-col>
                <p>
                  <i class="el-icon-warning">幽灵群岛-文艺本,不在统计范围之内</i>
                </p>
              </el-col>
            </el-row>
          </div>
          <div style="text-align:center;">
            <el-button type="warning" plain icon="el-icon-warning">广而告之</el-button>
          </div>
        </el-tooltip>
      </div>
    </template>
    <div class="drama-toplay-body">
      <!-- Data List -->
      <el-table :data="murders" style="width: 100%">
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
        <!--  -->
        <el-table-column label="凶手次数" align="center" prop="times" header-align="center"></el-table-column>
        <el-table-column label="所属剧本" align="left" header-align="center">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.inDrama.length>0"
              :style="scope.row.style"
            >{{scope.row.inDrama.length>0 ?scope.row.inDrama.join(' | '):''}}</el-button>
            <span v-else>👍👍👍你是一个好人!</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import all from './murderers.js'
export default {
  name: 'murders',
  data () {
    return {
      murders: all.murders
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
.drama-murder-header {
  text-align: left;
  font-size: 16px;
}
.drama-toplay-body {
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
}
</style>
