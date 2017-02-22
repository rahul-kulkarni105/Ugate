var path = require("path");
var bodyParser = require("body-parser");
var User = require("./../models/User");
var mongoose = require('mongoose');
var fs = require('fs');
var jwt = require('jsonwebtoken');
var Cookies = require('cookies');
var bcrypt = require('bcrypt');
// var nev = require('email-verification')(mongoose);

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

//Function to generate random URL verification string
function makeRandomString() {
    var string = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        string += possible.charAt(Math.floor(Math.random() * possible.length));

    return string;
}

//TRYING TO SETUP EMAIL VERIFICATION WITHOUT nev
//Email verification config
// nev.configure({
//     verificationURL: 'http://localhost:3030/api/users/verify/${URL}',
//     persistentUserModel: User,
//     tempUserCollection: 'tempusers',

//     transportOptions: mg(auth),
//     //  {
//     //     service: 'Gmail',
//     //     auth: {
//     //         user: 'myawesomeemail@gmail.com',
//     //         pass: 'mysupersecretpassword'
//     //     }
//     // },
//     verifyMailOptions: {
//         from: 'ugatedonotreply@gmail.com',
//         to: 'ugatedonotreply@gmail.com',
//         subject: 'Please confirm account',
//         html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
//         text: 'Please confirm your account by clicking the following link: ${URL}'
//     }
// }, function(error, options){
//     if(error) {
//         throw error;
//     }
//     console.log(options);
// });

//TRYING TO SETUP EMAIL VERIFICATION WITHOUT nev
// generating the model, pass the User model defined earlier
// nev.generateTempUserModel(User);

