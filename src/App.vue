<template>
  <v-app>
    <NavBar />
    <NotificationContainer />
    <v-main class="grey lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import NotificationContainer from "./components/NotificationContainer";

export default {
  name: "App",
  components: {
    NavBar,
    NotificationContainer
  }
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
</style>