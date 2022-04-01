<template>
  <div v-if="!isLoading">
    <h3>Albums</h3>
    <div class="row overflow-hidden">
      <img
        @click="scrollLeft"
        class="scroll-controls control-left"
        src="../assets/next.png"
      />
      <div ref="albumRow" class="d-flex album-container overflow-auto p-1">
        <div class="col-3" v-for="album in albums" :key="album.id">
          <basic-card :card-title="album.title" />
        </div>
      </div>
      <img
        @click="scrollRight"
        class="scroll-controls control-right"
        src="../assets/next.png"
      />
    </div>
  </div>
  <div v-else class="text-center p-5 m-5">
    <b-spinner></b-spinner>
  </div>
</template>

<script>
import BasicCard from "./BasicCard.vue";

export default {
  components: { BasicCard },
  data() {
    return {
      albums: [],
      isLoading: false,
    };
  },
  props: ["userId"],
  watch: {
    "$store.state.albums.albumsList": function () {
      this.albums = this.$store.state.albums.albumsList;
    },
    "$store.state.albums.isLoading": function () {
      this.isLoading = this.$store.state.albums.isLoading;
    },
  },
  methods: {
    scrollRight() {
      const el = this.$refs.albumRow;
      if (el instanceof HTMLElement) {
        el.scrollLeft += 1000;
      }
    },
    scrollLeft() {
      const el = this.$refs.albumRow;
      if (el instanceof HTMLElement) {
        el.scrollLeft -= 1000;
      }
    },
  },
  created() {
    this.$store.dispatch("fetchAlbums", this.userId);
  },
};
</script>

<style scoped>
.album-container {
  scroll-behavior: smooth;
  min-height: 25em;
}
.album-container::-webkit-scrollbar {
  display: none;
}
.album-container:before {
  content: "";
  position: absolute;
  height: inherit;
  left: 0;
  right: 0;
  z-index: 3;
  background-image: linear-gradient(to right, #fff, rgba(0, 128, 128, 0) 200px),
    linear-gradient(to left, #fff, rgba(0, 128, 128, 0) 200px);
}
.scroll-controls {
  position: absolute;
  margin-top: 7em;
  cursor: pointer;
  width: 4em;
  z-index: 5;
}
.control-left {
  left: 20px;
  transform: rotate(180deg);
}
.control-right {
  right: 20px;
}
</style>
