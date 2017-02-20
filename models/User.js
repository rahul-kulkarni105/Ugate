// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var UserSchema = new Schema({
  username: {
  	type: String,
  	required: true,
  	unique: true

  	// validate: [
  	// function(input){
  	// 	return input.length >= 6
  	// },
  	// "Username must be 6 or more characters"]
  },
  password: {
  	type: String,
  	required: true
  },
  email: {
  	type: String,
  	required: true,
    // match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  phoneNumber: {
  	type: String,
  	required: true,
  	validate: [
  	function(input){
      console.log(input.length);
  		return input.length === 10
  	},
  	"Please enter a valid phone number"]
  },
  verificationString: {
    type: String
  },
  verified: {
    type: Boolean,
    required: true
  },
  //account id
  ripplePublicAddress: {
  	type: String,
  	// required: true,
  	unique: true
  },
  //default current date, maybe use date as string and use momentjs?
  accountCreation: {
    type: Date,
    default: Date.now
  },
  history: {
  	currentBalance: [Number],
  	deposits: [Number],
  	withdraws: [Number],
  	sentToRipple: [Number],
  	depositsFromRipple: [Number],
    //date maybe a string and use momentjs?
    lastModified: [Date]
  },
  // usid: {
  // 	front: {
  //     data: Buffer,
  // 		type: String,
  // 		required: true
  // 	},
  // 	back: {
  //     data: Buffer,
  // 		type: String,
  // 		required: true
  // 	}
  // },
  lock: {
  	type: Boolean,
  	default: false
  }
});

// Create the User model with the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the user model
module.exports = User;
