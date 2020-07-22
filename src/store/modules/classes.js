import { service } from '@/services/service'

export const namespaced = true

export const state = {
    classes: []
}

export const mutations = {
    SET_CLASSES(state, classes) {
        state.classes = classes
    },
    DELETE_CLASS(state, id) {
        state.classes = state.classes.filter(batch => batch.id !== id)
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
    },
    delete({ commit }, batch) {
        return service.deleteClass(batch.id)
            .then(({ data }) => {
                commit('DELETE_CLASS', data.id)
            })
    }
}

export const getters = {
    all: state => state.classes
}