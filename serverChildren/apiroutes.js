var path = require("path");
var bodyParser = require("body-parser");
var User = require("./../models/User");
var mongoose = require('mongoose');
var nev = require('email-verification')(mongoose);

//nodemailer setup
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
 
// This is your API key that you retrieve from www.mailgun.com/cp (free up to 10K monthly emails) 
var auth = {
  auth: {
    api_key: 'key-57c35a300ecaffbc21e11de57009f794',
    domain: 'sandboxc4d574cd65944dac96f405cdba84828d.mailgun.org'
  }
}
 
var transport = nodemailer.createTransport(mg(auth));

//Email verification config
nev.configure({
    verificationURL: 'http://localhost:3030/api/users/verify/${URL}',
    persistentUserModel: User,
    tempUserCollection: 'tempusers',
 
    transportOptions: mg(auth),
    //  {
    //     service: 'Gmail',
    //     auth: {
    //         user: 'myawesomeemail@gmail.com',
    //         pass: 'mysupersecretpassword'
    //     }
    // },
    verifyMailOptions: {
        from: 'ugatedonotreply@gmail.com',
        to: 'ugatedonotreply@gmail.com',
        subject: 'Please confirm account',
        html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
        text: 'Please confirm your account by clicking the following link: ${URL}'
    }
}, function(error, options){
    if(error) {
        throw error;
    }
    console.log(options);
});

// generating the model, pass the User model defined earlier 
nev.generateTempUserModel(User);

module.exports = function(app) {

    //get all users
    app.get("/api/users", function(req, res){
        User.find({}, function(err, doc){
            if (err) throw err;

            res.json(doc);
        });
    });

    //get specific user
    app.get("/api/users/id/:id", function(req,res){
        User.findById(req.params.id, function(err,doc){
            if (err) throw err;
            res.json(doc);
          })
    });

    //create user and trigger email verification
    app.post("/api/users/new", function(req,res){
        var newUser = new User({username:req.body.username, password:req.body.password, email:req.body.email, phonenumber:req.body.phonenumber, ripplepublicaddress:req.body.ripplepublicaddress, verified:false});
          // newUser.save(function(err,doc){
          //   if (err) throw err;
          //   //email verification steps here?
            

          //   res.send({doc});
          // });
        nev.createTempUser(newUser, function(err, existingPersistentUser, newTempUser) {
            // some sort of error 
            if (err) {
                // handle error... 
                throw err;
            }
         
            // user already exists in persistent collection... 
            if (existingPersistentUser) {
                // handle user's existence... violently. 
                res.send("User already exists in persistent collection");
            }
         
            // a new user 
            if (newTempUser) {
                var URL = newTempUser[nev.options.URLFieldName];
                nev.sendVerificationEmail(email, URL, function(err, info) {
                    if (err) {
                        // handle error... 
                        throw err;
                    }
         
                    // flash message of success 
                    res.send("Successfully sent verification email");
                });
         
            // user already exists in temporary collection... 
            } else {
                // flash message of failure... 
                res.send("User already exists in temp collection");
            }
        });

    });

    //user verification update
    app.put("/api/users/verify/:url", function(req,res){
        var url = req.params.url;
        console.log(url);

        nev.confirmTempUser(url, function(err, user) {
            if (err)
                // handle error... 
         
            // user was found! 
            if (user) {
                // optional 
                nev.sendConfirmationEmail(user['email_field_name'], function(err, info) {
                    // redirect to their profile... 
                });
            }
         
            // user's data probably expired... 
            else
                // redirect to sign-up 
        });
    });
}