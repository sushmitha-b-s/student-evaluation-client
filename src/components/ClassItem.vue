<template>
  <div>
    <v-card shaped max-width="300" class="ma-5">
      <v-card-title>
        <h3>Batch #{{ batch.batchNo }}</h3>
      </v-card-title>
      <v-card-text class="text-center ma-5">
        <p>
          <span>START DATE:</span>
          <v-chip color="grey lighten-1">
            <v-avatar left>
              <v-icon>mdi-calendar-range</v-icon>
            </v-avatar>
            {{ batch.startDate }}
          </v-chip>
        </p>

        <p>
          <span>END DATE:</span>
          <v-chip color="grey lighten-1">
            <v-avatar left>
              <v-icon>mdi-calendar-range</v-icon>
            </v-avatar>
            {{ batch.endDate }}
          </v-chip>
        </p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" outlined @click="deleteClass">
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