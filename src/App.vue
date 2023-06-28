<template>
  <NavBarComp/>
  <FooterComp/>
  <router-view/>
  
</template>

<script>

import NavBarComp from '@/components/NavBarComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default {
  components: {NavBarComp, FooterComp}
}

</script>

<style>

body {
  background-image: url(https://i.postimg.cc/qgVrfBJC/Football-pitch-maintenance-Stirling-Albion.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  max-width: 100%;
}

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
}

nav a.router-link-exact-active {
  color: #42b983;
}



</style>
