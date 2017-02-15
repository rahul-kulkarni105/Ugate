
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var keys = require("./keys.js");
var stripeKey = require("stripe")(keys.Test_Publishable_Key);

//capture from user input
var source = stripe.sources.create({
  amount: depositAmount,
  currency: "usd",
  type: "cards",
  owner: {
    email: user.email
  }
  redirect: {return_url: "https://shop.foo.com/crtA6B28E1"},
}, function(err, source) {
  // asynchronously called
});
