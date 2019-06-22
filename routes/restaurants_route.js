"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {

  router.get("/", (req, res) => {


    if(req.session.name && req.session.id && req.session.phone_number){

      let templateVars = {

      };

      (knex.select("name","id")
          .from("restaurents")
          .then(value => {

            templateVars  = {name:req.session.name,restoInfo: value};
            console.log(templateVars);
            res.render('restaurants',templateVars);

          })).finally()

      console.log(req.session.name ,req.session.id,req.session.phone_number)


    }else{
      res.redirect('/');
    }





  });

  return router;
}