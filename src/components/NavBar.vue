<template>
  <nav class="pa-4">
    <div class="logo font-weight-medium">
      <router-link :to="{ name: 'home' }">
        <v-icon left>mdi-school</v-icon>
        <span>Student Evaluation</span>
      </router-link>
    </div>
    <div>
      <span v-if="!loggedIn">
        <router-link :to="{ name: 'login' }" class="ma-5">Login</router-link>
        <router-link :to="{ name: 'signup' }" class="ma-5">SignUp</router-link>
      </span>

      <span v-else>
        <router-link :to="{ name: 'classes' }" class="ma-5">Classes</router-link>
        <button @click="logout">Logout</button>
      </span>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NavBar",
  computed: {
    ...mapGetters({
      loggedIn: "auth/loggedIn"
    })
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  border-bottom: 2px solid black;
  padding-bottom: 2px;
}

nav {
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: rgb(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgb(212, 207, 207);

  .logo {
    font-size: 20px;
    a {
      border: none;
    }
  }
  a {
    color: #000;
    text-decoration: none;
  }
}
</style>
