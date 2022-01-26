//TODO:display weather_data
var weatherCard = {
  props: ["weather_data"],
  data: function () {
    return {};
  },
  template: `
    <v-card elevation="20" loading width="100%">
      <v-container>
        <v-row class="text-center" justify="center">
          <v-col>
            <v-container class="pa-1 text-no-wrap rounded-pill">
              <div>{{weather_data.pressure}}</div>
              <div>Pressure</div>
            </v-container>
          </v-col>
          <v-col>
                <v-container class="pa-1 text-no-wrap rounded-pill">
                  <div>{{weather_data.hygrometry}}</div>
                  <div>Humidity</div>
                </v-container>
          </v-col>
          <v-col>
                <v-container class="pa-1 text-no-wrap rounded-pill">
                  <div>{{weather_data.temperature_inside}}&deg C</div>
                  <div>Feeling</div>
                </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    `,
};
