<template>
  <d2-container>
    <template slot="header"></template>
    <div>
      <el-row>
        <el-col :span="8">
          <el-table :data="list" height="300">
            <el-table-column label="name" prop="name"></el-table-column>
            <el-table-column label="biz" prop="biz"></el-table-column>
          </el-table>
        </el-col>

        <el-col :offset="1" :span="7">
          <el-table :data="top6List" height="300">
            <el-table-column label="name" prop="name"></el-table-column>
            <el-table-column label="biz" prop="biz"></el-table-column>
          </el-table>
        </el-col>

        <el-col :offset="1" :span="7">
          <el-row>
            <el-col :span="12">
              <span style="font-size:16px;color:#ed852f;font-weight:bold;">供应商名称</span>
            </el-col>
            <el-col :span="12">
              <span style="font-size:16px;color:#ed852f;font-weight:bold;">主营业务</span>
            </el-col>
          </el-row>
          <div id="suppliers" style="height:280px;overflow:hidden">
            <el-row v-for="(item,index) in scrollList" :key="index">
              <el-col :span="12">
                <span style="font-size:14px;color:#939393;font-weight:bold;">{{item.name}}</span>
              </el-col>
              <el-col :span="12">
                <span style="font-size:14px;color:#939393;font-weight:bold;">{{item.biz}}</span>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- test -->
    <div id="test" style="height:150px;overflow:hidden">
      <el-row>
        <el-col :span="6">
          <span style="font-size:16px;color:#ed852f;font-weight:bold;">供应商名称</span>
        </el-col>
        <el-col :span="6">
          <span style="font-size:16px;color:#ed852f;font-weight:bold;">主营业务</span>
        </el-col>
      </el-row>
      <transition-group name="flip-list" tag="ul">
        <li class="list-complete-item" v-for="item in transList" v-bind:key="item.name">
          <el-row>
            <el-col :span="6">
              <span style="font-size:14px;color:#939393;font-weight:bold;">{{item.name}}</span>
            </el-col>
            <el-col :span="6">
              <span style="font-size:14px;color:#939393;font-weight:bold;">{{item.biz}}</span>
            </el-col>
          </el-row>
        </li>
        <!-- <el-row v-for="(item,index) in transList" :key="index">
          <el-col :span="12">
            <span style="font-size:14px;color:#939393;font-weight:bold;">{{item.name}}</span>
          </el-col>
          <el-col :span="12">
            <span style="font-size:14px;color:#939393;font-weight:bold;">{{item.biz}}</span>
          </el-col>
        </el-row>-->
      </transition-group>
    </div>

    <el-collapse style="margin-top:50px;">
      <el-collapse-item title="标签样式测试" name="1">
        <el-col style="padding:10px;" v-for="item in [1,2,3]" :key="item" :span="8">
          <div class="each-one-in-list">
            <div class="show-icon">待选标</div>
            <div class="show-signal"></div>
            <div class="main-title" title="test">
              <strong>
                <span>大连安琪科技有效公司 {{item}}</span>
              </strong>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="trangle-card-blue-grey"></div>
        </el-col>
        <el-col :span="6">
          <div class="trangle-card-grey-orange"></div>
        </el-col>
      </el-collapse-item>
    </el-collapse>

    <template slot="footer"></template>
  </d2-container>
</template>

