// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  // {
  //   title: '演示页面',
  //   icon: 'folder-o',
  //   children: [
  //     { path: '/demo/page1', title: '页面 1' },
  //     { path: '/demo/page2', title: '页面 2' },
  //     { path: '/demo/page3', title: '页面 3' }
  //   ]
  // },
  // {
  //   title: '演示页面-SIDE',
  //   icon: 'folder-o',
  //   children: [
  //     { path: '/demo/page1', title: '页面 1' },
  //     { path: '/demo/page2', title: '页面 2' },
  //     { path: '/demo/page3', title: '页面 3' }
  //   ]
  // },
  {
    title: '剧本',
    icon: 'file-video-o',
    children: [
      { path: '/drama/cosplay', icon: 'user-secret', title: '角色扮演' },
      // { path: '/drama/roles', title: '人物扮演' },
      { path: '/drama/list', icon: 'align-justify', title: '剧本详情' },
      { path: '/drama/photo', icon: 'photo', title: '剧本照片' },
      { path: '/drama/toplay', icon: 'bell', title: '待玩剧本' },
      { path: '/drama/murderer', icon: 'bar-chart', title: '凶手统计' }
    ]
  },
  {
    title: '知识点',
    icon: 'rocket',
    children: [
      { path: '/points/filter', icon: 'filter', title: '过滤器' },
      { path: '/points/maps', icon: 'map-o', title: '百度地图' },
      { path: '/points/table-bg', icon: 'table', title: '行选背景' },
      { path: '/points/rich-text', icon: 'list', title: '富文本' },
      { path: '/points/dynamic-array', icon: 'th-list', title: '动态数组' },
      { path: '/points/ck-editor', icon: 'file-text-o', title: 'CKEditor' },
      { path: '/points/component-core', icon: 'cogs', title: 'Vue组件核心' },
      { path: '/points/dynamic-form', icon: 'cogs', title: '动态表单' },
      { path: '/points/dynamic-template', icon: 'cogs', title: '动态模板' },
      { path: '/points/list-content', icon: 'cogs', title: '列表详情' },
      { path: '/points/vue3', icon: 'cogs', title: 'Vue3.0' },
      { path: '/points/scroll', icon: 'cogs', title: 'Scroll' },
      { path: '/points/chart', icon: 'cogs', title: 'Chart' },
      { path: '/points/provide', icon: 'cogs', title: 'Provide/Inject' },
      { path: '/points/jsx', icon: 'cogs', title: 'JSX' },
      { path: '/points/complex', icon: 'cogs', title: 'complex' }
    ]
  },
  {
    title: 'EGG',
    icon: 'arrows',
    children: [
      { path: '/egg/user', icon: 'filter', title: '用户列表' },
      { path: '/egg/menu', icon: 'street-view', title: '菜单权限' },
      { path: '/egg/restful', icon: 'hand-o-right', title: 'Restful' },
      { path: '/egg/redirect', icon: 'share', title: 'Redirect' }
    ]
  },
  {
    title: 'VUE',
    icon: 'arrows',
    children: [
      { path: '/vue/slot', icon: 'filter', title: 'Vue-slot' },
      { path: '/vue/slot-layout', icon: 'filter', title: 'Vue-slot-layout' },
      { path: '/vue/slot-context', icon: 'filter', title: 'Vue-slot-context' },
      { path: '/vue/edge-cases', icon: 'filter', title: 'Vue-edge-cases' },
      { path: '/vue/form-creator', icon: 'filter', title: 'Vue-form-creator' },
      { path: '/vue/element-ui', icon: 'filter', title: 'Vue-element-ui' }
    ]
  }
]
