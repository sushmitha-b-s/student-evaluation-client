<template>
  <div>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="secondary" v-bind="attrs" v-on="on" @click.stop.prevent="pickRandomStudent">
          <v-icon left>mdi-help-circle</v-icon>
          <span>Ask a question</span>
        </v-btn>
      </template>
      <span>Pick a random student based on their latest evaluation.</span>
    </v-tooltip>

    <v-dialog v-model="dialog" width="500">
      <v-card width="500">
        <v-card-title class="text-subtitle-1">
          <p>Do you want to ask question to this student? 😉</p>
          <v-spacer></v-spacer>
          <v-btn icon ml-4 @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <h3 class="text-h4">{{ randomStudent.name }}</h3>
          <figure class="mt-5">
            <img :src="randomStudent.profilePic" alt="Random Student" />
          </figure>
        </v-card-text>

        <div class="text-right mr-5 pb-5">
          <v-btn color="primary" @click="dialog = false">OK</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AskQuestionContainer",

  props: ["classId"],

  data() {
    return {
      dialog: false
    };
  },

  methods: {
    pickRandomStudent() {
      this.dialog = true;
      this.$store.dispatch("students/fetchRandomStudent", this.classId);
    }
  },

  computed: {
    ...mapGetters({
      randomStudent: "students/randomStudent"
    })
  }
};
</script>

<style lang="scss" scoped>
figure {
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
}
</style>