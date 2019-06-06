import request from '@/plugin/axios'

/* eslint-disable */
export function list() {
  console.info('api level')
  return request({
    method: 'get',
    url: '/menu/list',
  })
}
