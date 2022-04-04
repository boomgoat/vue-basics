import axios from "axios";

export const photos = {
  namespaced: true,
  state: () => ({
    photosList: [],
    isLoading: false,
  }),
  getters: {
    getPhotos(state) {
      return state.photosList;
    },
    getIsLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    updatePhotos(state, payload) {
      state.photosList = payload;
      state.isLoading = false;
    },
  },
  actions: {
    async fetchPhotos({ state, commit }, albumId) {
      try {
        state.isLoading = true;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
        );
        commit("updatePhotos", response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
