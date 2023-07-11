<template>
  <li>
    {{ todo.text }}
    <button class="delete-btn" @click="deleteTodo">Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,

    },
  },
  methods: {
    deleteTodo() {
      this.$emit('delete', this.todo);
    }
  }
};
</script>


<style scoped>


strong{
  font-family: 'Thei Personal Use', sans-serif;
  font-weight: 700;
  font-size: 100px;
  
}
h1{
  font-weight: 700;
font-size: 43px;
font-family: 'Druk Wide Bold', sans-serif;


}


</style>