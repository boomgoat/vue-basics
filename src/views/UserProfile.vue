<template>
  <div class="container p-5">
    <user-albums :user-id="userId" />
    <div class="row">
      <user-posts :user-id="userId" @button-click="updatePostId" />
      <user-comments :user-email="user.email" :post-id="postId" :key="postId" />
    </div>
  </div>
</template>

<script>
import UserAlbums from "@/components/UserAlbums.vue";
import UserComments from "@/components/UserComments.vue";
import UserPosts from "@/components/UserPosts.vue";
import { mapGetters } from "vuex";

export default {
  components: { UserAlbums, UserComments, UserPosts },
  data() {
    return {
      userId: this.$route.params.id,
      postId: null,
      user: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    updatePostId(updatedPostId) {
      this.postId = updatedPostId;
    },
  },
  mounted() {
    this.user = this.users.find((user) => user.id.toString() === this.userId);
  },
  computed: {
    ...mapGetters("users", {
      users: "getUsersList",
    }),
  },
};
</script>

<style scoped></style>
