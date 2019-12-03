<template>
  <v-footer padless>
    <v-card class="flex" tile>
      <v-img
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-523367172-1568809023.jpg"
        height="400"
      >
        <v-card-title class="white--text">
          <v-spacer></v-spacer>

          <a href="https://facebook.com">
            <v-btn class="mx-4" dark icon>
              <i class="fab fa-facebook-square"></i>
            </v-btn>
          </a>
          <a href="https://twitter.com">
            <v-btn class="mx-4" dark icon>
              <i class="fab fa-twitter-square"></i>
            </v-btn>
          </a>
          <a href="https://instagram.com">
            <v-btn class="mx-4" dark icon>
              <i class="fab fa-instagram"></i>
            </v-btn>
          </a>
          <a href="https://linkedin.com">
            <v-btn class="mx-4" dark icon>
              <i class="fab fa-linkedin"></i>
            </v-btn>
          </a>
          

          <v-spacer></v-spacer>
          <br />
        </v-card-title>

        <!-- Footer Info box-->
        <div>
          <v-container align in alignments white--text>
            <v-row :align="align" no-gutters dense>

              <v-col cols="12" md="6">
                <v-card-title>Help</v-card-title>
                <v-card-subtitle class="font-weight-bold white--text">
                  Info for Parents, Teachers and Caregivers
                  <br />FAQ
                  <br />
                </v-card-subtitle>
              </v-col>

              <v-col cols="12" md="6">
                <v-card-title>About Safe Space</v-card-title>
                <v-card-subtitle class="font-weight-bold white--text">
                  Organization
                  <br /> <router-link> Where to find us</router-link>
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
        <strong>Mandatory Clothing</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
  })
};
</script>

<style lang="scss">
i {
  font-size: 20px;
}

a:active,
a:link,
a:hover,
a:visited {
  text-decoration: none;
}

</style>