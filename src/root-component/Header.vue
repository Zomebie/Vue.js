<template>
  <header id="home-header">
    <h1>{{title}}</h1>

    <div id="login-id">
      <span>{{loginId}} 님 안녕하세요.</span>
      <div id="logout-wrapper">
        <button id="logout-btn" @click="logoutEvent">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
    <!-- <div id="before-login-wrapper" v-else>
      <button id="login-btn">
        <router-link to="/login">Sign In</router-link>
      </button>

      <button id="register-btn">
        <router-link to="/register">Sign Up</router-link>
      </button>
    </div>-->

    <router-view name="logoutFormView"></router-view>
  </header>
</template>
    

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      title: "HEADER"
    };
  },

  methods: {
    ...mapGetters(["getUserId"]),
    ...mapActions(["logout"]),

    async logoutEvent() {
      let confirmRes = confirm("로그아웃 하시겠습니까?");

      if (confirmRes) {
        console.log(this.loginId);

        let logoutRes = await this.logout(this.loginId);

        if (!logoutRes) {
          alert("로그아웃 되었습니당!");
        }
      }
    }
  },
  computed: {
    loginId() {
      return this.getUserId();
    }
  }
};
</script>

<style>
header#home-header {
  background: #ffffff;
  position: sticky;
  top: 0;
  height: 100px;
  display: flex;
  align-items: center;
  color: #f8f8ff;
  text-shadow: 4px 2px 2px grey;
}
#home-header h1 {
  margin: 0 0 0 40px;
}
#login-id {
  display: flex;
  align-items: center;
  margin-left: auto;
  color: black;
  text-shadow: none;
  font-size: 1.2em;
}
#logout-wrapper {
  margin: 0 30px 0 20px;
}

#logout-btn {
  border: none;
  font-size: 1.2em;
  color: black;
}
</style>
