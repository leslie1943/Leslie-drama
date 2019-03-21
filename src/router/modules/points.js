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
    { path: 'maps', name: `${pre}maps`, component: () => import('@/pages/points/maps'), meta: { meta, title: '百度地图' } }

  ])('points-')
  // ('points-') 可修改为 ()
}
