<template>
  <div id="home">
    <Header></Header>
    <Article></Article>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Article from "./Article.vue";
import Footer from "./Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Article,
    Footer
  }
};
</script>

<style>
</style>