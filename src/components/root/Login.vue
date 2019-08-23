<template>
  <form @submit.prevent="onSubmit">
    <label>
      <span>ID</span>
      <input type="text" v-model="id" required />
    </label>

    <label>
      <span>PASSWORD</span>
      <input type="password" v-model="password" required />
    </label>

    <input type="submit" value="Login" />
  </form>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: "",
      password: ""
    };
  },

  methods: {
    ...mapActions(["login"]),

    async onSubmit() {
      let loginAuthResponse = await this.login({
        userId: this.id,
        password: this.password
      });

      if (loginAuthResponse) {
        alert("login success");
        this.$router.push("/");
        return;
      }

      alert("login failed");
      this.id = "";
      this.password = "";
    }
  }
};
</script>

<style>
form {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #777777;
  font-size: 16px;
  transform: translate(-50%, -50%);
}

form label {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form span {
  margin-bottom: 10px;
}

form input {
  width: 300px;
  height: 30px;
  padding: 10px 19px 11px;
  border: 1px solid #dddddd;
  border-radius: 25px;
}

form input:focus {
  outline: none;
}

form input[type="submit"] {
  box-sizing: content-box;
  background-color: #1e73be;
  color: #fff;
  font-size: 16px;
}
</style>