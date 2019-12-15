<template>
    <v-content id="app">
         <h2 style="text-align:center; color:white;">Rocket Exhibition</h2>

          <v-img src="https://www.rmg.co.uk/sites/default/files/styles/banner/public/AAB150729_Future_Spacecraft_banner.jpg?itok=r0suLH54"></v-img>
     
    


    <v-parallax
      src="../assets/rocket/home_electron_bg.png"
      class="mx-auto my-auto"
      style="text-align:center;"
    >
      <h2>About the event</h2>
    </v-parallax>

    <v-col cols="auto" class="mx-auto my-auto">
      <v-row>
        <v-col>
          <p style="color:white;" class="display-3">Rocket exhibition</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p
            style="color:white;"
          >It's free! Come see how a rocket looks on the inside. We also offer a wide range of space rocket activities during the day. The place has a 3D cinema showing space rocket going to space, entrance for this only 20kr.</p>
        </v-col>
      </v-row>
    </v-col>
  </v-content>
</template>


<style scoped>
h2 {
  font-size: 2rem;
  font-family: "Press Start 2P", cursive;
}

#app{
    background:black;
    margin-top:-50px;
}

</style>