<script>
import { setInterval } from 'timers'
// import { cloneDeep } from 'lodash'
export default {
  name: 'filters',
  data () {
    return {
      intervalEvent: '',
      intervalScroll: '',
      intervalTop6: '',
      intervalTran: '',
      list: [],
      scrollList: [],
      top6Pool: [],
      top6List: [],
      transList: []
    }
  },
  methods: {
    refreshData () {
      let first = this.list.shift()
      this.list.push(first)
    },
    scrollHandle () {
      let section = document.getElementById('suppliers')
      let prevHeight = section.scrollTop
      section.scrollTop += 1
      if (prevHeight === section.scrollTop) {
        section.scrollTop = 0
      }
    },
    topListHandle () {
      let first = this.top6Pool.shift()
      this.top6Pool.push(first)

      this.top6List = this.top6Pool.slice(0, 6)
    },
    tranHandle () {
      let first = this.transList.shift()
      this.transList.push(first)
      // let second = this.transList.shift()
      // this.transList.push(second)
      // let third = this.transList.shift()
      // this.transList.push(third)
      // this.top6List = this.transList.slice(0, 6)
    }
  },
  mounted () {
    // 列表供应商
    this.list = [
      { id: 1, show: true, url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=323758386,1868087086&fm=200&gp=0.jpg', name: '阿斯利康公司', biz: '阿斯利康公司' },
      { id: 2, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '吉利德科学公司', biz: '吉利德科学公司' },
      { id: 3, show: true, url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1036044083,1484439347&fm=200&gp=0.jpg', name: '赛诺菲巴斯德公司', biz: '赛诺菲巴斯德公司' },
      { id: 4, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '葛兰素史克公司', biz: '葛兰素史克公司' },
      { id: 5, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '默克集团', biz: '默克集团' },
      { id: 6, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '德国拜耳公司', biz: '德国拜耳公司' },
      { id: 7, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '诺华公司', biz: '诺华公司' },
      { id: 8, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '辉瑞国际公司', biz: '辉瑞国际公司' },
      { id: 9, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '豪夫迈.罗氏有限公司', biz: '豪夫迈.罗氏有限公司' },
      { id: 10, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '强生公司', biz: '强生公司' },
      { id: 11, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '云南白药', biz: '云南白药' },
      { id: 12, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '康美药业', biz: '康美药业' },
      { id: 13, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '安迪苏', biz: '安迪苏' },
      { id: 14, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '复星医药', biz: '复星医药' },
      { id: 15, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '恒瑞医药', biz: '恒瑞医药' },
      { id: 16, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '东阿阿胶', biz: '东阿阿胶' },
      { id: 17, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '必康股份', biz: '必康股份' },
      { id: 18, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '太龙药业', biz: 'xxxxxxx' },
      { id: 19, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '国际医学', biz: '国际医学' },
      { id: 20, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '新华制药', biz: '新华制药' }
    ]
    this.intervalEvent = setInterval(this.refreshData, 3000)

    // 滚动供应商
    this.scrollList = [
      { id: 1, show: true, url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=323758386,1868087086&fm=200&gp=0.jpg', name: '阿斯利康公司', biz: '阿斯利康公司' },
      { id: 2, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '吉利德科学公司', biz: '吉利德科学公司' },
      { id: 3, show: true, url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1036044083,1484439347&fm=200&gp=0.jpg', name: '赛诺菲巴斯德公司', biz: '赛诺菲巴斯德公司' },
      { id: 4, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '葛兰素史克公司', biz: '葛兰素史克公司' },
      { id: 5, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '默克集团', biz: '默克集团' },
      { id: 6, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '德国拜耳公司', biz: '德国拜耳公司' },
      { id: 7, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '诺华公司', biz: '诺华公司' },
      { id: 8, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '辉瑞国际公司', biz: '辉瑞国际公司' },
      { id: 9, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '豪夫迈.罗氏有限公司', biz: '豪夫迈.罗氏有限公司' },
      { id: 10, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '强生公司', biz: '强生公司' },
      { id: 11, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '云南白药', biz: '云南白药' },
      { id: 12, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '康美药业', biz: '康美药业' },
      { id: 13, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '安迪苏', biz: '安迪苏' },
      { id: 14, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '复星医药', biz: '复星医药' },
      { id: 15, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '恒瑞医药', biz: '恒瑞医药' },
      { id: 16, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '东阿阿胶', biz: '东阿阿胶' },
      { id: 17, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '必康股份', biz: '必康股份' },
      { id: 18, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '太龙药业', biz: 'xxxxxxx' },
      { id: 19, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '国际医学', biz: '国际医学' },
      { id: 20, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '新华制药', biz: '新华制药' }
    ]
    this.intervalScroll = setInterval(this.scrollHandle, 50)

    // Top 6 solution.
    this.top6Pool = [
      { id: 1, show: true, url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=323758386,1868087086&fm=200&gp=0.jpg', name: '阿斯利康公司', biz: '阿斯利康公司' },
      { id: 2, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '吉利德科学公司', biz: '吉利德科学公司' },
      { id: 3, show: true, url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1036044083,1484439347&fm=200&gp=0.jpg', name: '赛诺菲巴斯德公司', biz: '赛诺菲巴斯德公司' },
      { id: 4, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '葛兰素史克公司', biz: '葛兰素史克公司' },
      { id: 5, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '默克集团', biz: '默克集团' },
      { id: 6, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '德国拜耳公司', biz: '德国拜耳公司' },
      { id: 7, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '诺华公司', biz: '诺华公司' },
      { id: 8, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '辉瑞国际公司', biz: '辉瑞国际公司' },
      { id: 9, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '豪夫迈.罗氏有限公司', biz: '豪夫迈.罗氏有限公司' },
      { id: 10, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '强生公司', biz: '强生公司' },
      { id: 11, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '云南白药', biz: '云南白药' },
      { id: 12, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '康美药业', biz: '康美药业' },
      { id: 13, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '安迪苏', biz: '安迪苏' },
      { id: 14, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '复星医药', biz: '复星医药' },
      { id: 15, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '恒瑞医药', biz: '恒瑞医药' },
      { id: 16, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '东阿阿胶', biz: '东阿阿胶' },
      { id: 17, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '必康股份', biz: '必康股份' },
      { id: 18, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '太龙药业', biz: 'xxxxxxx' },
      { id: 19, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '国际医学', biz: '国际医学' },
      { id: 20, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '新华制药', biz: '新华制药' }
    ]
    this.intervalTop6 = setInterval(this.topListHandle, 3000)

    // Transition
    this.transList = [
      { id: 1, show: true, url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=323758386,1868087086&fm=200&gp=0.jpg', name: '阿斯利康公司', biz: '阿斯利康公司' },
      { id: 2, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '吉利德科学公司', biz: '吉利德科学公司' },
      { id: 3, show: true, url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1036044083,1484439347&fm=200&gp=0.jpg', name: '赛诺菲巴斯德公司', biz: '赛诺菲巴斯德公司' },
      { id: 4, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '葛兰素史克公司', biz: '葛兰素史克公司' },
      { id: 5, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '默克集团', biz: '默克集团' },
      { id: 6, show: true, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '德国拜耳公司', biz: '德国拜耳公司' },
      { id: 7, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '诺华公司', biz: '诺华公司' },
      { id: 8, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '辉瑞国际公司', biz: '辉瑞国际公司' },
      { id: 9, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '豪夫迈.罗氏有限公司', biz: '豪夫迈.罗氏有限公司' },
      { id: 10, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '强生公司', biz: '强生公司' },
      { id: 11, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '云南白药', biz: '云南白药' },
      { id: 12, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '康美药业', biz: '康美药业' },
      { id: 13, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '安迪苏', biz: '安迪苏' },
      { id: 14, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '复星医药', biz: '复星医药' },
      { id: 15, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '恒瑞医药', biz: '恒瑞医药' },
      { id: 16, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '东阿阿胶', biz: '东阿阿胶' },
      { id: 17, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '必康股份', biz: '必康股份' },
      { id: 18, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '太龙药业', biz: 'xxxxxxx' },
      { id: 19, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '国际医学', biz: '国际医学' },
      { id: 20, show: false, url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=898396622,3344324161&fm=200&gp=0.jpg', name: '新华制药', biz: '新华制药' }
    ]
    this.intervalTran = setInterval(this.tranHandle, 4000)
  },
  beforeDestroy () {
    clearInterval(this.intervalEvent)
    clearInterval(this.intervalScroll)
  }
}
</script>
<style lang="scss">
.flip-list-move {
  transition: transform 0.5s;
}
.flip-list-leave {
  transition: transform 0s;
  opacity: 0;
}

.trangle-card-blue-grey {
  cursor: pointer;
  background-color: #fff;
  border: 140px solid #3c8cdc - 30; // - 30 颜色比重
  border-right: 140px solid #c4c5c4;
  border-bottom: 140px solid #c4c5c4;
  margin-right: 0px;
  width: 140px;
  height: 140px;
}
.trangle-card-grey-orange {
  cursor: pointer;
  background-color: #fff;
  border: 140px solid #c4c5c4 - 30; // - 30 颜色比重
  border-right: 140px solid #cf6711;
  border-bottom: 140px solid #cf6711;
  margin-right: 0px;
  width: 140px;
  height: 140px;
}
.each-one-in-list {
  border: 1px solid #ebeef5;
  // cursor: pointer;
  background-color: #fff;
  padding: 10px;
  height: 300px;

  .show-icon {
    text-align: center;
    background-color: #5aaafa;
    color: #fff;
    float: right;
    font-size: 12px;
    margin-right: -18px;
    padding: 2px 5px 2px 5px;
    width: 79px;
  }
  .show-signal {
    border: 4px solid #939393 - 30; // - 30 颜色比重
    border-right: 4px solid transparent;
    border-bottom: 4px solid transparent;
    float: right;
    margin-right: -79px;
    margin-top: 24px;
    width: 0;
    height: 0;
  }
}
</style>
