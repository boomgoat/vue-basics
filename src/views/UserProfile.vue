<template>
  <div class="container">
    <h1 class="pt-4 pb-4">User Profile for {{ user.name }}</h1>
    <user-albums :user-id="userId" />
    <div class="row">
      <user-posts :user-id="userId" />
      <user-comments />
    </div>
  </div>
</template>

<script>
import UserAlbums from "@/components/UserAlbums.vue";
import UserComments from "@/components/UserComments.vue";
import UserPosts from "@/components/UserPosts.vue";

export default {
  components: { UserAlbums, UserComments, UserPosts },
  data() {
    return {
      userId: this.$route.params.id,
      user: {},
    };
  },
  mounted() {
    this.user = this.$store.getters.getUser;
  },
  created() {
    this.user = this.$store.state.users.usersList.find(
      (user) => user.id.toString() === this.userId
    );
  },
};
</script>

<style scoped></style>
