<template>
  <div id="app">
    <h1>Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <hr />
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";
import CompletedTodo from "./components/CompletedTodo.vue";

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px auto;
  margin-top: 60px;
  max-width: 50rem;  
}
</style>
