import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import DeletedView from '../views/DeletedView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todo',
      component: TodoView
    },
    {
      path: '/deleted',
      name: 'deleted',
      component: DeletedView
    }
  ]
})

export default router
