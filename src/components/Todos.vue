<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem
        :todo="todo"
        @del-todo="$emit('del-todo', todo.id)"
        :class="[todo.completed && isHidden ? 'completed' : '']"
      />
    </div>
    <button class="btn" @click="toggleCompleted">Toggle Done</button>
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
  methods: {
    toggleCompleted() {
      this.isHidden = !this.isHidden;
    },
  },
  data() {
    return {
      isHidden: false,
    };
  },
};
</script>

<style scoped>
.completed {
  display: none;
}
</style>
