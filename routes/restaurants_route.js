"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {

    if(req.session.name && req.session.id && req.session.phone_number){
      const templatevar = {name:req.session.name}
      res.render('restaurants',templatevar);
    }else{
      res.redirect('/')
    }
  });
  return router;
}
