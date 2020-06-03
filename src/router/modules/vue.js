import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/vue',
  name: 'vue',
  meta,
  // redirect: { name: 'drama-roles' },
  component: layoutHeaderAside,
  // meta.title是tab页的title
  children: (pre => [
    { path: 'slot', name: `${pre}slot`, component: () => import('@/pages/vue/slot'), meta: { meta, title: 'Slot' } },
    { path: 'slot-layout', name: `${pre}slot-layout`, component: () => import('@/pages/vue/slot-layout'), meta: { meta, title: 'slot-layout' } },
    { path: 'slot-context', name: `${pre}slot-context`, component: () => import('@/pages/vue/slot-context'), meta: { meta, title: 'slot-context' } },
    { path: 'edge-cases', name: `${pre}edge-cases`, component: () => import('@/pages/vue/edge-cases'), meta: { meta, title: 'edge-cases' } },
    { path: 'form-creator', name: `${pre}form-creator`, component: () => import('@/pages/vue/form-creator'), meta: { meta, title: 'form-creator' } },
    { path: 'element-ui', name: `${pre}element-ui`, component: () => import('@/pages/vue/element-ui'), meta: { meta, title: 'element-ui' } }
  ])('egg-')
  // ('drama-') 可修改为 ()
}
