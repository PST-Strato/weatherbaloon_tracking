var trackingMap = {
  props: ["coordinates"],
  data: function () {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      center: [48.088, -0.756],
      zoom: 12,
      polyline: {
        color: "green",
      },
    };
  },
  components: {
    "l-map": window.Vue2Leaflet.LMap,
    "l-tile-layer": window.Vue2Leaflet.LTileLayer,
    "l-marker": window.Vue2Leaflet.LMarker,
    "l-polyline": window.Vue2Leaflet.LPolyline,
  },
  template: `
  <l-map
      style="height: 100%; width: 100%"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="coordinates[0]"></l-marker>
      <l-marker :lat-lng="coordinates[coordinates.length-1]"></l-marker>
      <l-polyline :lat-lngs="coordinates" :color="polyline.color"></l-polyline>
  </l-map>
  `,
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = center;
    },
  },
};
