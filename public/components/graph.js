//TODO:display weather_data


var graphCard = {
    props: ["v_model"],
    data: function () {
        return {};
    },
    template: `<v-card elevation="20" class="fill-height mt-4 justify-center">
    <v-card-title class="text-center justify-center py-6">
      <h3 class="text-h5">
        Data Chart
      </h3>
    </v-card-title>
 
    <v-tabs v-model="v_model" background-color="transparent" grow height="30px">
      <v-tab href="#data1">
        <h5>Data1</h5>
      </v-tab>
      <v-tab href="#data2">
        <h5>Data2</h5>
      </v-tab>
      <v-tab href="#data3">
        <h5>Data3</h5>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="v_model">
      <v-tab-item value="data1">
        <v-card>
        <line-chart :tpdata="this.allTempData" id="lc" width="500px></line-chart>
        </v-card flat>
      </v-tab-item>
      <v-tab-item :key="2" value="data2">
        <v-card>
          <line-chart id="lc2" width="500px"></line-chart>
        </v-card flat>
      </v-tab-item>
      <v-tab-item :key="3" value="data3">
        <v-card flat>
          <line-chart id="lc3" width="500px"></line-chart>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  
  </v-card>

`,

};