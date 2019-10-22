import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import ad from '../components/project/adversion.vue'
import chat from '../components/project/chat.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/chat',
      name: 'chat',
      component:chat
    },
    {
      path:'/ad',
      name: 'ad',
      component:ad
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: '',
      component: Home
    }
  ]
})
