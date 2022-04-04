<template>
  <div v-if="!isLoading">
    <b-modal :id="id" title="BootstrapVue">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          v-for="photo in photos"
          :key="photo.id"
          :caption="photo.title"
          :img-src="photo.url"
        ></b-carousel-slide>
      </b-carousel>
    </b-modal>
  </div>

  <div v-else class="text-center p-5 m-5">
    <b-spinner></b-spinner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["id", "content"],
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  computed: {
    ...mapGetters("photos", {
      photos: "getPhotos",
      isLoading: "getIsLoading",
    }),
  },
  created() {
    this.$store.dispatch("photos/fetchPhotos", this.id);
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped></style>
