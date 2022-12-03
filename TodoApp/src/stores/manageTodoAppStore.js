import { defineStore } from "pinia";

export const useManageReport = defineStore({
  id: "manageTodoAppStore",
  state: () => ({
    isLogin: false,
    email: "",
    password: "",
    TodoData: [
      {
        Id: 0,
        name: "",
        description: "",
        deadline: "",
      },
    ],
  }),
  getters: {
    allStores: (state) => state.stores,
  },
  actions: {},
});
