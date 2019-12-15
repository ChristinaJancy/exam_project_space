<template>
  <v-footer padless>
    <v-card class="flex" tile>
      <v-img
        src="https://cdn.dribbble.com/users/164052/screenshots/1323970/attachments/186300/footer-bg.jpg"
        height="400"
        gradient="to top right, rgba(120,56,70,.3), rgba(00,00,00,.7)"
      >
        <v-card-title class="white--text">
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
          <v-container  white--text>
            
            <v-row  no-gutters dense>
              <v-col cols="12" md="12" sm="12" class="mx-auto">
                <v-card-title>Safe Space</v-card-title>
                <v-card-subtitle class="font-weight-bold white--text">
                  <router-link to="/parentinfo">Info for Parents and caretakers</router-link>
                  <br />FAQ
                  <br />Organization
                  <br />Where to find us
                  <br />Contact Us
                  <br />Career at Safe Space
                </v-card-subtitle>
              </v-col>
            </v-row>
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