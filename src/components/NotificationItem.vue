<template>
  <div class="notification" :class="notificationType">
    <span>
      <v-icon
        color="white"
        left
      >{{ notification.type === 'success' ? 'mdi-check-circle': 'mdi-close-circle' }}</v-icon>
    </span>
    <span class="text-subtitle-2 white--text">{{ notification.message }}</span>
  </div>
</template>

<script>
export default {
  name: "NotificationItem",

  props: {
    notification: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },

  data() {
    return {
      timeout: null
    };
  },

  mounted() {
    setTimeout(() => {
      this.$store.dispatch("notifications/remove", this.notification);
    }, 5000);
  },

  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  computed: {
    notificationType() {
      return `-text-${this.notification.type}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.notification {
  display: inline-block;
  padding: 1rem 0.5rem;
  position: fixed;
  right: 0;
  z-index: 1;
}

.-text-success {
  background-color: #1976d2;
}

.-text-error {
  background-color: red;
}
</style>