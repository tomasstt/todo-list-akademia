   <template>
    <div class="container">
      <h1>Edit Todo</h1>
      
      <input v-model="editedText" placeholder="Edit todooo" />
      <button @click="saveChanges">Save Edit</button>
    </div>
  </template>
  
  <script>
  import { ref  } from 'vue';
  import { useStore } from '../store';

  export default {
    props: {
      todo: {
        type: Object,
        required: true,
      },
    },
    methods: {
  saveChanges() {
    this.store.updateTodoText(this.selectedTodo.id, this.editedTodoText);
  },
},


    setup(props) {
      const editedText = ref(props.todo.text);
      const store = useStore();
      const saveChanges = () => {
        props.todo.text = editedText.value;
      
      store.updateTodoText(props.todo.id, editedText.value);
      };
  
      return {
        editedText,
        saveChanges,
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    font-weight: 700;
    font-size: 40px;
    font-family: 'Druk Wide Bold', sans-serif;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex;
  }

  .button {
    margin-top: 10px;
    align-self: flex-end;
  }

  </style>
