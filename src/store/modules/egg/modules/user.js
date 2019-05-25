/* eslint-disable */

// the name space is 'egg/user'
// this.$store.egg.users.stateName
// this.$store.dispatch('egg/user/actionName')

import { UserList, CreateUser, DeleteUser, UpdateUser, LoginUser } from '@/api/egg/'
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
     * @description 创建数据
     */
    async createUser({ state, dispatch }, params) {
      const res = await CreateUser(params)
      return res
    },
    /**
     * @description 删除数据
     */
    async deleteUser({ state, dispatch }, params) {
      const res = await DeleteUser(params)
      return res
    },
    /**
    * @description 修改信息
    */
    async updateUser({ state, dispatch }, params) {
      const res = await UpdateUser(params)
      return res
    },

    /**
    * @description 登录信息
    */
    async loginUser({ state, dispatch }, params) {
      const res = await LoginUser(params)
      return res
    }
  }
}
