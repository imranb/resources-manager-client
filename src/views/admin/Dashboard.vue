<template>
  <div class="flex">
    <Sidebar type="admin"></Sidebar>
    <div class="w-full">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "../../components/Sidebar.vue";
export default {
  components: { Sidebar },
  name: "Admin Dashboard",
  data() {
    return {};
  },
};
</script>

<style>
</style>