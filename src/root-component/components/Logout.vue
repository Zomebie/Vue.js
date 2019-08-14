<template>
  <div id="logout">
    <p>logout</p>
    <button id="logoutConfirm" @click="logoutConfirm">[OK]</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["logout"]),

    async logoutConfirm() {
      let res = await this.logout(this.$store.getters.getUserId);
      if (!res) {
        alert("logout");
        this.$router.push("/");
      }
    }
  }
};
</script>
<style>
div#logout {
  position: absolute;
  top: 100px;
  right: 0;
  z-index: 1;
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  display: flex;
  flex-direction: column;
}
#logout p {
  margin-bottom: 10px;
}
</style>