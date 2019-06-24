"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    if(req.session.name && req.session.id && req.session.phone_number){


      let templateVars = {

      };

      (knex.select("id","total_price","status","created_at","time_to_complite")
          .from("orders")
          .where("customer_id",req.session.id)
          .then(value => {

            templateVars  = {name:req.session.name, orderStatus: value};
            console.log(templateVars);
            res.render('order_history',templateVars);

          })).finally()

  }else{
    res.redirect('/');
  }
  });

  return router;
}
