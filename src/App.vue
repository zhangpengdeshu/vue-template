<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home', params: { age: 18 } }">Home</router-link> |
      <router-link :to="{ name: 'about', params: { age: 16 } }">About</router-link>
    </div>
    <router-view/>
    <router-view name="email"/>
    <router-view name="tel"/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
