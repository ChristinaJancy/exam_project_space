<template>
  <v-app id="app">
    <vue-particles
      class="particle"
      color="#F4D80A"
      :particleOpacity="0.9"
      linesColor="#FFE302"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="0.5"
      :linesWidth="2"
      :lineLinked="false"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
    ></vue-particles>
<v-card color="transparent"
    class="mx-auto"
    max-width="700"
    flat
        >
          <v-card-title id="pheader">Planets</v-card-title>
          <v-spacer></v-spacer>

          <v-card-subtitle id="pheader2">
          - scroll down to see them all!
          </v-card-subtitle>
        </v-card>

    <div class="container">
     
              <parallax-container
                class="image-container"
                :animationDuration="duration"
                :easing="easing"
              >
                <img :src="image1" style="opacity:0;" class="image" alt />
                <parallax-element :type="rotation" :parallaxStrength="-20" tag="img" :src="image1" class="pimg1"></parallax-element>
                <parallax-element :type="rotation" :parallaxStrength="10" tag="img" :src="image2"></parallax-element>
                <parallax-element :type="rotation" :parallaxStrength="25" tag="img" :src="image3"></parallax-element>
                <parallax-element tag="p" :type="rotation" :parallaxStrength="20">Mercury</parallax-element>
                <parallax-element :type="rotation" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                <parallax-element :type="rotation" :parallaxStrength="15" tag="img" :src="image5"></parallax-element>
              </parallax-container>
   
    </div>

    
<v-responsive :aspect-ratio="16/9">
</v-responsive>

<!-- Planet Venus-->
<v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
    <div class="container">
              <parallax-container
                class="image-container"
                :animationDuration="duration"
                :easing="easing"
              >
                <img :src="image1" style="opacity:0;" class="image" alt />
                <parallax-element :type="depth" :parallaxStrength="-20" tag="img" :src="image1" class="pimg1"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="10" tag="img" :src="image2"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="25" tag="img" :src="image7"></parallax-element>
                <parallax-element tag="p" :type="type" :parallaxStrength="20">Venus</parallax-element>
                <parallax-element :type="depth" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="15" tag="img" :src="image5"></parallax-element>
              </parallax-container>
    </div>
</v-lazy>
<v-responsive :aspect-ratio="16/9">
</v-responsive>


<!-- Planet Earth-->
<v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
    <div class="container">
              <parallax-container
                class="image-container"
                :animationDuration="duration"
                :easing="easing"
              >
                <img :src="image1" style="opacity:0;" class="image" alt />
                <parallax-element :type="depth" :parallaxStrength="-20" tag="img" :src="image1" class="pimg1"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="10" tag="img" :src="image2"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="25" tag="img" :src="image11"></parallax-element>
                <parallax-element tag="p" :type="type" :parallaxStrength="20">Earth</parallax-element>
                <parallax-element :type="depth" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="15" tag="img" :src="image5"></parallax-element>
              </parallax-container>
   
    </div>
</v-lazy>
<v-responsive :aspect-ratio="16/9">
</v-responsive>

<!-- Planet Mars-->
   <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
    <div class="container">
              <parallax-container
                class="image-container"
                :animationDuration="duration"
                :easing="easing"
              >
                <img :src="image1" style="opacity:0;" class="image" alt />
                <parallax-element :type="depth" :parallaxStrength="-20" tag="img" :src="image1" class="pimg1"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="10" tag="img" :src="image2"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="25" tag="img" :src="image6"></parallax-element>
                <parallax-element tag="p" :type="type" :parallaxStrength="20">Mars</parallax-element>
                <parallax-element :type="depth" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="15" tag="img" :src="image5"></parallax-element>
              </parallax-container>
    </div>
   </v-lazy>
<v-responsive :aspect-ratio="16/9">
</v-responsive>

<!-- Planet Jupiter-->
<v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
    <div class="container">
              <parallax-container
                class="image-container"
                :animationDuration="duration"
                :easing="easing"
              >
                <img :src="image1" style="opacity:0;" class="image" alt />
                <parallax-element :type="depth" :parallaxStrength="-20" tag="img" :src="image1" class="pimg1"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="10" tag="img" :src="image2"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="25" tag="img" :src="image13"></parallax-element>
                <parallax-element tag="p" :type="type" :parallaxStrength="20">Jupiter</parallax-element>
                <parallax-element :type="depth" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="15" tag="img" :src="image5"></parallax-element>
              </parallax-container>
    </div>
</v-lazy>
<v-responsive :aspect-ratio="20/9">
</v-responsive>


<!-- Planet Saturn-->
<v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
    <div class="container">
              <parallax-container
                class="image-container"
                :animationDuration="duration"
                :easing="easing"
              >
                <img :src="image1" style="opacity:0;" class="image" alt />
                <parallax-element :type="depth" :parallaxStrength="-20" tag="img" :src="image1" class="pimg1"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="10" tag="img" :src="image2"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="25" tag="img" :src="image8"></parallax-element>
                <parallax-element tag="p" :type="type" :parallaxStrength="20">Saturn</parallax-element>
                <parallax-element :type="depth" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="15" tag="img" :src="image5"></parallax-element>
              </parallax-container>
    </div>
</v-lazy>
<v-responsive :aspect-ratio="20/9">
</v-responsive>

