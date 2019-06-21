"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {

    if(req.session.name && req.session.id && req.session.phone_number){
      res.render('restaurants');
      console.log(req.session.name ,req.session.id,req.session.phone_number)
    }else{
      res.redirect('/')
    }

  });

  return router;
}
