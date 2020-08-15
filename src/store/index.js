import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from './modules/auth'
import * as classes from './modules/classes'
import * as students from './modules/students'
import * as student from './modules/student'
import * as notifications from './modules/notifications'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    classes,
    students,
    student,
    notifications
  }
})
