const express = require("express"); //import express

// 1.Create an express router object to set up our routes
const router = express.Router();
// 2.Import our tea controller from our controllers/tea.js file we created earlier
const locationController = require("../controllers/location");
// 3.Create our first route with the controller function as the callback to handle the request.
router.get("/getlocation", locationController.getLocation);
// 4.Export the route to use in our server.js
module.exports = router;
