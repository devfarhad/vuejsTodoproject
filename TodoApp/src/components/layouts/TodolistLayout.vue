<script setup>
import { ref, reactive } from "vue";
import { useManageReport } from "../../stores/manageTodoAppStore.js";
import todoModalLayout from "../layouts/todoModalLayout.vue";
const manageTodoStore = useManageReport();

defineProps({});
</script>
<template>
  <todoModalLayout ref="popover" />
  <div class="flex justify-center items-center min-h-screen bg-[#cbd7e3]">
    <div class="h-auto w-1/2 bg-white rounded-lg p-4">
      <div
        class="mt-3 text-sm text-[#8ea6c8] flex justify-between items-center"
      >
        <p class="set_date">Thursday 28 May</p>
        <p class="set_time">8:00 AM</p>
      </div>
      <p class="text-xl font-semibold mt-2 text-[#063c76]">To-do List</p>
      <div class="w-full mt-4 flex text-sm flex-col text-center justify-center">
        <div class="px-[15px] flex justify-between text-center items-center">
          <p>s</p>
          <p>m</p>
          <p>t</p>
          <p>w</p>
          <p>t</p>
          <p>f</p>
          <p>s</p>
        </div>
        <div class="w-full pl-1 flex justify-between text-center items-center">
          <span
            class="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center"
            ><p>24</p></span
          >
          <span
            class="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center"
            ><p>25</p></span
          >
          <span
            class="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center"
            ><p>26</p></span
          >
          <span
            class="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center"
            ><p>27</p></span
          >
          <span
            class="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center"
            ><p>28</p></span
          >
          <span
            class="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center"
            ><p>29</p></span
          >
          <span
            class="h-7 w-7 rounded-full cursor-pointer transition-all hover:bg-[#063c76] hover:text-white bg-[#fff] flex justify-center items-center"
            ><p>30</p></span
          >
        </div>
      </div>
      <ul v-for="todo of manageTodoStore.TodoData" :key="todo.id" class="my-4">
        <li :key="todo.id" class="mt-4" id="1">
          <div class="flex gap-2">
            <div
              class="w-full h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3"
            >
              <strike
                id="strike1"
                class="strike_none text-sm ml-4 text-[#5b7a9d] font-semibold"
                >{{ todo.name }}</strike
              >
            </div>
						<span
              class="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center"
              >{{ todo.description }}</span>
            <span
              class="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center"
              >{{ todo.deadline }}</span
            >
          </div>
        </li>
      </ul>
      <button
        class="bg-blue-500 w-full mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        @click="manageTodoStore.isAddTodoModalOpen"
      >
        Add your Todo
      </button>
    </div>
  </div>
</template>
<style scoped></style>
