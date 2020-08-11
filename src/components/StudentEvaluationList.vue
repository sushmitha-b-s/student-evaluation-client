<template>
  <div>
    <h2 class="text-h4 my-7">Evaluations</h2>

    <div class="d-inline-flex mb-7">
      <v-flex class="mr-5">
        <v-btn color="secondary" @click="dialog = true">
          <v-icon left>mdi-plus</v-icon>
          <span>Add an evaluation</span>
        </v-btn>
      </v-flex>

      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline">
            <p>Add an evaluation</p>
            <v-spacer></v-spacer>
            <v-btn icon ml-4 @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>
            <AddEvaluationForm :evaluation="newEvaluation" @clicked:add-evaluation="addEvaluation" />
          </v-card-text>
        </v-card>
      </v-dialog>

      <!-- sort by date -->
      <v-flex class="ml-5">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="secondary" dark v-bind="attrs" v-on="on">
              <v-icon left>mdi-sort</v-icon>
              <span>Sort by date</span>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in sortByItems"
              :key="index"
              @click="sortBy(item.type)"
            >
              <v-list-item-title>
                <v-icon left>{{ item.icon }}</v-icon>
                <span>{{ item.type }}</span>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-flex>
    </div>

    <p v-if="!hasEvaluations">There are no evaluations given for this student.</p>

    <div v-else>
      <v-card
        v-for="evaluation in evaluations"
        :key="evaluation.id"
        max-width="500px"
        class="mb-5"
        shaped
      >
        <StudentEvaluationItem
          :evaluation="evaluation"
          @clicked:delete-evaluation="deleteEvaluation"
        />
      </v-card>
    </div>
  </div>
</template>

<script>
import StudentEvaluationItem from "./StudentEvaluationItem";
import AddEvaluationForm from "../components/AddEvaluationForm";

export default {
  name: "StudentEvaluationList",

  components: {
    StudentEvaluationItem,
    AddEvaluationForm
  },

  data() {
    return {
      dialog: false,
      newEvaluation: this.createNewEvaluation()
    };
  },

  props: {
    evaluations: {
      type: Array,
      required: true,
      default: () => []
    },

    studentId: {
      type: Number,
      required: true
    }
  },

  computed: {
    hasEvaluations() {
      return !!(this.evaluations && this.evaluations.length);
    },

    sortByItems() {
      return [
        { icon: "mdi-sort-ascending", type: "ASC" },
        { icon: "mdi-sort-descending", type: "DESC" }
      ];
    }
  },

  methods: {
    createNewEvaluation() {
      return {
        date: "",
        colorcode: "",
        remarks: ""
      };
    },

    addEvaluation(newEvaluation) {
      this.$store
        .dispatch("student/addEvaluation", {
          newEvaluation,
          studentId: this.studentId
        })
        .then(() => {
          this.dialog = false;
          this.newEvaluation = this.createNewEvaluation();
        });
    },

    deleteEvaluation(evaluation) {
      this.$store.dispatch("student/deleteEvaluation", evaluation);
    },

    sortBy(type) {
      if (type === "ASC") {
        return this.evaluations.sort((a, b) => (a.date < b.date ? -1 : 1));
      } else {
        return this.evaluations.sort((a, b) => (a.date < b.date ? 1 : -1));
      }
    }
  }
};
</script>