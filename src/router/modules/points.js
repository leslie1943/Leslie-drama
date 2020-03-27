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
    { path: 'component-core', name: `${pre}component-core`, component: () => import('@/pages/points/component-core'), meta: { meta, title: 'Vue组件核心' } },
    { path: 'dynamic-form', name: `${pre}dynamic-form`, component: () => import('@/pages/points/dynamic-form'), meta: { meta, title: '动态表单' } },
    { path: 'dynamic-template', name: `${pre}dynamic-template`, component: () => import('@/pages/points/dynamic-template'), meta: { meta, title: '动态模板' } },
    { path: 'list-content', name: `${pre}list-content`, component: () => import('@/pages/points/list-content'), meta: { meta, title: '列表详情' } },
    { path: 'vue3', name: `${pre}vue3`, component: () => import('@/pages/points/vue3'), meta: { meta, title: 'Vue3.0' } },
    { path: 'scroll', name: `${pre}scroll`, component: () => import('@/pages/points/scroll'), meta: { meta, title: 'Scroll' } },
    { path: 'chart', name: `${pre}chart`, component: () => import('@/pages/points/chart'), meta: { meta, title: 'Chart' } },
    { path: 'provide', name: `${pre}provide`, component: () => import('@/pages/points/provide'), meta: { meta, title: 'Provide/Inject' } },
    { path: 'jsx', name: `${pre}jsx`, component: () => import('@/pages/points/jsx'), meta: { meta, title: 'JSX' } },
    { path: 'mobx', name: `${pre}AsyncComp`, component: () => import('@/pages/points/mobx'), meta: { meta, title: 'AsyncComp' } }
  ])('points-')
  // ('points-') 可修改为 ()
}
