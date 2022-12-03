<script setup>
import loginForm from "../login/loginForm.vue";
import dashboard from "../dashboard.vue"
import { useManageReport } from "../../stores/manageTodoAppStore.js";
const manageTodoStore = useManageReport();


defineProps({});
</script>

<template>
  <div class="bg-gray-50 app-container">
    <loginForm v-if="!manageTodoStore.isLogin" class="w-full h-full" />
    <dashboard v-else></dashboard>
  </div>
</template>

<style scoped>
.app-container {
    width: 100vw;
    height: 100vh;
}
</style>
