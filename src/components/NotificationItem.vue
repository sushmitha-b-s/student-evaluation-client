<template>
  <div class="notification" :class="notificationType">
    <span>
      <v-icon color="white" left>{{ notification.type === 'success' ? 'mdi-check': 'mdi-close' }}</v-icon>
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
    }, 4000);
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
  padding: 0.5rem;
  position: fixed;
  right: 0;
}

.-text-success {
  background-color: #0070f3;
}

.-text-error {
  background-color: red;
}
</style>