import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import signupview from '../views/SignupView.vue'
import BookShow from '../views/Books/BooksView.vue'
import BookDetail from '../views/Books/BookDetailView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: signupview
  },
  {
    path: '/books',
    name: 'BookShow',
    component: BookShow
  },
  {
    path: '/books/:id',
    name: 'BookDetail',
    component: BookDetail,
    props:true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/all-books',
    redirect:'/books'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
