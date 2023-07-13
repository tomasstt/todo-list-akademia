<template>
  <li :class="{ completed: todo.completed }">
    <span>{{ todo.text }}</span>
    <button class="delete-btn" @click="deleteTodo">Delete</button>
    <button class="edit-btn" @click="editTodo">Edit</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteTodo() {
      this.$emit('delete', this.todo);
    },
    editTodo() {
      this.$emit('edit', this.todo);
    },
  },
};
</script>

<style scoped>
.delete-btn {
  margin-right: 20px;
  margin-top: 0px;
}

.edit-btn {
  margin-top: 0;
}

li {
  margin-top: 6px;
}

strong {
  font-family: 'Thei Personal Use', sans-serif;
  font-weight: 700;
  font-size: 100px;
}

h1 {
  font-weight: 700;
  font-size: 43px;
  font-family: 'Druk Wide Bold', sans-serif;
}
</style>
