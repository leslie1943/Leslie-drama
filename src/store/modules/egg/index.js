/* eslint-disable */
/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('./modules', false, /\.js$/)
// console.log('files:', files)
const modules = {}

files.keys().forEach(key => {
  // console.info('files(key)', files(key))
  // console.info('key', key) // key ./user.js

  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
  /**
   * modules[name] = {
      actions: {list: ƒ},
      namespaced: true,
      state: {__ob__: Observer}
   * }
   */
})

export default {
  namespaced: true,
  modules
}
