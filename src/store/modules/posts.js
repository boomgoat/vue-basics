import axios from "axios";

export const posts = {
  namespaced: true,
  state: () => ({
    postsList: [],
    isLoading: false,
  }),
  getters: {
    getPosts(state) {
      return state.postsList;
    },
  },
  mutations: {
    updatePosts(state, payload) {
      state.postsList = payload;
      state.isLoading = false;
    },
  },
  actions: {
    async fetchPosts({ state, commit }, userId) {
      try {
        state.isLoading = true;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        commit("updatePosts", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
