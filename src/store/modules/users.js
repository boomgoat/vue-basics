import axios from "axios";

export const users = {
  state: () => ({
    usersList: [],
  }),
  getters: {
    getUsers(state) {
      return state.usersList;
    },
  },
  mutations: {
    usersUpdated(state, payload) {
      state.usersList = payload;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("usersUpdated", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async deleteUser({ commit, state }, userId) {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const updatedList = state.usersList.filter(
          (user) => user.id !== userId
        );
        commit("usersUpdated", updatedList);
      } catch (error) {
        console.error(error);
      }
    },
    async addUser({ commit, state }, user) {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          { ...user }
        );
        commit("usersUpdated", [...state.usersList, response.data]);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
