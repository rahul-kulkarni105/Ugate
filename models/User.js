// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var UserSchema = new Schema({
  username: {
  	type: String,
  	required: true,
  	unique: true,
  	validate: [
  	function(input){
  		return input.length >= 6
  	},
  	"Username must be 6 or more characters"]
  },
  password: {
  	type: String,
  	required: true
  },
  email: {
  	type: String,
  	required: true,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  phonenumber: {
  	type: Number,
  	required: true,
  	validate: [
  	function(input){
  		return input.length === 10
  	},
  	"Please enter a valid phone number"]
  },
  //account id
  ripplepublicaddress: {
  	type: String,
  	required: true,
  	unique: true
  },
  history: {
  	currentbalance: [Number],
  	deposits: [Number],
  	withdraws: [Number],
  	senttoripple: [Number],
  	depositsfromripple: [Number],
  	usid: {usid}
  },
  usid: {
  	front: {
  		type: String,
  		required: true
  	},
  	back: {
  		type: String,
  		required: true
  	}
  },
  lock: {
  	type: Boolean,
  	default: false
  }
});

// Create the User model with the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the user model
module.exports = User;
