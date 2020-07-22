<template>
  <div>
    <p
      v-if="!hasClasses && !loading"
      class="ma-10 text-center"
    >There are no classes registered right now.</p>

    <img src="@/assets/loading.svg" alt="Loading...." v-if="loading" />

    <div class="text-center ma-5 mt-10" v-if="!loading">
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
            <span>the place where our form will be.</span>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <ClassItem v-for="batch in classes" :key="batch.id" :batch="batch" />
  </div>
</template>

<script>
import ClassItem from "@/components/ClassItem";
import { mapGetters } from "vuex";

export default {
  name: "ClassList",
  components: {
    ClassItem
  },

  data() {
    return {
      dialog: false,
      loading: false
    };
  },

  created() {
    this.loading = true;
    setTimeout(() => {
      this.$store.dispatch("classes/fetch").then(() => {
        this.loading = false;
      });
    }, 3000);
  },

  computed: {
    ...mapGetters({
      classes: "classes/all"
    }),
    hasClasses() {
      return !!(this.classes && this.classes.length);
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  display: block;
  margin: 100px auto 30px auto;
}
</style>