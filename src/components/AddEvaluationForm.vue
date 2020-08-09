<template>
  <div>
    <v-form @submit.prevent="submit">
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
            v-model="formattedDate"
            label="Select date"
            prepend-icon="mdi-calendar-range"
            readonly
            v-bind="attrs"
            v-on="on"
            @blur="$v.evaluation.date.$touch()"
          ></v-text-field>
        </template>
        <v-date-picker v-model="evaluation.date" @input="menu1 = false"></v-date-picker>
      </v-menu>

      <template v-if="$v.evaluation.date.$error">
        <p v-if="!$v.evaluation.date.required" class="red--text ml-7">Date is required.</p>
      </template>

      <v-radio-group
        v-model="evaluation.colorcode"
        prepend-icon="mdi-palette"
        row
        hint="Select the color code"
        persistent-hint
      >
        <v-radio
          v-for="color in colors"
          :key="color"
          :label="color"
          :value="color.toLowerCase()"
          :color="color.toLowerCase()"
          class="`-value-${color}`"
          @blur="$v.evaluation.colorcode.$touch()"
        ></v-radio>
      </v-radio-group>

      <template v-if="$v.evaluation.colorcode.$error">
        <p
          v-if="!$v.evaluation.colorcode.required"
          class="red--text ml-7"
        >Please select the color code.</p>
      </template>

      <v-textarea
        v-model="evaluation.remarks"
        label="Provide the remarks"
        prepend-icon="mdi-comment-text"
        @blur="$v.evaluation.remarks.$touch()"
      />

      <template v-if="$v.evaluation.remarks.$error">
        <p v-if="!$v.evaluation.remarks.required" class="red--text ml-7">Remarks is required.</p>
      </template>

      <div class="text-right mr-5">
        <v-btn color="primary" type="submit" :disabled="$v.$anyError || $v.$invalid">submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import formatDate from "../utils/formatDate";
import { required } from "vuelidate/lib/validators";

export default {
  name: "AddEvaluationForm",

  props: {
    evaluation: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  data() {
    return {
      menu1: false,
      colors: ["Red", "Yellow", "Green"],
      submitted: false
    };
  },

  validations: {
    evaluation: {
      date: { required },
      colorcode: { required },
      remarks: { required }
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

      this.$emit("clicked:add-evaluation", this.evaluation);
    }
  },

  computed: {
    formattedDate() {
      return formatDate(this.evaluation.date);
    }
  }
};
</script>