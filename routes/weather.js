const express = require("express");

const router = express.Router();

const weatherController = require("../controllers/weather");

router.get("/getweatherdata", weatherController.getWeatherData);

router.get(
  "/getemperatureinside",
  weatherController.getTemperatureInside
);

router.get(
  "/getemperatureoutside",
  weatherController.getTemperatureOutside
);

router.get("/getpressure", weatherController.getPressure);

router.get("/gethygrometry", weatherController.getHygrometry);

router.get("/getime", weatherController.getTime);

router.post("/addweatherdata", weatherController.addWeatherData);

module.exports = router;
