/* eslint-disable */

import redirectServices from '@/api/egg/redirect'

export default {
  namespaced: true,
  state: {
  },
  actions: {
    async search({ state, dispatch }, params) {
      // console.info('store params:', params)
      const res = await redirectServices.index(params)
      console.info('res:', res)
      return res
    },
    async checkRuleJson({ state, dispatch }, params) {
      // console.info('store params:', params)
      const res = await redirectServices.checkRuleJson(params)
      console.info('res:', res)
      return res
    },
    async checkRuleString({ state, dispatch }, params) {
      // console.info('store params:', params)
      const res = await redirectServices.checkRuleString(params)
      console.info('res:', res)
      return res
    }
  }
}
