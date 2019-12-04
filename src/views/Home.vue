<template>
  <v-content>
    <!-- Parallax begins (no framework) -->
    <div div="headline">
      <v-card color="transparent">
        <v-responsive :aspect-ratio="16/9">
          <div class="main-title">
            <h1>Safe Space</h1>
          </div>
        </v-responsive>
      </v-card>
    </div>


    <!-- Animated rocket -->
  </v-content>
</template>

<!-- import AnimatedRocket from "../components/AnimatedRocket"; -->
<script>
export default {
  name: "App",
  components: {},
  props: {
    source: String
  }
};
</script>

<!-- AMP framweork style -->

<style amp custom>
</style>

<!-- SCSS style rocket and parallax 
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
</style>
-->

<style lang="scss">
.headline {
  position: relative;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
.main-title {
  color: rgb(255, 0, 0);
  z-index: 999;
  position: absolute;
  text-align: center;
  width: 100%;
  h1 {
    font-size: 4rem;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 4px 8px #000000;
    text-transform: uppercase;
    margin-top:150px;
  }
}
/*Media scaling changes*/

@media (max-width: 850px) {
  .main-title h1 {
    font-size: 3rem;
  }
}
@media (max-width: 600px) {
  .main-title h1 {
    font-size: 2rem;
  }
}

</style>