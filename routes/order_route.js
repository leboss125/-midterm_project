"use strict";

const express = require('express');
const router  = express.Router();
var twilio = require('twilio');

function random_boolean(){
  return (Math.random() >= 0.25);
}

function generateRandomNumber(num) {
  var chars = '1234567890';
  var randomString = '';
  for (var i = 0; i < num; i++){
    randomString = randomString + chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return parseInt(randomString);
}

module.exports = (knex) => {

  router.get("/:id", (req, res) => {
    if(req.session.name && req.session.id && req.session.phone_number){

    //obtain data from database
     knex
      .select('restaurents.id','restaurents.name', 'menu_items.name','restaurent_id','price','menu_items.id','menu_items.description')
      .from("menu_items")
      .join('restaurents', {'restaurents.id':'menu_items.restaurent_id'})
      .where('restaurent_id','=',req.params.id)
      .then((results) => {
        var templateVars  = {name:req.session.name, menus:results};
        res.render("order",templateVars);
        console.log(results[0].name);
        console.log(results);

    });
    //.finally(() => knex.destroy());
  }else{
    res.redirect('/');
  }

  });

  router.post("/", (req, res) => {
    if(req.session.name && req.session.phone_number && req.session.id){




      var accountSid = 'AC324e4b947a9a446ad2250037f1e9f268'; // Your Account SID from www.twilio.com/console
      var authToken = 'cc2f2227e77ac2b565ddab161df5b77c';   // Your Auth Token from www.twilio.com/console

      var client = new twilio(accountSid, authToken);
      var orderId = generateRandomNumber(6);

      //console.log('POST result is:' ,req.body);

      //POST REQUEST FOR ORDER STATUS TABLE: id, customer_id, restaurant_id, items(object), total_price
  // created_at, status, time_to_complite

      knex('orders').insert([{
                id: orderId,
                customer_id: req.session.id,
                restaurent_id: parseInt(req.body.restaurant_id),
                items: JSON.stringify(req.body.items),
                total_price: parseInt(req.body.total_price),
                status: 'Pending'
              }]).then(result => {
                var client = new twilio(accountSid, authToken);

                client.messages.create({
                  body: `You have an order request ${orderId} from from ${req.session.name}`,
                  to: '+14384041793',  // Text this number
                  from: '+12897961008' // From a valid Twilio number
                })
                .then((message) => console.log(message.sid));

                setTimeout(function(){
                  if(random_boolean() === true){
                    client.messages.create({
                      body: `You order ${orderId} has been accepted`,
                      to: `+1${req.session.phone_number}`,  // Text this number
                      from: '+12897961008' // From a valid Twilio number
                    })
                    .then((message) => console.log(message.sid));
                    knex('orders').where({ id: orderId }).update({ status: 'Accepted' }).then()

                    setTimeout(function(){
                      client.messages.create({
                        body: `You order ${orderId} is ready for pickup`,
                        to: `+1${req.session.phone_number}`,  // Text this number
                        from: '+12897961008' // From a valid Twilio number
                      })
                      .then((message) => console.log(message.sid));
                      knex('orders').where({ id: orderId }).update({ status: 'Ready' }).then()

                      setTimeout(function(){
                        client.messages.create({
                          body: `You order ${orderId} is completed. Thank you for choosing Foodoodoo`,
                          to: `+1${req.session.phone_number}`,  // Text this number
                          from: '+12897961008' // From a valid Twilio number
                        })
                        .then((message) => console.log(message.sid));
                        knex('orders').where({ id: orderId }).update({ status: 'Completed' }).then()
                      },20000)


                    },20000)


                  }
                  else{
                    client.messages.create({
                      body: `You order ${orderId} has been declined`,
                      to: `+1${req.session.phone_number}`,  // Text this number
                      from: '+12897961008' // From a valid Twilio number
                    })
                    .then((message) => console.log(message.sid));
                    knex('orders').where({ id: orderId }).update({ status: 'Declined' }).then()
                  }


                },15000)

              })




    }else{
      res.send("please login")
    }
  });


  return router;
}
