const express = require("express");

const router = express.Router();

const locationsController = require("../controllers/locations");

router.get("/getlocations", locationsController.getLocations);
router.get("/getlastlocation", locationsController.getLastLocation);

router.post("/addlocation", locationsController.addLocation);

module.exports = router;
