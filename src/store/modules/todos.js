import axios from "axios";

export const todos = {
  state: () => ({
    todoList: [],
  }),
  getters: {
    getTodos(state) {
      return state.todoList;
    },
  },
  mutations: {
    todosUpdated(state, payload) {
      state.todoList = payload;
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        commit("todosUpdated", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTodo({ commit, state }, todoId) {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${todoId}`
        );
        const updatedList = state.todoList.filter((todo) => todo.id !== todoId);
        commit("todosUpdated", updatedList);
      } catch (error) {
        console.error(error);
      }
    },
    async addTodo({ commit, state }, todo) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          { ...todo }
        );
        commit("todosUpdated", [...state.todoList, response.data]);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
