import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/zhi/Home.vue'
import About from './components/zhi/About.vue'
import Login from './components/zhi/login.vue'
import Zhuche from './components/zhi/zhuche.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/zhuche', component: Zhuche },
  { path: '/login', component: Login },
  { path: '/about', component: About,
    children: [
      
	
    ],}
]
const router = createRouter({
	history: createWebHistory(),
	routes,
  })
  
  export default router