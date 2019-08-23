<template>
  <form @submit.prevent="onSubmit">
    <header>Sign Up</header>
    <span id="sign-up-name-tag">name</span>
    <div id="username">
      <input type="text" v-model="uid" required />
    </div>

    <span id="sign-up-pass-tag">password</span>
    <div id="password">
      <input type="password" v-model="password" required />
    </div>
    <button type="submit">[Will you sign up?]</button>
    <aside id="registered-wrapper">
      <div>
        <span>{{registeredIdTag}}</span>
        <span id="registered-id">{{registeredId}}</span>
      </div>
      <div>
        <span>{{registeredSnTag}}</span>
        <span id="registered-sn">{{registeredSn}}</span>
      </div>
    </aside>
  </form>
</template>

<script>
import api from "../api/user";

export default {
  data() {
    return {
      uid: "",
      password: "",
      registeredId: "",
      registeredSn: "",
      registeredIdTag: "",
      registeredSnTag: ""
    };
  },

  methods: {
    async onSubmit() {
      const { id, sn } = await api.register(this.uid, this.password);
      this.registeredIdTag = "ID registered : ";
      this.registeredSnTag = "Serial Number registered : ";
      this.registeredId = id;
      this.registeredSn = sn;
    }
  }
};
</script>

<style>
form {
  position: absolute;
  top: 100px;
  right: 0;
  z-index: 1;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
}

form header {
  font-size: 30px;
  color: #403866;
  text-align: center;
  width: 100%;
  height: 50px;
}

span#sign-up-name-tag,
#sign-up-pass-tag {
  color: black;
  text-shadow: none;
}

#username,
#password {
  width: 100%;
  background-color: #e6e6e6;
  border-radius: 3px;
  margin-bottom: 8px;
}

aside#registered-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  color: black;
  text-shadow: none;
}
</style>