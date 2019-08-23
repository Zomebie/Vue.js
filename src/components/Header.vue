<template>
  <header>
    <h1>{{headerTitle}}</h1>
    <div>
      <span>
        Signed in as
        <span id="login-id">{{loginId}}</span>
      </span>
      <div>
        <button id="logout-btn" @click="logoutConfirm">
          <i class="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </div>
  </header>
</template>
    
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      headerTitle: ""
    };
  },

  methods: {
    ...mapGetters(["getUserId"]),
    ...mapActions(["logout"]),

    logoutConfirm() {
      if (confirm("로그아웃 하시겠습니까?")) {
        this.logout(this.loginId);
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
header {
  position: sticky;
  height: 100px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: teal;
}

header h1 {
  margin: 0 0 0 50px;
}

header > div {
  display: flex;
  align-items: center;
  margin-left: auto;
}

header > div #login-id {
  font-weight: 700;
}

header > div > div {
  margin: 0 50px 0 20px;
}

header > div #logout-btn {
  border: none;
  outline: none;
  font-size: 20px;
  color: #fff;
  background: none;
}
</style>
