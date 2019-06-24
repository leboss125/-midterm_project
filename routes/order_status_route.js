"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    if(req.session.name && req.session.id && req.session.phone_number){
      var templateVars  = {name:req.session.name};
    res.render('orders_status', templateVars);
  }else{
    res.redirect('/');
  }
  });

  return router;
}
