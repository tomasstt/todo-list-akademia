<template>
  <div>
    <h1>Todos</h1>
    <input v-model="newTodo" placeholder="Todoooo ?" />
    <button @click="addTodo">Add Todo</button>
    <ul >
      <li id="x" v-for="todo in todos" :key="todo.id " >
        {{ todo.text }}
        <button @click="deleteTodo(todo)">Delete</button>
      </li>
    </ul>
    <router-link to="/deleted">Deleted Todos</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [],
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
     todo.deleted = true
     const index = this.todos.indexOf(todo);
    if (index > -1) {
    this.todos.splice(index, 1);
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