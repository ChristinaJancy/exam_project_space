<template>
  <v-card>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="black" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Safe Space</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
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
                <v-list-item-title open-on-hover offset-y>Astronauts
                   <v-list-item open-on-hover>
                    <v-list-item>
                      <v-list-item-title>Famous astronauts and how to become one</v-list-item-title>
                    </v-list-item>
                   </v-list-item>
                </v-list-item-title>
              
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Games -->
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="transparent" flat dark v-on="on">games</v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>.</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- Astronauts-->

        <!-- Events and fun stuff-->
        <v-menu open-on-hover offset-y>
          <template v-slot:activator="{ on }">
            <v-btn color="transparent" dark v-on="on">Events</v-btn>
          </template>

          <v-list>
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

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
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