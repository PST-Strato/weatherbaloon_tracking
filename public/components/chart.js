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
          type: "line",
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 1000,
            },
          },
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
          range: 60,
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
    }, 1000);
  },
  template: `
  <div id="realtime">
    <apexchart type="line" ref="chart" 
      :options="chartOptions" :series="this.serie">
    </apexchart>
  </div>
  `,
};
