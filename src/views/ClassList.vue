<template>
  <div>
    <h2>class list</h2>
  </div>
</template>

<script>
export default {
  name: "ClassList",
  created() {
    this.$store.dispatch("classes/fetch");
  }
};
</script>