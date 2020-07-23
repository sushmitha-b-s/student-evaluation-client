import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    const userString = localStorage.getItem('user')

    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('auth/SET_USER_DATA', userData)
    }

    axios.interceptors.response.use(
      response => response,
      error => {
        console.log(error)
        if (error.response.status === 401) {
          this.$store.dispatch('auth/logout')

          return Promise.reject(error)
        }
      }
    )
  },
  render: h => h(App)
}).$mount('#app')
