<template>
  <v-card id="nav" class="overflow-hidden">
    <v-navigation-drawer
      id="navdrawer"
      v-model="drawer"
      app
      hide-overlay
      disable-route-watcher
      color="white"
      temporary
      floating
      bottom
    >
      <v-list>
        <v-list-item-content>
          <v-list-item-title class="title">Categories</v-list-item-title>
          <v-divider></v-divider>
        </v-list-item-content>

        <!-- Learn about space category-->
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title>Learn about space</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-content>
              <router-link to="/planet">
                <v-list-item-title>Planets</v-list-item-title>
              </router-link>
              <router-link to="/star">
                <v-list-item-title>Stars</v-list-item-title>
              </router-link>
              <router-link to="/sun">
                <v-list-item-title>The Sun</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- This quaters theme: rockets! category-->
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title>This quarters theme: Rockets</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-content>
              <router-link to="/rocket">
                <v-list-item-title>All about rockets</v-list-item-title>
              </router-link>
              <router-link to="/astronaut">
                <v-list-item-title>Astronauts</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!-- Event and fun stuff category-->
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title>Events and games</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-content>
              <router-link to="/event">
                <v-list-item-title>Events</v-list-item-title>
              </router-link>
              <router-link to="/games">
                <v-list-item-title>Games</v-list-item-title>
              </router-link>
              <router-link to="/drawing">
                <v-list-item-title>Drawing contests</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!--v-app-bar starting-->
    <v-app-bar app color="black" dark hide-on-scroll elevate-on-scroll>
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, #000000, #434343"></v-img>
      </template>
      <v-app-bar-nav-icon id="navicon" @click.stop="drawer = !drawer" />
      <router-link to="/">
        <div>
          <img src="../assets/rocket.png" id="logo" />
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items id="headernav">
        <!--Learn about space-->
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="transparent" dark v-on="on" depressed>Learn about space</v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>Planets</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Stars</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Sun</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Rockets!-->
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="transparent" dark v-on="on" depressed>This quarters theme: Rockets!</v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>All about rockets</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Astronauts</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Events and fun stuff-->
        <v-menu offset-y z-index="999999999">
          <template v-slot:activator="{ on }">
            <v-btn color="transparent" dark v-on="on" depressed>Games and events</v-btn>
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

      <!--Search button-->

      <!--search-->
      <template>
        <Searchbar></Searchbar>
        <!--Login page starts here-->
        <Login></Login>
      </template>
    </v-app-bar>
  </v-card>
</template>




<script>
import Searchbar from "../assets/Searchbar";
import Login from "./Login";

export default {
  name: "App",
  components: {
    Searchbar,
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
#login {
  z-index: 9999;
}

#logo {
  width: 90px;
  height: 150px;
  margin-top: 20px;
}
.cls-1 {
  fill: #303f77;
  isolation: isolate;
}
.cls-11,
.cls-2 {
  fill: #ce3935;
}
.cls-3 {
  fill: #b2322e;
}
.cls-4 {
  fill: #e19847;
}
.cls-5 {
  fill: #c3853f;
}
.cls-6 {
  fill: #d0ae41;
}
.cls-7 {
  fill: #f1c84a;
}
.cls-8 {
  fill: #b6b8ba;
}
.cls-9 {
  fill: #9ea0a3;
}
.cls-10 {
  fill: #232324;
}
.cls-11 {
  font-size: 74.13px;
  font-family: BrandonGrotesque-Medium, Brandon Grotesque;
  font-weight: 500;
}

#mr-3 {
  z-index: 4568658545;
}
#nav {
  z-index: 9999;
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