import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpView.vue')
  },
  {
    path: '/classes',
    name: 'classes',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClassList.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/classes/:classId/students',
    name: 'students',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentsList.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/classes/:classId/students/:studentId',
    name: 'student',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/StudentDetailsContainer.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/login')
  }
  next()
})

export default router
