<template>
  <div>
    <h1>User Profile for {{ user.name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id,
      user: {},
    };
  },
  created() {
    this.user = this.$store.state.users.usersList.find(
      (user) => user.id.toString() === this.userId
    );
  },
};
</script>

<style scoped></style>
