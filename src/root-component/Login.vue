<template>
  <form @submit.prevent="onSubmit">
    <fieldset id="login-form-fieldset">
      <header>
        <span>Sign In</span>
      </header>
      <label>
        <span>ID</span>
        <input type="text" v-model="id" required />
      </label>
      <label>
        <span>PASSWORD</span>
        <input type="password" v-model="password" required />
      </label>
      <button type="submit">OK</button>
    </fieldset>
  </form>
</template>
<script>
import { mapActions, mapState, mapGetters } from "vuex";
import client from "../db/connection";
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
      // let res = await this.login({ userId: this.id, password: this.password });
      // if (res) {
      //   alert("login success ");
      //   this.$router.push("/");
      //   return;
      // }
      // alert("login failed");
      // this.id = "";
      // this.password = "";
      // vuex
    }
  }
};
</script>
<style>
#login-form-fieldset {
  position: absolute;
  left: 50%;
  width: 15vw;
  display: flex;
  border: 3px solid gold;
  border-radius: 40px;
  font-size: 1.2em;
}
#login-form-fieldset header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  width: 100%;
  height: 7vh;
}
#login-form-fieldset label {
  margin-top: 30px;
}
#login-form-fieldset input {
  background: #d3d3d3;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 5vh;
  font-family: "Love Ya Like A Sister", cursive;
}
#login-form-fieldset input:focus {
  outline: none;
  color: goldenrod;
}
#login-form-fieldset button {
  width: 100%;
  height: 5vh;
  border: 2px solid blanchedalmond;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Love Ya Like A Sister", cursive;
  margin-top: 30px;
}

#login-form-fieldset button:active {
  outline: none;
}
</style>