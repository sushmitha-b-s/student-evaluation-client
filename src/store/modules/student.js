import { service } from '@/services/service'

export const namespaced = true

export const state = {
    student: null
}

export const mutations = {
    SET_STUDENT(state, student) {
        state.student = student
    }
}

export const actions = {
    fetch({ commit }, studentId) {
        return service.fetchStudent(studentId)
            .then(({ data }) => {
                commit('SET_STUDENT', data.student)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getters = {
    student: state => state.student
}