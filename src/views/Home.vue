<template>
  <div>
    <v-container class="py-16 px-10 mt-16">
      <v-layout class="d-flex justify-start align-center">
        <v-flex>
          <h2 class="text-h2 font-weight-bold pb-5">Student evaluation made easy.</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui eaque adipisci molestias vero inventore temporibus corporis? Libero facere, ipsa laudantium suscipit nihil corrupti aliquid itaque harum eos aperiam assumenda.</p>
          <v-btn depressed color="primary" large elevation="4">
            <span>Get started</span>
          </v-btn>
        </v-flex>
        <v-flex>
          <img src="@/assets/grades.svg" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>