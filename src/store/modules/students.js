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
    },

    DELETE_STUDENT(state, id) {
        state.students = state.students.filter(student => student.id !== id)
    },

    UPDATE_STUDENT(state, student) {
        state.students = state.students.map(s => {
            if (s.id === student.id) {
                s = student
            }
            return s
        })
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
    },

    delete({ commit }, student) {
        return service.deleteStudent(student.id)
            .then(({ data }) => {
                commit('DELETE_STUDENT', data.id)
            })
            .catch(error => {
                console.log(error)
            })
    },

    edit({ commit }, student) {
        return service.editStudent(student)
            .then(({ data }) => {
                commit('UPDATE_STUDENT', data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getters = {
    all: state => state.students
}