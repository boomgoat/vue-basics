<template>
  <div>
    <AddTodo v-on:add-todo="addItem" />
    <TodoList :todos="todos" @del-todo="deleteItem" />
  </div>
</template>

<script>
import TodoList from "../components/Todos";
import AddTodo from "../components/AddTodo.vue";

export default {
  name: "HomeView",
  components: {
    TodoList,
    AddTodo,
  },
  methods: {
    deleteItem(id) {
      this.$store.dispatch("DELETE_TODO", id);
    },
    addItem(todoItem) {
      this.$store.dispatch("ADD_TODO", todoItem);
    },
  },
  watch: {
    "$store.state.todos": function () {
      console.log(this.$store.state.todos);
      this.todos = this.$store.state.todos;
    },
  },
  created() {
    this.$store.dispatch("FETCH_TODOS");
    this.todos = this.$store.state.todos;
  },
  data() {
    return {
      todos: [],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
</style>
