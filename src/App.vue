<template>
  <div id="app">
    <Header></Header>

    <Article></Article>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./root-component/Header.vue";
import Article from "./root-component/Article.vue";
import Footer from "./root-component/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Article,
    Footer
  }
};
</script>

<style>
#app {
  /* display: flex;
  flex-direction: column; */
  /* height: 100vh; */
  margin: 0 auto;
  font-family: "Love Ya Like A Sister", cursive;
}
</style>
