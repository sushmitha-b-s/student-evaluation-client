<template>
  <div class="grey lighten-4">
    <NotificationItem
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NotificationItem from "./NotificationItem";

export default {
  name: "NotificationContainer",

  components: {
    NotificationItem
  },

  computed: {
    ...mapGetters({
      notifications: "notifications/all"
    })
  }
};
</script>