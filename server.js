// Dependencies
var express = require("express");
var fs = require('fs');

var multer = require('multer');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var jwt = require ("jsonwebtoken");
var User = require("./models/User.js");
var Safe = require("./models/Safe.js");
var secret = require('./serverChildren/keys').Secret;



// Initialize Express
var app = express();
var apiRoutes = express.Router();

var PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Make public a static dir
app.use(express.static("./public"));

//set secret for JWT
app.set('superSecret', secret.secret);

app.use('/api', apiRoutes);


// Database configuration with mongoose -- local for now
mongoose.connect("mongodb://localhost/ugate");
var db = mongoose.connection;

//require routes
require("./serverChildren/apiroutes.js")(apiRoutes, app);

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});



// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});



// Listen on port 3000
app.listen(PORT, function() {

  console.log("App running on port: " + PORT);

});
