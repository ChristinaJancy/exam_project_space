<template>
  <v-card id="nav" class="overflow-hidden">
    <v-navigation-drawer id="navdrawer" v-model="drawer" app stateless>
      <v-list>
        <v-list-item-content>
          <v-list-title>Categories:</v-list-title>
          <v-divider></v-divider>
        </v-list-item-content>

        <!-- Learn about space category-->
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-title>Learn about space</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Planets</v-list-item-title>
              <v-list-item-title>Stars</v-list-item-title>
              <v-list-item-title>The sun</v-list-item-title>
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
              <v-list-item-title>All about rockets</v-list-item-title>
              <v-list-item-title>Astronauts</v-list-item-title>
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
              <v-list-item-title>Events</v-list-item-title>
              <v-list-item-title>Games</v-list-item-title>
              <v-list-item-title>Drawing contest</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      src="https://spacenews.com/wp-content/uploads/2018/05/24359364107_152b0152ff_k-879x485.jpg"
      dark
      hide-on-scroll
      elevate-on-scroll
    >
    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, #000000, #434343"
        ></v-img>
      </template>
      <v-app-bar-nav-icon id="navicon" @click.stop="drawer = !drawer" />
      <v-toolbar-title>Safe Space</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items id="headernav">
        <!--Learn about space-->
        <v-menu open-on-hover offset-y flat>
          <template v-slot:activator="{ on }">
            <v-btn color="transparent" dark v-on="on">Learn about space</v-btn>
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
            <v-btn color="transparent" dark v-on="on">This quarters theme: Rockets!</v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title open-on-hover offset-y>
                Astronauts
                <v-list-item open-on-hover>
                  <v-list-item>
                    <v-list-item-title>Famous astronauts and how to become one</v-list-item-title>
                  </v-list-item>
                </v-list-item>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Events and fun stuff-->
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="transparent" dark v-on="on">Events and fun stuff</v-btn>
          </template>

          <v-list>
            <v-list-item>
              <router-link to="/games">
                <v-list-item-title>Games</v-list-item-title>
              </router-link>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Exhibitions</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Drawing contests</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>


<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style lang="scss">
#nav {
  z-index: 9999;
}

#navdrawer {
  display: none;
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