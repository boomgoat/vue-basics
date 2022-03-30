<template>
  <div id="app">
    <AppHeader />
    <TodoList :todos="todos" @del-todo="deleteItem" />
  </div>
</template>

<script>
import TodoList from "./components/Todos";
import AppHeader from "./components/layout/header.vue";

let id = 0;

export default {
  name: "App",
  components: {
    AppHeader,
    TodoList,
  },
  methods: {
    deleteItem(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
  },
  data() {
    return {
      todos: [
        {
          id: id++,
          title: "task 1",
          completed: false,
        },
        {
          id: id++,
          title: "task 2",
          completed: true,
        },
        {
          id: id++,
          title: "task 3",
          completed: false,
        },
      ],
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
</style>
