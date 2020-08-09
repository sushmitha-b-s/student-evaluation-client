<template>
  <div>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="student.name" autofocus prepend-icon="mdi-account" label="Name" />

      <v-text-field
        v-model="student.profilePic"
        prepend-icon="mdi-image"
        label="Profile Pic"
        hint="Provide a link of an image"
        persistent-hint
      />

      <v-text-field v-model="student.email" prepend-icon="mdi-image" label="Email Id" />

      <v-text-field
        v-model="student.phone"
        prepend-icon="mdi-image"
        label="Mobile No."
        hint="Eg: 0645782149"
        persistent-hint
      />

      <v-textarea
        v-model="student.address"
        prepend-icon="mdi-map-marker"
        label="Address"
        rows="2"
        auto-grow
      />

      <v-text-field
        v-model="student.zipcode"
        prepend-icon="mdi-numeric"
        label="Zip code"
        hint="Eg: 1012 AB"
        persistent-hint
      />

      <v-text-field v-model="student.city" prepend-icon="mdi-city" label="City" />

      <v-text-field v-model="student.country" prepend-icon="mdi-flag" label="Country" />

      <div class="text-right mr-5">
        <v-btn color="primary" type="submit">submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "AddStudentForm",

  props: {
    student: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  methods: {
    submit() {
      if (this.student.id) {
        this.$emit("clicked:edit-student", this.student);
      } else {
        this.$emit("clicked:add-student", this.student);
      }
    }
  }
};
</script>