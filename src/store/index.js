import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import user from './module/user'
import router from './module/router'
// import saveInLocal from './plugin/saveInLocal'
Vue.use(Vuex)
export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'production'
    ? true
    : false,
  state,
  getters,
  mutations,
  actions,
  modules: {
    user,
		router
  },
  // plugins: [saveInLocal]
})

/**
 * 状态管理:
 *  1) Bus
 *  2) Vuex
 *
 *
 *
 */
