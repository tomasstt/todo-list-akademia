<template>
  <div class="container-m">
    <img class="first" src="./assets/blob2.svg" alt="blob">
    <img class="sec" src="./assets/blob1.svg" alt="blob">
    <h1><strong>The</strong> Todos</h1>
    <input v-model="newTodo" @keydown.enter="addTodo" placeholder="Todoooo?" />
    <button @click="addTodo">Add Todo</button>
    <button @click="fetchTodos">FETCH TODOS</button>
    <button @click="postTodo">POST TODOS</button>
    <TodoList v-for="todo in todos" :key="todo.id"  :todo="todo" @delete="deleteTodo"  @edit="selectTodo" />
    <DetailsView :todo="selectedTodo" @update="updateTodo" v-if="selectedTodo" />
    <div class="count">{{ unCount }} Unfinished Todos</div>
    
    <router-link class="router" to="/deleted">Deleted Ones</router-link>
    <router-view></router-view>
  </div>        
  <link href="https://fonts.cdnfonts.com/css/thei-personal-use" rel="stylesheet">
  <link href="https://fonts.cdnfonts.com/css/druk-wide-bold" rel="stylesheet">
</template>


<script>
import TodoList from './components/TodoList.vue';
import DetailsView from './views/DetailsView.vue';
import { useStore } from './store';

export default {
  components: {
    TodoList,
    DetailsView
  },
  data() {
    return {
      store: null,
      selectedTodo: null,
      newTodo: '',
    };
  },
  computed: {
    todos() {
      return this.store.getTodos;
    },
    nonDeletedTodos() {
      return this.store.getUnDeletedTodos;
    },
    unCount() {
      return this.store.getUnfinishedCount;
    },   
     deletedTodos() {
      return this.store.getDeletedTodos;
    },
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.store.addTodo({
          text: this.newTodo,
          completed: false,
        });
        this.newTodo = '';
      }
    },
    deleteTodo(todo) {
      this.store.deleteTodo(todo);
    },
    selectTodo(todo) {
      this.selectedTodo = todo;
    },
    updateTodo({ todo, text }) {
      this.store.editTodo({ todo, text });
      this.selectedTodo = null;
    },
    postTodo() {
      this.store.postTodo();
    },
    fetchTodos() {
      this.store.fetchTodos();
    },
  },
  created() {
    this.store = useStore();
  },
};


</script>
<style >
body{
   background: rgb(0, 0, 0);
   overflow: hidden;
}
.first {
  position: absolute;
  top: -1cm;
  left: -20%;
z-index: -10;
  width: 100%;
  
 background: transparent;
 overflow: hidden;
  

}

.count  {
  
  display: flex;
  font-family: 'Druk Wide Bold', sans-serif;
  place-content: center;
  margin-top: 16px;
 color: rgb(255, 206, 45);

}





.sec{
  position: absolute;
  bottom: 0;
  
  right: -19cm;
  overflow: hidden;
z-index: -10;
  width: 80%;
 background: transparent;
}

li {
  font-family: 'Druk Wide Bold', sans-serif;}
strong{
  font-family: 'Thei Personal Use', sans-serif;
  font-size: 100px;
  
}
ul{
  width: 100%;
}
.router{
  margin-top: 30px;
}

a{
  text-decoration: none;
  font-weight: bold;
  font-size: 19px;
  display: flex;
color: black;
  place-content: center;
  font-family: 'Druk Wide Bold', sans-serif;
}

h1{
  font-weight: 700;
font-size: 70px;
font-family: 'Druk Wide Bold', sans-serif;
display: flex;

  place-content: center;
  align-content: center;
  align-items: center;

}

.container-m {
display: grid;

  place-content: center;
  align-content: center;
  align-items: center;
  height: 90vh; 
max-width: 100%;
}
input{
  background: transparent;
  border: 1px solid;
  font-family: 'Druk Wide Bold', sans-serif;
}
::placeholder{
  color: black;
  display: grid;
  background: transparent;
  text-align: center;
  
}



li {
  margin-bottom: 3px;
  display: flex;
  align-items: center;
}

span {
  flex-grow: 1;
}

button {
 



  margin-top: 10px;

max-width: 100%;
border: solid 2px;
background: transparent;
border-radius: 20px;
font-family: 'Druk Wide Bold', sans-serif;
cursor: pointer;
}



@media (max-width: 1400px){
  .first {
  position: absolute;
  top: 0;
  left: -10%;
z-index: -10;
  width: 200%;
  
 background: transparent;
 overflow: hidden;
  

}

.sec{
  position: absolute;
  bottom: -1cm;
  
  right: -0cm;
  overflow: hidden;
z-index: -10;
  width: 160%;
 background: transparent;
}

strong{
  font-family: 'Thei Personal Use', sans-serif;
  font-size: 100px;
  
}
h1{
  font-weight: 700;
font-size: 40px;
font-family: 'Druk Wide Bold', sans-serif;
display: flex;

  place-content: center;
  align-content: center;
  align-items: center;

}
}

@media (max-width: 1900px){
  .first {
  position: absolute;
  top: 0;
  left: 10%;
z-index: -10;
  width: 180%;

 background: transparent;
 overflow: hidden;
  

}

.sec{
  position: absolute;
  bottom: -1cm;
  
  right: -0cm;
  overflow: hidden;
z-index: -10;
  width: 180%;
 background: transparent;
}

strong{
  font-family: 'Thei Personal Use', sans-serif;
  font-size: 100px;
  
}
h1{
  font-weight: 700;
font-size: 40px;
font-family: 'Druk Wide Bold', sans-serif;
display: flex;

  place-content: center;
  align-content: center;
  align-items: center;

}
}


@media (max-width: 1000px){
  .first {
  position: absolute;
  top: 0;
  left: 10%;
z-index: -10;
  width: 190%;

 background: transparent;
 overflow: hidden;
  

}

.sec{
  position: absolute;
  bottom: -1cm;
  
  right: -0cm;
  overflow: hidden;
z-index: -10;
  width: 120%;
 background: transparent;
}

strong{
  font-family: 'Thei Personal Use', sans-serif;
  font-size: 100px;
  
}
h1{
  font-weight: 700;
font-size: 40px;
font-family: 'Druk Wide Bold', sans-serif;
display: flex;

  place-content: center;
  align-content: center;
  align-items: center;

}
}
</style>