<template>
  <div class="home-view">
    <add-todo v-on:add-todo="addItem" />
    <todo-list :todos="todos" @del-todo="deleteItem" />
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
      this.$store.dispatch("deleteTodo", id);
    },
    addItem(todoItem) {
      this.$store.dispatch("addTodo", todoItem);
    },
  },
  watch: {
    "$store.state.todos": function () {
      console.log(this.$store.state.todos);
      this.todos = this.$store.state.todos;
    },
  },
  created() {
    this.$store.dispatch("fetchTodos");
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

.home-view {
  display: flex;
  flex-direction: column;
  padding: 10em;
}

.btn {
  display: inline-block;
  border: none;
  border-radius: 6px;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  margin: 7px;
  cursor: pointer;
}
</style>
