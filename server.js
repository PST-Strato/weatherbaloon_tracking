const express = require("express");
const serve_static = require("serve-static");
const http = require("http");
const locationRoute = require("./routes/locations");
const weatherRoute = require("./routes/weather");

const app = express();

app.use(express.json());

//Activation du serveur statique
app.use(serve_static(__dirname + "/public"));

//Definition des routes
app.use("/api/locations", locationRoute);
app.use("/api/weather", weatherRoute);

//Récupération du serveur http de l'application
var serveur = http.Server(app);

//Ecoute sur un seul port
serveur.listen(8080, function () {
  console.log("Serveur en écoute sur le port 8080");
});
