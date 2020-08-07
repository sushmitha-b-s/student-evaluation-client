<template>
  <div>
    <v-card class="ma-5" max-width="300">
      <v-card-title>
        <h3>{{ student.name }}</h3>
      </v-card-title>

      <v-card-text>
        <figure>
          <img :src="student.profilePic" alt="student image" />
        </figure>
        <div class="d-flex justify-center">
          <span>Latest color code:</span>
          <p class="ml-2 colorcode" :class="`-text-${getLatestColorCode}`" />
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    student: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  computed: {
    getLatestColorCode() {
      return this.student.evaluations.length
        ? this.student.evaluations[0].colorcode
        : "none";
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