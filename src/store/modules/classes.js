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
    },
    ADD_CLASS(state, newBatch) {
        state.classes.push(newBatch)
    }
}

export const actions = {
    fetch({ commit, dispatch }) {
        return service.fetchClasses()
            .then(({ data }) => {
                commit('SET_CLASSES', data.classes)
            })
            .catch(() => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem fetching class list.'
                }

                dispatch('notifications/add', notification, { root: true })
            })
    },
    delete({ commit, dispatch }, batch) {
        return service.deleteClass(batch.id)
            .then(({ data }) => {
                commit('DELETE_CLASS', data.id)

                const notification = {
                    type: 'success',
                    message: `Batch #${batch.batchNo} deleted successfully.`
                }

                dispatch('notifications/add', notification, { root: true })
            })
            .catch(() => {
                const notification = {
                    type: 'error',
                    message: `There was a problem deleting the batch #${batch.batchNo}. Please try again.`
                }

                dispatch('notifications/add', notification, { root: true })
            })
    },

    add({ commit, dispatch }, newBatch) {
        return service.addClass(newBatch).then(({ data }) => {
            commit('ADD_CLASS', data)

            const notification = {
                type: 'success',
                message: `Batch #${data.batchNo} created successfully.`
            }

            dispatch('notifications/add', notification, { root: true })
        })
            .catch(() => {
                const notification = {
                    type: 'error',
                    message: 'There was a problem creating new batch. Please try again.'
                }

                dispatch('notifications/add', notification, { root: true })
            })
    }
}

export const getters = {
    all: state => state.classes
}