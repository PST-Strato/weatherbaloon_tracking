//TODO:display weather_data
var weatherCard = {
  props: ["weather_data"],
  data: function () {
    return {};
  },
  template: `
    <v-card elevation="24" loading width="350" shaped>
        <v-card-title>
            <v-avatar size="25">
                <v-img class="elevation-6" alt="Icon made by GOWI" src="../icons/season.png"></v-img>
            </v-avatar>
            <span>
              <v-card-subtitle>Weather data</v-card-subtitle>
            </span>
        </v-card-title>
        <v-card-text class="text-h4 font-weight-bold">
          25&deg C
        </v-card-text>
          <v-container>
            <v-row class="text-center" justify="center">
              <v-col>
                <v-container class="pa-1 purple text-no-wrap rounded-pill">
                  <div>Pressure</div>
                  <div>302md</div>
                </v-container>
              </v-col>
              <v-col>
                <v-container class="pa-1 green text-no-wrap rounded-pill">
                  <div>Hygrometry</div>
                  <div>302md</div>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-row>
    </v-card>
    `,
};
