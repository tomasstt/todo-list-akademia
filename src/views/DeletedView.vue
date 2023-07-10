<template>
  <div >
    <h1>Deleted Todos</h1>
    <ul  >
      <li v-for="todo in $root.deletedTodos" :key="todo.id">
        {{ todo.text }}
      </li>
    </ul>
    <router-link to="/">Todos</router-link>
      <router-view></router-view>

</div>
</template>

<script>
import TodoList from '../components/TodoList.vue';
import TodoView from '../views/TodoView.vue'

export default {
  components: {TodoList,TodoView},
  props: ['todos'],
  computed: {
    deletedTodos() {
      return this.$root.deletedTodos;      
    },
  },};
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