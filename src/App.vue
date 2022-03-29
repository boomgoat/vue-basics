<template>
  <div id="app">
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import TodoList from './components/Todos';

let id = 0;

export default {
  name: 'App',
  components: {
    TodoList
  },
  data() {
    return {
      todos: [
        {
          id: id++,
          title: 'task 1',
          completed: false,
        },
        {
          id: id++,
          title: 'task 2',
          completed: true,
        },
        {
          id: id++,
          title: 'task 3',
          completed: false,
        },
      ]
    }
  },
}
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
