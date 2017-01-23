// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var SafeSchema = new Schema({
  //amount Ugate has from fees
  net: {
    type: Number,
    required: true
  },
  //amount that needs to be held for users to withdraw
  userholding: {
    type: Number,
    required: true
  }
});

// Create the User model with the UserSchema
var Safe = mongoose.model("Safe", SafeSchema);

// Export the user model
module.exports = Safe;
