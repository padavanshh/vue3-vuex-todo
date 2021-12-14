<template>
  <div>
    <Todo class="items"
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="toggleCheckbox"
      @click-delete="clickDelete"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Todo from "./Todo.vue";

export default {
  components: {
    Todo
  },
  emits: ["click-delete","toggle-checkbox"],
  computed: {
      ...mapGetters(['todos'])
    
  },
  methods: {
    toggleCheckbox(value) {
      this.$emit("toggle-checkbox", value);
    },
    clickDelete(id) {
      this.$emit("click-delete", id);
    }
  }
};
</script>

<style scoped>
.items {
  display: flex;
  justify-content: space-between;
  border-radius: 24px;
  box-shadow: 0px 12px 24px rgba(44, 39, 56, 0.08), 0px 32px 64px rgba(44, 39, 56, 0.14);
  margin: auto;
  padding: 15px;
}
</style>
