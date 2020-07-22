<template>
  <div>
    <p v-if="!hasClasses" class="ma-10 text-center">There are no classes registered right now.</p>

    <div class="text-center ma-5">
      <v-btn color="primary">
        <v-icon>mdi-plus</v-icon>
        <span>add new class</span>
      </v-btn>
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
  created() {
    this.$store.dispatch("classes/fetch");
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