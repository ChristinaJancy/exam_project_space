<template>
  <v-card
    id="drawingcard"
    color="transparent"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
          sm="6"
          lg="4"
          xs="12"
        >
        <v-hover>
           <template v-slot="{ hover }">
          <v-card
          :elevation="hover ? 24 : 6"
          class="mx-auto pa-6">
           
            <v-img
              id="drawing"
              :src="card.src"
              class="white--text align-end transition-swing"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              lazy-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPPrrjST9daFk-0f1jt1odL5aW1KTWp-rMwJGNJhKMm1XhJWKXkA&s"
            >
            
            <template v-slot:placeholder>
              <v-row
               class="fill-height ma-0"
              align="center"
              justify="center"
            >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-subtitle v-text="card.age" class="white--text" >Age:</v-card-subtitle>
              
            </v-img>
           

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
            
          </v-card>
          </template>
           </v-hover>
        </v-col>
      </v-row>
    </v-container>
    
  </v-card>
</template>


<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Made by David', age: 'Age: 12', src: 'https://i.pinimg.com/originals/78/04/80/7804802d3af3129c3dfdb2adb91a769f.jpg'},
        { title: 'Made by Kristian', age: 'Age: 10', src: 'https://st2.depositphotos.com/4118707/7623/i/950/depositphotos_76232459-stock-photo-children-drawing-space-planet-rocket.jpg'},
        { title: 'Made by Trine', age: 'Age: 10', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        { title: 'Made by Line', age: 'Age: 8', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
        { title: 'Made by Christina', age: 'Age: 9', src: 'https://i.ytimg.com/vi/dpnLO4LXIQ4/maxresdefault.jpg'},
        { title: 'Made by Jakob', age: 'Age: 6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        { title: 'Made by Adrian', age: 'Age: 7', src: 'https://static9.depositphotos.com/1719616/1206/i/950/depositphotos_12064029-stock-photo-space-rocket-childrens-drawing.jpg'},
        { title: 'Made by Jason', age: 'Age: 13', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        { title: 'Made by Ean', age: 'Age: 7', src: 'https://drawingbeta.com/wp-content/uploads/kids-drawing-of-space-ship-and-spaceship-drawing-for-kids-free-download-best-spaceship.jpg'},
        { title: 'Made by David', age: 'Age: 12', src: 'https://i.pinimg.com/originals/78/04/80/7804802d3af3129c3dfdb2adb91a769f.jpg'},
        { title: 'Made by Kristian', age: 'Age: 10', src: 'https://st2.depositphotos.com/4118707/7623/i/950/depositphotos_76232459-stock-photo-children-drawing-space-planet-rocket.jpg'},
        { title: 'Made by Trine', age: 'Age: 10', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        { title: 'Made by Line', age: 'Age: 8', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'},
        { title: 'Made by Christina', age: 'Age: 9', src: 'https://i.ytimg.com/vi/dpnLO4LXIQ4/maxresdefault.jpg'},
        { title: 'Made by Jakob', age: 'Age: 6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        { title: 'Made by Adrian', age: 'Age: 7', src: 'https://static9.depositphotos.com/1719616/1206/i/950/depositphotos_12064029-stock-photo-space-rocket-childrens-drawing.jpg'},
        { title: 'Made by Jason', age: 'Age: 13', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg'},
        { title: 'Made by Ean', age: 'Age: 7', src: 'https://drawingbeta.com/wp-content/uploads/kids-drawing-of-space-ship-and-spaceship-drawing-for-kids-free-download-best-spaceship.jpg'},
      ],
    }),
  }
</script>

<style lang="scss">

#drawingcard{
    margin:0 30px 60px 30px;
}

@media (min-width: 550px) {
#drawing{
    height:500px;
}
}


@media (max-width: 550px) {
#drawing{
    height:auto;
}
}
</style>