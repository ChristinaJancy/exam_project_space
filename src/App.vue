<template>
  <v-app id="app">
    
      <!-- Navigation -->
      <Navigation></Navigation>

      <router-view />

      <Footer></Footer>
    
  </v-app>
</template>

<script>
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  props: {
    source: String
  }

};

</script>


<style>
#app {
  margin: 0;
  background-image: url("../src/assets/background2.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top:100px;
}
</style>