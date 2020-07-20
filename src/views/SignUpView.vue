<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex>
        <v-card class="mx-auto mt-10 pa-10" max-width="450">
          <h3 class="text-center mb-5">Sign up for the student evaluation app</h3>

          <v-form @submit.prevent="submit">
            <v-text-field
              label="Full Name"
              v-model="fullname"
              prepend-icon="mdi-account"
              autocomplete="off"
            />

            <v-text-field
              label="Email Id"
              v-model="email"
              prepend-icon="mdi-email"
              autocomplete="off"
            />

            <v-text-field
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              prepend-icon="mdi-lock-reset"
              autocomplete="off"
            />

            <v-btn dark block class="mt-4" type="submit">
              <span>Register</span>
            </v-btn>

            <p class="mt-4 mb-0 text-center">
              <router-link :to="{ name: 'login' }">Already have an account? Login</router-link>
            </p>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "SignUpView",
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      showPassword: false
    };
  },

  methods: {
    submit() {
      const registerDetails = {
        fullname: this.fullname,
        email: this.email,
        password: this.password
      };
      this.$store
        .dispatch("auth/register", registerDetails)
        .then(() => {
          this.$router.push({ name: "login" });
        })
        .catch(() => {});
    }
  }
};
</script>