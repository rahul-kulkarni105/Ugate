// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/User.js");
var Safe = require("./models/Safe.js");
//get the routes and data from other files
var apiRoutes = require("./serverChildren/apiroutes.js")(app);

// Initialize Express
var app = express();

var PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({
  extended: true
}));

// Make public a static dir
app.use(express.static("./public"));

// Database configuration with mongoose -- local for now
mongoose.connect("mongodb://localhost/ugate");
var db = mongoose.connection;

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

//routes for any api calls - creating user, validating user



// Listen on port 3000
app.listen(PORT, function() {

  console.log("App running on port: " + PORT);
});
