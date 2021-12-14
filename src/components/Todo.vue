<template>
  <div>
    <div>
      <input type="checkbox" :checked="todo.checked" @change="toggleCheckbox" />
    </div>

    <span      
      :style="todo.checked ? 'text-decoration:line-through' : ''"
      >{{ todo.text }}</span
    >
    <button @click="clickDelete">Удалить</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['todo'],
  methods: {
    ...mapActions(['deleteTodo', 'toggleTodo']),
    toggleCheckbox(e) {
      this.toggleTodo({id: this.todo.id,
        checked: e.target.checked})
    },
    clickDelete() {
      this.deleteTodo(this.todo.id)
    }    
  }
};
</script>

<style scoped>
span {
  font-size: 2rem;
}
button {
  width: 10rem;
  height: 40px;
  margin-top: 1rem;
  background: #e62910;
  box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  line-height: 21px;
  color: #EBF4F8;
  font-style: normal;
}</style>
