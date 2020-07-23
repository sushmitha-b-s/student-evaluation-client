<template>
  <div>
    <p
      v-if="!hasClasses && !loading"
      class="ma-10 text-center"
    >There are no classes registered right now.</p>

    <span v-if="loading">
      <img src="@/assets/loading.svg" alt="Loading...." />
      <p>Please wait while loading...</p>
    </span>

    <h2 class="text-sm-h2 text-xs-h3 text-center mt-5" v-if="!loading">Class List</h2>

    <div class="text-center mt-10" v-if="!loading">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon>mdi-plus</v-icon>add new class
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="headline">
            <p>Add new class</p>
            <v-spacer></v-spacer>
            <v-btn icon ml-4 @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text>
            <AddClassForm :batch="newBatch" @clicked:add-class="addNewClass" />
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <v-container>
      <v-row>
        <v-col v-for="batch in classes" :key="batch.id" xs="12" sm="6" md="4">
          <ClassItem :batch="batch" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ClassItem from "@/components/ClassItem";
import AddClassForm from "@/components/AddClassForm";
import { mapGetters } from "vuex";

export default {
  name: "ClassList",
  components: {
    ClassItem,
    AddClassForm
  },

  data() {
    return {
      dialog: false,
      loading: false,
      newBatch: {
        batchNo: null,
        startDate: null,
        endDate: null
      }
    };
  },

  created() {
    this.loading = true;
    this.$store.dispatch("classes/fetch").then(() => {
      this.loading = false;
    });
  },

  computed: {
    ...mapGetters({
      classes: "classes/all"
    }),
    hasClasses() {
      return !!(this.classes && this.classes.length);
    }
  },

  methods: {
    addNewClass(newBatch) {
      this.$store
        .dispatch("classes/add", newBatch)
        .then(() => (this.dialog = false));
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
</style>