import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/egg',
  name: 'egg',
  meta,
  // redirect: { name: 'drama-roles' },
  component: layoutHeaderAside,
  // meta.title是tab页的title
  children: (pre => [
    { path: 'user', name: `${pre}user`, component: () => import('@/pages/egg/user'), meta: { meta, title: '人员API' } },
    { path: 'menu', name: `${pre}meu`, component: () => import('@/pages/egg/menu'), meta: { meta, title: '菜单权限' } }
  ])('egg-')
  // ('drama-') 可修改为 ()
}
