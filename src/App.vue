<template>
  <div id="app">
    <Home v-if="isAuth"></Home>
    <Login v-else></Login>
  </div>
</template>

<script>
import Login from "./root-component/Login";
import Home from "./root-component/Home";
import { mapGetters } from "vuex";

export default {
  name: "app",

  methods: {
    ...mapGetters(["getIsAuth"])
  },
  components: {
    Home,
    Login
  },
  computed: {
    isAuth() {
      return this.getIsAuth();
    }
  }
};
</script>

<style>
#app {
  font-family: "Love Ya Like A Sister", cursive;
  position: relative;
}
</style>
