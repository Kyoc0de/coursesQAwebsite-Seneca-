import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/UserPage/Login'
import Home from "../components/Home";
import Index from "../components/IndexPage/Index";
import Post from "../components/IndexPage/Post";
import FirstPage from "../components/test/FirstPage";
import TimeLine from "../components/test/TimeLine";


Vue.use(VueRouter)

const routes = [
  {
    path:'/login', component: Login
  },
  {
    path: '/home', component: Home
  },
  {
    path: '/', component: Index
  },
  {
    path: '/post', component: Post
  },
  {
    path: '/test', component: FirstPage
  },
  {
    path: '/test1', component: TimeLine
  }
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to,from,next)=>{
//   if(to.path === '/login') return next()
//   const tokenStr = window.sessionStorage.getItem('token')
//   if(!tokenStr) return next('/login')
//   next()
// })

export default router
