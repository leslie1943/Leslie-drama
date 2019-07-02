/* eslint-disable */

export default {
  namespaced: true,
  state: {
    permissions: [],
    get permittedPath() {
      return this.permissions
    },
  },
  mutations: {
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    }
  },
  actions: {
    change({ state, dispatch, commit }, data) {
      commit('SET_PERMISSIONS', data)
    }
  }
}
