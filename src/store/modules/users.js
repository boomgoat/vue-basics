import axios from "axios";

export const users = {
  namespaced: true,
  state: () => ({
    usersList: JSON.parse(localStorage.getItem("userList")) ?? [],
  }),
  getters: {
    getUsersList(state) {
      return state.usersList;
    },
    getUser: (state) => (userID) => {
      return state.userList.find((user) => user.id.toString() === userID);
    },
  },
  mutations: {
    usersUpdated(state, payload) {
      state.usersList = payload;
      localStorage.setItem("userList", JSON.stringify(payload));
    },
    currentUserUpdated(state, payload) {
      state.currentUser = payload;
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