<!-- Planet Uranus-->
    <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
    <div class="container">
              <parallax-container
                class="image-container"
                :animationDuration="duration"
                :easing="easing"
              >
                <img :src="image1" style="opacity:0;" class="image" alt />
                <parallax-element :type="depth" :parallaxStrength="-20" tag="img" :src="image1" class="pimg1"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="10" tag="img" :src="image2"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="25" tag="img" :src="image9"></parallax-element>
                <parallax-element tag="p" :type="type" :parallaxStrength="20">Uranus</parallax-element>
                <parallax-element :type="depth" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="15" tag="img" :src="image5"></parallax-element>
              </parallax-container>
    </div>
  </v-lazy>  

<v-responsive :aspect-ratio="20/9">
</v-responsive>


<!-- Planet Neptune-->

<v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
    <div class="container">
     
              <parallax-container
                class="image-container"
                :animationDuration="duration"
                :easing="easing"
              >
                <img :src="image1" style="opacity:0;" class="image" alt />
                <parallax-element :type="depth" :parallaxStrength="-20" tag="img" :src="image1" class="pimg1"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="10" tag="img" :src="image2"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="25" tag="img" :src="image10"></parallax-element>
                <parallax-element tag="p" :type="type" :parallaxStrength="20">Neptune</parallax-element>
                <parallax-element :type="depth" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="15" tag="img" :src="image5"></parallax-element>
              </parallax-container>
    </div>
    </v-lazy>
<v-responsive :aspect-ratio="20/9">
</v-responsive>


<!-- Planet Pluto-->
<v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
      >
    <div class="container">
              <parallax-container
                class="image-container"
                :animationDuration="duration"
                :easing="easing"
              >
                <img :src="image1" style="opacity:0;" class="image" alt />
                <parallax-element :type="depth" :parallaxStrength="-20" tag="img" :src="image1" class="pimg1"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="10" tag="img" :src="image2"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="25" tag="img" :src="image12"></parallax-element>
                <parallax-element tag="p" :type="type" :parallaxStrength="20">Pluto</parallax-element>
                <parallax-element :type="depth" :parallaxStrength="30" tag="img" :src="image4"></parallax-element>
                <parallax-element :type="depth" :parallaxStrength="15" tag="img" :src="image5"></parallax-element>
              </parallax-container>
   
    </div>
</v-lazy>

    <!--random svg test-->
    <!-- <v-img id="layerplanet" src="../assets/planet1.png"></v-img> -->

    <v-img id="layerastronaut" src="../assets/astronaut.png"></v-img>
  </v-app>
</template>

<!-- 
export default {
 
  data: () => ({
  isActive: false,
  show: false,
  show2: false,
  show3: false,
  show4: false,
  show5: false,
  show6: false,
  show7: false,
  show8: false,
  show9: false,
  })
};

-->

<!-- actual image 1-5
import image1 from "@/assets/mouse-parallax/1.8125ea14.png";
import image2 from "@/assets/mouse-parallax/2.2edb70bc.png";
import image3 from "@/assets/mouse-parallax/3.4ee471cf.png";
import image4 from "@/assets/mouse-parallax/4.4c33fe51.png";
import image5 from "@/assets/mouse-parallax/5.19bc2110.png";
-->


<script scoped>
import parallaxContainer from "@/components/parallax-container.vue";
import parallaxElement from "@/components/parallax-element.vue";
import image1 from "@/assets/mouse-parallax/1.8125ea14.png";
import image2 from "@/assets/mouse-parallax/2.2edb70bc.png";
import image4 from "@/assets/mouse-parallax/4.4c33fe51.png";
import image5 from "@/assets/mouse-parallax/5.19bc2110.png";

import image3 from "@/assets/solarsystem/mercury.png";
import image6 from "@/assets/solarsystem/mars.png";
import image7 from "@/assets/solarsystem/venus.png";
import image8 from "@/assets/solarsystem/saturn.png";
import image9 from "@/assets/solarsystem/uranus.png";
import image10 from "@/assets/solarsystem/neptune.png";
import image11 from "@/assets/solarsystem/earth.png";
import image12 from "@/assets/solarsystem/pluto.png";
import image13 from "@/assets/solarsystem/jupiter.png";

export default {
  
  props: {
    type: {
      type: String,
      default: "depth"
    },
    duration: {
      type: Number,
      default: 1000
    },
    easing: {
      type: String,
      default: "cubic-bezier(0.23, 1, 0.32, 1)"
    }
  },
  components: {
    parallaxContainer,
    parallaxElement
  },
  data() {
    return {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>

.container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  &.image {
    position: relative;
  }
}

@media only screen and (max-width: 670px) {
  img {
    left: 0;
    right: 0;
    margin: auto;
    height: auto;
    width: 90%;

    &.image {
      position: relative;
    }
  }
}

.image-container {
  position: relative;
  height: 70vh;
}

p {
  position: absolute;
  color: rgb(255, 145, 0);
  text-shadow: 4px 8px #000000;
  top: 60%;
  font-size: 40px;
  font-weight: 700;
  left: 0;
  right: 0;
  font-family: "Press Start 2P", cursive;
  text-align: center;
  text-transform: uppercase;
}

#pheader, #pheader2{
  font-family: "Press Start 2P", cursive;
  color: rgb(255, 145, 0);
  text-shadow: 4px 4px #000000;
}
</style>


<style lang="scss" scoped>
@media (max-width: 850px) {
  p {
    font-size: 20px;
    margin-top: -180px;
  }
}

#app {
  background-size: cover;
  background-image: url(../assets/background.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin-top: -50px;
  -webkit-background-clip: content-box;
}

.particle {
  height: 100%;
  width: 100%;
  position: absolute;
}

#layerastronaut {
  position: relative;
}

</style>
  



