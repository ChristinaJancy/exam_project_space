<template >
  <v-app id="app">
    <div class="wrap-banner">
      <vue-particles
        class="particle"
        color="#FFE302"
        :particleOpacity="0.9"
        linesColor="#FFE302"
        :particlesNumber="20"
        shapeType="circle"
        :particleSize="1"
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
<v-col>
  <v-row>
    
<!-- Mercury-->
  <v-col>
      <v-card class="mx-auto" max-width="344" color="transparent" flat>
        <v-img src="../assets/solarsystem/—Pngtree—simple blue planet mercury_4563319.png" contain height="200px"></v-img> 
        <div class="planettextback">
          <v-card-title >Mercury</v-card-title>
          <v-card-subtitle>Nr.1 - The smallest planet</v-card-subtitle>
          <v-card-actions>
            <v-btn color="yellow" text>Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show =!show">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>“The closest planet to the sun that orbits the sun within only 87.9 earth days, should be the hottest planet in the whole solar system”, one would think. Even though this is not entirely true, one would not be mistaken for thinking that way. Mercury has the most ironic temperature rage in the whole solar system. Since the planet virtually has no atmosphere, it makes it difficult for the sun to travel from the daylight side to the night side. This means that one half of the planet is always extremely hot at +430 degree C, while the other is so cold at -180 degree C. So to live on this planet, you would either burn or freeze to death instantly.   
            </v-card-text>
            </div>
          </v-expand-transition>
        </div>
      </v-card>   
    </v-col>
  
<!-- Jupiter-->
  <v-col>
       <v-hover v-slot:default="{ hover }">
      <v-card :elevation="hover ? 12 : 2" class="mx-auto" max-width="344" color="transparent" flat>
        <v-img src="../assets/solarsystem/—Pngtree—planet jupiter isolated cartoon illustration_5289969.png" height="200px" contain></v-img>
        <div class="planettextback">
          <v-card-title>Jupiter</v-card-title>
          <v-card-subtitle>Nr. 5 - The largest planet</v-card-subtitle>
          <v-card-actions>
            <v-btn color="yellow" text>Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show2 =!show2">
              <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <!-- v-show="show"-->
          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>
              <v-card-text>Jupiter is the 5th and the largest planet in the solar system almost more than twice the mass as all the other planets put together. This planet is always referred to as the giant planet, due to its amazing size. Jupiter is almost made of gas with almost 75% hydrogen, and 24% helium. Its core is presumed rocky hard, while surrounded with a sea with metallic liquid.</v-card-text>
            </div>
          </v-expand-transition>
        </div>
      </v-card>
       </v-hover>
    </v-col>

    <!-- planet-->
      <v-col>
      <v-card class="mx-auto" max-width="344" color="transparent" flat>
        <v-img src="../assets/solarsystem/—Pngtree—planet_823783.png" height="200px"></v-img> 
        <div class="planettextback">
          <v-card-title >Saturn</v-card-title>
          <v-card-subtitle>Nr.6 - the second biggest planet AND got a cool belt!</v-card-subtitle>
          <v-card-actions>
            <v-btn color="yellow" text>Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show3=!show3" big>
              <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show3">
              <v-divider></v-divider>
              <v-card-text>Fun fact! Saturn generates more heat in itself than it receives from the sun. Saturn is the 6 planet placed away from the sun. As you very well know, its the planet with a ring around it, which off the record looks pretty cool. It's also the second biggest planet in the solar system from Jupiter. Like jupiter, the planet is also comprised with gas about 96% hydrogen, and 3% helium, which also makes saturn's core just as rocky or even rockier than Jupiter's core. Again like jupiter, saturn is also surrounded by a sea with a metallic liquid.  
            </v-card-text>
            </div>
          </v-expand-transition>
        </div>
      </v-card>   
    </v-col>
  </v-row>
</v-col>

<!--random svg test-->
      <v-img id="layerplanet" src="../assets/planet1.png"></v-img>
      <v-img id="layerrocket" src="../assets/rocketparallax.png"></v-img>
      <v-img id="layerastronaut" src="../assets/astronaut.png"></v-img>
    </div>
  </v-app>
</template>

<script>
export default {
  el: "app",
  data: () => ({
    show: false,
    show2: false,
    show3: false,
    show4: false,
    planet: [
      {
        id: 1,
        title: "The Sun",
        subtitle: "very exciting",
        about:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        src: "../assets/planet1.png"
      },
      {
        id: 2,
        title: "The Moon",
        subtitle: "Hey I'm a moon",
        about:
          "I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.",
        src: "../assets/planet1.png"
      }
    ]
  })
};
</script>	




<style lang="scss" scoped>
#app {
  background-size: cover;
  background-image: url(../assets/background.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin-top: -50px;
}
</style>
  
<style lang="scss">
.particle {
  height: 100%;
  width: 100%;
  position: absolute;
}

.planettextback{
  transition:ease 0.5s;
}

.planettextback:hover {
  background-color: rgba(255, 255, 255, 0.26);
   transition:ease 0.5s;
}

#layerplanet{
  position: relative;
}

#layerrocket {
  margin-left: -100px;
  position: relative;
}

#layerastronaut {
  position: relative;
}
</style>