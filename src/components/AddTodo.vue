<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add todo" />
      <input type="submit" value="Submit" class="btn-custom" />
    </form>
  </div>
</template>

<script>
export default {
  name: "add-todo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTodo() {
      const newTodo = {
        title: this.title,
        completed: false,
      };
      this.$emit("add-todo", newTodo);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
  margin: 7px;
  border-radius: 6px;
}

input[type="submit"] {
  flex: 2;
}
</style>
