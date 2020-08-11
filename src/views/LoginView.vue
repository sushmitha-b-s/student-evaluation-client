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
              @blur="$v.email.$touch()"
            />

            <template v-if="$v.email.$error">
              <p v-if="!$v.email.required" class="red--text ml-7">Email is required.</p>
              <p v-if="!$v.email.email" class="red--text ml-7">Please enter valid email.</p>
            </template>

            <v-text-field
              label="Enter your password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              prepend-icon="mdi-lock-reset"
              autocomplete="off"
              @blur="$v.password.$touch()"
            />

            <template v-if="$v.password.$error">
              <p v-if="!$v.password.required" class="red--text ml-7">Password is required.</p>
              <p
                v-if="!$v.password.minLength"
                class="red--text ml-7 mt-3"
              >Password length must be atleast 6 characters long.</p>
            </template>

            <v-btn
              color="primary"
              block
              class="mt-4"
              type="submit"
              :disabled="$v.$anyError || $v.$invalid"
            >
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
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false
    };
  },

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },

  methods: {
    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

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