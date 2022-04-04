<template>
  <div v-if="postId" class="jumbotron p-2 bg-white shadow offset-1 col-3">
    <h3 class="p-4">Comments</h3>
    <div class="p-3">
      <b-form @submit.prevent="addComment">
        <validation-provider rules="required" v-slot="{ errors, invalid }">
          <b-input
            class="mb-2"
            placeholder="Add comment"
            v-model="newComment"
          />
          <span>{{ errors[0] }}</span>
          <b-button
            variant="danger"
            :disabled="isLoading || invalid"
            type="submit"
            >Post</b-button
          >
        </validation-provider>
      </b-form>
    </div>
    <div v-if="!isLoading" class="row p-1 mb-5" id="comment-section">
      <div class="pb-3" v-for="comment in comments" :key="comment.id">
        <basic-card
          maxWidth="80em"
          :cardContent="comment.body"
          :cardSubTitle="comment.email"
        />
      </div>
    </div>
    <div v-else class="text-center">
      <b-spinner></b-spinner>
    </div>
  </div>
  <div v-else></div>
</template>

<script>
import BasicCard from "@/components/BasicCard.vue";
import { mapGetters } from "vuex";
import { extend, ValidationProvider } from "vee-validate";

extend("required", {
  validate(value) {
    return value ? true : "This field is required";
  },
  // This rule reports the `required` state of the field.
  computesRequired: true,
});

export default {
  components: { BasicCard, ValidationProvider },
  props: ["postId", "userEmail"],
  data() {
    return {
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
      this.$store.dispatch("comments/addComment", payload);
    },
    validate(value) {
      return value ? true : "This field is required";
    },
  },
  computed: {
    ...mapGetters("comments", {
      isLoading: "getIsLoading",
      comments: "getComments",
    }),
  },
  mounted() {
    this.$store.dispatch("comments/fetchComments", this.postId);
  },
};
</script>

<style scoped></style>
