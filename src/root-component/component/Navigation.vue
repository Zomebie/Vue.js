<template>
  <nav>
    <ul id="nav-wrapper">
      <router-link
        tag="li"
        v-for="list in lists"
        v-bind:key="list.id"
        v-bind:to="list.link"
      >{{list.name}}</router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          id: 1,
          name: "Introduce",
          class: "clicked",
          link: "/"
        },
        {
          id: 2,
          name: "Daily",
          class: "",
          link: "/daily"
        },
        {
          id: 3,
          name: "To buy list",
          class: "",
          link: "/buy"
        },
        {
          id: 4,
          name: "To do list",
          class: "",
          link: "/do"
        }
      ]
    };
  }

  // methods: {
  //   clickedEffect: function({ target }) {
  //     var alreadyClicked = document.getElementsByClassName("clicked");
  //     var array = [...alreadyClicked];
  //     array.forEach(e => {
  //       e.classList = "";
  //     });
  //     target.classList.toggle("clicked");
  //   }
  // }
};
</script>
<style>
nav {
  width: 10vw;
  height: 100vh;
}

nav ul {
  padding: 0 0 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ffe4e1;
  text-shadow: 4px 2px 2px #778899;
  border-right: 1px solid gold;
  font-size: 1.2em;
  margin: 0;
}
li {
  list-style-position: inside;
  padding-bottom: 10px;
  padding-left: 10px;
  cursor: pointer;
}

li.router-link-exact-active {
  color: #ffc0cb;
}
</style>