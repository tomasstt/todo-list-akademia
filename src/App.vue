<template>
  <div>
    <h1>Todos</h1>
    <input v-model="newTodo" placeholder="Todoooo ?" />
    <button @click="addTodo">Add Todo</button>
    <ul >
      <li id="x" v-for="todo in todos" :key="todo.id " >
        {{ todo.text }}
        <button  @click="deleteTodo(todo)">X</button>
      </li>
    </ul>
    <router-link to="/deleted">Deleted Todos</router-link>
    <router-view v-if="showDeletedView" :deletedTodos="deletedTodos"></router-view>
   
  </div>
</template>

<script>
import DeletedView from './views/DeletedView.vue';
export default {
  component: {
   DeletedView
  },
  data() {
    return {
      newTodo: "",
      todos: [],
      deletedTodos: [],
      showDeletedView:false
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() ) {
        this.todos.push({
          text: this.newTodo,
        });
        this.newTodo = "";
      }
    },
    deleteTodo(todo) { 

     const index = this.todos.indexOf(todo);
      if (index !== -1) {
        this.deletedTodos.push(todo);
        this.todos.splice(index, 1);
        this.showDeletedView = true;
      }
     
  
    },
  },
};
</script>
<style>
* {
  background: rgb(255, 255, 255);
}

</style>