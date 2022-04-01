<template>
  <div
    class="user-table-container shadow rounded m-3 p-4 pt-0 d-flex flex-column align-items-start justify-content-around"
  >
    <h3>User Listing</h3>
    <b-form-input
      type="text"
      placeholder="Search Users By Name"
      v-model="searchText"
    ></b-form-input>
    <b-table
      striped
      hover
      class="hover"
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
      searchText: "",
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
    searchText: function () {
      this.users = this.$store.state.users.usersList.filter((user) => {
        return user.name.toLowerCase().includes(this.searchText.toLowerCase());
      });
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
  height: 80vh;
}

.user-table-container table {
  cursor: pointer;
}
</style>
