import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './modules/auth'
import * as classes from './modules/classes'
import * as students from './modules/students'
import * as student from './modules/student'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    classes,
    students,
    student
  }
})
