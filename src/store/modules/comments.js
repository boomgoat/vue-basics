import axios from "axios";

export const comments = {
  namespaced: true,
  state: () => ({
    commentsList: [],
    isLoading: false,
  }),
  getters: {
    getComments(state) {
      return state.commentsList;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    updateComments(state, payload) {
      payload.sort((a, b) => b.id - a.id);
      state.commentsList = payload;
      state.isLoading = false;
    },
  },
  actions: {
    async fetchComments({ state, commit }, postId) {
      try {
        state.isLoading = true;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        );
        commit("updateComments", response.data);
      } catch (error) {
        console.error(error);
      }
    },
    async addComment({ state, commit }, payload) {
      try {
        state.isLoading = true;
        const { data } = await axios.post(
          `https://jsonplaceholder.typicode.com/comments`,
          payload
        );
        const newCommentsList = [...state.commentsList, data];
        commit("updateComments", newCommentsList);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
