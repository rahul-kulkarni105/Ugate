var path = require("path");
var bodyParser = require("body-parser");
var User = require("./../models/User");
var mongoose = require('mongoose');
var nev = require('email-verification')(mongoose);

module.exports = function(app){

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: "application/vnd.api+json" }));

    //get all users
    app.get("/api/users",function(req,res){
        User.find({}, function(err, doc){
            if (err) throw err;

            res.json(doc);
        })
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
        var newUser = new User({username:req.body.username, password:req.body.password, email:req.body.email, phonenumber:req.body.phonenumber, ripplepublicaddress:req.body.ripplepublicaddress, verified:false})
          newUser.save(function(err,doc){
            if (err) throw err;
            //email verification steps here?
            

            res.send({doc});
          })
    });

    //user verification update
    app.put("/api/users/verify", function(req,res){
        
    })
}