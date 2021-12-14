import { createStore } from 'vuex';


export default createStore({
    state() {
      return {
        todos: [
          { id: 1, text: "Покушать", checked: false },
          { id: 2, text: "Поспать", checked: false }
        ]
      }       

    },
    mutations: {
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, { id, checked }) {
            const idx = state.todos.findIndex((todo) => todo.id === id);
            state.todos[idx].checked = checked;
        },
        DELETE_TODO(state, id) {
            state.todos = state.todos.filter((todo) => todo.id !== id);
        }
    },
    actions: {
        addTodo({ commit }, value) {
                commit('ADD_TODO', value);
        },
        toggleTodo({ commit }, payload) {
                commit('TOGGLE_TODO', payload);
        },
        deleteTodo({ commit }, payload) {
                commit('DELETE_TODO', payload);
        },
    },
    getters: {
        numberOfCompletedTodo(state) {
            return state.todos.filter((todo) => todo.checked).length;
        },
        todos(state) {
            return state.todos
        }
    }
})
