<template>
  <div class="jumbotron p-2 bg-white shadow offset-1 col-3">
    <h3 class="p-4">Comments</h3>
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
</template>

<script>
import BasicCard from "@/components/BasicCard.vue";

export default {
  components: { BasicCard },
  data() {
    return {
      comments: [],
    };
  },
  watch: {
    "$store.state.comments.commentsList": function () {
      this.comments = this.$store.state.comments.commentsList;
    },
  },
  created() {
    this.$store.dispatch("fetchComments");
  },
};
</script>

<style scoped></style>
