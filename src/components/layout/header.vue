<template>
  <header class="header">
    <nav class="row">
      <span class="col-4 d-flex justify-content-start align-items-center">
        <img src="../../assets/logo.png" class="col-1 pb-2" />
        <h1 class="offset-1">Basics</h1>
      </span>
      <span class="col pt-3 d-flex justify-content-end">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/users">Users</router-link>
      </span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1em 3em;
}

nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding: 0 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
