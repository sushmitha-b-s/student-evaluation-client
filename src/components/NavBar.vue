<template>
  <nav class="pa-4 white">
    <div class="logo font-weight-medium">
      <router-link :to="{ name: 'home' }">
        <v-icon left>mdi-school</v-icon>
        <span>Student Evaluation</span>
      </router-link>
    </div>
    <div>
      <router-link :to="{ name: 'login' }" class="ma-5">Login</router-link>
      <router-link :to="{ name: 'signup' }" class="ma-5">SignUp</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  border-bottom: 2px solid black;
  padding-bottom: 2px;
}

nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  backdrop-filter: blur(6px);
  .logo {
    font-size: 18px;
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
