// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var TempUserSchema = new Schema({
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
  ripplepublicaddress: {
  	type: String,
  	required: true,
  	unique: true
  },
  lock: {
  	type: Boolean,
  	default: false
  }
});

// Create the User model with the UserSchema
var TempUser = mongoose.model("TempUser", TempUserSchema);

// Export the user model
module.exports = TempUser;
