var express = require("express");
var serve_static = require("serve-static");
var http = require("http");

var app = express();
//Activation du serveur statique
app.use(serve_static(__dirname + "/public"));

//Récupération du serveur http de l'application
var serveur = http.Server(app);

//Ecoute sur un seul port
serveur.listen(8080, function () {
  console.log("Serveur en écoute sur le port 8080");
});
