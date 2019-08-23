<template>
  <div>
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../Header.vue";
import Contents from "../Contents.vue";
import Footer from "../Footer.vue";

export default {
  components: {
    Header,
    Contents,
    Footer
  }
};
</script>
