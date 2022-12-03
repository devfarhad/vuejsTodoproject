import { defineStore } from "pinia";

export const useManageReport = defineStore({
  id: "manageTodoAppStore",
  state: () => ({
    isLogin: false,
    email: "",
    password: "",
    isAddTodoModalOpen: false,
    TodoData: [
      {
        Id: 1,
        name: "test 1",
        description: " test todo 1 ",
        deadline: "23-04-2022",
      },
      {
        Id: 2,
        name: "test 2",
        description: " test todo 2 ",
        deadline: "23-04-2022",
      },
      {
        Id: 3,
        name: "test 3",
        description: " test todo 3 ",
        deadline: "23-04-2022",
      },
      {
        Id: 4,
        name: "test 4",
        description: " test todo 4 ",
        deadline: "23-04-2022",
      }
    ],
  }),
  getters: {
    allStores: (state) => state.stores,
  },
  actions: {},
});
