<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body{
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
  overflow-scrolling: touch;
  -webkit-overflow-scrolling: touch;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  font-size: 14px;
}
</style>
