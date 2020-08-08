<template>
  <div>
    <v-container>
      <v-btn text class="text-lowercase ma-4" @click="goToStudentsList">
        <v-icon left>mdi-arrow-left</v-icon>
        <span>back to students list</span>
      </v-btn>
      <v-card class="grid__container mx-auto" max-width="900px">
        <figure v-if="student">
          <img :src="student.profilePic" alt="Student Image" />
        </figure>

        <v-card-text class="text-left pa-0 pl-5" v-if="student">
          <v-card-title class="pt-0 text-h4 text--primary">{{ student.name }}</v-card-title>
          <v-card-subtitle>Batch #{{ student.class.batchNo }}</v-card-subtitle>
          <v-card-text class="subtitle-1">
            <div>Address: {{ student.address }}, {{ student.zipcode }}</div>
            <div>City: {{ student.city }}</div>
            <div>Country: {{ student.country }}</div>
          </v-card-text>
        </v-card-text>
      </v-card>

      <div>
        <h2 class="text-h4 my-7">Evaluations</h2>

        <div class="mb-7">
          <v-btn color="secondary" @click="dialog = true">
            <v-icon left>mdi-plus</v-icon>
            <span>Add an evaluation</span>
          </v-btn>

          <v-dialog v-model="dialog" width="500">
            <v-card>
              <v-card-title class="headline">
                <p>Add an evaluation</p>
                <v-spacer></v-spacer>
                <v-btn icon ml-4 @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-card-title>

              <v-card-text>
                <p>form goes here</p>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>

        <p v-if="!hasEvaluations">There are no evaluations given for this student.</p>

        <div v-else>
          <v-card
            v-for="evaluation in student.evaluations"
            :key="evaluation.id"
            max-width="500px"
            class="mb-5"
            shaped
          >
            <v-list-item>
              <v-list-item-avatar :color="evaluation.colorcode"></v-list-item-avatar>
              <v-list-item-content>
                <v-card-text>{{ evaluation.remarks }}</v-card-text>
                <p
                  class="text-subtitle-2 text-end font-italic mb-0 pr-2"
                >- {{ formattedDate(evaluation.date) }}</p>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { format } from "date-fns";

export default {
  name: "StudentDetailsContainer",

  props: ["classId", "studentId"],

  data() {
    return {
      dialog: false
    };
  },

  created() {
    this.$store.dispatch("student/fetch", this.studentId);
  },

  computed: {
    ...mapGetters({
      student: "student/student"
    }),

    hasEvaluations() {
      return !!(this.student && this.student.evaluations.length);
    }
  },

  methods: {
    goToStudentsList() {
      this.$router.push({
        name: "students",
        params: { classId: this.classId }
      });
    },

    formattedDate(evalDate) {
      return evalDate ? format(new Date(evalDate), "dd MMM yyyy") : "";
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