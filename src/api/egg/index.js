import request from '@/plugin/axios'

/* eslint-disable */
export function UserList() {
  return request({
    method: 'get',
    url: '/user/getUserList',
    // params: { id: 123 }
    // params: { id: '' }
  })
}


export function CreateUser(params) {
  // console.info('in api')
  // console.info(params)
  return request({
    method: 'post',
    url: '/user/createUser',
    data: params
  })
}