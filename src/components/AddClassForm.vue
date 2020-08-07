<template>
  <div>
    <v-form @submit.prevent="submit">
      <v-text-field
        label="Batch Number"
        autofocus
        prepend-icon="mdi-numeric"
        v-model.number="batch.batchNo"
        hint="Please enter only in number format"
      />

      <v-menu
        v-model="menu1"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="formattedStartDate"
            label="Select start date"
            prepend-icon="mdi-calendar-range"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="batch.startDate" @input="menu1 = false"></v-date-picker>
      </v-menu>

      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="formattedEndDate"
            label="Select end date"
            prepend-icon="mdi-calendar-range"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="batch.endDate" @input="menu2 = false"></v-date-picker>
      </v-menu>

      <div class="text-right mr-5">
        <v-btn color="primary" type="submit">submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  name: "AddClassForm",

  props: {
    batch: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  data() {
    return {
      menu1: false,
      menu2: false
    };
  },

  methods: {
    submit() {
      this.$emit("clicked:add-class", this.batch);
    },
    formatDate(date) {
      return format(new Date(date), "dd MMM yyyy");
    }
  },

  computed: {
    formattedStartDate() {
      return this.batch.startDate ? this.formatDate(this.batch.startDate) : "";
    },
    formattedEndDate() {
      return this.batch.endDate ? this.formatDate(this.batch.endDate) : "";
    }
  }
};
</script>