import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/points',
  name: 'points',
  meta,
  component: layoutHeaderAside,
  // meta.title是tab页的title
  children: (pre => [
    { path: 'filter', name: `${pre}filter`, component: () => import('@/pages/points/filters'), meta: { meta, title: '过滤器' } },
    { path: 'maps', name: `${pre}maps`, component: () => import('@/pages/points/maps'), meta: { meta, title: '百度地图' } },
    { path: 'table-bg', name: `${pre}table-bg`, component: () => import('@/pages/points/table-bg'), meta: { meta, title: '行选背景' } },
    { path: 'rich-text', name: `${pre}rich-text`, component: () => import('@/pages/points/rich-text'), meta: { meta, title: '富文本' } },
    { path: 'dynamic-array', name: `${pre}dynamic-array`, component: () => import('@/pages/points/dynamic-array'), meta: { meta, title: '动态数组' } },
    { path: 'ck-editor', name: `${pre}ck-editor`, component: () => import('@/pages/points/ck-editor'), meta: { meta, title: 'CKEditor' } },
    { path: 'component-core', name: `${pre}component-core`, component: () => import('@/pages/points/component-core'), meta: { meta, title: 'Vue组件核心' } }

  ])('points-')
  // ('points-') 可修改为 ()
}
