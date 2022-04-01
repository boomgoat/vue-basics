<template>
  <div v-if="postId" class="jumbotron p-2 bg-white shadow offset-1 col-3">
    <h3 class="p-4">Comments</h3>
    <div class="p-3">
      <b-form @submit.prevent="addComment">
        <b-input class="mb-2" placeholder="Add comment" v-model="newComment" />
        <b-button variant="danger" type="submit">Post</b-button>
      </b-form>
    </div>
    <div class="row p-1 mb-5" id="comment-section">
      <div class="pb-3" v-for="comment in comments" :key="comment.id">
        <basic-card
          maxWidth="80em"
          :cardContent="comment.body"
          :cardSubTitle="comment.email"
        />
      </div>
    </div>
  </div>
  <div class="p-5" v-else>
    <h4>Select post to view comments</h4>
  </div>
</template>

<script>
import BasicCard from "@/components/BasicCard.vue";

export default {
  components: { BasicCard },
  props: ["postId", "userEmail"],
  data() {
    return {
      comments: [],
      newComment: "",
    };
  },
  methods: {
    addComment() {
      const payload = {
        body: this.newComment,
        email: this.userEmail,
        postId: this.postId,
      };
      this.$store.dispatch("addComment", payload);
    },
  },
  watch: {
    "$store.state.comments.commentsList": function () {
      this.comments = this.$store.state.comments.commentsList;
    },
  },
  mounted() {
    this.$store.dispatch("fetchComments", this.postId);
  },
  updated() {},
};
</script>

<style scoped></style>
