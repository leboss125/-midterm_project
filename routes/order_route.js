  "use strict";

const express = require('express');
const router  = express.Router();
var twilio = require('twilio');

module.exports = (knex) => {

  router.get("/:id", (req, res) => {

    //obtain data from database
     knex
      .select("name")
      .from("menu_items")
      .then((results) => {
        console.log(results);
        res.render("order",results);
        
    }); 
    //.finally(() => knex.destroy());
 
  });

  router.post("/:id", (req, res) => {
    //to send message to customer that order is ready to pick up
    var accountSid = 'AC324e4b947a9a446ad2250037f1e9f268'; // Your Account SID from www.twilio.com/console
    var authToken = 'cc2f2227e77ac2b565ddab161df5b77c';   // Your Auth Token from www.twilio.com/console

    
    var client = new twilio(accountSid, authToken);

    client.messages.create({
        body: 'Your order is ready',
        to: '+16137203194',  // Text this number
        from: '+12897961008' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
    res.redirect("/");
  });


  return router;
}
