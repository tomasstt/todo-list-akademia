<template>
  <div>
    <h1>Deleted Todos</h1>
    <ul>
      <li v-for="todo in deletedTodos" :key="todo.id">
        {{ todo.text }}
        <button @click="restoreTodoToTodos(todo)">Restore</button>
      </li>
    </ul>
    <router-link to="/">Todos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from '../store';


export default defineComponent({
  setup() {
    const store = useStore();

    const deletedTodos = store.deletedTodos;

    const restoreTodoToTodos = (todo) => {
      todo.deleted = false;
      store.restoreTodoFromDeleted(todo);
    };

    return {
      deletedTodos,
      restoreTodoToTodos,
    };
  },
});
</script>

<style scoped>




button {


 margin-top: 0;
}

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