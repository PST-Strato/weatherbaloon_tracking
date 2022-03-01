const models = require("../models");

module.exports = {
  getLocations: function (req, res) {
    models.Locations.findAll({
      raw: true,
      attributes: ["g_latitude", "g_longitude"],
      order: [["g_time", "ASC"]],
    })
      .then((locations) => {
        const locationsArray = [];
        locations.forEach((location) => {
          const keys = Object.keys(location);
          const result = [];
          for (let i = 0; i < keys.length; i++) {
            result.push(location[keys[i]]);
          }
          locationsArray.push(result);
        });
        return res.send(locationsArray).status(201);
      })
      .catch((err) => {
        return res
          .status(500)
          .json({ error: "There was an error querying locations" });
      });
  },

  getLastLocation: function (req, res) {
    models.Locations.findOne({
      raw: true,
      attributes: ["g_latitude", "g_longitude"],
      order: [["g_time", "DESC"]],
    })
      .then((lastLocation) => {
        const keys = Object.keys(lastLocation);
        const result = [];
        for (let i = 0; i < keys.length; i++) {
          result.push(lastLocation[keys[i]]);
        }
        return res.send(result).status(201);
      })
      .catch((error) => {
        return res
          .status(500)
          .json({
            error: "There was an error querying last location",
          });
      });
  },

  addLocation: function (req, res) {
    const newLocation = models.Locations.create({
      g_time: req.body.g_time,
      g_latitude: req.body.g_latitude,
      g_longitude: req.body.g_longitude,
      g_speed: req.body.g_speed,
      g_battery_status: req.body.g_battery_status,
      g_signal_status: req.body.g_signal_status,
    })
      .then(function (newLocation) {
        return res.status(201).json({ newLocation: newLocation.id });
      })
      .catch(function (err) {
        return res.status(500).json({ error: "cannot add location" });
      });
  },
};