module.exports = function(apiRoutes, app) {


    //create user and trigger email verification
    apiRoutes.post("/users/new", function(req, res) {
        console.log(req.body.userName, req.body.password, req.body.email, req.body.phoneNumber);
        var verificationString = makeRandomString();
        console.log("verification string: " + verificationString);
        //Change this URL in production
        var verificationUrl = "http://localhost:3030/api/users/verify/" + verificationString;
        //Add password hashing here

        User.create({

            password: req.body.password,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            ripplePublicAddress: req.body.ripplePublicAddress,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            verificationString: verificationString,
            verified: false
        }, function(err) {
            if (err) {
                console.log(err);
            } else {

                transport.sendMail({
                    from: "ugatedonotreply@gmail.com",
                    to: "ugatedonotreply@gmail.com",
                    subject: "Verification required for Ugate",
                    text: "Please click the following link to verify your account. \n" + verificationUrl
                }, function(err, info) {
                    if (err)
                        throw err;
                    console.log(info);
                });
                res.send("Saved User");
            }
        });

        // newUser.save(function(err,doc){
        //     if (err) throw err;
        //email verification steps here?

        //Without adding a custom domain on mailgun, can only send emails to authorized recipients
        //Once custom domain is added, change the 'to:' to users email (req.body.email)
        //     transport.sendMail({
        //         from: "ugatedonotreply@gmail.com",
        //         to: "ugatedonotreply@gmail.com",
        //         subject: "Verification required for Ugate",
        //         text: "Please click the following link to verify your account. \n" + verificationUrl
        //     }, function(err, info) {
        //         if (err) throw err;
        //         console.log(info);
        //     });
        //
        //     res.send({doc});
        // });

        //TRYING TO SETUP EMAIL VERIFICATION WITHOUT NEV
        // nev.createTempUser(newUser, function(err, existingPersistentUser, newTempUser) {
        //     // some sort of error
        //     if (err) {
        //         // handle error...
        //         throw err;
        //     }

        //     // user already exists in persistent collection...
        //     if (existingPersistentUser) {
        //         // handle user's existence... violently.
        //         res.send("User already exists in persistent collection");
        //     }

        //     // a new user
        //     if (newTempUser) {
        //         var URL = newTempUser[nev.options.URLFieldName];
        //         nev.sendVerificationEmail(email, URL, function(err, info) {
        //             if (err) {
        //                 // handle error...
        //                 throw err;
        //             }

        //             // flash message of success
        //             res.send("Successfully sent verification email");
        //         });

        //     // user already exists in temporary collection...
        //     } else {
        //         // flash message of failure...
        //         res.send("User already exists in temp collection");
        //     }
        // });

    });

    //user verification update
    apiRoutes.put("/users/verify/:url", function(req, res) {
        var url = req.params.url;
        console.log(url);

        //Find record where url = verificationString. Update verified to true, and set verification string to null
        User.findOneAndUpdate({
            verificationString: url
        }, {
            $set: {
                verified: true,
                verificationString: null
            }
        }, function(err, doc) {
            if (err)
                throw err;
            res.send(doc);
        });

        //TRYING TO SETUP EMAIL VERIFICATION WITHOUT nev
        // nev.confirmTempUser(url, function(err, user) {
        //     if (err)
        //         // handle error...

        //     // user was found!
        //     if (user) {
        //         // optional
        //         nev.sendConfirmationEmail(user['email_field_name'], function(err, info) {
        //             // redirect to their profile...
        //         });
        //     }

        //     // user's data probably expired...
        //     else
        //         // redirect to sign-up
        // });
    });
    // route to authenticate a user (POST http://localhost:8080/api/authenticate)
    apiRoutes.post('/authenticate', function(req, res) {

        // find the user
        User.findOne({
            email: req.body.email
        }, function(err, user) {


            if (err)
                throw err;

            if (!user) {
                res.json({success: false, message: 'Authentication failed. User not found.'});
            } else if (user) {

                bcrypt.compare(req.body.password, user.password, function(err, match) {

                    // check if password matches
                    if (!match) {
                        res.json({success: false, message: 'Authentication failed. Wrong password.'});
                    } else {

                        // if user is found and password is right
                        // create a token
                        var token = jwt.sign(user, app.get('superSecret'), {expiresIn: 60 *30});

                        //cookie wiht cookies lib
                        var cookie = new Cookies(req, res);

                        cookie.set("auth_log", token, {httpOnly: false});
                        console.log(cookie);

                        res.writeHead(302, {"Location": "/"})

                        return res.end("Now let's check.")

                    }
                });
            }

        });
    });


    // route middleware to verify a token
    apiRoutes.use(function(req, res, next) {

        //get cookie
        var token = new Cookies(req, res).get('auth_log');
        // decode token
        if (token) {

            // verifies secret and checks exp
            jwt.verify(token, app.get('superSecret'), function(err, decoded) {
                if (err) {
                    return res.json({success: false, message: 'Failed to authenticate token.'});
                } else {
                    // if everything is good, save to request for use in other routes
                    req.decoded = decoded;

                    next();
                }
            });

        } else {

            // if there is no token
            // return an error
            return res.status(403).send({success: false, message: 'No token provided.'});

        }
    });

    //logged in route
    apiRoutes.get("/loggedIn", function(req, res, next){
        res.json({loggedIn: true});
        console.log(req.decoded._doc._id)


      });


      //get specific user
      apiRoutes.get("/history", function(req, res, next) {
          User.findById(req.decoded._doc._id, function(err, doc) {
              if (err)
                  throw err;
              res.json(doc.history);
          });
      });



    //pull info for dashboard
    apiRoutes.get("/dashboard", function(req, res) {

    });



    apiRoutes.post("/charge", function(request, response) {
        // Get the payment token submitted by the form:
        console.log(response);

        var token = request.body.stripeToken; // Using Express

        // // Charge the user's card:
        // var charge = stripe.charges.create({
        //     amount: 1000,
        //     currency: "usd",
        //     description: "Example charge",
        //     source: token
        // }, function(err, charge) {
        //     // asynchronously called
        // });

    });

}
