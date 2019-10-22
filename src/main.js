import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
Vue.config.productionTip = false;
Vue.prototype.axios=axios;
axios.defaults.baseURL="http://127.0.0.1:4000/"
// 引入elementui
import ElementUI from "element-ui"
// 引入所有样式
import 'element-ui/lib/theme-chalk/index.css';
// 使用elementui
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
