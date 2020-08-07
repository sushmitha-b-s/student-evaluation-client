import axios from 'axios'

export const apiClient = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const service = {
    register(data) {
        return apiClient.post('/register', data)
    },
    login(data) {
        return apiClient.post('/login', data)
    },
    fetchClasses() {
        return apiClient.get('/classes')
    },
    deleteClass(id) {
        return apiClient.delete(`/classes/${id}`)
    },
    addClass(newBatch) {
        return apiClient.post('/classes', newBatch)
    },

    fetchStudents(classId) {
        return apiClient.get(`/classes/${classId}/students`)
    },

    addStudent(newStudent, classId) {
        return apiClient.post(`/classes/${classId}/students`, newStudent)
    },

    deleteStudent(studentId) {
        return apiClient.delete(`/students/${studentId}`)
    },

    editStudent(student) {
        return apiClient.put(`/students/${student.id}`, student)
    }
}