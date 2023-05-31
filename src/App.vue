<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Books">Books</router-link> |
    <router-link :to="{name: 'signup'}">Signup</router-link>
  </nav>
  <button class="btn btn-success" @click="Back()">Back</button>
  <router-view/>
</template>

<script>
export default {
  methods:{
    Back(){
      this.$router.go(-1)
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

}

nav a.router-link-exact-active {
  background: #008cc4;
  color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  text-decoration: none;
}
</style>
