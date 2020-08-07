import { service } from '@/services/service'

export const namespaced = true

export const state = {
    students: []
}

export const mutations = {
    SET_STUDENTS(state, students) {
        state.students = students
    },

    ADD_STUDENT(state, newStudent) {
        state.students.push(newStudent)
    }
}

export const actions = {
    fetch({ commit }, classId) {
        return service.fetchStudents(classId)
            .then(({ data }) => {
                commit('SET_STUDENTS', data.students)
            })
            .catch(error => {
                console.log(error)
            })
    },

    add({ commit }, { newStudent, classId }) {
        return service.addStudent(newStudent, classId)
            .then(({ data }) => {
                commit('ADD_STUDENT', data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getters = {
    all: state => state.students
}