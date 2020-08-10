<template>
  <div>
    <p
      v-if="!hasStudents && !loading"
      class="ma-10 text-center"
    >There are no students registered in this class.</p>

    <span v-if="loading">
      <img src="@/assets/loading.svg" alt="Loading...." />
      <p>Please wait while loading...</p>
    </span>

    <h2 class="text-sm-h2 text-xs-h3 text-center mt-5" v-if="hasStudents && !loading">Students List</h2>

    <div class="d-flex justify-space-around flex-wrap align-center my-7">
      <ClassProgressBar :progressbar="progressbar" v-if="!loading && hasStudents" />

      <v-btn color="primary text-end" @click.stop.prevent="dialog = true" v-if="!loading">
        <v-icon>mdi-plus</v-icon>
        <span>add new student</span>
      </v-btn>
    </div>

    <!-- dialog for adding class -->
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline">
          <p>Add new student</p>
          <v-spacer></v-spacer>
          <v-btn icon ml-4 @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <AddStudentForm :student="student" @clicked:add-student="addNewStudent" />
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-container>
      <v-btn text class="text-lowercase text-center ml-4" @click="goToClassList">
        <v-icon left>mdi-arrow-left</v-icon>
        <span>Back to class list</span>
      </v-btn>
      <v-row>
        <v-col v-for="student in students" :key="student.id" xs="12" sm="6" md="4">
          <router-link
            :to="{ name: 'student', params: { classId: classId , studentId: student.id } }"
            class="removeUnderline"
          >
            <StudentItem :student="student" />
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StudentItem from "@/components/StudentItem";
import AddStudentForm from "../components/AddStudentForm";
import ClassProgressBar from "../components/ClassProgressBar";

export default {
  name: "StudentsList",

  components: {
    StudentItem,
    AddStudentForm,
    ClassProgressBar
  },

  props: ["classId"],

  data() {
    return {
      loading: false,
      dialog: false,
      student: this.createNewStudent()
    };
  },

  created() {
    this.loading = true;
    this.$store.dispatch("students/fetch", this.classId).then(() => {
      this.loading = false;
    });
    this.$store.dispatch("students/getProgressBarCalc", this.classId);
  },

  computed: {
    ...mapGetters({
      students: "students/all",
      progressbar: "students/getProgressBar"
    }),

    hasStudents() {
      return !!(this.students && this.students.length);
    }
  },

  methods: {
    addNewStudent(newStudent) {
      this.$store
        .dispatch("students/add", {
          newStudent,
          classId: this.classId
        })
        .then(() => {
          this.dialog = false;
          this.student = this.createNewStudent();
        });
    },

    goToClassList() {
      this.$router.push({ name: "classes" });
    },

    createNewStudent() {
      return {
        name: "",
        profilePic: "",
        email: "",
        phone: "",
        address: "",
        zipcode: "",
        city: "",
        country: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  text-align: center;
  img {
    display: block;
    margin: 100px auto 30px auto;
  }
}

.removeUnderline {
  text-decoration: none;
}
</style>