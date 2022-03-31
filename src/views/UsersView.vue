<template>
  <div
    class="user-table-container d-flex flex-column align-items-start justify-content-around"
  >
    <h3>User Listing</h3>
    <b-table
      striped
      hover
      class="shadow rounded hover"
      :items="users"
      :fields="fields"
      id="user-table"
      :per-page="perPage"
      :current-page="currentPage"
      small
      @row-clicked="handleRowClick"
    ></b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="user-table"
    ></b-pagination>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "UsersView",
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      users: [],
      fields: [
        "id",
        "name",
        "username",
        { key: "company.name", label: "Company" },
        "phone",
        "website",
      ],
    };
  },
  methods: {
    handleRowClick(user) {
      router.push(`users/${user.id}`);
    },
  },
  watch: {
    "$store.state.users.usersList": function () {
      this.users = this.$store.state.users.usersList;
    },
  },
  created() {
    this.$store.dispatch("fetchUsers");
    this.users = this.$store.state.users.usersList;
  },
  computed: {
    rows() {
      return this.users.length;
    },
  },
};
</script>

<style scoped>
.user-table-container {
  padding: 4em;
  height: 80vh;
}

.user-table-container table {
  cursor: pointer;
}
</style>
