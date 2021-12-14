<template>
  <div>
    Всего выполнено : {{ numberOfCompletedTodo }}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['numberOfCompletedTodo'])
  }
};
</script>
