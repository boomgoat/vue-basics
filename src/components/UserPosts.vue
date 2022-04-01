<template>
  <div class="jumbotron p-3 shadow col-8">
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
    };
  },
  watch: {
    "$store.state.posts.postsList": function () {
      this.posts = this.$store.state.posts.postsList;
    },
  },
  methods: {
    handleButtonClick(postId) {
      this.$emit("button-click", postId);
      this.postId = postId;
    },
  },
  created() {
    this.$store.dispatch("fetchPosts", this.userId);
  },
};
</script>

<style scoped></style>
