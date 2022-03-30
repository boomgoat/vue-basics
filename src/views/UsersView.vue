<template>
  <div class="user-table">
    <b-table striped hover class="shadow rounded" :items="users"></b-table>
  </div>
</template>

<script>
export default {
  name: "UsersView",
  data() {
    return {
      users: [],
    };
  },
  watch: {
    "$store.state.users.usersList": function () {
      console.log(this.$store.state.users.usersList);
      this.users = this.$store.state.users.usersList;
    },
  },
  created() {
    this.$store.dispatch("fetchUsers");
    this.todos = this.$store.state.users.usersList;
  },
};
</script>

<style scoped>
.user-table {
  display: flex;
  padding: 4em;
}
</style>
