import axios from "axios";

export const posts = {
  state: () => ({
    postsList: [],
  }),
  getters: {
    getPosts(state) {
      return state.postsList;
    },
  },
  mutations: {
    updatePosts(state, payload) {
      state.postsList = payload;
    },
  },
  actions: {
    async fetchPosts({ commit }, userId) {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        console.log(response.data);
        commit("updatePosts", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
