<template>
  <div>
    <AddTodo v-on:add-todo="addItem" />
    <TodoList :todos="todos" @del-todo="deleteItem" />
  </div>
</template>

<script>
import TodoList from "../components/Todos";
import AddTodo from "../components/AddTodo.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    TodoList,
    AddTodo,
  },
  methods: {
    deleteItem(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(() => (this.todos = this.todos.filter((t) => t.id !== id)))
        .catch((err) => console.log(err));
    },
    addItem(todoItem) {
      axios
        .post("https://jsonplaceholder.typicode.com/todos", { ...todoItem })
        .then((res) => {
          this.todos = [...this.todos, res.data];
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => {
        this.todos = res.data;
      })
      .catch((err) => console.log(err));
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
