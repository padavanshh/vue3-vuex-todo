<template>
  <input
    v-model="todoText"
    type="text"
    placeholder="Введите задание"
    @keyup.enter="add"
  />
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    ...mapActions(['addTodo']),

    add(e) {
      this.addTodo(e.target.value)
      this.todoText = "";
    }
  }
};
</script>

<style scoped>
input {
  width: 20rem;
  height: 2rem;
  background: #FFFFFF;
  border: 1px solid #DBE2EA;
  font-size: 1rem;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
}
input:hover {
  background: #FFFFFF;
  border: 1px solid #0880AE;
  box-sizing: border-box;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
}
</style>
