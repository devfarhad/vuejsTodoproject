<script setup>
import { ref } from "vue";
import { useManageReport } from "../stores/manageTodoAppStore.js";
import TodoListLayout from "../components/layouts/TodolistLayout.vue";
const manageTodoStore = useManageReport();

defineProps({});
</script>

<template>
    <TodoListLayout></TodoListLayout>
</template>

<style scoped></style>
