import { service } from '@/services/service'

export const namespaced = true

export const state = {
    students: [],
    progressbar: {},
    randomStudent: ''
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
    },

    SET_PROGRESS_BAR_CALC(state, data) {
        state.progressbar = data
    },

    SET_RANDOM_STUDENT(state, student) {
        state.randomStudent = student
    }
}

export const actions = {
    fetch({ commit, dispatch }, classId) {
        return service.fetchStudents(classId)
            .then(({ data }) => {
                commit('SET_STUDENTS', data.students)
            })
            .catch(() => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching students list.'
                }

                dispatch('notifications/add', notification, { root: true })
            })
    },

    add({ commit, dispatch }, { newStudent, classId }) {
        return service.addStudent(newStudent, classId)
            .then(({ data }) => {
                commit('ADD_STUDENT', data)

                const notification = {
                    type: 'success',
                    message: `Student ${newStudent.name} created successfully.`
                }

                dispatch('notifications/add', notification, { root: true })
            })
            .catch(() => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem creating new student. Please try again.'
                }

                dispatch('notifications/add', notification, { root: true })
            })
    },

    delete({ commit, dispatch }, student) {
        return service.deleteStudent(student.id)
            .then(({ data }) => {
                commit('DELETE_STUDENT', data.id)

                const notification = {
                    type: 'success',
                    message: `Student ${student.name} deleted successfully.`
                }

                dispatch('notifications/add', notification, { root: true })
            })
            .catch(() => {
                const notification = {
                    type: 'error',
                    message: `There was a problem deleting the student ${student.name}. Please try again.`
                }

                dispatch('notifications/add', notification, { root: true })
            })
    },

    edit({ commit, dispatch }, student) {
        return service.editStudent(student)
            .then(({ data }) => {
                commit('UPDATE_STUDENT', data)

                const notification = {
                    type: 'success',
                    message: `Student ${student.name} updated successfully.`
                }

                dispatch('notifications/add', notification, { root: true })
            })
            .catch(() => {
                const notification = {
                    type: 'error',
                    message: `There was a problem updating a student ${student.name}. Please try again.`
                }

                dispatch('notifications/add', notification, { root: true })
            })
    },

    getProgressBarCalc({ commit }, classId) {
        return service.fetchProgressBarCalc(classId)
            .then(({ data }) => {
                commit('SET_PROGRESS_BAR_CALC', data)
            })
            .catch(error => {
                console.log(error)
            })
    },

    fetchRandomStudent({ commit }, classId) {
        return service.pickRandomStudent(classId)
            .then(({ data }) => {
                commit('SET_RANDOM_STUDENT', data.randomStudent)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getters = {
    all: state => state.students,
    getProgressBar: state => state.progressbar,
    randomStudent: state => state.randomStudent
}