const fs = require("fs");

//GET '/getLocation'
const getLocation = (req, res, next) => {
  let database = JSON.parse(fs.readFileSync("./data/location.json"));
  res.send(database.locations);
};

//export controller functions
module.exports = {
  getLocation,
};
