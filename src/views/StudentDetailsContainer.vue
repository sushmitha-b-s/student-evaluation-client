<template>
  <div>
    student details container
    <p>class id: {{ $route.params.classId }}</p>
    <p>student id: {{ $route.params.studentId }}</p>
  </div>
</template>

<script>
export default {
  name: "StudentDetailsContainer"
};
</script>