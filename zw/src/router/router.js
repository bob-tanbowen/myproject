import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import image from '../components/lvpai/image'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/image',component: image },
    {path: '/',component: HelloWorld}
  ]
})
