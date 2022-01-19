const models = require("../models");

module.exports = {
  getWeatherData: function (req, res) {
    models.Weather.findOne({
      raw: true,
      attributes: ["s_temperature_inside", "s_temperature_outside", "s_hygrometry", "s_pressure", "s_vref"],
      order: [["s_id", "DESC"]],
    })
      .then(function (weatherData) {
        const tempInside = weatherData.s_temperature_inside;
        const tempOutside = weatherData.s_temperature_outside;
        const pressure = weatherData.s_pressure;
        const v_ref = weatherData.s_vref;
        const hygrometry = weatherData.s_hygrometry;
        const result = {
          temperature_inside: (tempInside * v_ref) / 4095,
          temperature_outside: (tempOutside * v_ref) / 4095,
          pressure: (pressure * v_ref) / 4095,
          Hygrometry: (hygrometry * v_ref) / 4095,
        };
        return res.send(result).status(201);
      })
      .catch((err) => {
        return res.status(500).json({ error: "There was an error querying weather data" });
      });
  },

  getTemperatureInside: function (req, res) {
    models.Weather.findAll({
      raw: true,
      attributes: ["s_temperature_inside", "s_vref"],
      order: [["s_id", "ASC"]],
    })
      .then((temperatureInside) => {
        const result = [];
        temperatureInside.forEach((temperature) => {
          const keys = Object.keys(temperature);
          for (let i = 0; i < keys.length - 1; i++) {
            result.push((temperature[keys[i]] * temperature[keys[i + 1]]) / 4095);
          }
        });
        return res.send(result);
      })
      .catch((err) => {
        return res.status(500).json({ error: "There was an error querying weather temperature" });
      });
  },

  getTemperatureOutside: function (req, res) {
    models.Weather.findAll({
      raw: true,
      attributes: ["s_temperature_outside", "s_vref"],
      order: [["s_id", "ASC"]],
    })
      .then((temperatureOutside) => {
        const result = [];
        temperatureOutside.forEach((temperature) => {
          const keys = Object.keys(temperature);
          for (let i = 0; i < keys.length - 1; i++) {
            result.push((temperature[keys[i]] * temperature[keys[i + 1]]) / 4095);
          }
        });
        return res.send(result);
      })
      .catch((err) => {
        return res.status(500).json({ error: "There was an error querying weather temperature" });
      });
  },

  getTime: function (req, res) {
    models.Weather.findAll({
      raw: true,
      attributes: ["s_id"],
      order: [["s_id", "ASC"]],
    })
      .then((time) => {
        const result = [];
        time.forEach((_time) => {
          const keys = Object.keys(_time);
          for (let i = 0; i < keys.length; i++) {
            result.push(_time[keys[i]]);
          }
        });
        return res.send(result);
      })
      .catch((err) => {
        return res.status(500).json({ error: "There was an error querying weather temperature" });
      });
  },
};
