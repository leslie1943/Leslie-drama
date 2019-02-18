<template>
  <d2-container>
    <template slot="header"></template>

    <div class="drama-container">
      <el-table
        @row-click="handleRowClick"
        :row-class-name="tableRowClassName"
        :data="dramas"
        style="width: 100%"
      >
        <el-table-column type="index" align="left" header-align="left"></el-table-column>

        <el-table-column prop="name" label="剧名" align="left" header-align="left"></el-table-column>

        <el-table-column prop="host" label="主持人"></el-table-column>

        <el-table-column prop="persons" label="人数"></el-table-column>

        <el-table-column
          prop="roles"
          label="角色"
          width="60px"
          type="expand"
          header-align="left"
          align="center"
        >
          <template slot-scope="scope">
            <div class="roles-table">
              <el-table :data="scope.row.roles" :show-header="false" style="font-size:12px;">
                <el-table-column prop="realName" label="人物"></el-table-column>
                <el-table-column prop="cosName" label="角色"></el-table-column>
              </el-table>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="copyright" label="独家" align="center" header-align="center">
          <template slot-scope="scope">
            <el-tag type="danger" v-if="scope.row.copyright">独家</el-tag>
            <el-tag type="info" v-else>普通</el-tag>
          </template>
        </el-table-column>

        <el-table-column prop="places" label="游戏地点" align="center" header-align="center">
          <template slot-scope="scope">
            <el-tag
              style="margin-right:2px;margin-bottom:2px;"
              v-for="(item,key) in scope.row.places"
              :key="key"
            >{{item}}</el-tag>
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center" header-align="center">
          <template slot-scope="scope">
            <el-button size="small" type="primary" @click="handleViewDetail(scope.row)">查看结局</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- ############# 查看结局 ############# -->
      <el-dialog :title="currentRow.ending.name" :visible.sync="dialogVisible" width="60%" center>
        <hr>
        <el-row style="font-size:24px;">
          <span style="font-weight:bold;color:red;">
            <Icon type="ios-contact"/>真实凶手
          </span>
          : {{currentRow.ending.realMurder}}
        </el-row>

        <el-row style="font-size:24px;">
          <span style="font-weight:bold;color:#409EFF;">
            <Icon type="ios-contact-outline"/>投票凶手
          </span>
          : {{currentRow.ending.voteMurder}}
        </el-row>
        <hr style="margin-top:20px;">

        <el-row
          style="text-align:center;font-size:18px;font-weight:bold;color:gray;word-break: break-word;white-space: normal;"
        >结局</el-row>

        <hr style="margin-bottom:20px;">

        <el-row
          style="word-break: break-word;white-space: normal;"
          v-for="(item,id) in currentRow.ending.detail"
          :key="id"
        >
          <Icon type="md-albums"/>
          {{item.desc}}
        </el-row>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>

      <!-- ############# 图片预览 ############# -->
      <el-dialog :modal-append-to-body="false" :visible.sync="previewDialogVisible" width="40%">
        <img width="100%" :src="previewDialogImageUrl" alt>
      </el-dialog>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>

import data from './drama-detail.js'
export default {
  name: 'list',
  data () {
    return data
  },
  methods: {
    handleRowClick (row, event, col) {
      console.info(row)
      console.info(event)
      console.info(col)
    },
    handleViewDetail (row) {
      this.currentRow = row
      this.dialogVisible = true
    },
    handlePreview (e) {
      this.previewDialogVisible = true
      this.previewDialogImageUrl = e.target.src
    },
    tableRowClassName ({ row, rowIndex }) {
      row.defineKey = rowIndex
      if (row.status === 2) {
        // return 'success-row';
      }
    }
  }
}
</script>
<style lang="scss">
.drama-container {
}
</style>
