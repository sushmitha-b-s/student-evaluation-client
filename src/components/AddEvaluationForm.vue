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
            v-model="evaluation.date"
            label="select date"
            prepend-icon="mdi-calendar-range"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="evaluation.date" @input="menu1 = false"></v-date-picker>
      </v-menu>

      <v-radio-group v-model="evaluation.colorcode" prepend-icon="mdi-palette">
        <v-radio
          v-for="color in colors"
          :key="color"
          :label="color"
          :value="color"
          class="`-value-${color}`"
        ></v-radio>
      </v-radio-group>
      <v-textarea v-model="evaluation.remarks" prepend-icon="mdi-comment-text" />

      <div class="text-right mr-5">
        <v-btn color="primary" type="submit">submit</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "AddEvaluationForm",

  data() {
    return {
      menu1: false,
      evaluation: this.createNewEvaluation(),
      colors: ["red", "yellow", "green"]
    };
  },

  methods: {
    createNewEvaluation() {
      return {
        date: "",
        colorcode: "",
        remarks: ""
      };
    },

    submit() {
      this.$emit("clicked:add-evaluation", this.evaluation);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>