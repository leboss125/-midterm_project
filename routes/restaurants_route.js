"use strict";

const express = require('express');
const router  = express.Router();


module.exports = (knex) => {

  router.get("/", (req, res) => {
    //console.log(res.param,res.body);
    //console.log(req.param;
    //console.log(req.body);

    let templateVars = {};

    (knex.select("username")
        .from("customers")
        .where('username','mclovin69@gmail.com').then(value => {

          templateVars['restoName'] = value;
          console.log(templateVars);
          res.render('restaurants',templateVars);

        })).finally()


  });

  return router;
}
