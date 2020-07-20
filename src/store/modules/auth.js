import service from '@/services/service'

export const namespaced = true

export const state = {
    user: {}
}

export const mutations = {
}

export const actions = {
    // eslint-disable-next-line no-unused-vars
    register({ commit }, data) {
        return service.register(data)
            .then(({ data }) => {
                return Promise.resolve(data)
            })
            .catch(err => {
                return Promise.reject(err)
            })
    }
}



export const getters = {}