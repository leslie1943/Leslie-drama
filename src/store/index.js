import Vue from 'vue'
import Vuex from 'vuex'

import d2admin from './modules/d2admin'
import egg from './modules/egg'
import epro from './modules/epro'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    d2admin,
    egg,
    epro
  }
})
