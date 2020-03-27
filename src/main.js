/* eslint-disable */
// polyfill
import 'babel-polyfill'
// Vue
import Vue from 'vue'
import App from './App'
// store
import store from '@/store/index'
// // import mobx from '@/mobx/index'

// 模拟数据
import '@/mock'
// 多国语
import i18n from './i18n'
// 核心插件
import d2Admin from '@/plugin/d2admin'
// Map插件
import BaiduMap from 'vue-baidu-map'
// Editor 插件
import CKEditor from '@ckeditor/ckeditor5-vue';
import formCreate, { maker } from '@form-create/element-ui'

// chart
import ViserVue from 'viser-vue'

// 菜单和路由设置
import router from './router'
import menuHeader from '@/menu/header'
import menuAside from '@/menu/aside'
import { frameInRoutes } from '@/router/routes'
// IView UI
import IView from 'iview';
import 'iview/dist/styles/iview.css'
// 图片组件
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import treeTransfer from 'el-tree-transfer' // 引入

import '@/filters/index.js'

// 核心插件
Vue.use(formCreate)
Vue.use(d2Admin)
Vue.use(IView)
Vue.use(Viewer)
Vue.use(treeTransfer)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 't0B9AViBfnjqLwFubP8l7RlinAE8bv0u'
})
Vue.use(CKEditor)

Vue.use(ViserVue)


new Vue({
  router,
  store,
  // mobx,
  i18n,
  render: h => h(App),
  created() {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('d2admin/page/init', frameInRoutes)
    // 设置顶栏菜单 - 可注释掉
    this.$store.commit('d2admin/menu/headerSet', menuHeader)
    // 设置侧边栏菜单
    this.$store.commit('d2admin/menu/asideSet', menuAside)
    // 初始化菜单搜索功能
    this.$store.commit('d2admin/search/init', menuHeader)
  },
  mounted() {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('d2admin/fullscreen/listen')
  }
}).$mount('#app')
