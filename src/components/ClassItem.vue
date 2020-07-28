<template>
  <div>
    <v-card shaped class="ma-5">
      <v-card-title>
        <h3>Batch #{{ batch.batchNo }}</h3>
      </v-card-title>

      <v-card-text>
        <p>
          <span class="text-uppercase font-weight-medium">start date:</span>
          <span>
            <v-chip small class="ml-3">{{ batch.startDate }}</v-chip>
          </span>
        </p>

        <p>
          <span class="text-uppercase font-weight-medium">end date:</span>
          <span>
            <v-chip small class="ml-6">{{ batch.endDate }}</v-chip>
          </span>
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" outlined @click.prevent="deleteClass" class="mr-4">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
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
      loading: false
    };
  },

  methods: {
    deleteClass() {
      this.loading = true;
      this.$store.dispatch("classes/delete", this.batch).then(() => {
        this.loading = false;
      });
    }
  }
};
</script>