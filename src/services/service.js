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
    }
}