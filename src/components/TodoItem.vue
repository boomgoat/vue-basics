<template>
  <div class="todo-item" :class="{ 'is-complete': todoState.completed }">
    <p>
      <input
        type="checkbox"
        @change="markComplete"
        :checked="todoState.completed"
      />
      {{ todoState.title }}
      <button class="del" @click="$emit('del-todo', todo.id)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todoState.completed = !this.todoState.completed;
    },
  },
  data() {
    return {
      todoState: this.todo,
    };
  },
};
</script>

<style scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
