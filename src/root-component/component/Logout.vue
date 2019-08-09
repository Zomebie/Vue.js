<template>
  <div id="logout">
    <p>logout</p>
    <button>[OK]</button>
  </div>
</template>
<script>
// session out
export default {};
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