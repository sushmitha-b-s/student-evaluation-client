<template>
  <div class="progress__bar">
    <p>
      <v-icon>mdi-information-outline</v-icon>
      <span
        class="text-subtitle-2 font-weight-regular"
      >The progress bar represents the percentage of students evaluated by RED, YELLOW or GREEN.</span>
    </p>
    <div
      class="red"
      :style="{ width: progressbar.redPercentage + '%'}"
    >{{ progressbar.redPercentage }}%</div>
    <div
      class="yellow"
      :style="{ width: progressbar.yellowPercentage + '%'}"
    >{{ progressbar.yellowPercentage }}%</div>
    <div
      class="green"
      :style="{ width: progressbar.greenPercentage + '%'}"
    >{{ progressbar.greenPercentage }}%</div>
  </div>
</template>

<script>
export default {
  name: "ClassProgressBar",

  props: {
    progressbar: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.progress__bar {
  display: inline-block;
  width: 400px;
  padding: 1.5rem 1.2rem;
  background: white;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  div {
    width: 100%;
    display: inline-block;
    padding: 0.5rem 0;
    text-align: center;
  }
}
</style>