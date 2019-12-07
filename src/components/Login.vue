<template>
  <v-dialog v-model="dialog" persistent max-width="500px" id="login">
    <template v-slot:activator="{ on }">
      <v-btn dark v-on="on" icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Profile creation</span>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="8" md="4">
              <v-text-field label="First name*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="8" md="4">
              <v-text-field label="Last name*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>

            <v-col cols="12" id="password">
              <v-text-field
                model="password"
                label="Password*"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.emailMatch]"
                hint="At least 8 characters"
                @click:append="show = !show"
                v-model="password"
                required
                counter
              ></v-text-field>
            </v-col>
            <!--
                 <normal>Birthday</normal>


                <v-col cols="12" md="2" sm="2">
                  <v-select 
                  :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'] "  
                  label="Day*" required></v-select>
                </v-col>
                
                <v-col cols="12" md="2" sm="2">
                  <v-select :items="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']"  label="Month*" required></v-select>
                </v-col>

                <v-col cols="12" md="2" sm="2">
                  <v-select :items="['2019', '2018', '2017', '2016', '2016', '2016', '2016']"  label="Year*" required></v-select>
                </v-col>
            -->
            <v-col class="pr-4">
              <v-slider
                v-model="slider"
                class="align-center"
                :max="max"
                :min="min"
                hide-details
                label="Age:*"
                thumb-label
              >
                <template v-slot:append>
                  <v-text-field
                    v-model="slider"
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    style="width: 60px"
                  ></v-text-field>
                </template>
              </v-slider>
            </v-col>
            
          </v-row>
        </v-container>
        <small>*indicates required field</small>
        <!--terms and service-->

        <v-col cols="12">
          <v-checkbox model="form.terms" color="green">
            <template v-slot:label>
              <div @click.stop>
                Do you accept the
                <a href="javascript:;" @click.stop="terms = true">terms</a>
                and
                <a
                  href="javascript:;"
                  @click.stop="conditions = true"
                >conditions?</a>
              </div>
            </template>
          </v-checkbox>
        </v-col>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" small text @click="dialog = false">Create new profile!</v-btn>
        <v-spacer></v-spacer>
        <v-btn v-on="on" color="blue darken-1" large text @click="dialog = false">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    dialog: false,
    show: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match"
    },
    min: 1,
    max: 100,
    slider: 40,
    range: [-20, 70],
  }),
 
};
</script>

