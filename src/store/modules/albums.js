import axios from "axios";

export const albums = {
  namespaced: true,
  state: () => ({
    albumsList: [],
    isLoading: false,
  }),
  getters: {
    getAlbums(state) {
      return state.albumsList;
    },
  },
  mutations: {
    updateAlbums(state, payload) {
      state.albumsList = payload;
      state.isLoading = false;
    },
  },
  actions: {
    async fetchAlbums({ state, commit }, userId) {
      try {
        state.isLoading = true;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums?user_id=${userId}?_limit=4`
        );
        commit("updateAlbums", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
