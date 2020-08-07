<template>
  <div>
    <v-card class="ma-5">
      <v-card-title>
        <h3>Batch #{{ batch.batchNo }}</h3>
      </v-card-title>

      <v-card-text>
        <p>
          <span class="text-uppercase font-weight-medium">start date:</span>
          <span>
            <v-chip
              label
              outlined
              class="ml-3"
            >{{ format(new Date(batch.startDate), 'dd MMM yyyy') }}</v-chip>
          </span>
        </p>

        <p>
          <span class="text-uppercase font-weight-medium">end date:</span>
          <span>
            <v-chip label outlined class="ml-6">{{ format(new Date(batch.endDate), 'dd MMM yyyy') }}</v-chip>
          </span>
        </p>

        <div class="text-center">
          <v-chip outlined>
            <v-icon>mdi-account</v-icon>
            <span v-if="noOfStudents <= 1">{{ noOfStudents }} student</span>
            <span v-else>{{ noOfStudents }} students</span>
          </v-chip>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          outlined
          @click.prevent="deleteClass"
          class="mr-4"
          :loading="loading"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  name: "ClassItem",
  props: {
    batch: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  data() {
    return {
      loading: false,
      format
    };
  },

  methods: {
    deleteClass() {
      this.loading = true;
      this.$store.dispatch("classes/delete", this.batch).then(() => {
        this.loading = false;
      });
    }
  },

  computed: {
    noOfStudents() {
      return this.batch.students && this.batch.students.length;
    }
  }
};
</script>