<template>
  <div v-if="!isLoading" class="jumbotron p-3 shadow col-8">
    <h3 class="p-3">User Posts</h3>
    <div class="p-3" v-for="post in posts" :key="post.id">
      <basic-card
        :cardId="post.id"
        :cardTitle="post.title"
        :cardContent="post.body"
        maxWidth="80em"
        buttonContent="View Comments"
        @button-click="handleButtonClick(post.id)"
      />
    </div>
  </div>
  <div v-else class="text-center p-5">
    <b-spinner></b-spinner>
  </div>
</template>

<script>
import BasicCard from "./BasicCard.vue";

export default {
  components: { BasicCard },
  props: ["userId"],
  data() {
    return {
      posts: [],
      newComment: "",
      postId: "",
      isLoading: false,
    };
  },
  watch: {
    "$store.state.posts.postsList": function () {
      this.posts = this.$store.state.posts.postsList;
    },
    "$store.state.albums.isLoading": function () {
      this.isLoading = this.$store.state.albums.isLoading;
    },
  },
  methods: {
    handleButtonClick(postId) {
      this.$emit("button-click", postId);
      this.postId = postId;
    },
  },
  created() {
    this.$store.dispatch("posts/fetchPosts", this.userId);
  },
};
</script>

<style scoped></style>
