<template>
  <div>
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
// import { format } from "date-fns";
import StudentEvaluationItem from "./StudentEvaluationItem";

export default {
  name: "StudentEvaluationList",

  components: {
    StudentEvaluationItem
  },

  props: {
    evaluations: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  computed: {
    hasEvaluations() {
      return !!(this.evaluations && this.evaluations.length);
    }
  }

  //   methods: {
  //     formattedDate(evalDate) {
  //       return evalDate ? format(new Date(evalDate), "dd MMM yyyy") : "";
  //     }
  //   }
};
</script>