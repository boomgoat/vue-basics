import axios from "axios";

export const albums = {
  state: () => ({
    albumsList: [],
  }),
  getters: {
    getAlbums(state) {
      return state.albumsList;
    },
  },
  mutations: {
    updateAlbums(state, payload) {
      state.albumsList = payload;
    },
  },
  actions: {
    async fetchAlbums({ commit }, userId) {
      try {
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
