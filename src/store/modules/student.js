import { service } from '@/services/service'

export const namespaced = true

export const state = {
    student: null
}

export const mutations = {
    SET_STUDENT(state, student) {
        state.student = student
    },

    ADD_EVALUATION(state, evaluation) {
        state.student.evaluations.unshift(evaluation)
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
    },

    addEvaluation({ commit }, { newEvaluation, studentId }) {
        return service.addEvaluation(newEvaluation, studentId)
            .then(({ data }) => {
                commit('ADD_EVALUATION', data)
            })
    }
}

export const getters = {
    student: state => state.student
}