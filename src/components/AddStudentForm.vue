<template>
  <div>
    <v-form @submit.prevent="submit">
      <v-text-field
        v-model="student.name"
        prepend-icon="mdi-account"
        label="Name"
        @blur="$v.student.name.$touch()"
      />

      <template v-if="$v.student.name.$error">
        <p v-if="!$v.student.name.required" class="red--text ml-7">Student name is required.</p>
      </template>

      <v-text-field
        v-model="student.profilePic"
        prepend-icon="mdi-image"
        label="Profile Pic"
        hint="Provide a link of an image"
        persistent-hint
        @blur="$v.student.profilePic.$touch()"
      />

      <template v-if="$v.student.profilePic.$error">
        <p
          v-if="!$v.student.profilePic.required"
          class="red--text ml-7"
        >Link to profile pic is required.</p>
      </template>

      <v-text-field
        v-model="student.email"
        prepend-icon="mdi-image"
        label="Email Id"
        @blur="$v.student.email.$touch()"
      />

      <template v-if="$v.student.email.$error">
        <p v-if="!$v.student.email.required" class="red--text ml-7">Email is required.</p>
        <p v-if="!$v.student.email.email" class="red--text ml-7">Please enter a valid email.</p>
      </template>

      <v-text-field
        v-model="student.phone"
        prepend-icon="mdi-image"
        label="Mobile No."
        hint="Eg: 0645782149"
        persistent-hint
        @blur="$v.student.phone.$touch()"
      />

      <template v-if="$v.student.phone.$error">
        <p v-if="!$v.student.phone.required" class="red--text ml-7">Mobile No. is required.</p>
        <p v-if="!$v.student.phone.numeric" class="red--text ml-7">Mobile No. must be numeric.</p>
      </template>

      <v-textarea
        v-model="student.address"
        prepend-icon="mdi-map-marker"
        label="Address"
        rows="2"
        auto-grow
        @blur="$v.student.address.$touch()"
      />

      <template v-if="$v.student.address.$error">
        <p v-if="!$v.student.address.required" class="red--text ml-7">Address is required.</p>
      </template>

      <v-text-field
        v-model="student.zipcode"
        prepend-icon="mdi-numeric"
        label="Zip code"
        hint="Eg: 1012 AB"
        persistent-hint
        @blur="$v.student.zipcode.$touch()"
      />

      <template v-if="$v.student.zipcode.$error">
        <p v-if="!$v.student.zipcode.required" class="red--text ml-7">Zip code is required.</p>
      </template>

      <v-text-field
        v-model="student.city"
        prepend-icon="mdi-city"
        label="City"
        @blur="$v.student.city.$touch()"
      />

      <template v-if="$v.student.city.$error">
        <p v-if="!$v.student.city.required" class="red--text ml-7">City name is required.</p>
      </template>

      <v-text-field
        v-model="student.country"
        prepend-icon="mdi-flag"
        label="Country"
        @blur="$v.student.country.$touch()"
      />

      <template v-if="$v.student.country.$error">
        <p v-if="!$v.student.country.required" class="red--text ml-7">City name is required.</p>
      </template>

      <div class="text-right mr-5">
        <v-btn color="primary" type="submit" :disabled="$v.$anyError || $v.$invalid">submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { required, email, numeric } from "vuelidate/lib/validators";

export default {
  name: "AddStudentForm",

  props: {
    student: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  data() {
    return {
      submitted: false
    };
  },

  validations: {
    student: {
      name: { required },
      profilePic: { required },
      email: { required, email },
      phone: { required, numeric },
      address: { required },
      zipcode: { required },
      city: { required },
      country: { required }
    }
  },

  updated() {
    if (this.submitted) {
      this.$v.$reset();
      this.submitted = false;
    }
  },

  methods: {
    submit() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      if (this.student.id) {
        this.$emit("clicked:edit-student", this.student);
      } else {
        this.$emit("clicked:add-student", this.student);
      }
    }
  }
};
</script>