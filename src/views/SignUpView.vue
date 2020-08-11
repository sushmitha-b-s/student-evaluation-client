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
              @blur="$v.fullname.$touch()"
            />

            <template v-if="$v.fullname.$error">
              <p v-if="!$v.fullname.required" class="red--text ml-7">Full name is required.</p>
            </template>

            <v-text-field
              label="Email Id"
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
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              prepend-icon="mdi-lock-reset"
              autocomplete="off"
              hint="Password length must be atleast 6 characters long."
              persistent-hint
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
              block
              color="primary"
              class="mt-4"
              type="submit"
              :disabled="$v.$anyError || $v.$invalid"
            >
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
import { required, email, minLength } from "vuelidate/lib/validators";

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

  validations: {
    fullname: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },

  methods: {
    submit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

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