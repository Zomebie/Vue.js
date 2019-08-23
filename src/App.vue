<template>
  <div id="app">
    <Home v-if="isAuth"></Home>
    <Login v-else></Login>
  </div>
</template>

<script>
import Login from "./components/root/Login";
import Home from "./components/root/Home";
import { mapGetters } from "vuex";

export default {
  components: {
    Home,
    Login
  },

  methods: {
    ...mapGetters(["getIsAuth"])
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
  position: relative;
  height: 100vh;
  font-family: "Rajdhani", Arial, sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}
</style>
