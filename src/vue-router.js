import Vue from "vue";
import VueRouter from "vue-router";
import IntroSection from "./root-component/component/IntroSection.vue";
import DailySection from "./root-component/component/DailySection.vue";
import ToBuySection from "./root-component/component/ToBuySection.vue";
import ToDoSection from "./root-component/component/ToDoSection.vue";
import Login from "./root-component/component/Login.vue";
import Logout from "./root-component/component/Logout.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: IntroSection },
  { path: "/daily", component: DailySection },
  { path: "/buy", component: ToBuySection },
  { path: "/do", component: ToDoSection },
  { path: "/login", components: { login: Login } },
  { path: "/logout", components: { login: Logout } }
];

export default new VueRouter({
  routes
});
