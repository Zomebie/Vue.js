<template>
  <div id="contents">
    <Navigation></Navigation>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>



<script>
import Navigation from "./component/Navigation.vue";
import IntroSection from "./component/IntroSection.vue";

export default {
  name: "contents",
  components: {
    Navigation,
    IntroSection
  }
};
</script>
<style>
#contents {
  display: flex;
}
section {
  padding: 30px;
  font-size: 1em;
  width: 90vw;
}
</style>
