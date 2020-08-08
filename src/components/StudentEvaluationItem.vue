<template>
  <div>
    <v-list-item>
      <v-list-item-avatar :color="evaluation.colorcode"></v-list-item-avatar>
      <v-list-item-content>
        <v-card-text class="d-flex justify-space-between pr-0">
          <span>{{ evaluation.remarks }}</span>
          <v-btn small icon color="grey lighten-1" @click="deleteEvaluation">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-card-text>
        <p
          class="text-subtitle-2 text-end font-italic mb-0 pr-2"
        >- {{ formatDate(evaluation.date) }}</p>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import formatDate from "../utils/formatDate";

export default {
  name: "StudentEvaluationItem",

  props: {
    evaluation: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  data() {
    return {
      formatDate
    };
  },

  methods: {
    deleteEvaluation() {
      this.$emit("clicked:delete-evaluation", this.evaluation);
    }
  }
};
</script>