<template>
  <div>
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
    })
  }
};
</script>