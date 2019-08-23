import Vue from "vue";
import VueRouter from "vue-router";
import IntroSection from "../components/IntroSection.vue";
import DailySection from "../components/DailySection.vue";
import ToBuySection from "../components/ToBuySection.vue";
import ToDoSection from "../components/ToDoSection.vue";
import Register from "../components/Register.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: IntroSection },
  { path: "/content/2", component: DailySection },
  { path: "/content/3", component: ToBuySection },
  { path: "/content/4", component: ToDoSection },
  { path: "/register", components: Register }
];

export default new VueRouter({
  mode: "history",
  routes
});
