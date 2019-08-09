import demo from './modules/demo'
import drama from './modules/drama'
import points from './modules/points'
import egg from './modules/egg'

import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

/* eslint-disable */
/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页 必须 name:index
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/index')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: {
          beforeRouteEnter(to, from, next) {
            next(vm => vm.$router.replace(from.fullPath))
          },
          render: h => h()
        }
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: {
          beforeRouteEnter(to, from, next) {
            next(vm => vm.$router.replace(JSON.parse(from.params.route)))
          },
          render: h => h()
        }
      },
      {
        path: '/router-link/:id/:title',
        hidden: true,
        name: 'router-link',
        component: () => import('@/pages/points/router-link/index'),
        meta: {
          isback: true
        }
      },
      {
        path: '/pure-link',
        hidden: true,
        name: 'pure-link',
        component: () => import('@/pages/points/router-link/index'),
        meta: {
          isback: true
        }
      }
    ]
  },
  // 自定义路由
  demo,
  drama,
  points,
  egg
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
