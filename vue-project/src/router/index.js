import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import compu from '../components/ComputedExam.vue'
import DataBinding from '../components/DataBindingList.vue'
import EventClick from '../components/EventClick.vue'
import jinju from '../components/JinjuExam.vue'
import gimhae from '../components/GimHae.vue'
import seoul from '../components/SeoulExam.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path : '/computedExam',
    name : 'computedExam',
    component : compu
  },
  {
    path : '/DataBinding',
    name : 'DataBinding',
    component : DataBinding
  },
  {
    path : '/EventClick',
    name : 'EventClick',
    component : EventClick
  },
  {
    path : '/jinju',
    name : 'jinju',
    component : jinju
  },
  {
    path : '/gimhae',
    name : 'gimhae',
    component : gimhae
  },
  {
    path : '/seoul',
    name : 'seoul',
    component : seoul
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
