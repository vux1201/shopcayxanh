<template>
  <div class="account-settings">
    <sidenav-vue></sidenav-vue>
    <div class="content">setting</div>
  </div>
</template>

<script>
import sidenavVue from "./sidenav.vue";
export default {
  data() {
    return;
  },
  components: {
    sidenavVue,
  },
};
</script>

<style scoped>
.account-settings {
  display: flex;
}
.content {
  width: 80%;
  padding: 20px;
}
</style>
