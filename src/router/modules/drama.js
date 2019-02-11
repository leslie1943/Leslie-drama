import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/drama',
  name: 'drama',
  meta,
  // redirect: { name: 'drama-page1' },
  component: layoutHeaderAside,
  // meta.title是tab页的title
  children: (pre => [
    { path: 'roles', name: `${pre}roles`, component: () => import('@/pages/drama/roles'), meta: { meta, title: '人物扮演' } },
    { path: 'list', name: `${pre}list`, component: () => import('@/pages/drama/list'), meta: { meta, title: '剧本列表' } }
    // { path: 'page3', name: `${pre}page3`, component: () => import('@/pages/drama/page3'), meta: { meta, title: '页面 333' } }
  ])('drama-')
}
