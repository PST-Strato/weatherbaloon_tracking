//TODO:display locations and marker
var trackingMap = {
  props: ["locations"],
  data: function () {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [48.08809362529545, -0.7564902305603027], //TODO:refactor center
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
