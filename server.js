// Dependencies
var express = require("express");
var fs = require('fs');
var Grid = require('gridfs-stream');
//var multer = require('multer');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var User = require("./models/User.js");
var Safe = require("./models/Safe.js");
var secret = require('./serverChildren/keys').Secret;
var stripeKey = require('./serverChildren/keys').Stripe.Test_Secret_Key;
var stripe = require('stripe')(stripeKey);


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

//Gridfs-stream to save file uploads
Grid.mongo = mongoose.mongo;

//require routes
require("./serverChildren/apiroutes.js")(apiRoutes, app, mongoose, stripe);

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
  /*var gfs = Grid(db.db);
  //streaming to gridfs
  //filename to store in mongodb
  var writestream = gfs.createWriteStream({
  	filename: 'usID.txt'
  });
  fs.createReadStream('./serverChildren').pipe(writestream);
  writestream.on('close', function(file){
  	console.log(file.filename + "written to DB");
  });
  //streaming from gridfs
  var readstream = gfs.createReadStream({
  	filename: 'usID.txt'
  });
  readstream.on('error', function(err){
  	console.log("error occurred");
  	throw err;
  })*/
});



// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});




// Listen on port 3000
app.listen(PORT, function() {

  console.log("App running on port: " + PORT);

});
