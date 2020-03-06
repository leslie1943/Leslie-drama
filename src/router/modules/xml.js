import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/xml',
  name: 'xml',
  meta,
  // redirect: { name: 'drama-roles' },
  component: layoutHeaderAside,
  // meta.title是tab页的title
  children: (pre => [
    { path: 'go', name: `${pre}go`, component: () => import('@/pages/xml/go'), meta: { meta, title: '跳转' } }

  ])('egg-')
  // ('drama-') 可修改为 ()
}
