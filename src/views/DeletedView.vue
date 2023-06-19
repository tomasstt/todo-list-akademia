<template>
  <div>
    <h1>Deleted Todos</h1>
    <ul>
      <li v-for="todo in deletedTodos" :key="todo.id">
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
      return this.$root.todos.filter((todo) => todo.deleted);
    },
  },
};
</script>
<style scoped>
body {
  background: rgb(240, 240, 240);
}

img {
  
position: absolute;
width: 100%;
overflow: hidden;
left: 30cm;


}
strong{
  font-family: 'Thei Personal Use', sans-serif;
  font-weight: 700;
  font-size: 100px;
  
}
h1{
  font-weight: 700;
font-size: 44px;
font-family: 'Druk Wide Bold', sans-serif;


}

.container-m {
display: grid;

  place-content: center;
  align-content: center;
  align-items: center;
  height: 90vh; /* Adjust the height as needed */
max-width: 100%;
}
input{
  
}
::placeholder{
  color: black;
  display: grid;
  text-align: center;
}
button {
  margin-top: 10px;
  max-width: 100%;
border: solid 2px;
background: transparent;
border-radius: 20px;

}


@media (max-width: 1300px){
  
strong{
  font-family: 'Thei Personal Use', sans-serif;
  font-size: 100px;
  
}
h1{
  font-weight: 700;
font-size: 30px;
font-family: 'Druk Wide Bold', sans-serif;
display: flex;

  place-content: center;
  align-content: center;
  align-items: center;

}
}
</style>