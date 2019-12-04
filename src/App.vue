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
  background-image: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-523367172-1568809023.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>