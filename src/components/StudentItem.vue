<template>
  <div>
    <v-card class="ma-5" max-width="300">
      <v-card-title>
        <h3>{{ student.name }}</h3>
      </v-card-title>

      <v-card-text class="pb-0">
        <figure>
          <img :src="student.profilePic" alt="student image" />
        </figure>
        <div class="d-flex justify-center">
          <span>Latest color code:</span>
          <p class="ml-2 colorcode" :class="`-text-${getLatestColorCode}`" />
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" outlined @click.stop.prevent="dialog = true">
          edit
          <v-icon right>mdi-pencil</v-icon>
        </v-btn>

        <!-- modal for editing student -->
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="headline">
              <p>Edit a student</p>
              <v-spacer></v-spacer>
              <v-btn icon ml-4 @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <AddStudentForm :student="{...student}" @clicked:edit-student="editStudent" />
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-spacer></v-spacer>
        <!-- delete student -->
        <v-btn color="primary" outlined @click.prevent="deleteStudent" :loading="loading">
          delete
          <v-icon right>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import AddStudentForm from "@/components/AddStudentForm";

export default {
  components: {
    AddStudentForm
  },

  props: {
    student: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  data() {
    return {
      loading: false,
      dialog: false
    };
  },

  computed: {
    getLatestColorCode() {
      return this.student.evaluations.length
        ? this.student.evaluations[0].colorcode
        : "none";
    }
  },

  methods: {
    deleteStudent() {
      this.loading = true;
      this.$store.dispatch("students/delete", this.student).then(() => {
        this.loading = false;
        this.$store.dispatch(
          "students/getProgressBarCalc",
          this.student.classId
        );
      });
    },

    editStudent(student) {
      this.$store.dispatch("students/edit", student).then(() => {
        this.dialog = false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
figure {
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
  }
}

.colorcode {
  width: 20px;
  height: 20px;
}

.-text-green {
  background-color: green;
}

.-text-yellow {
  background-color: yellow;
}

.-text-red {
  background-color: red;
}

.-text-none {
  width: 40px;
  &::after {
    content: "none";
  }
}
</style>