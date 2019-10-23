import Vue from "vue";
import Router from "vue-router";
// 引入登录模块
import Login from "./components/Login";
// 引入注册模块
import Register from "./components/Register";
// 引入找回密码模块
import FindUpwd from "./components/FindUpwd";
import Home from "./views/Home";
import Ad from "./components/Adversion";
import Chat from "./components/Chat";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // 登录路径
    { path: "/", name: "home", component: Home },
    { path: "/home", name: "home", component: Home },
    { path: "/login", name: "login", component: Login },
    { path: "/register", name: "register", component: Register },
    { path: "/findUpwd", name: "findUpwd", component: FindUpwd },
    { path: "/ad", name: "ad", component: Ad },
    { path: "/chat", name: "chat", component: Chat }
  ]
});
