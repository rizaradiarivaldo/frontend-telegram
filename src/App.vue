<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap');
* {
  font-family: 'Rubik', sans-serif;
}

  @media (min-width: 576px) {
    html, body {
    max-width: 100%;
    overflow-y: hidden;
    }
  }
#app {
  /* font-family: 'Rubik', sans-serif; */
  /* font-family: Avenir, Helvetica, Arial, sans-serif;  */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FAFAFA;;
  height: 100vh;
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
