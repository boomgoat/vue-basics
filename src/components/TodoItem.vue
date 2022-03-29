<template>
  <div class="todo-item" :class="{ 'is-complete': todoItem.completed }">
    <input
      type="checkbox"
      defaultChecked="todo.completed"
      name="todo.title"
      id="todo.id"
    />
    {{ todoItem.title }}
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo-item"],
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
