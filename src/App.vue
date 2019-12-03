<template>
  <v-app>
    <!-- Navigation -->
    <Navigation></Navigation>

    <!-- Parallax begins (no framework) -->
    <div class="fixed-parallax">
      <div class="image one"></div>
      <div class="image two"></div>
      <div class="content">
        <h1>Content between parallax items</h1>
        <p>Aenean congue urna magna, ut auctor libero eleifend eu. Phasellus consequat tortor et augue imperdiet tempor. Fusce eu elementum nibh, sed porta lorem. Donec sodales malesuada rhoncus. Aliquam non euismod nisl. Phasellus pulvinar libero felis, eget elementum lectus viverra faucibus. Nam ligula lorem, malesuada ac sem et, porta sodales eros. In vulputate felis ut hendrerit tincidunt. Suspendisse faucibus nec neque quis pharetra. In mattis nec dolor ac mattis. Aenean ut fringilla purus. Aliquam et leo id turpis tempor volutpat.</p>
      </div>
      <div class="image three"></div>
      <div class="image four"></div>
    </div>

    <!-- Animated rocket -->
    <AnimatedRocket></AnimatedRocket>
    <Footer></Footer>
  </v-app>
</template>

<script>
import AnimatedRocket from "./components/AnimatedRocket";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    AnimatedRocket,
    Navigation,
    Footer
  },
  props: {
    source: String
  }
};
</script>

<!-- AMP framweork style -->

<style amp custom>
</style>

<!-- SCSS style -->
<style lang="scss">
#app {
  margin: 0;
}

.fixed-parallax {
  .image {
    // basic parallax class
    position: relative;
    height: 100vh;
    background-attachment: fixed; // key
    background-position: center top;
    background-size: cover;

    // individual parallax images
    &.one {
      background-image: url("https://raw.githubusercontent.com/chrispxpx/codepen-poc-images/master/pxpx-rocket-black.png");
    }
    &.two {
      background-image: url("https://raw.githubusercontent.com/chrispxpx/codepen-poc-images/master/pxpx-rocket-black-invert.png");
    }
    &.three {
      background-image: url("https://raw.githubusercontent.com/chrispxpx/codepen-poc-images/master/pxpx-rocket-orange.png");
    }
    &.four {
      background-image: url("https://raw.githubusercontent.com/chrispxpx/codepen-poc-images/master/pxpx-rocket-orange-invert.png");
    }
  }
}

.content {
  text-align: center;
  padding: 50px 30px;
  font-size: 1.25rem;
  color: #fff;
  background-color: rgba(240, 130, 20, 0.75);
}
</style>