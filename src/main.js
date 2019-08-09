import Vue from "vue";
import router from "./vue-router";
import store from "./vuex/store";
import App from "./App.vue";

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
