import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态
  state: {
    count: 0
  },
  //变异必须同步
  mutations: {
    increment(state) {
      state.count++
    }
    //  this.store.commit('increment')
  },

  //Action 类似于 mutation，不同在于：
  //Action 提交的是 mutation，而不是直接变更状态。
  //Action 可以包含任意异步操作。
  actions: {
    // store.dispatch('incrementAsync', {
    //   amount: 10
    // })
  },
  //store 的计算属性
  getters: {

  }

})
