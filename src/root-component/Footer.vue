<template>
  <footer>
    <p>{{info}}</p>
    <p>{{info2}}</p>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      info: "created by Jello Cho",
      info2: "Vue.js"
    };
  }
};
</script>
<style>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  color: gray;
  font-size: 1.2em;
}
p {
  display: flex;
  margin: 0;
}
</style>