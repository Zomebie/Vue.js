import Vue from "vue";
import store from "./vuex/store";
import router from "./router/vue-router";
import App from "./App.vue";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
