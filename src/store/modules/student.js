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
    },

    DELETE_EVALUATION(state, id) {
        state.student.evaluations = state.student.evaluations.filter(e => e.id !== id)
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
            .catch(error => {
                console.log(error)
            })
    },

    deleteEvaluation({ commit }, evaluation) {
        return service.deleteEvaluation(evaluation.id)
            .then(({ data }) => {
                commit('DELETE_EVALUATION', data.id)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getters = {
    student: state => state.student
}