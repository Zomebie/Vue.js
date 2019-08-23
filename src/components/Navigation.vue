<template>
  <nav>
    <ul>
      <router-link tag="li" v-for="list in lists" :key="list.id" :to="list.link">{{list.name}}</router-link>
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
          name: "content-1",
          class: "clicked",
          link: "/"
        },
        {
          id: 2,
          name: "content-2",
          class: "",
          link: "/content/2"
        },
        {
          id: 3,
          name: "content-3",
          class: "",
          link: "/content/3"
        },
        {
          id: 4,
          name: "content-4",
          class: "",
          link: "/content/4"
        }
      ]
    };
  }
};
</script>

<style>
nav {
  border-right: 1px solid #dddddd;
}

nav > ul {
  margin: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  list-style: none;
}

nav > ul > li {
  list-style-position: inside;
  padding-bottom: 10px;
  padding-left: 10px;
  cursor: pointer;
}

nav > ul > li.router-link-exact-active {
  font-weight: 700;
}
</style>