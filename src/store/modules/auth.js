import service from '@/services/service'
import axios from 'axios'

export const namespaced = true

export const state = {
    user: {}
}

export const mutations = {
    SET_USER_DATA(state, userData) {
        state.user = userData
        localStorage.setItem('user', userData)
        axios.defaults.headers.common['auth-token'] = userData.token
    }
}

export const actions = {
    // eslint-disable-next-line no-unused-vars
    register({ commit }, userData) {
        return service.register(userData)
            .then(({ data }) => {
                return Promise.resolve(data)
            })
            .catch(err => {
                return Promise.reject(err)
            })
    },

    login({ commit }, userData) {
        return service.login(userData)
            .then(({ data }) => {
                commit('SET_USER_DATA', data)
            })
            .catch(err => {
                return Promise.reject(err)
            })
    }
}



export const getters = {}