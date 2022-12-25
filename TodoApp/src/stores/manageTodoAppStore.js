import { defineStore } from "pinia";
import axios from "axios";

export const useManageReport = defineStore({
  id: "manageTodoAppStore",
  state: () => ({
    isLogin: false,
    SignUpPage: false,
    isSignUpClicked: false,
    UpdateTodo: false,
    errorMessage: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAddTodoModalOpen: false,
    CreateTodo: {
      title: "",
      description: ""
    },
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
  actions: {
    async registerUser() {
      this.errorMessage = ""

      await axios.post('http://3.232.244.22/api/register', {
        email: this.email,
        password : this.password,
        password_confirmation: this.confirmPassword
      })
      .then((response) => {
        this.SignUpPage = false
        console.log(response);
      }, (error) => {
        this.errorMessage = error.response.data.message
        this.SignUpPage = true
        console.log(error);
      });
    },
    async loginUser() {
      this.errorMessage = ""

      await axios.post('http://3.232.244.22/api/login', {
        email: this.email,
        password : this.password
      })
      .then((response) => {
        
        this.isLogin = true
        console.log(response);
      }, (error) => {
        this.errorMessage = error.response.data.message
        console.log(error);
      });
    },
    async getItems() {
      this.errorMessage = ""
      await axios.get('http://3.232.244.22/api/items', {
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8zLjIzMi4yNDQuMjJcL2FwaVwvbG9naW4iLCJpYXQiOjE2NzE5NjE4MTgsImV4cCI6MTY3MTk2NTQxOCwibmJmIjoxNjcxOTYxODE4LCJqdGkiOiJKdng1eFJlV2trbzFXY0hGIiwic3ViIjoyMDksInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.f1hCKZU6Wb1-067r4bUny6rWeY_I5Rx_6uzsnqrgb2g"
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    },
    async saveOrUpdateTodo() {
      this.errorMessage = ""

      if (this.UpdateTodo) {
        await axios.put('http://3.232.244.22/api/item', {
        title: this.CreateTodo.title,
        description: this.CreateTodo.description
      })
      .then((response) => {
        this.isAddTodoModalOpen = false
        console.log(response);
      }, (error) => {
        this.isAddTodoModalOpen = false
        console.log(error);
      });
      } else {
        await axios.post('http://3.232.244.22/api/item/3', {
          title: this.CreateTodo.title,
          description: this.CreateTodo.description
        })
        .then((response) => {
          this.isAddTodoModalOpen = false
          console.log(response);
        }, (error) => {
          this.isAddTodoModalOpen = false
          console.log(error);
        });
      }
    },
    async deleteTodo() {
      this.errorMessage = ""
      await axios.delete('http://3.232.244.22/api/item/3', {
        title: this.CreateTodo.title,
        description: this.CreateTodo.description
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    },
  },

});
