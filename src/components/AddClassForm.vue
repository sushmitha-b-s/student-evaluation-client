<template>
  <div>
    <v-form @submit.prevent="submit">
      <v-text-field
        label="Batch Number"
        prepend-icon="mdi-numeric"
        v-model.number="batch.batchNo"
        hint="Please enter only in number format"
        persistent-hint
        @blur="$v.batch.batchNo.$touch()"
      />

      <div v-if="$v.batch.batchNo.$error">
        <p v-if="!$v.batch.batchNo.required" class="red--text ml-7">Batch Number is required.</p>
        <p v-if="!$v.batch.batchNo.numeric" class="red--text ml-7">Batch Number must be numeric.</p>
      </div>

      <v-menu
        v-model="date1"
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
            @blur="$v.batch.startDate.$touch()"
          ></v-text-field>
        </template>
        <v-date-picker v-model="batch.startDate" @input="date1 = false"></v-date-picker>
      </v-menu>

      <div v-if="$v.batch.startDate.$error">
        <p v-if="!$v.batch.startDate.required" class="red--text ml-7">Start date is required.</p>
      </div>

      <v-menu
        v-model="date2"
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
            @blur="$v.batch.endDate.$touch()"
          ></v-text-field>
        </template>
        <v-date-picker v-model="batch.endDate" @input="date2 = false"></v-date-picker>
      </v-menu>

      <div v-if="$v.batch.endDate.$error">
        <p v-if="!$v.batch.endDate.required" class="red--text ml-7">End date is required.</p>
      </div>

      <div class="text-right mr-5">
        <v-btn color="primary" type="submit" :disabled="$v.$anyError || $v.$invalid">submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import formatDate from "../utils/formatDate";
import { required, numeric } from "vuelidate/lib/validators";

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
      date1: false,
      date2: false,
      submitted: false
    };
  },

  validations: {
    batch: {
      batchNo: { required, numeric },
      startDate: { required },
      endDate: { required }
    }
  },

  updated() {
    if (this.submitted) {
      this.$v.$reset();
      this.submitted = false;
    }
  },

  methods: {
    submit() {
      this.submitted = true;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }
      this.$emit("clicked:add-class", this.batch);
    }
  },

  computed: {
    formattedStartDate() {
      return formatDate(this.batch.startDate);
    },
    formattedEndDate() {
      return formatDate(this.batch.endDate);
    }
  }
};
</script>