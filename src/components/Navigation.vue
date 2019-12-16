<template>
  <v-card id="nav" class="overflow-hidden">
    <v-navigation-drawer
      id="navdrawer"
      v-model="drawer"
      app
      hide-overlay
      color="white"
      temporary
      floating
      bottom
    >
      <v-list>
        <v-list-item-content>
          <v-list-item-title class="title">All Categories</v-list-item-title>
          <v-divider></v-divider>
        </v-list-item-content>

        <!-- Learn about space category-->
        <router-link to="/planetandmore">
          <v-list-item>
            <v-icon>mdi-brightness-5</v-icon>

            <v-list-item-content>
              <v-list-item-title>Outer Space</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- This quaters theme: rockets! category-->
        <router-link to="/rocketandmore">
          <v-list-item>
            <v-icon>mdi-rocket</v-icon>

            <v-list-item-content>
              <v-list-item-title>This quarters them: Rockets!</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- Event and fun stuff category-->
        <router-link to="/gamesandmore">
          <v-list-item>
            <v-icon>mdi-space-invaders</v-icon>

            <v-list-item-content>
              <v-list-item-title>Fun stuff!</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <!--APP BAR!-->
    <v-app-bar app src="https://wallpaperaccess.com/full/1268180.jpg" dark hide-on-scroll elevate-on-scroll>
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, #000000, #0000007e"></v-img>
      </template>
      <v-app-bar-nav-icon id="navicon" @click.stop="drawer = !drawer" />

      <router-link to="/">
        <div class="mx-auto mr-3">
          <v-img max-width="40" :src="require('../assets/logo/logoonly.png')" id="logo"></v-img>
        </div>
      </router-link>

     
   <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-toolbar-items id="headernav">
        <!--Learn about space-->
        
        <v-menu open-on-hover offset-y >
          <template v-slot:activator="{ on }">
            <v-btn color="transparent" class="navtext" dark v-on="on" depressed>
              <router-link to="/planetandmore"><p id="p" class="my-auto">The Outer Space</p></router-link>
            </v-btn>
          </template>
          <v-list>
            <router-link to="/planet">
              <v-list-item>
                <v-list-item-title>Our Solar System</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/spacefact">
              <v-list-item>
                <v-list-item-title>Space facts!</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-menu>

        <!-- Rockets!-->

        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="transparent" dark v-on="on" depressed>
              <router-link to="/rocketandmore"><p id="p" class="my-auto">This quarters theme: Rockets!</p></router-link>
            </v-btn>
          </template>
          <v-list>
            <router-link to="/rocket">
              <v-list-item>
                <v-list-item-title>All about rockets</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/astronaut">
              <v-list-item>
                <v-list-item-title>Astronauts</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-menu>

        <!-- Events and fun stuff-->
        <v-menu offset-y z-index="999999999" open-on-hover>
          <template v-slot:activator="{ on }">
            <v-btn color="transparent" dark v-on="on" depressed>
              <router-link to="gamesandmore"><p id="p" class="my-auto">All the fun stuff!</p></router-link>
            </v-btn>
          </template>
          <v-list>
            <router-link to="/games">
              <v-list-item>
                <v-list-item-title>Games</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/event">
              <v-list-item>
                <v-list-item-title>Events</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/drawing">
              <v-list-item>
                <v-list-item-title>Drawing contests</v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <template>
        <!--search bar-->
        <v-spacer></v-spacer>
        <v-text-field
          id="search"
          hide-details
          prepend-inner-icon="search"
          single-line
          dense
          reverse
          flat
          autofocus
        ></v-text-field>
        <!--login page-->
        <Login></Login>
      </template>
    </v-app-bar>
  </v-card>
</template>




<script>
import Login from "./Login";

export default {
  name: "App",
  components: {
    Login
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>


<style lang="scss">
#search {
  width: 1px;
}
#login {
  z-index: 9999;
}

#nav {
  z-index: 9999;
}

#p{
  color: #bf7e6a;
}

#navdrawer {
  display: none;
  z-index: 99999999999999999999999999;
}

#navicon {
  display: none;
}

/*Media*/
@media (max-width: 950px) {
  #navdrawer {
    display: flex;
  }
  #navicon {
    display: flex;
  }
  #headernav {
    display: none;
  }
}
</style>