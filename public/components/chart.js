var weatherChart = {
  components: {
    apexchart: VueApexCharts,
  },
  props: ["serie"],
  data: function () {
    return {
      chartOptions: {
        chart: {
          id: "realtime",
          group: "social",
          type: "area",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        markers: {
          size: 0,
        },
        xaxis: {
          labels: {
            show: false,
          },
        },
        yaxis: {},
        legend: {
          show: false,
        },
      },
    };
  },
  mounted: function () {
    setInterval(() => {
      var me = this;
      me.$refs.chart.updateSeries([
        {
          data: this.serie[0].data,
        },
      ]);
    }, 60000);
  },
  template: `
  <div id="realtime">
    <apexchart type="area" ref="chart" 
      :options="chartOptions" :series="this.serie">
    </apexchart>
  </div>
  `,
};
