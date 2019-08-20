/* eslint-disable */

import postServices from '@/api/egg/restful'

export default {
  namespaced: true,
  state: {
  },
  actions: {
    async index() {
      const res = await postServices.index()
      return res
    },

    async create() {
      const res = await postServices.create()
      return res
    },

    async show() {
      const res = await postServices.show()
      return res
    },

    async edit() {
      const res = await postServices.edit()
      return res
    },

    async update() {
      const res = await postServices.update()
      return res
    },

    async destroy() {
      const res = await postServices.destroy()
      return res
    },

    async new() {
      const res = await postServices.new()
      return res
    },
  }
}
