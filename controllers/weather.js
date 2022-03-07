const { json } = require("express/lib/response");
const models = require("../models");

module.exports = {
  getWeatherData: function (req, res) {
    models.Weather.findOne({
      raw: true,
      attributes: [
        "s_temperature_inside",
        "s_temperature_outside",
        "s_hygrometry",
        "s_pressure",
        "s_vref",
      ],
      order: [["s_id", "DESC"]],
    })
      .then(function (weatherData) {
        const tempInside = weatherData.s_temperature_inside;
        const tempOutside = weatherData.s_temperature_outside;
        const pressure = weatherData.s_pressure;
        const v_ref = weatherData.s_vref;
        const hygrometry = weatherData.s_hygrometry;
        const result = {
          temperature_inside: (
            (tempInside * v_ref) /
            (4095 * 10)
          ).toFixed(2),
          temperature_outside: (
            (tempOutside * v_ref) /
            (4095 * 10)
          ).toFixed(2),
          pressure: ((pressure * v_ref) / 4095).toFixed(2),
          hygrometry: ((hygrometry * v_ref) / (4095 * 10)).toFixed(2),
          height: (
            (8.314462 *
              ((tempOutside * v_ref) / (4095 * 10)) *
              Math.log(1 + (pressure * v_ref) / 4095 / 101300)) /
            (-0.0289644 * 9.8169)
          ).toFixed(2),
        };
        return res.send(result).status(201);
      })
      .catch((err) => {
        return res.status(500).json({
          error: "There was an error querying weather data",
        });
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
            result.push(
              (
                (temperature[keys[i]] * temperature[keys[i + 1]]) /
                4095
              ).toFixed(2)
            );
          }
        });
        return res.send(result);
      })
      .catch((err) => {
        return res.status(500).json({
          error: "There was an error querying weather temperature",
        });
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
            result.push(
              (
                (temperature[keys[i]] * temperature[keys[i + 1]]) /
                4095
              ).toFixed(2)
            );
          }
        });
        return res.send(result);
      })
      .catch((err) => {
        return res.status(500).json({
          error: "There was an error querying weather temperature",
        });
      });
  },

  getPressure: function (req, res) {
    models.Weather.findAll({
      raw: true,
      attributes: ["s_pressure", "s_vref"],
      order: [["s_id", "ASC"]],
    })
      .then((pressure) => {
        const result = [];
        pressure.forEach((pres) => {
          const keys = Object.keys(pres);
          for (let i = 0; i < keys.length - 1; i++) {
            result.push(
              ((pres[keys[i]] * pres[keys[i + 1]]) / 4095).toFixed(2)
            );
          }
        });
        return res.send(result);
      })
      .catch((err) => {
        return res.status(500).json({
          error: "There was an error querying weather pressure",
          err: err,
        });
      });
  },

  getHygrometry: function (req, res) {
    models.Weather.findAll({
      raw: true,
      attributes: ["s_hygrometry", "s_vref"],
      order: [["s_id", "ASC"]],
    })
      .then((hygrometry) => {
        const result = [];
        hygrometry.forEach((_hygrometry) => {
          const keys = Object.keys(_hygrometry);
          for (let i = 0; i < keys.length - 1; i++) {
            result.push(
              (
                (_hygrometry[keys[i]] * _hygrometry[keys[i + 1]]) /
                4095
              ).toFixed(2)
            );
          }
        });
        return res.send(result);
      })
      .catch((err) => {
        return res.status(500).json({
          error: "There was an error querying weather pressure",
          err: err,
        });
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
        return res.status(500).json({
          error: "There was an error querying weather temperature",
        });
      });
  },

  addWeatherData: function (req, res) {
    const newWeatherData = models.Weather.create({
      s_id: req.body.s_id,
      s_rssi: req.body.s_rssi,
      s_snr: req.body.s_snr,
      s_remaining_samples_to_send:
        req.body.s_remaining_samples_to_send,
      s_temperature_inside: req.body.s_temperature_inside,
      s_temperature_outside: req.body.s_temperature_outside,
      s_hygrometry: req.body.s_hygrometry,
      s_pressure: req.body.s_pressure,
      s_vref: req.body.s_vref,
    })
      .then(function (newWeatherData) {
        return res
          .status(201)
          .json({ newWeatherDataID: newWeatherData.id });
      })
      .catch(function (err) {
        return res
          .status(500)
          .json({ error: "cannot add weather data" });
      });
  },
};
