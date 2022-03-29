<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo-item="todo" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: ["todos"],
};
</script>

<style scoped></style>
