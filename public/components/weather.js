var weatherCard = {
  props: ["weather_data", "coordinates"],
  data: function () {
    return {};
  },
  template: `
    <v-card elevation="20" loading width="100%">
      <v-container class="pa-2 text-center" justify="center">
        <span class="">{{coordinates[0]}}</span>
        <span class=""> | </span>
        <span class="">{{coordinates[1]}}</span>
      </v-container>
      <v-container class="pa-2 text-center" justify="center">
        <div class="text-h4 font-weight-black">{{weather_data.temperature_outside}}&deg C</div>
      </v-container>
      <v-container class="pa-0 ma-auto">
        <v-row class="text-center" justify="center">
          <v-col>
            <v-container class="text-no-wrap rounded-pill">
              <div>
                <v-avatar>
                  <v-img src="/icons/barometer.png"
                    alt="Barometer icon created by Freepik - Flaticon"></v-img>
                </v-avatar>
              </div>
              <div>{{weather_data.pressure}} Pa</div>
              <div class="text-uppercase font-weight-light text-caption">Pressure</div>
            </v-container>
          </v-col>
          <v-col>
                <v-container class="text-no-wrap rounded-pill">
                  <div>
                    <v-avatar>
                      <v-img src="/icons/raindrop.png" 
                        alt="Water icons created by Freepik - Flaticon.com"></v-img>
                    </v-avatar>
                  </div>
                  <div>{{weather_data.hygrometry}} %</div>
                  <div class="text-uppercase font-weight-light text-caption">Humidity</div>
                </v-container>
          </v-col>
          <v-col>
                <v-container class="text-no-wrap rounded-pill">
                  <div>
                  <v-avatar>
                    <v-img src="/icons/low-temperature.png"
                      alt="Weather icons created by Freepik - Flaticon"></v-img>
                  </v-avatar>
                </div>
                  <div>{{weather_data.temperature_inside}}&deg C</div>
                  <div class="text-uppercase font-weight-light text-caption">Feel Like</div>
                </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    `,
};
