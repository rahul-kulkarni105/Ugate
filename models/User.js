// Require mongoose
var mongoose = require("mongoose");
var bcrypt = require('bcrypt');

//bcrypt rounds
const saltRounds = 10;
// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Create a UserSchema with the Schema class
var UserSchema = new Schema({

    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        // match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: [
            function(input) {
                console.log(input.length);
                return input.length === 10
            },
            "Please enter a valid phone number"
        ]
    },
    verificationString: {
        type: String
    },
    verified: {
        type: Boolean,
        required: false
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
        deposits: {
          amount: [Number],
          date: [Date]
        },
        withdraws: {
          amount: [Number],
          date: [Date]
        },
        sentToRipple: {
          amount: [Number],
          date: [Date]
        },
        depositsFromRipple: {
          amount: [Number],
          date: [Date]
        },
        //date maybe a string and use momentjs?
        lastModified: [Date]
    },
    // usid: {
    //     front: {
    //         data: Buffer,
    //         type: String,
    //         required: true
    //     },
    //     back: {
    //         data: Buffer,
    //         type: String,
    //         required: true
    //     }
    // },
    lock: {
        type: Boolean,
        default: false
    }
});

//hook for password hashing
UserSchema.pre('save', function(next) {
    var user = this;
    if (!user.isModified('password'))
        return next();
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
        if (err)
            return next(err);
        user.password = hash;
        next();
    });

});

// Create the User model with the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the user model
module.exports = User;
