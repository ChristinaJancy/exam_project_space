<template>
  <v-app>
    <!-- amp header -->
    <header class="headerbar">
      <a href="homepage.html">
        <amp-img class="home-button" src="icons/home.png" width="36" height="36"></amp-img>
      </a>
      <div class="site-name">News Site</div>
    </header>

    <h3 class="target">
      <a class="target-anchor" id="top"></a>
      This is the target.
      <amp-position-observer on="enter:hideAnim.start; exit:showAnim.start" layout="nodisplay"></amp-position-observer>
    </h3>

    <!-- no framework parallax begin -->
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
    <AnimatedRocket></AnimatedRocket>
    
  </v-app>
</template>

<script>
import AnimatedRocket from "./components/AnimatedRocket";

export default {
  name: "App",
  components: {
    AnimatedRocket
  },
  props: {
    source: String
  }
};
</script>



<!-- AMP framweork style -->

<style amp custom>
:root {
  --color-primary: #005af0;
  --color-secondary: #00dcc0;
  --color-text-light: #fff;

  --space-2: 1rem; /* 16px */

  --box-shadow-1: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 1px -1px rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

body {
  background-color: white;
}

amp-img {
  background-color: gray;
  border: 1px solid black;
}
</style>

<!-- SCSS style -->
<style lang="scss">
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