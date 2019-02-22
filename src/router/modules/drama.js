import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/drama',
  name: 'drama',
  meta,
  // redirect: { name: 'drama-roles' },
  component: layoutHeaderAside,
  // meta.title是tab页的title
  children: (pre => [
    { path: 'roles', name: `${pre}roles`, component: () => import('@/pages/drama/roles'), meta: { meta, title: '人物扮演' } },
    { path: 'list', name: `${pre}list`, component: () => import('@/pages/drama/list'), meta: { meta, title: '剧本列表' } },
    { path: 'photo', name: `${pre}photo`, component: () => import('@/pages/drama/photos'), meta: { meta, title: '剧本照片' } },
    { path: 'cosplay', name: `${pre}cosplay`, component: () => import('@/pages/drama/cosplay'), meta: { meta, title: '角色扮演' } },
    { path: 'toplay', name: `${pre}toplay`, component: () => import('@/pages/drama/toplay'), meta: { meta, title: '待玩剧本' } },
    { path: 'murderer', name: `${pre}murderer`, component: () => import('@/pages/drama/murderer'), meta: { meta, title: '凶手统计' } }

  ])('drama-')
  // ('drama-') 可修改为 ()
}
