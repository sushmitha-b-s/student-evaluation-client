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
    fetch({ commit, dispatch }, studentId) {
        return service.fetchStudent(studentId)
            .then(({ data }) => {
                commit('SET_STUDENT', data.student)
            })
            .catch(() => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching the student details.'
                }

                dispatch('notifications/add', notification, { root: true })
            })
    },

    addEvaluation({ commit, dispatch }, { newEvaluation, studentId }) {
        return service.addEvaluation(newEvaluation, studentId)
            .then(({ data }) => {
                commit('ADD_EVALUATION', data)

                const notification = {
                    type: 'success',
                    message: `New evaluation added successfully.`
                }

                dispatch('notifications/add', notification, { root: true })
            })
            .catch(() => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem adding new evaluation. Please try again.'
                }

                dispatch('notifications/add', notification, { root: true })
            })
    },

    deleteEvaluation({ commit, dispatch }, evaluation) {
        return service.deleteEvaluation(evaluation.id)
            .then(({ data }) => {
                commit('DELETE_EVALUATION', data.id)

                const notification = {
                    type: 'success',
                    message: `Evaluation deleted successfully.`
                }

                dispatch('notifications/add', notification, { root: true })
            })
            .catch(() => {
                const notification = {
                    type: 'error',
                    message: `There was a problem deleting the evaluation. Please try again.`
                }

                dispatch('notifications/add', notification, { root: true })
            })
    }
}

export const getters = {
    student: state => state.student
}