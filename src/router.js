import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// 引入登录模块
import login from "./components/login"
// 引入注册模块
import register from "./components/register"
// 引入找回密码模块
import findUpwd from "./components/findUpwd"
Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // 登录路径
    {path:"/login",name:"login",component:login},
    {path:"/register",name:"register",component:register},
    {path:"/findUpwd",name:"findUpwd",component:findUpwd},
  ]
});
