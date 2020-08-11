<template>
  <v-app>
    <NavBar />
    <v-main class="grey lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>