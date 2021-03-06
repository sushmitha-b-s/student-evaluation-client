import { v4 as uuidv4 } from 'uuid';

export const namespaced = true

export const state = {
    notifications: []
}

export const mutations = {
    ADD(state, notification) {
        state.notifications.push({
            ...notification,
            id: uuidv4()
        })
    },

    REMOVE(state, notification) {
        state.notifications = state.notifications.filter(n => n.id !== notification.id)
    }
}

export const actions = {
    add({ commit }, notification) {
        commit('ADD', notification)
    },

    remove({ commit }, notification) {
        commit('REMOVE', notification)
    }
}

export const getters = {
    all: state => state.notifications
}