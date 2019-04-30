/* eslint-disable */

// the name space is 'egg/user'
// this.$store.egg.users.stateName
// this.$store.dispatch('egg/user/actionName')

import { UserList, CreateUser } from '@/api/egg/'
export default {
  namespaced: true,
  state: {
  },
  actions: {
    /**
     * @description 从数据库取用户数据
     */
    async load({ state, dispatch }) {
      const res = await UserList()
      return res
    },
    /**
     * @description 从数据库取用户数据
     */
    async createUser({ state, dispatch }, params) {
      const res = await CreateUser(params)
      return res
    }
  }
}
