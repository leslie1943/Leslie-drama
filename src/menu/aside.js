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
    icon: 'folder-o',
    children: [
      { path: '/drama/cosplay', title: '角色扮演' },
      // { path: '/drama/roles', title: '人物扮演' },
      { path: '/drama/list', title: '剧本详情' },
      { path: '/drama/photo', title: '剧本照片' },
      { path: '/drama/toplay', title: '待玩剧本' },
      { path: '/drama/murderer', title: '凶手统计' }
    ]
  }
]
