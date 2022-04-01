import axios from "axios";

export const comments = {
  state: () => ({
    commentsList: [],
  }),
  getters: {
    getComments(state) {
      return state.commentsList;
    },
  },
  mutations: {
    updateComments(state, payload) {
      state.commentsList = payload;
    },
  },
  actions: {
    async fetchComments({ commit }) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?_limit=5`
        );
        commit("updateComments", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
