<script setup>
import { ref, reactive, onMounted } from "vue";
import { useManageReport } from "../../stores/manageTodoAppStore.js";
import todoModalLayout from "../layouts/todoModalLayout.vue";
const manageTodoStore = useManageReport();

defineProps({});

onMounted(() => {
  manageTodoStore.getItems()
});

function updateTodo(title, description) {
  manageTodoStore.CreateTodo.title = title
  manageTodoStore.CreateTodo.description = description
  manageTodoStore.isAddTodoModalOpen = true
  manageTodoStore.UpdateTodo = true
}
function deleteTodo(title, description) {
  manageTodoStore.CreateTodo.title = title
  manageTodoStore.CreateTodo.description = description
  manageTodoStore.deleteTodo()
}

</script>
<template>
  <!-- <todoModalLayout v-if="manageTodoStore.isAddTodoModalOpen" append-to-body ref="popover" /> -->
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
          <p>sunday</p>
          <p>monday</p>
          <p>tuesday</p>
          <p>wednesday</p>
          <p>thursday</p>
          <p>friday</p>
          <p>saturday</p>
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

           <!-- edit/update todo  -->
            <span @click="updateTodo(todo.name, todo.description)" class="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                <path d="M16 5l3 3"></path>
              </svg>
            </span>

            <!-- delete todo  -->

            <span  @click="deleteTodo(todo.name, todo.description)" class="w-1/4 h-12 bg-[#e0ebff] rounded-[7px] flex justify-center text-sm text-[#5b7a9d] font-semibold items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
              </svg>
            </span>
          </div>
        </li>
      </ul>
      <todoModalLayout ref="popover" />

      <!-- <button
        class="bg-blue-500 w-full mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        @click="manageTodoStore.isAddTodoModalOpen = true"
      >
        Add your Todo
      </button> -->
    </div>
  </div>
</template>
<style scoped></style>
