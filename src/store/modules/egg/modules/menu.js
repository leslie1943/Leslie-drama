/* eslint-disable */

// the name space is 'egg/menu'
// this.$store.egg.users.stateName
// this.$store.dispatch('egg/user/actionName')

import { list } from '@/api/egg/menu'
export default {
  namespaced: true,
  state: {
  },
  actions: {
    /**
     * @description 从数据库取用户数据
     */
    async list({ state, dispatch }) {
      const res = await list()
      return res
    },
  }
}
