<template>
  <div id="app">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad veritatis
      iste, molestias maiores autem temporibus consequatur sed voluptatum harum
      laborum! Exercitationem commodi, praesentium sapiente aspernatur sequi
      iste expedita a.
    </p>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
