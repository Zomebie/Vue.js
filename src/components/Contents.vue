<template>
  <div id="contents">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>

<style>
#contents {
  height: 100vh;
  display: flex;
}
</style>
