import request from '@/plugin/axios'

/* eslint-disable */

const postService = {
  index() {
    return request({
      method: 'get',
      url: '/posts',
    })
  },
  create() {
    return request({
      method: 'post',
      url: '/posts',
      data: { name: 'suzhen', password: '123456', repassword: '1234' }
    })
  },

  show() {
    return request({
      method: 'get',
      url: '/posts/1943'
    })
  },

  edit() {
    return request({
      method: 'get',
      url: '/posts/1944/edit'
    })
  },

  update() {
    return request({
      method: 'put',
      url: '/posts/1945'
    })
  },

  destroy() {
    return request({
      method: 'delete',
      url: '/posts/1946'
    })
  },

  new() {
    return request({
      method: 'get',
      url: '/posts/new?gender=male',
      params: {
        name: 'leslie'
      }
    })
  },
}
export default postService
