import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      newTodo: '',
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      deletedTodos:JSON.parse(localStorage.getItem('deletedTodos')) || [],
    };
  },
  mutations: {
    addTodo(state,newTodo) {
        state.todos.push({ text: newTodo, deleted: false });
        localStorage.setItem('todos', JSON.stringify(state.todos));
        
      
    },
    deleteTodo(state, todo) {
      state.deletedTodos.push(todo);
      state.todos = state.todos.filter((todoItem) => todoItem !== todo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
      localStorage.setItem('deletedTodos', JSON.stringify(state.deletedTodos));
    }, 
    setTodos(state, todos) {
      state.todos = todos;
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    
  },
  actions: {
    postTodo({ state, commit }) {
      if (state.newTodo.trim()) {
        axios
          .post('http://localhost:3000/todos', {
            text: state.newTodo,
            deleted: false,
          })
          .then((response) => {
            commit('addTodo');
            console.log('Todo added:', response.data);
          })
          .catch((error) => {
            console.error('Error adding todo:', error);
          });
      }
    },
    fetchTodos({ commit }) {
      axios
        .get('http://localhost:3000/todos')
        .then((response) => {
          commit('setTodos', response.data);
          console.log(' Fetched:', response.data);
        })
        .catch((error) => {
          console.error('Error fetching todos:', error);
        });
    },
  },
});

export default store;
