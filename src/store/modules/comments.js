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
      payload.sort((a, b) => b.id - a.id);
      state.commentsList = payload;
      console.log(payload);
    },
  },
  actions: {
    async fetchComments({ commit }, postId) {
      try {
        console.log("called");
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
