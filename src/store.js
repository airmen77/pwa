import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerTitle: ''
  },
  mutations: {
    changeTitle (state, val) {
      state.headerTitle = val
    }
  },
  actions: {
    changeTitle (context, val) {
      context.commit('changeTitle', val)
    }
  },
  getters: {
    changeTitle: state => state.headerTitle
  }
})
