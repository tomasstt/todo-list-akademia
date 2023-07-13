import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore('store',{
  
  state() {
    return {
      newTodo: '',
      todos: JSON.parse(localStorage.getItem('todos')) || [],
      deletedTodos: JSON.parse(localStorage.getItem('deletedTodos')) || [],
    };
  }, 

  actions: {
    addTodo({text}) {
        const newTodo = {
          isLoading: false,
          text: text,
          deleted: false,
          completed: false,

        }; 
        this.todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(this.todos));
        this.newTodo = ''; 
      
    },
    
    editTodo({ todo, text }) {
      const index = this.todos.findIndex((t) => t.id === todo.id);
      if (index !== -1) {
        this.todos[index].text = text;
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    },
    updateTodoText(todoId, newText) {
      const todo = this.todos.find((t) => t.id === todoId);
      if (todo) {
        todo.text = newText;
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    },

    saveChanges() {
      const selectedTodo = this.selectedTodo;
      if (selectedTodo) {
        selectedTodo.text = this.editedTodoText;
        this.selectedTodoId = null;
        this.editedTodoText = '';
      }
    },
  
  
    deleteTodo(todo) {
      const index = this.todos.indexOf(todo);
   {
        this.todos.splice(index, 1);
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
      this.deletedTodos.push(todo);
      localStorage.setItem('deletedTodos', JSON.stringify(this.deletedTodos));
    },
    
    setTodos(todos) {
      this.todos = todos;
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    restoreTodoFromDeleted(todo) {
      const index = this.deletedTodos.findIndex((t) => t.id === todo.id);
      if (index !== -1) {
        const restoredTodo = this.deletedTodos.splice(index, 1)[0];
        restoredTodo.deleted = false; // Ensure 'deleted' property is present and set it to false
        this.todos.push(restoredTodo);
        localStorage.setItem('deletedTodos', JSON.stringify(this.deletedTodos));
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    },
    
    
    
    
    async postTodo() {
      if (this.newTodo.trim()) {
        try {
          this.isLoading = true;
          const response = await axios.post('http://localhost:3000/todos', {
            text: this.newTodo,
            deleted: false,
          });
          this.addTodo();
          console.log('Todo added:', response.data);
        } catch (error) {
          console.error('Error adding todo:', error);
        }finally {
          this.isLoading = false; 
        }

      }
    },
    async fetchTodos() {
      try {
        this.isLoading = true;
        const response = await axios.get('http://localhost:3000/todos');
        this.setTodos(response.data);
        console.log('Fetched:', response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }finally {
        this.isLoading = false; 
      }

    },
  },
});
