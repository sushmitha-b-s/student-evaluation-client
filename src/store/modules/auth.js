import { service, apiClient } from '@/services/service'

export const namespaced = true

export const state = {
    user: null
}

export const mutations = {
    SET_USER_DATA(state, userData) {
        state.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
        apiClient.defaults.headers.common['auth-token'] = userData.token
    },
    CLEAR_USER_DATA() {
        localStorage.removeItem('user')
        location.reload()
    }
}

export const actions = {
    // eslint-disable-next-line no-unused-vars
    register({ commit }, userData) {
        return service.register(userData)
            .then(({ data }) => {
                return Promise.resolve(data)
            })
    },

    login({ commit }, userData) {
        return service.login(userData)
            .then(({ data }) => {
                commit('SET_USER_DATA', data)
            })
    },
    logout({ commit }) {
        commit('CLEAR_USER_DATA')
    }
}

export const getters = {
    loggedIn: state => !!state.user
}