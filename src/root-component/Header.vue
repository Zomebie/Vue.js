<template>
  <header>
    <div>
      <h1>{{title}}</h1>
    </div>

    <div id="btn-wrapper">
      <button id="login-btn">
        <router-link to="/login">login</router-link>
      </button>
      <button id="logout-btn">
        <router-link to="/logout">logout</router-link>
      </button>
    </div>

    <router-view name="login"></router-view>
  </header>
</template>
    

<script>
export default {
  data() {
    return {
      title: "Jello's Sentimental Robot"
    };
  }
};
</script>

<style>
header {
  background: #ffffff;
  background-color: rgba(255, 255, 255, 0.3);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8f8ff;
  text-shadow: 4px 2px 2px grey;
}

header div:first-child {
  margin-left: 30px;
  margin-right: auto;
}

header #btn-wrapper {
  margin-right: 30px;
}

button {
  font-size: 1em;
  border: 0;
  cursor: pointer;
  font-family: "Love Ya Like A Sister", cursive;
}
</style>
