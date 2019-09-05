import request from '@/plugin/axios'

/* eslint-disable */

const redirectService = {
  index(params) {
    return request({
      method: 'get',
      url: '/search',
      params: params
    })
  },
  checkRuleJson(params) {
    return request({
      method: 'get',
      url: '/search/ruleJson',
      params: params
    })
  },
  checkRuleString(params) {
    return request({
      method: 'get',
      url: '/search/ruleString',
      params: params
    })
  }
}
export default redirectService
