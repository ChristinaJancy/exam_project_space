<template>
  <v-footer padless>
    <v-card class="flex" tile>
      <v-img
        src="https://cdn.dribbble.com/users/164052/screenshots/1323970/attachments/186300/footer-bg.jpg"
        height="400"
        gradient="to top right, rgba(120,56,70,.3), rgba(00,00,00,.7)"
      >
        <v-card-title class="white--text mx-auto my-auto">
          <v-spacer></v-spacer>

          <a href="https://facebook.com">
            <v-btn dark icon>
              <i class="fab fa-facebook-square"></i>
            </v-btn>
          </a>
          <a href="https://twitter.com">
            <v-btn dark icon>
              <i class="fab fa-twitter-square"></i>
            </v-btn>
          </a>
          <a href="https://instagram.com">
            <v-btn dark icon>
              <i class="fab fa-instagram"></i>
            </v-btn>
          </a>
          <a href="https://linkedin.com">
            <v-btn dark icon>
              <i class="fab fa-linkedin"></i>
            </v-btn>
          </a>

          <v-spacer></v-spacer>
          <br />
        </v-card-title>

        <!-- Footer Info box-->
        <div>
           <Solarsystem></Solarsystem>
          <v-container white--text>
            <v-col>
            <v-row dense no-gutters justify="space-between" justify-md="space-between" justify-sm="center">
              <v-col cols="auto">
                
                <v-card-title><h2>Help and info</h2></v-card-title>
               
                <v-card-subtitle class="white--text">
                  <router-link to="/parentinfo"><p style="color:white;" class="my-auto">Info for Parents and caretakers</p></router-link>
                   <router-link to="/faq"><p style="color:white;" class="my-auto">FAQ</p></router-link>
                </v-card-subtitle>
              </v-col>

               <v-col cols="auto">
                <v-card-title><h2>Contact us and location</h2></v-card-title>
                <v-card-subtitle class="white--text">
                <p class="my-auto">+45 12 34 56 78</p>
                <p class="my-auto">customerservice@safespace.com</p>
                <br>
                <p class="my-auto">Spangsbjerg Kirkevej 103
                  <br>6700 Esbjerg DK
                </p>
                </v-card-subtitle>
               </v-col>
            </v-row>
            </v-col>
          </v-container>
          
        </div>
      </v-img>
      <v-card-text class="py-2 white--text text-center black">
        {{ new Date().getFullYear() }} —
        <strong>Safe Space</strong>
      </v-card-text>
      
    </v-card>
     
  </v-footer>

</template>

<script>
import Solarsystem from "./Solarsystem";
export default {
  name: "App",
  components: {
    Solarsystem
  },
  props: {
    source: String
  }
};
 
</script>

<style scoped>
h2{
  font-size:13px;
}

@media (max-width:400px){
  p {
  font-size: 10px;
}
}

</style>


<style lang="scss">
i {
  font-size: 50px;
}

@media (min-width:700px){
  i {
  margin: 20px;
}
}

@media (max-width:300px){
  i {
  font-size: 35px;
  margin:0;
}

}

a:active,
a:link,
a:hover,
a:visited {
  text-decoration: none;
}

</style>