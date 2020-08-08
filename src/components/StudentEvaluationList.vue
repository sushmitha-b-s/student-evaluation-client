<template>
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
            <AddEvaluationForm @clicked:add-evaluation="addEvaluation" />
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <p v-if="!hasEvaluations">There are no evaluations given for this student.</p>

    <div v-else>
      <v-card
        v-for="evaluation in evaluations"
        :key="evaluation.id"
        max-width="500px"
        class="mb-5"
        shaped
      >
        <StudentEvaluationItem :evaluation="evaluation" />
      </v-card>
    </div>
  </div>
</template>

<script>
import StudentEvaluationItem from "./StudentEvaluationItem";
import AddEvaluationForm from "../components/AddEvaluationForm";

export default {
  name: "StudentEvaluationList",

  components: {
    StudentEvaluationItem,
    AddEvaluationForm
  },

  data() {
    return {
      dialog: false
    };
  },

  props: {
    evaluations: {
      type: Array,
      required: true,
      default: () => []
    },

    studentId: {
      type: Number,
      required: true
    }
  },

  computed: {
    hasEvaluations() {
      return !!(this.evaluations && this.evaluations.length);
    }
  },

  methods: {
    addEvaluation(newEvaluation) {
      this.$store.dispatch("student/addEvaluation", {
        newEvaluation,
        studentId: this.studentId
      });
    }
  }
};
</script>