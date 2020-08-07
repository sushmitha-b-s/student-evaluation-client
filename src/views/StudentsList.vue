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

    <h2 class="text-sm-h2 text-xs-h3 text-center mt-5" v-if="!loading">Students List</h2>

    <div class="text-center mt-10" v-if="!loading">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon>mdi-plus</v-icon>add new student
          </v-btn>
        </template>

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
    </div>

    <v-container>
      <v-row>
        <v-col v-for="student in students" :key="student.id" xs="12" sm="6" md="4">
          <!-- <router-link
            :to="{ name: 'student', params: { classId: classId , studentId: student.id } }"
            class="removeUnderline"
          >-->
          <StudentItem :student="student" />
          <!-- </router-link> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StudentItem from "@/components/StudentItem";
import AddStudentForm from "../components/AddStudentForm";

export default {
  name: "StudentsList",

  components: {
    StudentItem,
    AddStudentForm
  },

  props: ["classId"],

  data() {
    return {
      loading: false,
      dialog: false,
      student: {
        name: "",
        profilePic: "",
        address: "",
        zipcode: "",
        city: "",
        country: ""
      }
    };
  },

  created() {
    this.loading = true;
    this.$store.dispatch("students/fetch", this.classId).then(() => {
      this.loading = false;
    });
  },

  computed: {
    ...mapGetters({
      students: "students/all"
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
          this.student.name = "";
          this.student.profilePic = "";
          this.student.address = "";
          this.student.zipcode = "";
          this.student.city = "";
          this.student.country = "";
        });
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