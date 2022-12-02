<script setup>
import loginForm from "../login/loginForm.vue";

defineProps({});
</script>

<template>
  <div class="bg-gray-50 app-container">
    <loginForm class="w-full h-full" />
  </div>
</template>

<style scoped>
.app-container {
    width: 100vw;
    height: 100vh;
}
</style>
