"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    let templateVars = {

      };
      console.log(req);

      /*(knex.select("*")
          .from("restaurents")
          .then(value => {

            templateVars['restoInfo'] = value;
            console.log(templateVars);
            res.render('order',templateVars);

          })).finally()*/

    res.render("order");
  });

  router.post("/:id", (req, res) => {

    //to send message to customer that order is ready to pick up
    var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
    var authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console

    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);

    client.messages.create({
        body: 'Your order is ready',
        to: '+16137203194',  // Text this number
        from: '+12345678901' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
    res.redirect("/");
  });


  return router;
}