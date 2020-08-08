<template>
  <div>
    <v-list-item>
      <v-list-item-avatar :color="evaluation.colorcode"></v-list-item-avatar>
      <v-list-item-content>
        <v-card-text>{{ evaluation.remarks }}</v-card-text>
        <p
          class="text-subtitle-2 text-end font-italic mb-0 pr-2"
        >- {{ formattedDate(evaluation.date) }}</p>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  name: "StudentEvaluationItem",

  props: {
    evaluation: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  methods: {
    formattedDate(evalDate) {
      return evalDate ? format(new Date(evalDate), "dd MMM yyyy") : "";
    }
  }
};
</script>