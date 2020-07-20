<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex>
        <v-card class="mx-auto mt-10 pa-10" max-width="450">
          <h3 class="text-center mb-5">Login for the student evaluation app</h3>

          <v-form @submit.prevent="submit">
            <v-text-field
              label="Enter your email"
              v-model="email"
              prepend-icon="mdi-email"
              autocomplete="off"
            />

            <v-text-field
              label="Enter your password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              prepend-icon="mdi-lock-reset"
              autocomplete="off"
            />

            <v-btn dark block class="mt-4" type="submit">
              <span>Login</span>
            </v-btn>

            <p class="mt-4 mb-0 text-center">
              <router-link :to="{ name: 'signup' }">Don't have an account? Sign Up</router-link>
            </p>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false
    };
  },

  methods: {
    submit() {
      const loginDetails = {
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("auth/login", loginDetails)
        .then(() => {
          this.$router.push({ name: "classes" });
        })
        .catch(() => {});
    }
  }
};
</script>