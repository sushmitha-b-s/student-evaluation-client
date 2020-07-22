import { service } from '@/services/service'

export const namespaced = true

export const state = {
    classes: []
}

export const mutations = {
    SET_CLASSES(state, classes) {
        state.classes = classes
    }
}

export const actions = {
    fetch({ commit }) {
        return service.fetchClasses()
            .then(({ data }) => {
                commit('SET_CLASSES', data.classes)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const getters = {

}