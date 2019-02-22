<template>
  <d2-container>
    <template slot="header"></template>
    <div class="drama-toplay-container">
      <!-- Data List -->
      <el-table :data="toplayDramas" style="width: 100%">
        <el-table-column label="待玩序列" align="center" type="index" width="80" header-align="center"></el-table-column>
        <el-table-column label="剧本" align="center" prop="dramaName" header-align="center"></el-table-column>
        <el-table-column label="人数" align="center" prop="needPlayers" header-align="center"></el-table-column>
        <el-table-column label="主持人" align="center" prop="host" header-align="center">
          <template slot-scope="scope">
            <el-button size="small" :style="scope.row.style">{{scope.row.host}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import all from './toplay.js'
export default {
  name: 'to-play',
  data () {
    return {
      toplayDramas: all.toPlays
    }
  },
  methods: {

  }
}
</script>
<style lang="scss">
.drama-toplay-container {
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
