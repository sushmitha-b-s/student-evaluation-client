import { service } from '@/services/service'

export const namespaced = true

export const state = {
    students: []
}

export const mutations = {
    SET_STUDENTS(state, students) {
        state.students = students
    }
}

export const actions = {
    fetch({ commit }, classId) {
        return service.fetchStudents(classId)
            .then(({ data }) => {
                console.log(data)
                commit('SET_STUDENTS', data.students)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getters = {
    all: state => state.students
}