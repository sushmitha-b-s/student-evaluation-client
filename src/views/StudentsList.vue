<template>
  <div>students list {{ $route.params.classId }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "StudentsList",

  props: ["classId"],
  data() {
    return {
      loadng: false
    };
  },

  created() {
    this.$store.dispatch("students/fetch", this.classId);
  },

  computed: {
    ...mapGetters({
      students: "students/all"
    })
  }
};
</script>