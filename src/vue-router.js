import Vue from "vue";
import VueRouter from "vue-router";
import IntroSection from "./root-component/components/IntroSection.vue";
import DailySection from "./root-component/components/DailySection.vue";
import ToBuySection from "./root-component/components/ToBuySection.vue";
import ToDoSection from "./root-component/components/ToDoSection.vue";

import Register from "./root-component/components/Register.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: IntroSection },
  { path: "/daily", component: DailySection },
  { path: "/buy", component: ToBuySection },
  { path: "/do", component: ToDoSection },
  { path: "/register", components: Register }
];

export default new VueRouter({
  routes
});
