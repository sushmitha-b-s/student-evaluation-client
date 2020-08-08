<template>
  <div>
    <v-container>
      <v-btn text class="text-lowercase ma-4" @click="goToStudentsList">
        <v-icon left>mdi-arrow-left</v-icon>
        <span>back to students list</span>
      </v-btn>
      <v-card class="grid__container mx-auto" max-width="900px" v-if="student">
        <figure>
          <img :src="student.profilePic" alt="Student Image" />
        </figure>

        <v-card-text class="text-left pa-0 pl-5">
          <v-card-title class="pt-0 text-h4 text--primary">{{ student.name }}</v-card-title>
          <v-card-subtitle>Batch #{{ student.class.batchNo }}</v-card-subtitle>
          <v-card-text class="subtitle-1">
            <div>Address: {{ student.address }}, {{ student.zipcode }}</div>
            <div>City: {{ student.city }}</div>
            <div>Country: {{ student.country }}</div>
          </v-card-text>
        </v-card-text>
      </v-card>

      <StudentEvaluationList :evaluations="student.evaluations" v-if="student" />
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StudentEvaluationList from "@/components/StudentEvaluationList";

export default {
  name: "StudentDetailsContainer",

  components: {
    StudentEvaluationList
  },

  props: ["classId", "studentId"],

  created() {
    this.$store.dispatch("student/fetch", this.studentId);
  },

  computed: {
    ...mapGetters({
      student: "student/student"
    })
  },

  methods: {
    goToStudentsList() {
      this.$router.push({
        name: "students",
        params: { classId: this.classId }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.grid__container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  padding: 1.5rem;

  figure {
    justify-items: start;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
}
</style>