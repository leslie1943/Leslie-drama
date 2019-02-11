<template>
  <!-- <el-table-column label="xxxxxx" align="center" width="130" header-align="center">
          <template slot-scope="scope">
              <span v-if="scope.row.yyyyyyyy.cosName">
                <el-tag :style="scope.row.yyyyyyyy.style">
                    <span v-if="scope.row.yyyyyyyy.cosName=='主持人'"><Icon type="md-mic" /></span>
                    {{scope.row.yyyyyyyy.cosName}}</el-tag>
            </span>
          </template>
  </el-table-column>-->
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

        <!-- xxxxxxxxxxxxxxxx   业火馆   xxxxxxxxxxxxxxxxx -->
        <el-table-column label="15.业火馆" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.yehuoguan.cosName">
              <el-tag :style="scope.row.yehuoguan.style">
                <span v-if="scope.row.yehuoguan.cosName=='主持人'">
                  <Icon type="md-mic"/>
                </span>
                {{scope.row.yehuoguan.cosName}}
              </el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxx   狼人之血   xxxxxxxxxxxxxxxxxx -->
        <el-table-column label="14.狼人之血" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.langrenzhixue.cosName">
              <el-tag :style="scope.row.langrenzhixue.style">
                <span v-if="scope.row.langrenzhixue.cosName=='主持人'">
                  <Icon type="md-mic"/>
                </span>
                {{scope.row.langrenzhixue.cosName}}
              </el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxx   校园灵异事件   xxxxxxxxxxxxxxxxxxx -->
        <el-table-column label="13.校园灵异" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.xiaoyuansharen.cosName">
              <el-tag :style="scope.row.xiaoyuansharen.style">
                <span v-if="scope.row.xiaoyuansharen.cosName=='主持人'">
                  <Icon type="md-mic"/>
                </span>
                {{scope.row.xiaoyuansharen.cosName}}
              </el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxx   上海滩杀人事件   xxxxxxxxxxxxxxxxxxxx -->
        <el-table-column label="12.上海滩杀人" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.shanghaitan.cosName">
              <el-tag :style="scope.row.shanghaitan.style">
                <span v-if="scope.row.shanghaitan.cosName=='主持人'">
                  <Icon type="md-mic"/>
                </span>
                {{scope.row.shanghaitan.cosName}}
              </el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxx   皂罗袍   xxxxxxxxxxxxxxxxxx -->
        <el-table-column label="11.皂罗袍" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.zaoluopao.cosName">
              <el-tag :style="scope.row.zaoluopao.style">
                <span v-if="scope.row.zaoluopao.cosName=='主持人'">
                  <Icon type="md-mic"/>
                </span>
                {{scope.row.zaoluopao.cosName}}
              </el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxx   大明青龙劫   xxxxxxxxxxxxxxxxxxx -->
        <el-table-column label="10.大明青龙劫" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.damingqinglongjie.cosName">
              <el-tag :style="scope.row.damingqinglongjie.style">
                <span v-if="scope.row.damingqinglongjie.cosName=='主持人'">
                  <Icon type="md-mic"/>
                </span>
                {{scope.row.damingqinglongjie.cosName}}
              </el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxxx   记忆碎片   xxxxxxxxxxxxxxxxx -->
        <el-table-column label="9.记忆碎片" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.jiyisuipian.cosName">
              <el-tag :style="scope.row.jiyisuipian.style">
                <span v-if="scope.row.jiyisuipian.cosName=='主持人'">
                  <Icon type="md-mic"/>
                </span>
                {{scope.row.jiyisuipian.cosName}}
              </el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxxx   儿童劫   xxxxxxxxxxxxxxxxx -->
        <el-table-column label="8.儿童劫" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.ertongjie.cosName">
              <el-tag :style="scope.row.ertongjie.style">{{scope.row.ertongjie.cosName}}</el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxxx   苍笙九剑   xxxxxxxxxxxxxxxxx -->
        <el-table-column label="7.苍笙九剑" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.cangshengjiujian.cosName">
              <el-tag
                :style="scope.row.cangshengjiujian.style"
              >{{scope.row.cangshengjiujian.cosName}}</el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxxxx   大胥密史   xxxxxxxxxxxxxxxx -->
        <el-table-column label="6.大胥密史" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.daxumishi.cosName">
              <el-tag :style="scope.row.daxumishi.style">{{scope.row.daxumishi.cosName}}</el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxxxxx   星座怪谈   xxxxxxxxxxxxxxx -->
        <el-table-column label="5.星座怪谈" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.xingzuoguaitan.cosName">
              <el-tag :style="scope.row.xingzuoguaitan.style">{{scope.row.xingzuoguaitan.cosName}}</el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxxx   盖弥书院   xxxxxxxxxxxxxxxxx -->
        <el-table-column label="4.盖弥书院" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.gaimishuyuan.cosName">
              <el-tag :style="scope.row.gaimishuyuan.style">{{scope.row.gaimishuyuan.cosName}}</el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxxxx   良辰吉日   xxxxxxxxxxxxxxxx -->
        <el-table-column label="3.良辰吉日" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.liangchenjiri.cosName">
              <el-tag :style="scope.row.liangchenjiri.style">{{scope.row.liangchenjiri.cosName}}</el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxxxx   孽岛疑云   xxxxxxxxxxxxxxxx -->
        <el-table-column label="2.孽岛疑云" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.niehaiyiyun.cosName">
              <el-tag :style="scope.row.niehaiyiyun.style">
                <span v-if="scope.row.niehaiyiyun.cosName=='主持人'">
                  <Icon type="md-mic"/>
                </span>
                {{scope.row.niehaiyiyun.cosName}}
              </el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- xxxxxxxxxxxxxxxxx   蛊魂铃   xxxxxxxxxxxxxxxx -->
        <el-table-column label="1.蛊魂铃" align="center" width="130" header-align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.guhunling.cosName">
              <el-tag :style="scope.row.guhunling.style">{{scope.row.guhunling.cosName}}</el-tag>
            </span>
          </template>
        </el-table-column>

        <!-- <el-table-column label="Total" align="center" width="80"  header-align="center">
          <template slot-scope="scope">
              {{scope.row.roles.length}}
          </template>
        </el-table-column>-->
      </el-table>
    </div>
    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import roles from './roles.js'
export default {
  name: 'page1',
  data () {
    return {
      persons: roles.persons
    }
  }
}
</script>
