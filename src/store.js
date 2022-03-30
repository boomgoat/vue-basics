import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    todosUpdated(state, payload) {
      state.todos = payload;
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
        const updatedList = state.todos.filter((todo) => todo.id !== todoId);
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
        commit("todosUpdated", [...state.todos, response.data]);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
