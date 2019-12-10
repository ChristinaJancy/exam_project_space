<template>
  <v-content>
    <!-- Parallax begins (no framework) -->

      <v-responsive :aspect-ratio="16/9">
        <div class="main-title">
          <h1 absolute>Safe Space</h1>
        </div>
      </v-responsive>

      <!--
      <div>
        <p
          class="codepen"
          data-height="799"
          data-theme-id="default"
          data-default-tab="result"
          data-user="jcoulterdesign"
          data-slug-hash="ZxXbeP"
          style="height: 799px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
        >
        </p>
      </div>
      -->


    <!-- Animated rocket -->
    <v-card class="mx-auto transparent"  id="mascot" flat width="100%">
    <v-container>
      <v-row>
        
        <v-col cols="auto" class="mx-auto">
           
          <v-img
          max-width="300"
          max-height="400"
          contain
          
            src="../assets/mascot/spaceman mascot.png"
          ></v-img>
        </v-col>
      </v-row>
       <v-col
          cols="auto"
          class="text-center pl-0"
          style="background-color:#00000070;"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
           <strong class="display-3 white--text text-md-center text-sm-center .d-md-inline .d-sm-inline">Hello everyone!</strong>
           <br>
            <p class="display-1 white--text text-md-center text-sm-center .d-md-inline .d-sm-inline">My name is Ceres, and welcome to Safe Space</p>
            <p class="display-1 white--text text-md-center text-sm-center .d-md-inline .d-sm-inline">- a place to play games, and have fun while learning!</p>
          </v-row>
        </v-col>
    </v-container>
  </v-card>

  </v-content>
</template>

<!-- import AnimatedRocket from "../components/AnimatedRocket"; -->
<script scoped>
export default {
  name: "App",
  components: {
  },
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



<style lang="scss" scoped>
#mascot{
margin-top: -900px;
padding-bottom:500px;
}

.main-title {
  color:#F4D80A;
  z-index: 1;
  position: absolute;
  text-align: center;
  width: 100%;
  h1 {
    font-size: 4rem;
    font-family: "Press Start 2P", cursive;
    text-shadow: 4px 8px #000000;
    text-transform: uppercase;
    margin-top: 150px;
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
    margin-top:50px;
   
  }
}
@media (max-width: 300px) {
  .main-title h1 {
    margin-top:20px;
  }
}
@media (max-width: 200px) {
  .main-title h1 {
    font-size: 1rem;
  }
}
/*..*/

</style>