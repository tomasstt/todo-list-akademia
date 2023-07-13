import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import DeletedView from '../views/DeletedView.vue'
import DetailsView from '../views/DetailsView.vue'

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
      component: DeletedView,
      props: (route) => ({ deletedTodos: route.query.deletedTodos }),


    },{
      path: '/edit',
      name: 'details',
      component: DetailsView
    },
  ]
})

export default router