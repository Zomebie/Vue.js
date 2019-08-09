<template>
  <form id="login-form" method="post" action="/login">
    <header>LOGIN</header>
    <div id="username">
      <input type="text" name="username" placeholder="Username" required />
    </div>
    <div id="password">
      <input type="password" name="password" placeholder="Password" required />
    </div>
    <button type="submit">[OK]</button>
  </form>
</template>
<script>
export default {};
</script>
<style>
form {
  position: absolute;
  top: 100px;
  right: 0;
  z-index: 1;
  width: 300px;
  height: 300px;
  /* border: 1px solid gold;
  border-radius: 10px; */
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

#username,
#password {
  width: 100%;
  background-color: #e6e6e6;
  border-radius: 3px;
  margin-bottom: 8px;
}
input {
  background: transparent;
  border: none;
  font-family: "Love Ya Like A Sister", cursive;
}
button {
  margin: 0;
  padding: 0;
}
</style>