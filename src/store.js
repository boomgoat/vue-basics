import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    GET_TODOS(state) {
      return state.todos;
    },
  },
  mutations: {
    TODOS_UPDATED(state, payload) {
      state.todos = payload;
    },
  },
  actions: {
    FETCH_TODOS({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((res) => {
          commit("TODOS_UPDATED", res.data);
        })
        .catch((err) => console.log(err));
    },
    DELETE_TODO({ commit, state }, todoId) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(() => {
          const updatedList = state.todos.filter((todo) => todo.id !== todoId);
          commit("TODOS_UPDATED", updatedList);
        })
        .catch((err) => console.log(err));
    },
    ADD_TODO({ commit, state }, todo) {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", { ...todo })
        .then((res) => {
          commit("TODOS_UPDATED", [...state.todos, res.data]);
        })
        .catch((err) => console.log(err));
    },
  },
});
