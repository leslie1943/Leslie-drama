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


export function DeleteUser(params) {
  // console.info('in api')
  // console.info(params)
  return request({
    method: 'post',
    url: '/user/deleteUser',
    data: params
  })
}

export function UpdateUser(params) {
  // console.info('in api')
  // console.info(params)
  return request({
    method: 'post',
    url: '/user/updateUser',
    data: params
  })
}