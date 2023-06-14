<template>
  <div>
    <h1>Deleted Todos</h1>
    <ul >
        <li  v-for="todo in deletedTodos" :key="todo.id" >
          {{ todo.text }}
          
        </li>
    </ul>
    <router-link to="/">Todos</router-link>
  </div>
</template>

<script>
export default {

  props: {
      deletedTodos: {
      }
}  

};
</script>
